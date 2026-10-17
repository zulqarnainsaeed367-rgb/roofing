import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "Residential Roofing",
  message: "",
};

const inputStyle =
  "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-rcs-gold focus:ring-2 focus:ring-rcs-gold/30";

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = [
      "Hello RCS Construction Services!",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(
      `https://wa.me/14694200340?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-section-heading"
      className="bg-[#0b0906] py-16 font-sans text-white md:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-16">
        <div className="min-w-0 lg:py-4">
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-rcs-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rcs-gold">Get In Touch</span>
          </div>
          <h2 id="contact-section-heading" className="max-w-lg font-heading text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
            How Can We Help You Today?
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-white/65">
            Tell us about your roofing needs. Our team is ready to help you explore the right solution for your property.
          </p>

          <dl className="mt-9 space-y-6">
            <div className="flex items-center gap-4">
              <span className="rounded-lg bg-rcs-gold/10 p-4 text-rcs-gold"><Phone size={22} aria-hidden="true" /></span>
              <div><dt className="font-semibold">Call Us</dt><dd className="mt-1"><a className="text-white/65 hover:text-rcs-gold" href="tel:+14694200340">(469) 420-0340</a></dd></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-lg bg-rcs-gold/10 p-4 text-rcs-gold"><Mail size={22} aria-hidden="true" /></span>
              <div><dt className="font-semibold">Email Us</dt><dd className="mt-1"><a className="break-all text-white/65 hover:text-rcs-gold" href="mailto:rodney@absoluteteam.net">rodney@absoluteteam.net</a></dd></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-lg bg-rcs-gold/10 p-4 text-rcs-gold"><MapPin size={22} aria-hidden="true" /></span>
              <div><dt className="font-semibold">RCS Construction Services</dt><dd className="mt-1 text-white/65">Residential &amp; Commercial Roofing</dd></div>
            </div>
          </dl>

          <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-white/65">
            <ShieldCheck className="text-rcs-gold" size={22} aria-hidden="true" />
            Quality workmanship. Dependable service.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="min-w-0 rounded-2xl border border-rcs-gold/20 bg-[#15120d] p-6 sm:p-8">
          <h3 className="font-heading text-2xl font-bold">Request a Free Inspection</h3>
          <p className="mb-7 mt-2 text-sm text-white/60">Complete the form and send your request directly to our team.</p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm text-white/80">Full Name *</label>
              <input id="contact-name" name="name" autoComplete="name" value={form.name} onChange={handleChange} required maxLength={120} placeholder="Your full name" className={inputStyle} />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm text-white/80">Email Address *</label>
              <input id="contact-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} required maxLength={254} placeholder="you@example.com" className={inputStyle} />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-sm text-white/80">Phone Number *</label>
              <input id="contact-phone" type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} required maxLength={40} placeholder="Your phone number" className={inputStyle} />
            </div>
            <div>
              <label htmlFor="contact-service" className="mb-2 block text-sm text-white/80">Roofing Service *</label>
              <select id="contact-service" name="service" value={form.service} onChange={handleChange} className={`${inputStyle} bg-[#0b0906]`}>
                <option>Residential Roofing</option>
                <option>Commercial Roofing</option>
                <option>Roof Repair</option>
                <option>Roof Replacement</option>
                <option>Free Roof Inspection</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="mb-2 block text-sm text-white/80">Tell Us About Your Project *</label>
              <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required maxLength={2000} rows={5} placeholder="Describe your roofing needs..." className={`${inputStyle} resize-y`} />
            </div>
          </div>

          <button type="submit" className="group mt-6 flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-rcs-gold px-6 py-4 font-bold text-rcs-charcoal transition hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold">
            Send Request via WhatsApp
            <ArrowRight size={20} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-4 text-center text-xs text-white/45">Your request opens in WhatsApp for you to review and send.</p>
        </form>
      </div>
    </section>
  );
}
