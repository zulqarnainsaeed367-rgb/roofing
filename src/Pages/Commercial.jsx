import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import commercialImage from "../assets/roof8.png";

const services = [
  {
    icon: ClipboardCheck,
    title: "Commercial Roof Inspections",
    description:
      "Understand your roof's condition, spot visible concerns, and plan the next steps for your property.",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    description:
      "Address leaks, storm damage, and other roofing concerns with repairs suited to the roof and its condition.",
  },
  {
    icon: Building2,
    title: "Roof Replacement",
    description:
      "Explore replacement options when ongoing repairs are no longer the right fit for your commercial roof.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    description:
      "Keep an eye on wear and changing roof conditions with a practical, property-focused maintenance approach.",
  },
];

const Commercial = () => {
  return (
    <div className="font-sans text-rcs-charcoal">
      <section
        aria-labelledby="commercial-heading"
        className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-rcs-charcoal text-rcs-cream md:min-h-[620px]"
      >
        <img
          src={commercialImage}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-rcs-charcoal/85 via-rcs-charcoal/75 to-rcs-charcoal/85 lg:bg-gradient-to-r lg:from-rcs-charcoal/95 lg:via-rcs-charcoal/75 lg:to-rcs-charcoal/35"
        />
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-10 md:py-20 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold sm:text-xs">
              <span aria-hidden="true" className="h-px w-9 bg-rcs-gold" />
              Commercial Roofing · Texas
            </p>
            <h1
              id="commercial-heading"
              className="font-heading text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-balance"
            >
              Commercial Roofing
              <span className="mt-2 block text-rcs-gold">
                Built Around Your Property.
              </span>
            </h1>
            <p className="mt-6 max-w-[38rem] text-base leading-[1.8] text-rcs-cream text-pretty">
              RCS Construction Services helps Texas property owners plan roof
              inspections, repairs, maintenance, and replacements with clear
              communication at every step.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/free-inspection"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold motion-reduce:transition-none sm:px-8"
              >
                Request a Free Inspection
                <ArrowRight
                  size={19}
                  aria-hidden="true"
                  className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex min-h-12 items-center justify-center rounded-[3px] border border-rcs-cream/50 bg-rcs-charcoal/30 px-6 py-4 text-sm font-semibold text-rcs-cream transition-colors hover:border-rcs-gold hover:text-rcs-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold motion-reduce:transition-none sm:px-8"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rcs-gold/60 to-transparent"
        />
      </section>

      <section
        aria-labelledby="commercial-services-heading"
        className="bg-rcs-surface py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
              Commercial Roofing Services
            </p>
            <h2
              id="commercial-services-heading"
              className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[44px]"
            >
              Roofing Support for Your{" "}
              <span className="text-rcs-gold-ink">Business Property</span>
            </h2>
            <p className="mt-5 text-base leading-[1.8] text-rcs-muted">
              Every building is different. We start by understanding your
              property's needs and then discuss practical roofing options with
              you.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-md border border-rcs-gold/25 bg-rcs-cream p-6"
              >
                <span className="mb-5 flex size-12 items-center justify-center rounded-md border border-rcs-gold/30 text-rcs-gold-ink">
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-3 text-base leading-[1.8] text-rcs-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="commercial-contact-heading" className="bg-rcs-charcoal py-16 text-rcs-cream md:py-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold">
              Have a roofing project in mind?
            </p>
            <h2 id="commercial-contact-heading" className="mt-3 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-[44px]">
              Let's discuss what your commercial property needs.
            </h2>
          </div>
          <Link
            to="/contact-us"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold motion-reduce:transition-none"
          >
            Contact RCS
            <ArrowRight
              size={19}
              aria-hidden="true"
              className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Commercial;
