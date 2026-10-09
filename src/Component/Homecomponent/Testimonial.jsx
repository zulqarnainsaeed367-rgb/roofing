import { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="group w-[330px] flex-shrink-0 px-3 py-7 sm:w-[380px] lg:w-[410px]">
      <motion.div
        whileHover={{
          y: -14,
          scale: 1.025,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="relative h-full overflow-hidden rounded-[28px] border border-[#D9A44C]/20 bg-gradient-to-br from-[#1A130D] via-[#120D09] to-[#090604] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-colors duration-500 hover:border-[#D9A44C]/60"
      >
        {/* Animated Glow */}
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#D9A44C]/10 blur-[70px] transition-all duration-700 group-hover:bg-[#D9A44C]/25" />

        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#FFF0C2]/5 blur-[70px]" />

        {/* Animated top gold line */}
        <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
          <div className="testimonial-shine h-full w-[45%] bg-gradient-to-r from-transparent via-[#D9A44C] to-transparent" />
        </div>

        {/* Quote */}
        <motion.div
          animate={{
            y: [0, -5, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#D9A44C]/20 bg-[#D9A44C]/10 shadow-[0_0_30px_rgba(217,164,76,0.12)]"
        >
          <Quote size={21} className="text-[#D9A44C]" />
        </motion.div>

        {/* User Profile */}
        <div className="relative z-10 mb-6 flex items-center gap-4">
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative shrink-0"
          >
            {/* Pulse around image */}
            <div className="absolute inset-0 animate-ping rounded-full border border-[#D9A44C]/20" />

            <div className="relative rounded-full bg-gradient-to-br from-[#FFF0C2] via-[#D9A44C] to-[#8A5B1F] p-[2px] shadow-[0_0_25px_rgba(217,164,76,0.25)]">
              <div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full border-[3px] border-[#120D09] bg-[#372A1B]">
                {imageFailed ? (
                  <span aria-hidden="true" className="text-xl font-bold text-[#FFF0C2]">
                    {initials}
                  </span>
                ) : (
                  <img
                    src={item.image}
                    alt={`${item.name}'s Google profile`}
                    width={70}
                    height={70}
                    loading="lazy"
                    decoding="async"
                    onError={() => setImageFailed(true)}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#120D09] bg-[#D9A44C]"
            >
              <span aria-hidden="true" className="text-sm font-bold text-[#0B0806]">G</span>
            </motion.div>
          </motion.div>

          <div className="pr-10">
            <h3 className="text-lg font-extrabold text-white transition-colors duration-300 group-hover:text-[#FFF0C2]">
              {item.name}
            </h3>

            <div className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-400">
              <span>Google reviewer</span>
            </div>
          </div>
        </div>

        {/* Stars */}
        <div className="mb-5 flex items-center justify-between">
          <div role="img" aria-label={`${item.rating} out of 5 stars`} className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -30,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: star * 0.08,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                <Star
                  size={18}
                  aria-hidden="true"
                  className={
                    star <= item.rating
                      ? "fill-[#D9A44C] text-[#D9A44C]"
                      : "text-[#54483C]"
                  }
                />
              </motion.div>
            ))}

            <span className="ml-2 text-sm font-bold text-[#FFF0C2]">
              {item.rating}.0
            </span>
          </div>

          <span className="rounded-full border border-[#D9A44C]/20 bg-[#D9A44C]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#D9A44C]">
            Google
          </span>
        </div>

        {/* Summaries link to the original reviews below. */}
        <p className="relative z-10 mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[#D9A44C]">
          Review summary
        </p>
        <p className="relative z-10 min-h-[112px] text-[15px] leading-7 text-gray-300">
          {item.summary}
        </p>

        {/* Original review attribution */}
        <div className="relative z-10 mt-7 border-t border-white/[0.06] pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-gray-500">
                Review for
              </p>

              <p className="mt-1.5 text-sm font-bold text-[#FFF0C2]">
                {reviewSource.business}
              </p>
            </div>

            <a
              href={item.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${item.name}'s original reviews on Google`}
              className="ml-3 inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#D9A44C] underline-offset-4 hover:text-[#FFF0C2] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A44C]"
            >
              Original
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-[#0B0806] py-20 md:py-28">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#D9A44C 1px, transparent 1px), linear-gradient(90deg, #D9A44C 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Animated background glows */}
      <div className="testimonial-glow-one absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#D9A44C]/10 blur-[130px]" />

      <div className="testimonial-glow-two absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D9A44C]/10 blur-[140px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9A44C]/25 bg-[#D9A44C]/10 px-5 py-2 backdrop-blur-md"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Star
              size={15}
              className="fill-[#D9A44C] text-[#D9A44C]"
            />
          </motion.div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#D9A44C]">
            Customer Experiences
          </span>
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[52px]"
        >
          Roofing Done Right.
          <br />

          <span className="relative inline-block text-[#D9A44C]">
            Customers Who Agree.

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A44C] to-transparent"
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          viewport={{ once: true }}
          className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-gray-400 md:text-base"
        >
          Google reviews for {reviewSource.business}, featured on{" "}
          <a
            href={reviewSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D9A44C] underline underline-offset-4 hover:text-[#FFF0C2]"
          >
            their website
          </a>
          . Read the summaries below or follow each link to the original review.
        </motion.p>

        {/* Decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <span className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#D9A44C]" />

          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-2.5 w-2.5 bg-[#D9A44C]"
          />

          <span className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#D9A44C]" />
        </motion.div>
      </div>

      {/* Auto Slider */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="testimonial-wrapper relative"
      >
        {/* Left fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-30 w-10 bg-gradient-to-r from-[#0B0806] via-[#0B0806]/90 to-transparent sm:w-24 lg:w-40" />

        {/* Right fade */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-30 w-10 bg-gradient-to-l from-[#0B0806] via-[#0B0806]/90 to-transparent sm:w-24 lg:w-40" />

        <div className="testimonial-track flex w-max">
          {duplicatedTestimonials.map((item, index) => (
            <TestimonialCard
              item={item}
              key={`${item.name}-${index}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom trust badge */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mt-10 flex max-w-7xl justify-center px-4"
      >
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#D9A44C]/20 bg-[#15100B]/80 px-7 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:flex-row">
          <div role="img" aria-label={`${reviewSource.rating} out of 5 stars`} className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <motion.div
                key={star}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.15,
                  repeat: Infinity,
                }}
              >
                <span className="relative block h-[17px] w-[17px]" aria-hidden="true">
                  <Star size={17} className="text-[#54483C]" />
                  <span
                    className="absolute inset-y-0 left-0 overflow-hidden"
                    style={{ width: `${Math.max(0, Math.min(1, reviewSource.rating - index)) * 100}%` }}
                  >
                    <Star size={17} className="fill-[#D9A44C] text-[#D9A44C]" />
                  </span>
                </span>
              </motion.div>
            ))}
          </div>

          <span className="hidden h-6 w-[1px] bg-[#D9A44C]/30 sm:block" />

          <a
            href={reviewSource.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-semibold text-[#FFF0C2] underline-offset-4 hover:underline"
          >
            {reviewSource.business}: {reviewSource.rating}/5 from{" "}
            {reviewSource.reviewCount} Google reviews
          </a>
        </div>
      </motion.div>

      <style>{`
        /* Infinite testimonial movement */
        .testimonial-track {
          animation: testimonialSlide 55s linear infinite;
          will-change: transform;
        }

        .testimonial-wrapper:hover .testimonial-track,
        .testimonial-wrapper:focus-within .testimonial-track {
          animation-play-state: paused;
        }

        @keyframes testimonialSlide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* Gold line animation */
        .testimonial-shine {
          animation: shineMove 3.5s linear infinite;
        }

        @keyframes shineMove {
          0% {
            transform: translateX(-150%);
          }

          100% {
            transform: translateX(350%);
          }
        }

        /* Background floating glow */
        .testimonial-glow-one {
          animation: glowMoveOne 8s ease-in-out infinite;
        }

        @keyframes glowMoveOne {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(80px, 60px);
          }
        }

        .testimonial-glow-two {
          animation: glowMoveTwo 10s ease-in-out infinite;
        }

        @keyframes glowMoveTwo {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-80px, -50px);
          }
        }

        @media (max-width: 768px) {
          .testimonial-track {
            animation-duration: 40s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track,
          .testimonial-shine,
          .testimonial-glow-one,
          .testimonial-glow-two {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
