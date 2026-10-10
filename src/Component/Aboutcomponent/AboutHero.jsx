import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutBg from "../../assets/lakeside-boat-race.jpg";

const AboutHero = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-rcs-charcoal text-rcs-cream md:min-h-[520px]"
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

      <div className="site-container py-20 text-center md:py-24">
        <p className="eyebrow mb-5 text-rcs-gold">RCS Construction Services</p>

        <h1
          id="about-heading"
          className="hero-title text-balance"
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
          className="button-primary mt-8"
        >
          Get in Touch
          <ArrowRight
            size={19}
            strokeWidth={1.8}
            aria-hidden="true"
            className="shrink-0"
          />
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;
