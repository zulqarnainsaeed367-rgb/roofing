import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  House,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import capabilityImage from "../assets/roof9.png";

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "Roof Inspections",
    description:
      "Assess roof conditions and identify visible damage, wear, and areas that may need attention.",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    description:
      "Repair roofing issues such as leaks and storm-related damage to help protect the property.",
  },
  {
    icon: Building2,
    title: "Roof Replacement",
    description:
      "Plan replacement options for residential and commercial properties based on project needs.",
  },
  {
    icon: ShieldCheck,
    title: "Roof Maintenance",
    description:
      "Discuss practical maintenance steps to monitor roof condition and address concerns early.",
  },
];

const CapabilityStatement = () => {
  return (
    <div className="font-sans text-rcs-charcoal">
      <section
        aria-labelledby="capability-heading"
        className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-rcs-charcoal py-16 text-rcs-cream md:min-h-[620px] md:py-20"
      >
        <img
          src={capabilityImage}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-rcs-charcoal/95 via-rcs-charcoal/80 to-rcs-charcoal/55"
        />
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold sm:text-xs">
                <span aria-hidden="true" className="h-px w-9 bg-rcs-gold" />
                RCS Construction Services
              </p>
              <h1
                id="capability-heading"
                className="max-w-3xl font-heading text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-balance"
              >
                Roofing Capabilities
                <span className="mt-2 block text-rcs-gold">
                  For Homes and Businesses.
                </span>
              </h1>
            </div>
            <p className="max-w-xl text-base leading-[1.8] text-rcs-cream text-pretty lg:pb-2">
              RCS Construction Services provides roofing inspection, repair,
              replacement, and maintenance services for residential and
              commercial properties in Texas.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-rcs-gold/25 bg-rcs-gold/25 sm:grid-cols-3">
            <div className="bg-rcs-charcoal/95 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rcs-gold">
                Company
              </p>
              <p className="mt-3 font-heading text-lg font-semibold leading-snug">
                RCS Construction Services
              </p>
              <p className="mt-1 text-base leading-[1.8] text-rcs-cream/75">
                Powered by Absolute Construction
              </p>
            </div>
            <div className="bg-rcs-charcoal/95 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rcs-gold">
                Service Area
              </p>
              <p className="mt-3 font-heading text-lg font-semibold leading-snug">Texas</p>
              <p className="mt-1 text-base leading-[1.8] text-rcs-cream/75">
                Residential and commercial roofing
              </p>
            </div>
            <div className="bg-rcs-charcoal/95 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rcs-gold">
                Contact
              </p>
              <a
                href="tel:+14694200340"
                className="mt-1 inline-flex min-h-12 items-center font-heading text-lg font-semibold transition-colors hover:text-rcs-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold motion-reduce:transition-none"
              >
                (469) 420-0340
              </a>
              <p className="mt-1 break-words text-base leading-[1.8] text-rcs-cream/75">
                rodney@absoluteteam.net
              </p>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rcs-gold/60 to-transparent"
        />
      </section>

      <section
        aria-labelledby="capability-services-heading"
        className="bg-rcs-surface py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
              Core Competencies
            </p>
            <h2
              id="capability-services-heading"
              className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[44px]"
            >
              Roofing Services to{" "}
              <span className="text-rcs-gold-ink">Support Your Property</span>
            </h2>
            <p className="mt-5 text-base leading-[1.8] text-rcs-muted">
              We work with property owners to understand their needs, explain
              available options, and determine a suitable next step.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="min-w-0 rounded-md border border-rcs-gold/20 bg-rcs-cream/40 p-6"
              >
                <span className="mb-5 flex size-12 items-center justify-center rounded-[3px] bg-rcs-gold/10 text-rcs-gold-ink">
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

      <section
        aria-labelledby="capability-approach-heading"
        className="bg-rcs-cream py-16 md:py-20"
      >
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
          <div className="rounded-md border border-rcs-gold/25 bg-rcs-surface p-6 sm:p-9">
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-[3px] bg-rcs-gold/10 text-rcs-gold-ink">
                <House size={24} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold leading-snug">
                Residential &amp; Commercial
              </h3>
            </div>
            <p className="mt-5 text-base leading-[1.8] text-rcs-muted">
              From a home roof repair to a commercial property inspection, we
              bring the conversation back to the condition of the roof and the
              needs of the property.
            </p>
          </div>
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
              Our Approach
            </p>
            <h2
              id="capability-approach-heading"
              className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[44px]"
            >
              Clear communication.{" "}
              <span className="text-rcs-gold-ink">Practical next steps.</span>
            </h2>
            <p className="mt-5 text-base leading-[1.8] text-rcs-muted">
              We listen to your concerns, review the roofing needs you share,
              and talk through possible solutions. Our goal is to make it easier
              to understand your options and decide how to move forward.
            </p>
            <Link
              to="/contact-us"
              className="group mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink motion-reduce:transition-none"
            >
              Discuss a Project
              <ArrowRight
                size={19}
                aria-hidden="true"
                className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapabilityStatement;
