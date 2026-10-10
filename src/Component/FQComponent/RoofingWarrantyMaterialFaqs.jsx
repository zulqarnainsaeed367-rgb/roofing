
import React, { useState } from "react";
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

const FaqAccordion = ({ questions, sectionId }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((previous) =>
      previous === index ? null : index
    );
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl space-y-3">
      {questions.map((faq, index) => {
        const isOpen = activeIndex === index;
        const answerId = `faq-answer-${sectionId}-${index}`;

        return (
          <div
            key={index}
            className={`overflow-hidden rounded-lg border bg-white transition-all duration-300 ${
              isOpen
                ? "border-[#F26522]/40 shadow-sm"
                : "border-[#E5E7EB] hover:border-[#F26522]/40"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => handleToggle(index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-bold text-[#142033] sm:text-base">
                {faq.question}
              </span>

              <ChevronDown
                size={19}
                className={`shrink-0 text-[#F26522] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id={answerId}
              hidden={!isOpen}
              className="px-5 pb-5"
            >
              <p className="text-sm leading-7 text-[#647083]">
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
  return (
    <div className="w-full">
      {faqSections.map((section, index) => (
        <section
          key={index}
          className={`${section.background} px-5 py-16 sm:px-8 lg:py-20`}
        >
          <div className="mx-auto max-w-6xl">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-2xl font-extrabold leading-tight text-[#142033] sm:text-3xl lg:text-4xl">
                {section.title}
              </h2>

              <p className="mt-4 text-lg font-bold text-[#F26522] sm:text-xl lg:text-[22px]">
                {section.subtitle}
              </p>
            </div>

            {/* FAQ Accordion */}
            <FaqAccordion
              questions={section.questions}
              sectionId={index}
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default RoofingWarrantyMaterialFaqs;
