import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import roofingVideo from "../../assets/video1.mp4";

export default function WhatWeDo() {
  return (
    <section className="section-space bg-white">
      <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <video
          src={roofingVideo}
          aria-label="RCS Construction Services roofing video"
          muted
          playsInline
          controls
          preload="metadata"
          className="block h-auto w-full rounded-lg bg-rcs-charcoal object-contain"
        >
          Your browser does not support embedded video.{" "}
          <a href={roofingVideo}>Watch the roofing video.</a>
        </video>

        <div>
          <p className="eyebrow mb-4">RCS Construction Services</p>
          <h2 className="section-title text-rcs-charcoal">
            The right care for your roof.
          </h2>
          <p className="section-copy mt-6">
            Your roof protects your home every day. When it needs attention,
            knowing what to repair, which materials to use, and where to start
            can make all the difference.
          </p>
          <p className="section-copy mt-4">
            RCS Construction Services handles roof installation, restoration,
            repairs, and maintenance. We help you understand your options and
            find a practical solution for your property.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/contact-us" className="button-primary">
              Talk about your roof <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="#home-services"
              className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-rcs-charcoal underline decoration-rcs-gold underline-offset-8 hover:text-rcs-gold-ink"
            >
              Our roofing services <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
