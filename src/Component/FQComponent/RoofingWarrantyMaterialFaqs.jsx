
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqSections = [
  {
    title: "Roofing Warranties and Insurance Questions",
    subtitle: "Protecting Your Roofing Investment",
    background: "bg-[#FAFAFA]",
    questions: [
      {
        question: "What is included in a roofing warranty?",
        answer:
          "Roofing warranties typically cover materials (manufacturer defects) and workmanship (installation-related issues). Coverage varies by manufacturer and contractor, so always review the warranty terms.",
      },
      {
        question: "Are roofing warranties transferable to a new homeowner?",
        answer:
          "Some roofing warranties are transferable when selling your home. Transfer requirements, fees, and coverage limitations depend on the specific warranty agreement.",
      },
      {
        question: "Does homeowners insurance cover roof repairs?",
        answer:
          "Homeowners insurance often covers sudden damage caused by storms or other covered events, but not wear and tear. Check with your insurance provider for specific coverage details.",
      },
      {
        question: "How do I file an insurance claim for roof damage?",
        answer:
          "Contact your insurance company, document the damage with photos, and arrange a professional roof inspection. Follow your insurer's claims process and keep records of repairs and estimates.",
      },
    ],
  },
  {
    title: "Roofing Material-Specific Questions",
    subtitle: "Choosing the Right Roof for Your Home",
    background: "bg-white",
    questions: [
      {
        question: "Are metal roofs noisy during rain?",
        answer:
          "No, modern metal roofing includes insulation and underlayment that help minimize noise. Properly installed metal roofs are generally not significantly louder than other roofing systems.",
      },
      {
        question: "What are the benefits of asphalt shingle roofing?",
        answer:
          "Asphalt shingles are affordable, versatile, and available in many colors and styles. They are a popular choice for residential roofing because of their cost-effectiveness and relatively simple installation.",
      },
      {
        question: "Is metal roofing better than asphalt shingles?",
        answer:
          "Metal roofing typically offers greater longevity and durability, while asphalt shingles generally have a lower initial cost. The best choice depends on your budget, climate, and property needs.",
      },
      {
        question: "How long does a tile roof last?",
        answer:
          "Clay and concrete tile roofs can last 50 years or longer with proper installation and maintenance. Underlayment may need replacement sooner, depending on climate and material quality.",
      },
      {
        question: "Which roofing material is best for hot weather?",
        answer:
          "Reflective metal roofing, cool-rated asphalt shingles, and certain tile roofing systems can help reduce heat absorption. The best option depends on your local climate, attic ventilation, and budget.",
      },
      {
        question: "What roofing material requires the least maintenance?",
        answer:
          "Metal roofing generally requires relatively little routine maintenance, although all roof types need inspections and occasional cleaning to maintain performance.",
      },
    ],
  },
];

const FaqAccordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqId = useId();

  const handleToggle = (index) => {
    setActiveIndex((previous) =>
      previous === index ? null : index
    );
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl space-y-3">
      {questions.map((faq, index) => {
        const isOpen = activeIndex === index;
        const questionId = `${faqId}-question-${index}`;
        const answerId = `${faqId}-answer-${index}`;

        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-xl border transition-colors duration-200 motion-reduce:transition-none ${
              isOpen
                ? "border-rcs-gold/50 bg-rcs-charcoal shadow-[0_8px_24px_rgba(16,14,11,0.08)]"
                : "border-rcs-gold/25 bg-white hover:border-rcs-gold/60"
            }`}
          >
            <h3>
              <button
                id={questionId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => handleToggle(index)}
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
  );
};

const RoofingWarrantyMaterialFaqs = () => {
  const sectionId = useId();

  return (
    <section
      aria-labelledby={`${sectionId}-heading`}
      className="w-full bg-rcs-surface py-16 font-sans text-rcs-charcoal md:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] space-y-16 px-6 sm:px-10 lg:px-16">
        {faqSections.map((section, index) => (
          <section
            key={section.title}
            aria-labelledby={`${sectionId}-section-${index}`}
            className="mx-auto w-full max-w-4xl"
          >
            {index === 0 && (
              <h2 id={`${sectionId}-heading`} className="sr-only">
                Roofing warranty and material FAQs
              </h2>
            )}
            <div className="text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-rcs-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
                  {index === 0 ? "WARRANTIES & INSURANCE" : "ROOFING MATERIALS"}
                </span>
                <span aria-hidden="true" className="h-px w-7 bg-rcs-gold" />
              </div>
              <h3
                id={`${sectionId}-section-${index}`}
                className="font-heading text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-balance sm:text-3xl lg:text-4xl"
              >
                {section.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-rcs-muted sm:text-lg">
                {section.subtitle}
              </p>
            </div>

            <FaqAccordion questions={section.questions} />
          </section>
        ))}
      </div>
    </section>
  );
};

export default RoofingWarrantyMaterialFaqs;
