import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import roofingVideo from "../../assets/video1.mp4";

const WhatWeDo = () => {
  return (
    <section aria-labelledby="home-about-heading" className="w-full bg-rcs-charcoal py-16 font-sans text-rcs-cream md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ================= LEFT SIDE VIDEO ================= */}
          <div className="w-full">
            <video
              src={roofingVideo}
              aria-label="RCS Construction Services roofing video"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              className="block h-auto w-full rounded-xl bg-black object-contain"
            >
              Your browser does not support embedded video.{" "}
              <a href={roofingVideo}>Watch the roofing video.</a>
            </video>
          </div>

          {/* ================= RIGHT SIDE CONTENT ================= */}
          <div className="w-full">

            {/* Small Heading */}
            <div className="flex items-center gap-3 mb-3">
              <span aria-hidden="true" className="h-px w-8 bg-rcs-gold sm:w-10" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rcs-gold">
                What We Do
              </p>
            </div>

            {/* Main Heading */}
            <h2 id="home-about-heading" className="mb-5 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-rcs-cream sm:text-4xl lg:text-[44px]">
              Turning Roofing Needs into{" "}
              <span className="text-rcs-gold">
                Tailored Solutions
              </span>
            </h2>

            {/* First Paragraph */}
            <p className="text-base leading-[1.8] text-rcs-cream/85 mb-4">
              Your roof is an integral part of your home. In addition to
              enhancing your home's aesthetic appeal and increasing its value,
              your roof helps maintain a comfortable temperature. By using the{" "}
              <span className="text-rcs-gold">
                right material for the roof
              </span>
              , you can make your home more comfortable and energy efficient.
            </p>

            {/* Second Paragraph */}
            <p className="text-base leading-[1.8] text-rcs-cream/85 mb-7">
              RCS Construction Services is your trusted roofing contractor,
              providing professional roof installation, restoration,{" "}
              <span className="text-rcs-gold">
                repair and roofing maintenance services
              </span>
              . Our experienced roofing team focuses on quality workmanship,
              reliable service, and long-lasting roofing solutions for every
              project.
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              {/* Quote Button */}
              <Link
                to="/contact-us"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold"
              >
                Get a Free Quote Today

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                />
              </Link>

              {/* Services Button */}
              <a
                href="#home-services"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-cream/50 px-6 py-4 text-sm font-semibold text-rcs-cream transition-colors hover:border-rcs-gold hover:text-rcs-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold"
              >
                Discover Our Services

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
