import faqBg from "../../assets/roof1.png";

const FaqHero = () => {
  return (
    <section
      aria-labelledby="faq-heading"
      className="relative isolate flex min-h-[350px] w-full items-center justify-center overflow-hidden bg-rcs-charcoal font-sans text-white sm:min-h-[380px] lg:min-h-[400px]"
    >
      <img
        src={faqBg}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-rcs-charcoal/70" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-rcs-charcoal/80 via-transparent to-rcs-charcoal/30"
      />

      {/* Hero Content */}
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 text-center sm:px-10 lg:px-16">
        <h1
          id="faq-heading"
          className="mx-auto max-w-[1050px] font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl md:text-5xl lg:text-[56px]"
        >
          Roofing FAQs: Expert Answers for
          <span className="mt-2 block text-rcs-gold">Homeowners</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-rcs-cream text-pretty sm:text-lg">
          Clear and Reliable Information to Guide Your Roofing
          Decisions
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rcs-gold/60 to-transparent"
      />
    </section>
  );
};

export default FaqHero;
