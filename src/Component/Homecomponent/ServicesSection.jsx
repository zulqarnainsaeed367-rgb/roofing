import servicesBg from '../../assets/services-bg.jpg'

const services = [
  {
    icon: 'inspection',
    title: 'Roof Inspections',
    description:
      'Our professional roof inspections identify damage, wear, and potential issues before they become costly problems. Be proactive and protect your property.',
  },
  {
    icon: 'repair',
    title: 'Roof Repair',
    description:
      'Our roof repair services address damaged shingles, minor structural concerns, and other common roofing problems to restore strength and reliability.',
  },
  {
    icon: 'replacement',
    title: 'Roof Replacements',
    description:
      'When repairs are no longer enough, our full roof replacement services provide long-term protection, durability, and a fresh new look for your property.',
  },
  {
    icon: 'storm',
    title: 'Storm & Hail Roof Damage',
    description:
      'Texas storms can cause serious roof damage. We identify storm and hail damage and restore your roof to help protect your home from future weather.',
  },
  {
    icon: 'leak',
    title: 'Roof Leak Detection',
    description:
      'Roof leaks can cause major damage if left untreated. We locate the source of leaks and provide effective repairs to prevent further water damage.',
  },
  {
    icon: 'maintenance',
    title: 'Roof Maintenance',
    description:
      'Regular roof maintenance helps extend the life of your roof and prevent unexpected repairs while protecting the long-term value of your property.',
  },
]

function ServiceIcon({ name }) {
  const icons = {
    inspection: (
      <>
        <path d="M5 4l15 15" />
        <path d="M8 3 3 8l3 3 5-5" />
        <path d="m13 15 5 5 3-3-5-5" />
      </>
    ),

    repair: (
      <>
        <path d="M14 7a4 4 0 0 0-5 5L3 18l3 3 6-6a4 4 0 0 0 5-5l-3 3-3-3 3-3Z" />
        <circle cx="18" cy="5" r="2" />
      </>
    ),

    replacement: (
      <>
        <rect x="3" y="5" width="15" height="12" rx="1" />
        <path d="M6 9h6M6 12h4" />
        <circle cx="18" cy="16" r="4" />
        <path d="M18 14v4M16 16h4" />
      </>
    ),

    storm: (
      <>
        <path d="m4 19 5-11 3 11" />
        <path d="M6 15h5" />
        <path d="M15 8h6v6h-6z" />
        <path d="m17 3-1 3M21 4l-2 2" />
      </>
    ),

    leak: (
      <>
        <path d="M4 19h16" />
        <path d="M7 19V9l5-5 5 5v10" />
        <path d="M12 10c2 2 2 3 0 5-2-2-2-3 0-5Z" />
      </>
    ),

    maintenance: (
      <>
        <circle cx="7" cy="8" r="3" />
        <path d="M7 11v9" />
        <path d="M12 8h9v8h-9z" />
        <path d="m15 11 3 2-3 2Z" />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

function ServicesSection() {
  return (
    <section
      id="home-services"
      aria-labelledby="home-services-heading"
      className="relative scroll-mt-[calc(var(--site-header-height)+24px)] overflow-hidden bg-rcs-charcoal bg-cover bg-center bg-no-repeat py-16 font-sans md:py-20"
      style={{
        backgroundImage: `url(${servicesBg})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-rcs-charcoal/85" />

      {/* SMALL GOLD EFFECT */}
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-rcs-charcoal/90 via-rcs-charcoal/65 to-rcs-charcoal/80" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">

        {/* HEADING */}
        <div className="mx-auto mb-10 max-w-[800px] text-center lg:mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-rcs-gold">
            Our Services
          </p>

          <h2 id="home-services-heading" className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-rcs-cream sm:text-4xl lg:text-[44px]">
            We Are Proud To Serve Our Community
          </h2>

          <p className="mt-3 font-heading text-xl font-semibold leading-snug text-rcs-cream sm:text-2xl">
            We Provide The Best{' '}
            <span className="text-rcs-gold">
              Roofing Services in Texas.
            </span>
          </p>

          <p className="mx-auto mt-5 max-w-[640px] text-base leading-[1.8] text-rcs-cream/85">
            From inspections and repairs to complete roof replacements,
            RCS Construction Services delivers dependable roofing solutions
            designed to protect your property.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-rcs-gold/15
                bg-rcs-surface
                p-7
                shadow-sm
                transition-colors
                duration-200
                motion-reduce:transition-none
                hover:border-rcs-gold/60
              "
            >
              {/* TOP GOLD LINE */}
              <div aria-hidden="true" className="absolute left-0 top-0 h-[3px] w-0 bg-rcs-gold transition-[width] duration-200 group-hover:w-full motion-reduce:transition-none" />

              {/* ICON */}
              <div className="mb-5 text-rcs-gold-ink">
                <ServiceIcon name={service.icon} />
              </div>

              {/* TITLE */}
              <h3 className="font-heading text-lg font-semibold text-rcs-charcoal">
                {service.title}
              </h3>

              {/* SMALL GOLD DIVIDER */}
              <div aria-hidden="true" className="my-3 h-px w-8 bg-rcs-gold/80" />

              {/* DESCRIPTION */}
              <p className="text-base leading-[1.8] text-rcs-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
