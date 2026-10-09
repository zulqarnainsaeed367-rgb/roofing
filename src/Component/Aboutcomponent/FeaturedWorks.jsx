
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

// Add your roofing project images here
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

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-11 text-center"
        >
          {/* Subtitle */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#D4AF37]" />

            <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#B89229]">
              Featured Works
            </span>

            <span className="h-[2px] w-8 bg-[#D4AF37]" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold leading-tight text-[#071C26] sm:text-4xl lg:text-[44px]">
            Our Work Speaks{" "}
            <span className="text-[#B89229]">
              for Itself
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#364554] md:text-lg">
            Explore roofing craftsmanship, durable materials,
            and professional solutions that reflect the quality
            and attention to detail valued by RCS Construction
            Services.
          </p>
        </motion.div>

        {/* SLIDER WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={18}
            loop={true}
            speed={850}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
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
                <div className="group relative h-[280px] cursor-pointer overflow-hidden rounded-xl bg-[#071C26] shadow-md sm:h-[310px] lg:h-[340px]">

                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* DARK GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071C26]/95 via-[#071C26]/10 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* GOLD TOP LINE */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />

                  {/* PROJECT DETAILS */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-6 transition-transform duration-500 group-hover:translate-y-0">

                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                      {project.category}
                    </span>

                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {project.title}
                      </h3>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#071C26]">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PREVIOUS BUTTON */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous project"
            className="absolute -left-3 top-[43%] z-20 flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-white text-[#071C26] shadow-lg transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#071C26] sm:-left-5 lg:-left-6"
          >
            <ChevronLeft size={23} />
          </button>

          {/* NEXT BUTTON */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next project"
            className="absolute -right-3 top-[43%] z-20 flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-white text-[#071C26] shadow-lg transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#071C26] sm:-right-5 lg:-right-6"
          >
            <ChevronRight size={23} />
          </button>
        </motion.div>

        {/* BOTTOM DECORATIVE LINE */}
        <div className="mx-auto mt-8 h-[3px] w-20 rounded-full bg-[#D4AF37]" />
      </div>
    </section>
  );
};

export default FeaturedWorks;
