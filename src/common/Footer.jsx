import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact-us' },
]

const roofingServices = [
  { label: 'Residential Roofing', to: '/residential' },
  { label: 'Commercial Roofing', to: '/commercial' },
  { label: 'Free Inspection', to: '/free-inspection' },
  { label: 'Roof Repair', to: '/residential' },
  { label: 'Roof Replacement', to: '/residential' },
  { label: 'Capability Statement', to: '/capability-statement' },
]

function Icon({ name, className = 'h-5 w-5' }) {
  const icons = {
    phone: (
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.5-.36 9.7 9.7 0 0 0 3 .48A1.5 1.5 0 0 1 21.4 16.8v3.1a1.5 1.5 0 0 1-1.5 1.5C10.4 21.4 2.6 13.6 2.6 4.1A1.5 1.5 0 0 1 4.1 2.6h3.1a1.5 1.5 0 0 1 1.5 1.5 9.7 9.7 0 0 0 .48 3 1.5 1.5 0 0 1-.36 1.5Z" />
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),

    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    facebook: (
      <path d="M14 21v-8h3l1-4h-4V7c0-1 .5-2 2-2h2V2h-3c-4 0-5 3-5 5v2H7v4h3v8" />
    ),

    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    arrow: <path d="m9 5 7 7-7 7" />,
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {icons[name]}
    </svg>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0B0806] text-[#FFF0C2]">
      <div className="mx-auto max-w-[1450px] px-5 py-14 sm:px-8 lg:px-12 xl:px-16">
        
        {/* MAIN FOOTER */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-16">

          {/* LOGO + ABOUT */}
          <div>
            <Link
              to="/"
              aria-label="RCS Construction Services Home"
              className="inline-block"
            >
              <img
                src={logo}
                alt="RCS Construction Services Logo"
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            </Link>

            <p className="mt-6 max-w-[280px] text-sm leading-7 text-[#FFF0C2]/70">
              Professional roofing and construction services built around
              quality workmanship, dependable service and long-lasting
              results for residential and commercial properties.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0C2]/10 text-[#D9A44C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9A44C] hover:text-[#0B0806]"
              >
                <Icon name="facebook" className="h-5 w-5" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0C2]/10 text-[#D9A44C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9A44C] hover:text-[#0B0806]"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-bold text-[#FFF0C2]">
              Quick Links
            </h2>

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-block text-sm text-[#FFF0C2]/75 transition-all duration-300 hover:translate-x-1 hover:text-[#D9A44C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ROOFING SERVICES */}
          <div>
            <h2 className="text-lg font-bold text-[#FFF0C2]">
              Roofing Services
            </h2>

            <ul className="mt-7 space-y-4">
              {roofingServices.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="inline-block text-sm text-[#FFF0C2]/75 transition-all duration-300 hover:translate-x-1 hover:text-[#D9A44C]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-lg font-bold text-[#FFF0C2]">
              Contact Us
            </h2>

            <div className="mt-7 space-y-6">
              
              {/* PHONE */}
              <a
                href="tel:+14694200340"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D9A44C]/10 text-[#D9A44C] transition-colors group-hover:bg-[#D9A44C] group-hover:text-[#0B0806]">
                  <Icon name="phone" className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-[#FFF0C2]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#FFF0C2]/70 transition-colors group-hover:text-[#D9A44C]">
                    (469) 420-0340
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:rodney@absoluteteam.net"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D9A44C]/10 text-[#D9A44C] transition-colors group-hover:bg-[#D9A44C] group-hover:text-[#0B0806]">
                  <Icon name="mail" className="h-5 w-5" />
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#FFF0C2]">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm leading-6 text-[#FFF0C2]/70 transition-colors group-hover:text-[#D9A44C]">
                    rodney@absoluteteam.net
                  </p>
                </div>
              </a>

              {/* BUSINESS */}
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D9A44C]/10 text-[#D9A44C]">
                  <Icon name="pin" className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-[#FFF0C2]">
                    RCS Construction Services
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#FFF0C2]/70">
                    Rodney The Roofer
                  </p>

                  <p className="text-sm leading-6 text-[#FFF0C2]/70">
                    Powered by Absolute Construction
                  </p>
                </div>
              </div>

              {/* INSPECTION BUTTON */}
              <Link
                to="/free-inspection"
                className="group mt-2 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#D9A44C] px-6 text-sm font-bold text-[#0B0806] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF0C2]"
              >
                Get Free Roof Inspection

                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-[#D9A44C]/15 pt-6">
          <div className="flex flex-col gap-3 text-center text-xs text-[#FFF0C2]/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>
              © {new Date().getFullYear()} RCS Construction Services.
              All Rights Reserved.
            </p>

            <p className="text-[#D9A44C]/80">
              "Excellence in Roofing"
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
