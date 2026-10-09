import { ArrowRight } from "lucide-react";
import roofingVideo from "../../assets/video1.mp4";

const WhatWeDo = () => {
  return (
    <section className="w-full bg-[#0B0A08] py-14 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="w-8 sm:w-10 h-[2px] bg-[#E6AD3A]"></div>

              <p className="text-[#E6AD3A] text-sm font-semibold tracking-wide">
                What We Do
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="text-white font-bold text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-[1.12] mb-5">
              Turning Roofing Needs into{" "}
              <span className="text-[#E6AD3A]">
                Tailored Solutions
              </span>
            </h2>

            {/* First Paragraph */}
            <p className="text-[#D5C9B1] text-[15px] sm:text-base leading-7 mb-4">
              Your roof is an integral part of your home. In addition to
              enhancing your home's aesthetic appeal and increasing its value,
              your roof helps maintain a comfortable temperature. By using the{" "}
              <span className="text-[#E6AD3A]">
                right material for the roof
              </span>
              , you can make your home more comfortable and energy efficient.
            </p>

            {/* Second Paragraph */}
            <p className="text-[#D5C9B1] text-[15px] sm:text-base leading-7 mb-7">
              RCS Construction Services is your trusted roofing contractor,
              providing professional roof installation, restoration,{" "}
              <span className="text-[#E6AD3A]">
                repair and roofing maintenance services
              </span>
              . Our experienced roofing team focuses on quality workmanship,
              reliable service, and long-lasting roofing solutions for every
              project.
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Quote Button */}
              <button
                type="button"
                className="group bg-[#E6AD3A] text-[#0B0A08]
                px-6 py-3.5
                rounded-md
                text-sm font-bold
                flex items-center justify-center gap-2
                hover:bg-[#F0BC52]
                transition-all duration-300"
              >
                Get a Free Quote Today

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

              {/* Services Button */}
              <button
                type="button"
                className="group bg-transparent
                border border-[#E6AD3A]
                text-white
                px-6 py-3.5
                rounded-md
                text-sm font-bold
                flex items-center justify-center gap-2
                hover:bg-[#E6AD3A]
                hover:text-[#0B0A08]
                transition-all duration-300"
              >
                Discover Our Services

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
