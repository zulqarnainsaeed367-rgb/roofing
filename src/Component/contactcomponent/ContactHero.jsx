import { ArrowRight, Phone } from "lucide-react";
import contactBg from "../../assets/roof3.png";

const ContactHero = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-rcs-charcoal font-sans text-white md:min-h-[620px]"
    >
      <img
        src={contactBg}
        alt=""
        width={1448}
        height={1086}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_55%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-rcs-charcoal/65"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-rcs-charcoal/80 via-transparent to-rcs-charcoal/30"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 text-center sm:px-10 md:py-16 lg:px-16">
        <div className="mb-6 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-rcs-gold sm:text-xs">
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-rcs-gold sm:w-10" />
          <span>RCS Construction Services</span>
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-rcs-gold sm:w-10" />
        </div>

        <h1
          id="contact-heading"
          className="mx-auto max-w-5xl font-heading text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-balance"
        >
          Let's Talk About
          <span className="mt-2 block text-rcs-gold">
            Your Roofing Project.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[38rem] text-base leading-[1.8] text-rcs-cream text-pretty sm:text-lg">
          From roof repairs and replacements to professional inspections,
          our team is here to help. Tell us what your home or business needs,
          and let's plan the next step together.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#contact-form"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold sm:px-8"
          >
            Send Us a Message
            <ArrowRight
              size={19}
              strokeWidth={1.8}
              aria-hidden="true"
              className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </a>

          <a
            href="tel:+14694200340"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-cream/50 bg-rcs-charcoal/30 px-6 py-4 text-sm font-semibold text-rcs-cream transition-colors hover:border-rcs-gold hover:text-rcs-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold sm:px-8"
          >
            <Phone size={18} strokeWidth={1.8} aria-hidden="true" className="shrink-0" />
            Call (469) 420-0340
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rcs-gold/60 to-transparent"
      />
    </section>
  );
};

export default ContactHero;
