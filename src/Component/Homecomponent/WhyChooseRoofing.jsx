import { motion, useReducedMotion } from 'framer-motion'
import roofingImg from '../../assets/roofing-team-hd.png'

const leftFeatures = [
  {
    title: 'Roofing Consulting',
    text: 'Quality roofing consulting services for reliable project planning.',
    icon: 'consulting',
  },
  {
    title: 'Customer Service',
    text: 'Professional and dependable service focused on every customer.',
    icon: 'customer',
  },
  {
    title: 'Roofing Advisory',
    text: 'Expert roofing advice to help you make the right decisions.',
    icon: 'advisory',
  },
]

const rightFeatures = [
  {
    title: 'Quality Craftsmanship',
    text: 'High-quality workmanship built for strength and long-term results.',
    icon: 'craft',
  },
  {
    title: 'Integrity & Professionalism',
    text: 'Roofing services delivered with integrity and professionalism.',
    icon: 'shield',
  },
  {
    title: 'Installation & Repair',
    text: 'Professional roof installation, repair and inspection services.',
    icon: 'roof',
  },
]

function FeatureIcon({ name }) {
  const icons = {
    consulting: (
      <>
        <path d="M4 19h16" />
        <path d="M7 19V9l5-5 5 5v10" />
        <path d="M9 14h6" />
      </>
    ),

    customer: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M4 20v-2a5 5 0 0 1 10 0v2" />
        <path d="M16 7h4M18 5v4" />
      </>
    ),

    advisory: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </>
    ),

    craft: (
      <>
        <path d="m5 4 15 15" />
        <path d="M8 3 3 8l3 3 5-5" />
        <path d="m13 15 5 5 3-3-5-5" />
      </>
    ),

    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),

    roof: (
      <>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

function Feature({ item, side = 'left', index }) {
  const isLeft = side === 'left'
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : {
        opacity: 0,
        x: isLeft ? -45 : 45,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: index * 0.12,
      }}
      className={`
        group flex items-center gap-4
        ${isLeft ? 'lg:flex-row-reverse lg:text-right' : 'lg:text-left'}
      `}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D9A44C]/30 bg-[#D9A44C]/5 text-[#D9A44C] transition-all duration-300 group-hover:border-[#D9A44C] group-hover:bg-[#D9A44C] group-hover:text-[#0B0806] motion-reduce:transition-none">
        <FeatureIcon name={item.icon} />
      </div>

      <div>
        <h3 className="text-[16px] font-bold text-[#FFF0C2] sm:text-[17px]">
          {item.title}
        </h3>

        <p className="mt-2 text-[13px] leading-6 text-[#FFF0C2]/65">
          {item.text}
        </p>
      </div>
    </motion.div>
  )
}

function WhyChooseRoofing() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-[#0B0806] py-16 font-sans md:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,164,76,0.09),transparent_45%)]"
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">

        {/* TOP HEADING */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          className="mx-auto mb-12 max-w-[800px] text-center lg:mb-14"
        >
          {/* BADGE */}
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9A44C]/35 bg-[#D9A44C]/5 px-4 py-2">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#D9A44C]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D9A44C]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#FFF0C2] sm:text-4xl lg:text-[46px]">
            Roofing Services{' '}
            <span className="text-[#D9A44C]">
              Done Right
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-sm leading-7 text-[#FFF0C2]/65 sm:text-[15px]">
            Our experienced team focuses on doing the job right the first
            time, providing roofing services homeowners can rely on. RCS
            Construction Services is dedicated to delivering high-quality
            roofing services with integrity and professionalism.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px_1fr] lg:gap-6 xl:grid-cols-[1fr_360px_1fr] xl:gap-8">

          {/* LEFT FEATURES */}
          <div className="space-y-10">
            {leftFeatures.map((item, index) => (
              <Feature
                key={item.title}
                item={item}
                side="left"
                index={index}
              />
            ))}
          </div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="relative mx-auto flex aspect-square w-full max-w-[330px] items-center justify-center sm:max-w-[380px] lg:max-w-[410px]"
          >

            {/* OUTER RINGS */}
            <div aria-hidden="true" className="absolute inset-0 rounded-full border border-[#D9A44C]/15" />
            <div aria-hidden="true" className="absolute inset-[28px] rounded-full border border-[#D9A44C]/25" />

            {/* MAIN IMAGE */}
            <div
              className="relative aspect-square w-[245px] max-w-[calc(100%-64px)] overflow-hidden rounded-full border-4 border-[#0B0806] ring-1 ring-[#D9A44C]/40 sm:w-[285px] lg:w-[305px]"
            >
              <img
                src={roofingImg}
                alt="Roofer inspecting roof shingles with a tablet"
                width="1413"
                height="1113"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />

            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="space-y-10">
            {rightFeatures.map((item, index) => (
              <Feature
                key={item.title}
                item={item}
                side="right"
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseRoofing
