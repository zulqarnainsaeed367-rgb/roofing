import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutBg from "../../assets/lakeside-boat-race.jpg";

const AboutHero = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-rcs-charcoal font-sans text-rcs-cream md:min-h-[620px]"
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
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-rcs-charcoal/65" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-rcs-charcoal/70 via-transparent to-rcs-charcoal/20"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 text-center sm:px-10 md:py-20 lg:px-16">
        <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-rcs-gold sm:text-xs">
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-rcs-gold sm:w-10" />
          <p>RCS Construction Services</p>
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-rcs-gold sm:w-10" />
        </div>

        <h1
          id="about-heading"
          className="font-heading text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-balance"
        >
          About <span className="text-rcs-gold">Our Company</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[38rem] text-base leading-[1.8] text-rcs-cream/85 text-pretty sm:text-lg">
          At RCS Construction Services, we are committed to quality craftsmanship,
          dependable service, and lasting results. From roofing solutions to
          construction improvements, we work to protect and enhance your property.
        </p>

        <Link
          to="/contact-us"
          className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold sm:px-8"
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
    </section>
  );
};

export default AboutHero;
