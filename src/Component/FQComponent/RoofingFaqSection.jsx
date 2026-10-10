import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What are the signs I need a new roof?",
    answer:
      "Signs include missing or damaged shingles, leaks, sagging areas, granules in gutters, and a roof age of 20 years or more. A professional inspection can help determine whether repairs or a replacement are needed.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements take 1–3 days, depending on the roof size, materials, weather conditions, and complexity of the project.",
  },
  {
    question: "What roofing materials do you offer?",
    answer:
      "Common roofing options include asphalt shingles, metal roofing, tile roofing, and flat roofing systems. Contact our team to discuss materials suitable for your property.",
  },
  {
    question: "What factors affect the cost of a new roof?",
    answer:
      "The cost depends on your roof's size, slope, materials, labor, existing roof condition, and any additional repairs required.",
  },
  {
    question: "How long does a new roof last?",
    answer:
      "Roof lifespan depends on the material, installation quality, climate, and maintenance. Asphalt shingles commonly last around 20–30 years, while some metal and tile roofs can last considerably longer.",
  },
];

const RoofingFaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqId = useId();

  const toggleFaq = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      aria-labelledby={`${faqId}-heading`}
      className="w-full bg-rcs-surface py-16 font-sans text-rcs-charcoal md:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-7 shrink-0 bg-rcs-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
              ROOFING FAQS
            </span>
            <span aria-hidden="true" className="h-px w-7 shrink-0 bg-rcs-gold" />
          </div>

          <h2
            id={`${faqId}-heading`}
            className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[44px]"
          >
            Comprehensive Answers to Your{" "}
            <span className="text-rcs-gold-ink">Roofing Questions</span>
          </h2>

          <p className="mx-auto mt-6 text-base leading-[1.8] text-pretty text-rcs-muted sm:text-[17px]">
            Roofing can be a complex topic, whether you're
            considering a new installation, repairs, or
            maintenance. At{" "}
            <span className="font-semibold text-rcs-charcoal">
              RCS Construction Services
            </span>
            , we understand homeowners have many questions about
            their roofing options and care. To help you make
            informed decisions, we've compiled this list of{" "}
            <strong className="font-semibold text-rcs-charcoal">
              frequently asked roofing questions
            </strong>
            , covering materials, repairs, and roof care.
          </p>
        </div>

        {/* FAQ AREA */}
        <div className="mx-auto mt-12 max-w-4xl md:mt-14">
          <div className="mb-6 text-center">
            <h3 className="font-heading text-xl font-bold tracking-[-0.02em] sm:text-2xl">
              General Roofing Questions
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-rcs-muted sm:text-base">
              Understanding the Basics of Roofing
            </p>
          </div>

          {/* ACCORDION */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border transition-colors duration-200 motion-reduce:transition-none ${
                    isOpen
                      ? "border-rcs-gold/50 bg-rcs-charcoal shadow-[0_8px_24px_rgba(16,14,11,0.08)]"
                      : "border-rcs-gold/25 bg-white hover:border-rcs-gold/60"
                  }`}
                >
                  <h4>
                    <button
                      id={`${faqId}-question-${index}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${faqId}-answer-${index}`}
                      onClick={() => toggleFaq(index)}
                      className={`group flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-5 py-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 motion-reduce:transition-none sm:px-7 ${
                        isOpen
                          ? "text-rcs-gold focus-visible:outline-rcs-gold"
                          : "text-rcs-charcoal focus-visible:outline-rcs-gold-ink"
                      }`}
                    >
                      <span className="font-heading text-base font-semibold leading-relaxed sm:text-lg">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 motion-reduce:transition-none ${
                          isOpen
                            ? "bg-rcs-gold text-rcs-charcoal"
                            : "bg-rcs-gold/10 text-rcs-gold-ink group-hover:bg-rcs-gold/20"
                        }`}
                      >
                        <ChevronDown
                          size={18}
                          strokeWidth={1.8}
                          className={`transition-transform duration-200 motion-reduce:transition-none ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h4>

                  <div
                    id={`${faqId}-answer-${index}`}
                    role="region"
                    aria-labelledby={`${faqId}-question-${index}`}
                    hidden={!isOpen}
                    className="px-5 pb-6 sm:px-7"
                  >
                    <p className="border-t border-rcs-cream/15 pt-4 text-base leading-[1.8] text-rcs-cream/85">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingFaqSection;
