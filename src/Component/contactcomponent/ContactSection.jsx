import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const contactEmail = "rodney@absoluteteam.net";

const fields = [
  { name: "firstName", label: "First Name", autoComplete: "given-name", required: true },
  { name: "lastName", label: "Last Name", autoComplete: "family-name", required: true },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", placeholder: "(555) 123-4567" },
];

const inputStyle =
  "min-w-0 w-full rounded-md border border-rcs-charcoal/20 bg-rcs-surface/50 px-4 py-3 text-base text-rcs-charcoal transition-colors placeholder:text-rcs-muted/80 focus:border-rcs-gold-ink focus:outline-2 focus:outline-offset-2 focus:outline-rcs-gold-ink";

const ContactSection = () => {
  const [emailRequested, setEmailRequested] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name) => String(data.get(name) || "").trim();
    const subject = value("subject") || "Roofing enquiry - RCS Construction Services";
    const body = [
      "Hello RCS Construction Services,",
      "",
      value("message"),
      "",
      `Name: ${value("firstName")} ${value("lastName")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
    ].join("\r\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailRequested(true);
  };

  return (
    <section
      aria-labelledby="contact-section-heading"
      className="bg-rcs-surface py-16 font-sans text-rcs-charcoal md:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div id="contact-details" className="min-w-0 scroll-mt-[calc(var(--site-header-height)+24px)] lg:py-4">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-rcs-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
                Contact Our Team
              </span>
            </div>

            <h2
              id="contact-section-heading"
              className="max-w-lg font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[44px]"
            >
              Get in Touch With <span className="text-rcs-gold-ink">Our Team.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-[1.8] text-rcs-muted">
              Have a roofing question or a project in mind? Connect with Rodney
              The Roofer at RCS Construction Services for repairs, replacements,
              and inspections for your home or business.
            </p>

            <dl className="mt-9 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-rcs-gold/25 bg-rcs-gold/10 text-rcs-gold-ink">
                  <Phone size={21} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-rcs-muted">Call Us</dt>
                  <dd className="mt-1">
                    <a
                      href="tel:+14694200340"
                      className="inline-flex min-h-8 items-center font-heading text-lg font-bold transition-colors hover:text-rcs-gold-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink sm:text-xl"
                    >
                      (469) 420-0340
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-rcs-gold/25 bg-rcs-gold/10 text-rcs-gold-ink">
                  <Mail size={21} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-rcs-muted">Email Us</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${contactEmail}`}
                      className="inline-flex min-h-8 items-center break-all text-base font-semibold transition-colors hover:text-rcs-gold-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink"
                    >
                      {contactEmail}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-rcs-gold/25 bg-rcs-gold/10 text-rcs-gold-ink">
                  <MapPin size={21} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-rcs-muted">Service Area</dt>
                  <dd className="mt-1 font-heading text-lg font-bold sm:text-xl">Serving Texas</dd>
                  <dd className="mt-1 text-sm leading-relaxed text-rcs-muted">Residential &amp; commercial roofing</dd>
                </div>
              </div>
            </dl>

            <div className="mt-9 border-t border-rcs-charcoal/10 pt-6">
              <p className="font-heading text-base font-bold">RCS Construction Services</p>
              <p className="mt-1 text-sm text-rcs-muted">Powered by Absolute Construction</p>
            </div>
          </div>

          <div id="contact-form" className="min-w-0 scroll-mt-[calc(var(--site-header-height)+24px)] rounded-2xl border border-rcs-gold/25 bg-white p-6 shadow-[0_12px_40px_rgba(16,14,11,0.04)] sm:p-8">
            <h3 id="contact-form-heading" className="font-heading text-2xl font-bold leading-tight tracking-[-0.02em]">
              Tell Us About Your Project
            </h3>
            <p id="contact-form-help" className="mt-3 text-sm leading-6 text-rcs-muted">
              Complete the form to prepare an email to our team. Fields marked
              with * are required.
            </p>

            <form
              aria-labelledby="contact-form-heading"
              aria-describedby="contact-form-help contact-email-help"
              onSubmit={handleSubmit}
              onChange={() => setEmailRequested(false)}
              className="mt-7 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.name} className="min-w-0">
                    <label htmlFor={`contact-${field.name}`} className="mb-2 block text-sm font-semibold">
                      {field.label}{field.required ? " *" : " (optional)"}
                    </label>
                    <input
                      id={`contact-${field.name}`}
                      name={field.name}
                      type={field.type || "text"}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      required={field.required}
                      maxLength={field.name === "email" ? 254 : 100}
                      className={inputStyle}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold">Subject (optional)</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Roof inspection, repair, or replacement"
                  maxLength={150}
                  className={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your roofing needs and where your property is located."
                  rows={5}
                  required
                  maxLength={2000}
                  className={`${inputStyle} min-h-36 resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink sm:w-auto sm:px-8"
              >
                Continue to Email
                <ArrowRight size={19} strokeWidth={1.8} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
              </button>

              <p id="contact-email-help" className="text-sm leading-6 text-rcs-muted">
                Opens your email app with your details filled in. Review your
                message there before sending.
              </p>
              <p role="status" className="text-sm leading-6 text-rcs-gold-ink empty:hidden">
                {emailRequested && "Finish sending in your email app. If it didn't open, use the email address or phone number listed here to contact us."}
              </p>
            </form>

            <div className="mt-8 overflow-hidden rounded-xl border border-rcs-gold/25 bg-rcs-surface">
              <img
                src="/images/contact-map.webp"
                alt="Location map near North Central Expressway and 18th Street in Plano, Texas"
                width={768}
                height={290}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
