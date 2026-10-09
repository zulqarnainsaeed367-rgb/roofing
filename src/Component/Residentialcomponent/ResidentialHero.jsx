import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  ShieldCheck,
} from "lucide-react";

import heroImage from "../../assets/roof10.png";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
  },
  {
    icon: Hammer,
    title: "Reliable Solutions",
  },
  {
    icon: CheckCircle2,
    title: "Customer Focused",
  },
];

const ResidentialHero = () => {
  return (
    <section
      aria-labelledby="residential-heading"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#100E0B] text-white md:min-h-[620px]"
    >
      <img
        src={heroImage}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#100E0B]/75 via-[#100E0B]/65 to-[#100E0B]/80 lg:bg-gradient-to-r lg:from-[#100E0B]/90 lg:via-[#100E0B]/70 lg:to-[#100E0B]/15"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 pb-16 pt-0 sm:px-10 md:pb-20 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9A44C] sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-[#D9A44C] sm:w-10" />
            <span>RCS Construction Services</span>
          </div>

          <h1
            id="residential-heading"
            className="font-heading text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-balance"
          >
            Residential Roofing
            <span className="mt-2 block text-[#D9A44C]">
              Solutions Built to Last.
            </span>
          </h1>

          <p className="mt-6 max-w-[38rem] text-base leading-[1.8] text-[#F5ECDD] text-pretty sm:text-lg">
            Protect your home with dependable residential roofing from RCS
            Construction Services. We deliver quality installation,
            replacement, repairs, and inspections tailored to your home.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
            {benefits.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center gap-2.5">
                <Icon
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="shrink-0 text-[#D9A44C]"
                />
                <span className="text-sm font-medium text-[#F5ECDD]">
                  {title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact-us"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-[#D9A44C] bg-[#D9A44C] px-6 py-4 text-sm font-semibold text-[#100E0B] transition-colors hover:border-[#E8BB71] hover:bg-[#E8BB71] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A44C] sm:px-8"
            >
              Request an Estimate
              <ArrowRight
                size={19}
                aria-hidden="true"
                className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              />
            </Link>
            <Link
              to="/about-us"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-[#F5ECDD]/50 bg-[#100E0B]/30 px-6 py-4 text-sm font-semibold text-[#F5ECDD] transition-colors hover:border-[#D9A44C] hover:text-[#D9A44C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A44C] sm:px-8"
            >
              Explore Our Work
            </Link>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D9A44C]/70 to-transparent"
      />
    </section>
  );
};

export default ResidentialHero;
