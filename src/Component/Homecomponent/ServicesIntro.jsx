import { ArrowRight } from "lucide-react";

const ServicesIntro = () => {
  return (
    <section className="w-full bg-[#F8F6F1] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Small Heading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 sm:w-10 h-[2px] bg-[#E6AD3A]"></span>

          <p className="text-[#C88B24] text-sm font-bold uppercase tracking-wide">
            Services We Provide
          </p>

          <span className="w-8 sm:w-10 h-[2px] bg-[#E6AD3A]"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[#0B0A08] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-bold leading-tight mb-5">
          Protecting Your Home with{" "}
          <span className="text-[#C88B24]">Expert Craftsmanship</span>
        </h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-[#5E5548] text-[15px] sm:text-base leading-7 mb-8">
          At{" "}
          <span className="font-semibold text-[#0B0A08]">
            RCS Construction Services
          </span>
          , we specialize in providing reliable and high-quality roofing
          solutions designed to protect your home with durability, strength,
          and long-lasting performance. Our experienced team handles everything
          from{" "}
          <span className="text-[#C88B24] font-medium">
            roof installation and repairs
          </span>{" "}
          to restoration and maintenance, always focusing on quality
          workmanship and customer satisfaction.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="
              group
              bg-[#E6AD3A]
              text-[#0B0A08]
              px-7 py-3.5
              rounded-md
              font-bold
              text-sm
              flex items-center gap-2
              hover:bg-[#F0BC52]
              transition-all duration-300
              shadow-sm
            "
          >
            Explore Our Services Today

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesIntro;
