const OurStory = () => {
  return (
    <section
      aria-labelledby="story-heading"
      className="section-space bg-rcs-surface"
    >
      <div className="site-container grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4">Our Story</p>
          <h2 id="story-heading" className="section-title max-w-md text-rcs-charcoal">
            Built on trust and quality work
          </h2>
        </div>

        <p className="section-copy max-w-2xl lg:pt-8">
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
