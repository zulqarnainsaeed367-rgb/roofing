
import React from "react";
import { ArrowUpRight } from "lucide-react";

const WhyChooseAbsolute = () => {
  const benefits = [
    {
      title: "Comprehensive Services:",
      description:
        "From inspections to installations, we cover all aspects of roofing.",
    },
    {
      title: "Premium Materials:",
      description:
        "Partnering with trusted manufacturers for high-quality, durable products.",
    },
    {
      title: "Customer-Centric Approach:",
      description:
        "Transparent communication and tailored solutions to meet your needs.",
    },
    {
      title: "Local Knowledge:",
      description:
        "Expertise in handling the specific roofing challenges of Texas, Kansas, and Missouri.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
        
        {/* LEFT SIDE - IMAGE */}
        <div className="group relative">
          <div className="relative h-[340px] overflow-hidden rounded-md sm:h-[440px] lg:h-[500px]">
            <img
              src="/images/why-choose-roofing.jpg"
              alt="Beautiful architectural roofing installation by Absolute Construction"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Decorative corner */}
          <div className="absolute -bottom-3 -right-3 -z-10 h-28 w-28 rounded-br-md border-b-4 border-r-4 border-[#F26522]" />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="lg:pl-1">
          <h2 className="max-w-xl text-3xl font-extrabold leading-[1.18] tracking-tight text-[#142033] sm:text-4xl lg:text-[38px]">
            Why Choose Absolute Construction for Your Roofing Needs?
          </h2>

          <h3 className="mt-5 text-lg font-bold text-[#F26522] sm:text-xl">
            Trusted Experts with Decades of Experience
          </h3>

          {/* BENEFITS */}
          <div className="mt-5 space-y-3">
            {benefits.map((benefit, index) => (
              <p
                key={index}
                className="text-[15px] leading-relaxed text-[#526071]"
              >
                <span className="font-bold text-[#142033]">
                  {benefit.title}{" "}
                </span>
                {benefit.description}
              </p>
            ))}
          </div>

          {/* CONTACT BUTTON */}
          <a
            href="/contact"
            className="group/btn mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#F26522] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#142033] hover:shadow-lg"
          >
            Get in touch with us
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAbsolute;
