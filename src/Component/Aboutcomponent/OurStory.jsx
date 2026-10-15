const OurStory = () => {
  return (
    <section
      aria-labelledby="story-heading"
      className="bg-rcs-surface py-16 font-sans md:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 text-center sm:px-10 lg:px-16">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-rcs-gold" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink">Our Story</p>
          <span aria-hidden="true" className="h-px w-8 bg-rcs-gold" />
        </div>
        <h2 id="story-heading" className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance text-rcs-charcoal sm:text-4xl lg:text-[44px]">
          Built on Trust and <span className="text-rcs-gold-ink">Quality Work</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.8] text-pretty text-rcs-muted">
          RCS Construction Services is dedicated to delivering reliable roofing
          and construction solutions built on quality craftsmanship and customer
          trust. Our commitment to safety, integrity, and professional service
          guides every project, from minor roof repairs to larger residential
          and commercial construction work. We focus on providing lasting
          results, protecting properties, and building strong relationships
          with every client we serve.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
