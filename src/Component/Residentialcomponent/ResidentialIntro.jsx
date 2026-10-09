
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  House,
  Users,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import introImage from "../../assets/roof11.png";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reliable Protection",
    description: "Roofing solutions designed to protect your home.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Workmanship",
    description: "Careful attention to roofing details.",
  },
  {
    icon: House,
    title: "Roofing Solutions",
    description: "Options suited to your property's needs.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Clear communication and dependable service.",
  },
];

const ResidentialIntro = () => {
  return (
    <section
      aria-labelledby="residential-intro-heading"
      className="relative w-full overflow-hidden bg-[#F8F6F1] px-5 py-16 sm:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* SMALL HEADING */}
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-9 bg-[#D9A44C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A16D20]">
              About Our Residential Services
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 id="residential-intro-heading" className="mb-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#100E0B] sm:text-4xl lg:text-[44px]">
            Protecting Your Home
            <span className="block text-[#A16D20]">
              with Quality Roofing
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mb-5 text-base leading-8 text-[#5E5548] md:text-[17px]">
            At RCS Construction Services, we understand that
            your roof is one of the most important parts of
            your home. Our residential roofing solutions
            focus on dependable workmanship, lasting
            protection, and enhancing your property's
            appearance.
          </p>

          <p className="mb-7 text-base leading-8 text-[#5E5548] md:text-[17px]">
            Whether you need a new roof, roof replacement,
            repairs, or a professional inspection, we help
            you explore suitable roofing options based on
            your home's needs and condition.
          </p>

          {/* BENEFITS GRID */}
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group flex min-w-0 items-start gap-3"
                >
                  {/* ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9A44C]/10 text-[#A16D20] transition-colors duration-300 group-hover:bg-[#D9A44C] group-hover:text-[#100E0B]">
                    <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-[#100E0B] sm:text-base">
                      {benefit.title}
                    </h3>

                    <p className="text-sm leading-6 text-[#5E5548]">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA BUTTON */}
          <Link
            to="/contact-us"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-[#D9A44C] bg-[#D9A44C] px-7 py-3.5 text-sm font-semibold text-[#100E0B] transition-colors hover:bg-[#E8BB71] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A16D20]"
          >
            Request an Estimate
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </Link>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-4 lg:mt-0"
        >
          {/* GOLD DECORATIVE BOX */}
          <div aria-hidden="true" className="absolute -right-3 -top-4 h-40 w-40 rounded-md bg-[#D9A44C] sm:-right-5" />

          {/* IMAGE */}
          <div className="group relative z-10 h-[360px] w-full overflow-hidden rounded-md border border-[#D9A44C]/30 bg-[#100E0B] shadow-xl sm:h-[450px] lg:h-[510px]">
            <img
              src={introImage}
              alt="Residential home with quality roofing"
              decoding="async"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* IMAGE BOTTOM GRADIENT */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#100E0B]/45 via-transparent to-transparent" />
          </div>

          {/* FLOATING TRUST CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="absolute -bottom-6 left-3 z-20 flex items-center gap-4 rounded-md border-l-4 border-[#D9A44C] bg-[#100E0B] px-5 py-4 shadow-xl sm:-left-5 sm:px-7 sm:py-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9A44C]/10 text-[#D9A44C]">
              <CheckCircle2 size={28} aria-hidden="true" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#F5ECDD] sm:text-xl">
                Quality Roofing
              </h3>

              <p className="text-xs text-[#F5ECDD]/75 sm:text-sm">
                Protecting What Matters Most
              </p>
            </div>
          </motion.div>

          {/* BOTTOM DECORATIVE BACKGROUND */}
          <div aria-hidden="true" className="absolute -bottom-8 -right-5 h-32 w-32 rounded-md border border-[#D9A44C]/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default ResidentialIntro;
