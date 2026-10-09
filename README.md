# Roofing website

React + Vite app with a shared navbar and footer on every page.

## Run locally

```sh
npm install
npm run dev
```

## App structure

```text
src/
  common/
    Navbar.jsx           Shared navigation
    Footer.jsx           Shared footer
  data/
    navigation.js        Desktop and mobile navbar links
  layouts/
    MainLayout.jsx       Navbar + page outlet + Footer
  Pages/                 Individual page content
  App.jsx                Page routes
  App.css                Layout and component styles
  index.css              Tailwind import and global styles
  main.jsx               React entry point and BrowserRouter
```

| URL | Page file |
| --- | --- |
| `/` | `Home.jsx` |
| `/about-us` | `Aboutus.jsx` |
| `/residential` | `Residential.jsx` |
| `/commercial` | `Commercial.jsx` |
| `/capability-statement` | `CapabilityStatement.jsx` |
| `/free-inspection` | `FreeInspection.jsx` |
| `/faq` | `FAQ.jsx` |
| `/contact-us` | `Contactus.jsx` |
| Any unknown URL | `NotFound.jsx` |

Replace the starter headings and descriptions with your website content. Update the brand in `common/Navbar.jsx` and `common/Footer.jsx`.

To add a page, create its component in `Pages`, add a child route inside the `MainLayout` route in `App.jsx`, and add its link to `data/navigation.js`. The layout supplies the navbar and footer; page components only contain their own content.

## Checks and deployment

```sh
npm run lint
npm run build
npm run preview
```

Deploy the generated `dist` folder. Configure your host to serve `index.html` for application URLs such as `/about-us` so direct links and refreshes work with BrowserRouter.
