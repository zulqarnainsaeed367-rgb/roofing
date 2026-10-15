
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How often should I have my roof inspected?",
    answer:
      "A professional roof inspection at least once a year, and after severe weather, can help identify damage early. Regular inspections are especially useful for catching issues that may not be visible from the ground.",
  },
  {
    question: "Can my roof be repaired, or does it need replacement?",
    answer:
      "The right option depends on the roof's age, the extent of the damage, and its overall condition. An inspection can help determine whether a focused repair or a replacement is the better long-term solution.",
  },
  {
    question: "Should I schedule an inspection after a storm?",
    answer:
      "Yes. Hail, high winds, and fallen debris can damage roofing even when the damage is difficult to see from the ground. Avoid climbing onto the roof and arrange a professional inspection if you suspect damage.",
  },
  {
    question: "How should I prepare my home for a roof replacement?",
    answer:
      "Move fragile items away from walls and ceilings, clear the driveway and work areas, and secure pets indoors. Your roofing team can share project-specific preparation steps before work begins.",
  },
  {
    question: "Can a roof be installed during cold weather?",
    answer:
      "Installation can sometimes proceed in colder weather, but temperature, precipitation, and the roofing material affect the process. A contractor can advise whether conditions are suitable for your project.",
  },
];

const RoofingAdditionalFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqId = useId();

  const toggleFaq = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      aria-labelledby={`${faqId}-heading`}
      className="w-full bg-white py-16 font-sans text-rcs-charcoal md:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-7 bg-rcs-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
              ROOF CARE
            </span>
            <span aria-hidden="true" className="h-px w-7 bg-rcs-gold" />
          </div>

          <h2
            id={`${faqId}-heading`}
            className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[44px]"
          >
            Roof Repair and{" "}
            <span className="text-rcs-gold-ink">Maintenance FAQs</span>
          </h2>

          <p className="mx-auto mt-5 text-base leading-[1.8] text-pretty text-rcs-muted sm:text-[17px]">
            Learn how routine inspections, timely repairs, and a little
            preparation can help you care for your roof.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4 md:mt-14">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            const questionId = `${faqId}-question-${index}`;
            const answerId = `${faqId}-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-colors duration-200 motion-reduce:transition-none ${
                  isOpen
                    ? "border-rcs-gold/50 bg-rcs-charcoal shadow-[0_8px_24px_rgba(16,14,11,0.08)]"
                    : "border-rcs-gold/25 bg-rcs-surface hover:border-rcs-gold/60"
                }`}
              >
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
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
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
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
    </section>
  );
};

export default RoofingAdditionalFaqs;
