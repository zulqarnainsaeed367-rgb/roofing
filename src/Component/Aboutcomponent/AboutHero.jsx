import { ArrowRight, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutBg from "../../assets/lakeside-boat-race.jpg";

const AboutHero = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#100E0B] text-white md:min-h-[620px]"
    >
      <img
        src={aboutBg}
        alt=""
        width={1536}
        height={2048}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_60%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#100E0B]/60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#100E0B]/90 via-transparent to-[#100E0B]/40"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 text-center sm:px-16 md:px-24 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-[#F5ECDD]/80 sm:text-sm">
            <li>
              <Link
                to="/"
                className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-[#D9A44C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A44C]"
              >
                <Home size={14} aria-hidden="true" />
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={14} className="text-[#D9A44C]" /></li>
            <li aria-current="page" className="text-[#D9A44C]">About Us</li>
          </ol>
        </nav>

        <div className="mb-6 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9A44C] sm:text-xs">
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-[#D9A44C] sm:w-10" />
          <span>RCS Construction Services</span>
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-[#D9A44C] sm:w-10" />
        </div>

        <h1
          id="about-heading"
          className="font-heading text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-balance"
        >
          About <span className="text-[#D9A44C]">Our Company.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-[38rem] text-base leading-[1.8] text-[#F5ECDD] text-pretty sm:text-lg">
          At RCS Construction Services, we are committed to quality craftsmanship,
          dependable service, and lasting results. From roofing solutions to
          construction improvements, we work to protect and enhance your property.
        </p>

        <Link
          to="/contact-us"
          className="group mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-[#D9A44C] bg-[#D9A44C] px-6 py-4 text-sm font-semibold text-[#100E0B] transition-colors hover:border-[#E8BB71] hover:bg-[#E8BB71] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A44C] sm:px-8"
        >
          Get in Touch
          <ArrowRight
            size={19}
            strokeWidth={1.8}
            aria-hidden="true"
            className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
          />
        </Link>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D9A44C]/60 to-transparent" />
    </section>
  );
};

export default AboutHero;
