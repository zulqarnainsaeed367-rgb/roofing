import { ArrowRight } from "lucide-react";

const ServicesIntro = () => {
  return (
    <section aria-labelledby="home-services-intro-heading" className="w-full bg-rcs-surface py-16 font-sans md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 text-center sm:px-10 lg:px-16">

        {/* Small Heading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span aria-hidden="true" className="h-px w-8 bg-rcs-gold sm:w-10" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink">
            Services We Provide
          </p>

          <span aria-hidden="true" className="h-px w-8 bg-rcs-gold sm:w-10" />
        </div>

        {/* Main Heading */}
        <h2 id="home-services-intro-heading" className="mx-auto mb-5 max-w-4xl font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-balance text-rcs-charcoal sm:text-4xl lg:text-[44px]">
          Protecting Your Home with{" "}
          <span className="text-rcs-gold-ink">Expert Craftsmanship</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-3xl text-base leading-[1.8] text-rcs-muted">
          At{" "}
          <span className="font-semibold text-rcs-charcoal">
            RCS Construction Services
          </span>
          , we specialize in providing reliable and high-quality roofing
          solutions designed to protect your home with durability, strength,
          and long-lasting performance. Our experienced team handles everything
          from{" "}
          <span className="text-rcs-gold-ink font-medium">
            roof installation and repairs
          </span>{" "}
          to restoration and maintenance, always focusing on quality
          workmanship and customer satisfaction.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="#home-services"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-7 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink"
          >
            Explore Our Services Today

            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesIntro;
