import { writeFile } from 'node:fs/promises';

const targets = await (await fetch('http://127.0.0.1:9222/json/list')).json();
const target = targets.find((item) => item.type === 'page' && !item.url.startsWith('edge:'));
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { ws.addEventListener('open', resolve); ws.addEventListener('error', reject); });
let nextId = 1;
const pending = new Map();
const errors = [];
const pageUrl = process.argv[2] || 'http://127.0.0.1:5173/residential';
ws.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const waiter = pending.get(message.id);
    if (!waiter) return;
    pending.delete(message.id);
    clearTimeout(waiter.timeout);
    if (message.error) waiter.reject(new Error(JSON.stringify(message.error)));
    else waiter.resolve(message.result);
  }
  if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails);
  if (message.method === 'Log.entryAdded' && message.params.entry.level === 'error') errors.push(message.params.entry);
  if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') errors.push(message.params.args);
});
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = nextId++;
    const timeout = setTimeout(() => { pending.delete(id); reject(new Error(`Timed out: ${method}`)); }, 20000);
    pending.set(id, { resolve, reject, timeout });
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
try {
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');
  const layouts = [];
  for (const width of [1536, 1024, 768, 390]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 1024, deviceScaleFactor: 1, mobile: width < 500 });
    await send('Page.navigate', { url: pageUrl });
    for (let i = 0; i < 100; i += 1) {
      if (await evaluate("Boolean(document.querySelector('#residential-types-heading'))")) break;
      await pause(100);
    }
    await evaluate("document.querySelector('#residential-types-heading').closest('section').scrollIntoView({block: 'start'}); window.scrollBy(0, -120); document.fonts.ready");
    await evaluate("Promise.all(Array.from(document.querySelector('#residential-types-heading').closest('section').querySelectorAll('img')).map(img => { img.loading = 'eager'; return img.decode().catch(() => null); }))");
    await pause(350);
    const layout = await evaluate(`(() => {
      const section = document.querySelector('#residential-types-heading').closest('section');
      const rect = section.getBoundingClientRect();
      const cards = Array.from(section.querySelectorAll('article')).map((card) => {
        const r = card.getBoundingClientRect();
        const img = card.querySelector('img');
        return { title: card.querySelector('h3')?.textContent, x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height), imageLoaded: img.complete && img.naturalWidth > 0, image: img.getAttribute('src') };
      });
      return { width: innerWidth, documentWidth: document.documentElement.scrollWidth, sectionWidth: section.scrollWidth, heading: section.querySelector('h2').textContent, filterCount: section.querySelectorAll('[aria-pressed]').length, searchCount: section.querySelectorAll('input[type=search]').length, cards, clip: { x: rect.x + scrollX, y: rect.y + scrollY, width: rect.width, height: rect.height, scale: 1 } };
    })()`);
    layouts.push(layout);
    const screenshot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: layout.clip });
    await writeFile(`output/verification/residential-${width}.png`, Buffer.from(screenshot.data, 'base64'));
  }
  const dialogChecks = [];
  const count = await evaluate("document.querySelector('#residential-types-heading').closest('section').querySelectorAll('article').length");
  for (let i = 0; i < count; i += 1) {
    await evaluate(`(() => { const button = document.querySelector('#residential-types-heading').closest('section').querySelectorAll('article')[${i}].querySelector('button'); button.focus(); button.click(); })()`);
    await pause(60);
    const result = await evaluate(`(() => { const d = document.querySelector('dialog'); const r = d.getBoundingClientRect(); return { index: ${i}, open: d.open, title: document.querySelector('#roofing-type-dialog-title')?.textContent, width: r.width, viewportWidth: innerWidth, contactHref: d.querySelector('a')?.getAttribute('href') }; })()`);
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await pause(60);
    result.escapeCloses = await evaluate("!document.querySelector('dialog').open");
    result.focusReturnsToTrigger = await evaluate(`document.activeElement === document.querySelector('#residential-types-heading').closest('section').querySelectorAll('article')[${i}].querySelector('button')`);
    dialogChecks.push(result);
  }
  await evaluate("document.querySelector('#residential-types-heading').closest('section').querySelector('article button').click()");
  await pause(50);
  await evaluate("document.querySelector('dialog button[aria-label]').click()");
  const closeButtonCloses = await evaluate("!document.querySelector('dialog').open");
  await evaluate("document.querySelector('#residential-types-heading').closest('section').querySelector('article button').click()");
  await pause(50);
  await evaluate("document.querySelector('dialog a').click()");
  await pause(200);
  const contactNavigation = await evaluate("location.pathname");
  const report = { layouts, dialogChecks, closeButtonCloses, contactNavigation, errors };
  await writeFile('output/verification/residential-report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  ws.close();
}
