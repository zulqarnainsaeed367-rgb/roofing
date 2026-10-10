
import React, { useState } from "react";
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

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRO */}
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#F26522] sm:w-32" />
            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-[#F26522]">
              ROOFING FAQS
            </span>
            <span className="h-px w-12 bg-[#F26522] sm:w-32" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#142033] sm:text-4xl">
            Comprehensive Answers to Your Roofing Questions
          </h2>

          <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-[#526071] sm:text-base">
            Roofing can be a complex topic, whether you're
            considering a new installation, repairs, or
            maintenance. At{" "}
            <span className="font-semibold text-[#4A90D9]">
              Absolute Construction
            </span>
            , we understand homeowners have many questions about
            their roofing options and care. To help you make
            informed decisions, we've compiled this list of{" "}
            <strong className="text-[#142033]">
              frequently asked roofing questions
            </strong>
            , covering everything from materials to warranties.
          </p>
        </div>

        {/* FAQ AREA */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-extrabold text-[#142033] sm:text-3xl">
              General Roofing Questions
            </h3>

            <p className="mt-3 text-lg font-bold text-[#F26522] sm:text-xl">
              Understanding the Basics of Roofing
            </p>
          </div>

          {/* ACCORDION */}
          <div className="space-y-3">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-lg border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#F26522]/50 shadow-md shadow-[#F26522]/5"
                      : "border-gray-200 hover:border-[#F26522]/40"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggleFaq(index)}
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
                    id={`faq-answer-${index}`}
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
        </div>
      </div>
    </section>
  );
};

export default RoofingFaqSection;
