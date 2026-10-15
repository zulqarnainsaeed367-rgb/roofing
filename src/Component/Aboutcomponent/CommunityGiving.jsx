
import {
  HeartHandshake,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import communityImage from "../../assets/roof1.png";

const CommunityGiving = () => {
  return (
    <section aria-labelledby="community-heading" className="w-full overflow-hidden bg-rcs-surface py-16 font-sans md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">

        {/* TOP CONTENT */}
        <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">

          {/* LEFT HEADING */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-rcs-gold" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rcs-gold-ink">
                Community Giving
              </span>
            </div>

            <h2 id="community-heading" className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-rcs-charcoal sm:text-4xl lg:text-[44px]">
              Making a Difference,
              <span className="block">
                One Roof at a Time
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div>
            <p className="text-base leading-[1.8] text-rcs-muted">
              At RCS Construction Services, we believe our
              responsibility goes beyond providing dependable
              roofing and construction solutions. We value the
              communities we serve and understand the
              importance of building strong, lasting
              relationships. Our approach is rooted in trust,
              respect, and a commitment to making a positive
              difference through quality service and
              meaningful connections.
            </p>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT IMAGE */}
          <div
            className="relative min-h-[390px] overflow-hidden rounded-md bg-rcs-charcoal md:min-h-[500px]"
          >
            <img
              src={communityImage}
              alt="Roofing professionals working on a residential roof"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* DARK GRADIENT */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-rcs-charcoal/95 via-rcs-charcoal/20 to-transparent" />

            {/* IMAGE CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-rcs-gold text-rcs-charcoal">
                <HeartHandshake
                  size={28}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-heading text-2xl font-semibold leading-snug tracking-[-0.02em] text-rcs-cream sm:text-3xl">
                Stronger Communities,
                <br />
                Stronger Connections
              </h3>

              <div aria-hidden="true" className="mt-5 h-px w-16 bg-rcs-gold" />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="relative overflow-hidden rounded-md border border-rcs-gold/25 bg-rcs-cream p-6 sm:p-8 lg:p-9"
          >
            <div className="relative z-10">

              {/* ICON */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-rcs-gold/30 text-rcs-gold-ink">
                <Handshake
                  size={28}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              {/* HEADING */}
              <h3 className="mb-5 font-heading text-2xl font-semibold leading-snug tracking-[-0.02em] text-rcs-charcoal md:text-[28px]">
                Our Commitment to Community
              </h3>

              {/* DESCRIPTION */}
              <p className="mb-6 text-base leading-[1.8] text-rcs-muted">
                At RCS Construction Services, our commitment
                extends beyond the roofs we build and repair.
                We strive to make a positive impact by treating
                every customer with care, respecting the
                properties we work on, and supporting stronger
                relationships within our communities.
              </p>

              {/* BUILDING TRUST */}
              <div className="mb-5 border-l-2 border-rcs-gold pl-4">
                <p className="text-base leading-[1.8] text-rcs-muted">
                  <span className="font-semibold text-rcs-charcoal">
                    Building Trust:{" "}
                  </span>
                  We believe meaningful relationships begin
                  with honest communication, reliable service,
                  and a genuine commitment to doing the job
                  right.
                </p>
              </div>

              {/* SERVING WITH PURPOSE */}
              <div className="mb-7 border-l-2 border-rcs-gold pl-4">
                <p className="text-base leading-[1.8] text-rcs-muted">
                  <span className="font-semibold text-rcs-charcoal">
                    Serving with Purpose:{" "}
                  </span>
                  Whether working on a residential roof or a
                  commercial construction project, we aim to
                  provide solutions that help protect and
                  improve the places where people live and work.
                </p>
              </div>

              {/* BOTTOM HIGHLIGHT BOX */}
              <div className="mb-7 flex flex-col items-start gap-4 rounded-md border border-rcs-gold/25 bg-rcs-surface p-5 sm:flex-row">
                <HeartHandshake
                  size={29}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-rcs-gold-ink"
                  aria-hidden="true"
                />

                <div>
                  <h4 className="mb-2 font-heading text-lg font-semibold text-rcs-charcoal">
                    More Than Just Roofing
                  </h4>

                  <p className="text-base leading-[1.8] text-rcs-muted">
                    We are dedicated to quality craftsmanship,
                    dependable service, and relationships
                    that last beyond every completed project.
                  </p>
                </div>
              </div>

              {/* CONTACT LINK */}
              <Link
                to="/contact-us"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] bg-rcs-gold px-5 py-3 text-center text-sm font-semibold text-rcs-charcoal transition-colors hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink motion-reduce:transition-none"
              >
                Connect With Our Team

                <ArrowUpRight
                  size={20}
                  className="shrink-0"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGiving;
