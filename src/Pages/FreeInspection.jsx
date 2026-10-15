import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import inspectionImage from "../assets/roof1.png";

const contactEmail = "rodney@absoluteteam.net";
const inputStyle =
  "min-w-0 w-full rounded-md border border-rcs-charcoal/20 bg-rcs-surface/50 px-4 py-3 text-base text-rcs-charcoal transition-colors placeholder:text-rcs-muted/80 focus:border-rcs-gold-ink focus:outline-2 focus:outline-offset-2 focus:outline-rcs-gold-ink";

const inspectionSteps = [
  {
    icon: ClipboardCheck,
    title: "Tell us what you noticed",
    description:
      "Share your property details and any roof concerns you would like us to know about.",
  },
  {
    icon: ShieldCheck,
    title: "Our team follows up",
    description:
      "Your request opens an email to our team so we can discuss a suitable inspection time.",
  },
  {
    icon: CheckCircle2,
    title: "Review the next steps",
    description:
      "Talk through the inspection and possible next steps for your roof.",
  },
];

const FreeInspection = () => {
  const [emailRequested, setEmailRequested] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name) => String(data.get(name) || "").trim();
    const body = [
      "Hello RCS Construction Services,",
      "",
      "I would like to request a free roof inspection.",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Property address or city: ${value("location")}`,
      `Property type: ${value("propertyType")}`,
      `Roof concern: ${value("concern") || "Not specified"}`,
      "",
      `Additional details: ${value("message") || "None provided"}`,
    ].join("\r\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Free roof inspection request - RCS Construction Services",
    )}&body=${encodeURIComponent(body)}`;
    setEmailRequested(true);
  };

  return (
    <div className="bg-rcs-surface font-sans text-rcs-charcoal">
      <section
        aria-labelledby="inspection-heading"
        className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-rcs-charcoal text-rcs-cream md:min-h-[620px]"
      >
        <img
          src={inspectionImage}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-rcs-charcoal/75 via-rcs-charcoal/65 to-rcs-charcoal/80 lg:bg-gradient-to-r lg:from-rcs-charcoal/90 lg:via-rcs-charcoal/70 lg:to-rcs-charcoal/30"
        />
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-10 md:py-20 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold sm:text-xs">
              <span aria-hidden="true" className="h-px w-9 shrink-0 bg-rcs-gold" />
              RCS Construction Services · Texas
            </p>
            <h1
              id="inspection-heading"
              className="font-heading text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-balance"
            >
              Request a Free
              <span className="mt-2 block text-rcs-gold">
                Roof Inspection.
              </span>
            </h1>
            <p className="mt-6 max-w-[38rem] text-base leading-[1.8] text-rcs-cream text-pretty sm:text-lg">
              Have a leak, storm damage, or a roof that needs attention? Tell
              us a little about your property and our team can follow up to
              discuss an inspection.
            </p>
            <a
              href="#inspection-request"
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold motion-reduce:transition-none sm:px-8"
            >
              Request an Inspection
              <ArrowRight
                size={19}
                aria-hidden="true"
                className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              />
            </a>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rcs-gold/60 to-transparent"
        />
      </section>

      <section
        aria-labelledby="inspection-process-heading"
        className="bg-rcs-surface py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
              What to Expect
            </p>
            <h2
              id="inspection-process-heading"
              className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[44px]"
            >
              A simple first step toward understanding your roof
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {inspectionSteps.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="flex min-w-0 flex-col gap-4 rounded-md border border-rcs-gold/25 bg-rcs-cream p-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[3px] bg-rcs-gold/10 text-rcs-gold-ink">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rcs-gold-ink">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-semibold leading-snug">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.8] text-rcs-muted">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="inspection-request"
        aria-labelledby="inspection-request-heading"
        className="scroll-mt-[calc(var(--site-header-height)+24px)] bg-rcs-cream py-16 md:py-20"
      >
        <div className="mx-auto grid w-full max-w-[1280px] items-start gap-10 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-16">
          <div className="lg:py-4">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
              Start Here
            </p>
            <h2 id="inspection-request-heading" className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[44px]">
              Let's take a closer look at your roof.
            </h2>
            <p className="mt-5 text-base leading-[1.8] text-rcs-muted">
              Complete the form to prepare an email for our team. Include the
              property location and a short description of what you have
              noticed so we can follow up with you.
            </p>
            <div className="mt-8 space-y-5">
              <a
                href="tel:+14694200340"
                className="flex min-h-12 items-center gap-3 font-semibold transition-colors hover:text-rcs-gold-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink"
              >
                <Phone size={19} aria-hidden="true" className="text-rcs-gold-ink" />
                (469) 420-0340
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="flex min-h-12 items-center gap-3 break-all font-semibold transition-colors hover:text-rcs-gold-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink"
              >
                <Mail size={19} aria-hidden="true" className="shrink-0 text-rcs-gold-ink" />
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="min-w-0 rounded-md border border-rcs-gold/25 bg-rcs-surface p-6 shadow-sm sm:p-8">
            <h3
              id="inspection-form-heading"
              className="font-heading text-2xl font-bold leading-tight tracking-[-0.02em]"
            >
              Request Your Inspection
            </h3>
            <p id="inspection-form-help" className="mt-3 text-sm leading-6 text-rcs-muted">
              Submitting opens your email app with the request details filled in.
              Fields marked with * are required.
            </p>

            <form
              aria-labelledby="inspection-form-heading"
              aria-describedby="inspection-form-help"
              onSubmit={handleSubmit}
              onChange={() => setEmailRequested(false)}
              className="mt-7 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="inspection-name" className="mb-2 block text-sm font-semibold">
                    Full Name *
                  </label>
                  <input
                    id="inspection-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="inspection-email" className="mb-2 block text-sm font-semibold">
                    Email Address *
                  </label>
                  <input
                    id="inspection-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="inspection-phone" className="mb-2 block text-sm font-semibold">
                    Phone Number
                  </label>
                  <input
                    id="inspection-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="inspection-location" className="mb-2 block text-sm font-semibold">
                    Property Address or City *
                  </label>
                  <input
                    id="inspection-location"
                    name="location"
                    type="text"
                    autoComplete="street-address"
                    maxLength={200}
                    required
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="inspection-property-type" className="mb-2 block text-sm font-semibold">
                    Property Type *
                  </label>
                  <select
                    id="inspection-property-type"
                    name="propertyType"
                    required
                    defaultValue=""
                    className={inputStyle}
                  >
                    <option value="" disabled>
                      Select a property type
                    </option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="inspection-concern" className="mb-2 block text-sm font-semibold">
                    What have you noticed?
                  </label>
                  <select
                    id="inspection-concern"
                    name="concern"
                    defaultValue=""
                    className={inputStyle}
                  >
                    <option value="">Select a concern (optional)</option>
                    <option value="Leak or water damage">Leak or water damage</option>
                    <option value="Storm or hail damage">Storm or hail damage</option>
                    <option value="Missing or damaged shingles">Missing or damaged shingles</option>
                    <option value="General roof condition">General roof condition</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="inspection-message" className="mb-2 block text-sm font-semibold">
                  Additional Details (optional)
                </label>
                <textarea
                  id="inspection-message"
                  name="message"
                  rows="4"
                  maxLength={2000}
                  className={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink motion-reduce:transition-none sm:w-auto"
              >
                Prepare Inspection Request
                <ArrowRight
                  size={19}
                  aria-hidden="true"
                  className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                />
              </button>
              {emailRequested && (
                <p role="status" className="text-sm leading-6 text-rcs-gold-ink">
                  Your email app should open with the request ready to send. If
                  it did not open, email us at{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="font-semibold underline underline-offset-2"
                  >
                    {contactEmail}
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section aria-label="Contact our team" className="bg-rcs-charcoal py-10 text-center text-rcs-cream">
        <p className="mx-auto max-w-[1280px] px-6 text-base leading-[1.8] sm:px-10 lg:px-16">
          Need help now? Call{" "}
          <a
            href="tel:+14694200340"
            className="font-semibold text-rcs-gold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold"
          >
            (469) 420-0340
          </a>{" "}
          or visit our{" "}
          <Link
            to="/contact-us"
            className="font-semibold text-rcs-gold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold"
          >
            contact page
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default FreeInspection;
