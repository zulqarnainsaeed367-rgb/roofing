
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

import "swiper/css";
import roof1 from "../../assets/roof1.png";
import roof2 from "../../assets/roof2.png";
import roof3 from "../../assets/roof3.png";
import roof4 from "../../assets/roof4.png";
import roof5 from "../../assets/roof5.png";
import roof6 from "../../assets/roof6.png";
import roof7 from "../../assets/roof7.png";
import roof8 from "../../assets/roof8.png";
import roof9 from "../../assets/roof9.png";

const projects = [
  {
    id: 1,
    image: roof1,
    title: "Residential Roofing",
    category: "Roofing Solutions",
  },
  {
    id: 2,
    image: roof2,
    title: "Metal Roofing",
    category: "Metal Roof Installation",
  },
  {
    id: 3,
    image: roof3,
    title: "Roof Replacement",
    category: "Residential Services",
  },
  {
    id: 4,
    image: roof4,
    title: "Commercial Roofing",
    category: "Commercial Solutions",
  },
  {
    id: 5,
    image: roof5,
    title: "Roof Restoration",
    category: "Roofing Services",
  },
  {
    id: 6,
    image: roof6,
    title: "Premium Roof Installation",
    category: "Professional Roofing",
  },
  {
    id: 7,
    image: roof7,
    title: "Roofing Project",
    category: "Roofing Solutions",
  },
  {
    id: 8,
    image: roof8,
    title: "Residential Roof Project",
    category: "Residential Services",
  },
  {
    id: 9,
    image: roof9,
    title: "Quality Roof Installation",
    category: "Professional Roofing",
  },
];

const FeaturedWorks = () => {
  const swiperRef = useRef(null);
  const focusWithinRef = useRef(false);
  const resumeWhileFocusedRef = useRef(false);
  const pointerOverSlidesRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  const syncAutoplay = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed) return;

    const shouldPause =
      shouldReduceMotion ||
      isPaused ||
      document.hidden ||
      pointerOverSlidesRef.current ||
      (focusWithinRef.current && !resumeWhileFocusedRef.current);

    if (shouldPause) {
      if (swiper.autoplay.running) swiper.autoplay.stop();
    } else if (!swiper.autoplay.running) {
      swiper.autoplay.start();
    }
  }, [isPaused, shouldReduceMotion]);

  useEffect(() => {
    syncAutoplay();
    document.addEventListener("visibilitychange", syncAutoplay);
    return () => document.removeEventListener("visibilitychange", syncAutoplay);
  }, [syncAutoplay]);

  return (
    <section aria-labelledby="featured-works-heading" className="relative w-full overflow-hidden bg-rcs-cream py-16 font-sans md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">

        {/* SECTION HEADING */}
        <div className="mb-11 text-center">
          {/* Subtitle */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-rcs-gold" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rcs-gold-ink">
              Featured Works
            </span>

            <span aria-hidden="true" className="h-px w-8 bg-rcs-gold" />
          </div>

          {/* Title */}
          <h2 id="featured-works-heading" className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-rcs-charcoal sm:text-4xl lg:text-[44px]">
            Our Work Speaks{" "}
            <span className="text-rcs-gold-ink">
              for Itself
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.8] text-rcs-muted">
            Explore roofing craftsmanship, durable materials,
            and professional solutions that reflect the quality
            and attention to detail valued by RCS Construction
            Services.
          </p>
        </div>

        {/* SLIDER WRAPPER */}
        <div
          className="relative"
          onFocusCapture={() => {
            focusWithinRef.current = true;
            resumeWhileFocusedRef.current = false;
            syncAutoplay();
          }}
          onBlurCapture={(event) => {
            if (event.currentTarget.contains(event.relatedTarget)) return;
            focusWithinRef.current = false;
            resumeWhileFocusedRef.current = false;
            syncAutoplay();
          }}
        >
          <div
            onPointerEnter={(event) => {
              if (event.pointerType !== "mouse") return;
              pointerOverSlidesRef.current = true;
              syncAutoplay();
            }}
            onPointerLeave={(event) => {
              if (event.pointerType !== "mouse") return;
              pointerOverSlidesRef.current = false;
              syncAutoplay();
            }}
          >
          <Swiper
            modules={[A11y, Autoplay, Keyboard]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={18}
            loop={true}
            speed={shouldReduceMotion ? 0 : 650}
            keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: false }}
            a11y={{ containerRoleDescriptionMessage: "carousel", itemRoleDescriptionMessage: "slide" }}
            aria-label="Roofing projects"
            autoplay={shouldReduceMotion ? false : {
              delay: 3200,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-5"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="relative h-[280px] overflow-hidden rounded-md border border-rcs-charcoal/10 bg-rcs-charcoal sm:h-[310px] lg:h-[340px]">

                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                  {/* DARK GRADIENT */}
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-rcs-charcoal/95 via-rcs-charcoal/10 to-transparent" />

                  {/* PROJECT DETAILS */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-rcs-gold">
                      {project.category}
                    </span>

                    <h3 className="font-heading text-xl font-semibold leading-snug tracking-[-0.02em] text-rcs-cream">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>

          {/* PREVIOUS BUTTON */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous project"
            className="absolute -left-3 top-[43%] z-20 flex h-12 w-12 items-center justify-center rounded-[3px] border border-rcs-gold/40 bg-rcs-surface text-rcs-charcoal shadow-sm transition-colors hover:bg-rcs-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink motion-reduce:transition-none sm:-left-5 lg:-left-6"
          >
            <ChevronLeft size={23} aria-hidden="true" />
          </button>

          {/* NEXT BUTTON */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next project"
            className="absolute -right-3 top-[43%] z-20 flex h-12 w-12 items-center justify-center rounded-[3px] border border-rcs-gold/40 bg-rcs-surface text-rcs-charcoal shadow-sm transition-colors hover:bg-rcs-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink motion-reduce:transition-none sm:-right-5 lg:-right-6"
          >
            <ChevronRight size={23} aria-hidden="true" />
          </button>
          {!shouldReduceMotion && (
            <div className="mt-3 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  // Explicit resume is allowed while this control keeps focus.
                  resumeWhileFocusedRef.current = isPaused;
                  setIsPaused((paused) => !paused);
                }}
                aria-pressed={isPaused}
                className="inline-flex min-h-12 items-center gap-2 rounded-[3px] px-4 text-sm font-semibold text-rcs-gold-ink transition-colors hover:bg-rcs-gold/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rcs-gold-ink motion-reduce:transition-none"
              >
                {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
                {isPaused ? "Resume slideshow" : "Pause slideshow"}
              </button>
            </div>
          )}
        </div>

        {/* BOTTOM DECORATIVE LINE */}
        <div aria-hidden="true" className="mx-auto mt-8 h-px w-16 bg-rcs-gold" />
      </div>
    </section>
  );
};

export default FeaturedWorks;
