import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Herohome.css";

const slides = [
  {
    title: "Roofing That Protects",
    highlight: "What Matters Most.",
    description:
      "Protect your home with quality roof installation, replacement, and repairs from RCS Construction Services.",
    image:
      "https://images.pexels.com/photos/12243107/pexels-photo-12243107.jpeg?auto=compress&cs=tinysrgb&w=1920",
    position: "center 35%",
    button: "Explore Residential Roofing",
    link: "/residential",
  },
  {
    title: "Small Repairs.",
    highlight: "Lasting Peace of Mind.",
    description:
      "From damaged tiles to unexpected leaks, give your roof the attention it needs with Rodney the Roofer.",
    image:
      "https://images.pexels.com/photos/37704251/pexels-photo-37704251.jpeg?auto=compress&cs=tinysrgb&w=1920",
    position: "center 52%",
    button: "Discuss Your Roof Repair",
    link: "/contact-us",
  },
  {
    title: "A Stronger Roof.",
    highlight: "A Fresh Start.",
    description:
      "Bring protection and curb appeal together with a roof replacement designed around your home.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=85",
    position: "center",
    button: "Plan Your Roofing Project",
    link: "/contact-us",
  },
];

function Chevron({ direction = "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={direction === "left" ? "rotate-180" : ""}
      aria-hidden="true"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const touchStart = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotion = () => {
      setReducedMotion(media.matches);
    };

    const handleVisibility = () => {
      setPageVisible(!document.hidden);
    };

    handleMotion();
    handleVisibility();

    media.addEventListener("change", handleMotion);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      media.removeEventListener("change", handleMotion);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || !pageVisible) return;

    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [active, reducedMotion, pageVisible]);

  const changeSlide = (direction) => {
    setActive(
      (current) => (current + direction + slides.length) % slides.length
    );
  };

  const slide = slides[active];

  const arrowClasses =
    "absolute bottom-5 z-20 flex h-11 w-11 items-center justify-center " +
    "rounded-full border border-rcs-cream/40 bg-rcs-charcoal/40 text-rcs-cream " +
    "transition-colors hover:border-rcs-gold hover:bg-rcs-gold " +
    "hover:text-rcs-charcoal focus-visible:outline focus-visible:outline-2 " +
    "focus-visible:outline-offset-4 focus-visible:outline-rcs-gold " +
    "md:bottom-auto md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2";

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="RCS roofing services"
      className="rcs-hero relative isolate flex w-full flex-col overflow-hidden bg-rcs-charcoal font-sans text-rcs-cream"
      style={{ touchAction: "pan-y" }}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={(event) => {
        if (!touchStart.current) return;

        const touch = event.changedTouches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;

        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
          changeSlide(dx < 0 ? 1 : -1);
        }

        touchStart.current = null;
      }}
      onTouchCancel={() => {
        touchStart.current = null;
      }}
    >
      {/* Background images */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {slides.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
            draggable={false}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: item.position }}
          />
        ))}
      </div>

      {/* Dark overlay keeps the text readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-rcs-charcoal/60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-rcs-charcoal/80 via-transparent to-rcs-charcoal/20"
      />

      {/* Slide content */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-16 md:px-24">
        <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-rcs-gold sm:text-xs">
          <span className="h-px w-6 bg-rcs-gold sm:w-10" />
          <span>RCS CONSTRUCTION SERVICES</span>
          <span className="h-px w-6 bg-rcs-gold sm:w-10" />
        </div>

        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`${active + 1} of ${slides.length}`}
          aria-live={reducedMotion ? "polite" : "off"}
          aria-atomic="true"
        >
          <h1 className="font-heading text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-balance">
            {slide.title}
            <span className="mt-2 block text-rcs-gold">
              {slide.highlight}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-[38rem] text-base leading-[1.8] font-normal text-rcs-cream text-pretty sm:text-lg">
            {slide.description}
          </p>
        </div>

        <Link
          to={slide.link}
          className="group mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-rcs-gold bg-rcs-gold px-6 py-4 text-sm font-semibold text-rcs-charcoal transition-colors hover:border-rcs-gold-hover hover:bg-rcs-gold-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold sm:px-8"
        >
          {slide.button}
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
          >
            <path d="M4 12h16m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </div>

      {/* Previous / next controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => changeSlide(-1)}
        className={`${arrowClasses} left-4 md:left-6 lg:left-10`}
      >
        <Chevron direction="left" />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => changeSlide(1)}
        className={`${arrowClasses} right-4 md:right-6 lg:right-10`}
      >
        <Chevron />
      </button>

      {/* Slide pagination */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1">
        {slides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={active === index ? "true" : undefined}
            onClick={() => setActive(index)}
            className="flex h-11 w-8 items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-rcs-gold"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                active === index
                  ? "w-7 bg-rcs-gold"
                  : "w-2 bg-rcs-cream/50"
              }`}
            />
          </button>
        ))}

      </div>
    </section>
  );
}
