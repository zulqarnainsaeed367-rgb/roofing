import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import videoPoster from "../../assets/roofing-legacy-video.jpg";
import roofingVideo from "../../assets/roofing-legacy-video.mp4";

const facebookVideoUrl = "https://www.facebook.com/reel/1149365364288820/";

const OurLegacy = () => {
  return (
    <section aria-labelledby="legacy-heading" className="w-full bg-rcs-surface py-16 font-sans md:py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <div className="order-2 lg:order-1">
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-9 bg-rcs-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink">
              Our Legacy
            </span>
          </div>

          <h2 id="legacy-heading" className="mb-5 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-rcs-charcoal sm:text-4xl lg:text-[44px]">
            Building a Legacy of
            <span className="block text-rcs-gold-ink">Roofing Excellence</span>
          </h2>

          <div className="mb-7 space-y-5 text-base leading-[1.8] text-rcs-muted">
            <p>
              At RCS Construction Services, our story is built on a commitment
              to quality craftsmanship, dependable service, and lasting customer
              relationships. We take pride in delivering professional roofing
              and construction solutions that protect homes, businesses, and investments.
            </p>
            <p>
              From roof repairs and replacements to residential and commercial
              construction projects, our focus remains on safety, attention to
              detail, and customer satisfaction. Every project represents our
              dedication to providing reliable solutions and maintaining the
              trust of the communities we serve.
            </p>
          </div>

          <Link
            to="/capability-statement"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-7 py-3.5 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink"
          >
            Our Capabilities
            <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
          </Link>
        </div>

        <div className="order-1 mx-auto w-full max-w-[360px] lg:order-2">
          <video
            src={roofingVideo}
            poster={videoPoster}
            aria-label="RCS Construction Services roofing video"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            width={720}
            height={1280}
            className="block aspect-[9/16] w-full rounded-md border border-rcs-gold/30 bg-rcs-charcoal object-contain shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink"
          >
            Your browser does not support embedded video.{" "}
            <a href={facebookVideoUrl}>Watch the roofing video on Facebook.</a>
          </video>

          <a
            href={facebookVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-rcs-gold-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink"
          >
            Watch on Facebook
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurLegacy;
