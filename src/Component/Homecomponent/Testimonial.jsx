import { useState } from "react";
import { Star, Quote, ExternalLink } from "lucide-react";
import { reviewSource, testimonials } from "../../data/testimonials";

const TestimonialCard = ({ item }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = item.name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="w-[min(330px,calc(100vw-32px))] shrink-0 px-3 py-4 sm:w-[380px] lg:w-[410px]">
      <article className="relative h-full rounded-xl border border-rcs-gold/20 bg-rcs-card p-7 transition-colors hover:border-rcs-gold/45">
        <Quote
          size={22}
          aria-hidden="true"
          className="absolute right-6 top-7 text-rcs-gold/60"
        />

        <div className="mb-6 flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-rcs-gold/30 bg-rcs-charcoal">
              {imageFailed ? (
                <span aria-hidden="true" className="font-heading text-xl font-semibold text-rcs-cream">
                  {initials}
                </span>
              ) : (
                <img
                  src={item.image}
                  alt={`${item.name}'s Google profile`}
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-rcs-card bg-rcs-gold text-xs font-semibold text-rcs-charcoal"
            >
              G
            </span>
          </div>
          <div className="min-w-0 pr-5">
            <h3 className="font-heading text-lg font-semibold leading-snug text-rcs-cream">
              {item.name}
            </h3>
            <p className="mt-1.5 text-sm text-rcs-cream/70">
              Google reviewer
            </p>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between gap-3">
          <div role="img" aria-label={`${item.rating} out of 5 stars`} className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={17}
                aria-hidden="true"
                className={star <= item.rating ? "fill-rcs-gold text-rcs-gold" : "text-rcs-cream/30"}
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-rcs-cream">
              {item.rating}.0
            </span>
          </div>
          <span className="text-xs font-medium text-rcs-cream/70">Google</span>
        </div>

        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-rcs-gold">
          Review summary
        </p>
        <p className="min-h-[112px] text-base leading-[1.75] text-rcs-cream/80">
          {item.summary}
        </p>

        <div className="mt-7 flex items-end justify-between gap-3 border-t border-rcs-cream/10 pt-5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-rcs-cream/65">
              Review for
            </p>
            <p className="mt-1.5 text-sm font-semibold text-rcs-cream">
              {reviewSource.business}
            </p>
          </div>
          <a
            href={item.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${item.name}'s original reviews on Google`}
            className="inline-flex min-h-9 shrink-0 items-center gap-1 text-sm font-semibold text-rcs-gold underline-offset-4 hover:text-rcs-gold-hover hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold"
          >
            Original
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  );
};

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden border-t border-rcs-cream/10 bg-rcs-charcoal py-16 font-sans md:py-20 lg:py-24">
      <div className="mx-auto mb-10 max-w-[1280px] px-6 text-center sm:px-10 lg:px-16">
        <div className="mb-5 inline-flex items-center gap-3">
          <Star size={15} aria-hidden="true" className="fill-rcs-gold text-rcs-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rcs-gold">
            Customer Experiences
          </span>
        </div>
        <h2 className="font-heading text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-rcs-cream sm:text-4xl lg:text-[44px]">
          Roofing Done Right.
          <br />
          <span className="text-rcs-gold">Customers Who Agree.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-rcs-cream/75">
          Google reviews for {reviewSource.business}, featured on{" "}
          <a
            href={reviewSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rcs-gold underline underline-offset-4 hover:text-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold"
          >
            their website
          </a>
          . Read the summaries below or follow each link to the original review.
        </p>
      </div>

      <div className="testimonial-wrapper relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-rcs-charcoal to-transparent sm:w-16 lg:w-24" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-rcs-charcoal to-transparent sm:w-16 lg:w-24" />
        <div className="testimonial-track flex w-max">
          {duplicatedTestimonials.map((item, index) => (
            <TestimonialCard item={item} key={`${item.name}-${index}`} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1280px] justify-center px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-3 rounded-lg border border-rcs-gold/20 bg-rcs-card px-6 py-4 sm:flex-row">
          <div role="img" aria-label={`${reviewSource.rating} out of 5 stars`} className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <span key={star} className="relative block h-[17px] w-[17px]" aria-hidden="true">
                <Star size={17} className="text-rcs-cream/30" />
                <span
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${Math.max(0, Math.min(1, reviewSource.rating - index)) * 100}%` }}
                >
                  <Star size={17} className="fill-rcs-gold text-rcs-gold" />
                </span>
              </span>
            ))}
          </div>
          <span aria-hidden="true" className="hidden h-5 w-px bg-rcs-gold/30 sm:block" />
          <a
            href={reviewSource.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-semibold leading-relaxed text-rcs-cream underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold"
          >
            {reviewSource.business}: {reviewSource.rating}/5 from{" "}
            {reviewSource.reviewCount} Google reviews
          </a>
        </div>
      </div>

      <style>{`
        .testimonial-track {
          animation: testimonialSlide 55s linear infinite;
          will-change: transform;
        }

        .testimonial-wrapper:hover .testimonial-track,
        .testimonial-wrapper:focus-within .testimonial-track {
          animation-play-state: paused;
        }

        @keyframes testimonialSlide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .testimonial-track { animation-duration: 40s; }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-wrapper { overflow-x: auto; }
          .testimonial-track { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
