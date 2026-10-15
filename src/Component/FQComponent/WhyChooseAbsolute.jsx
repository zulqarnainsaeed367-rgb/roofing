
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import roofingTeam from "../../assets/roofing-team-hd.png";

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
    <section className="w-full overflow-hidden bg-white py-16 font-sans text-rcs-charcoal md:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:px-16">
        <div className="group relative">
          <div className="relative h-[340px] overflow-hidden rounded-xl sm:h-[440px] lg:h-[500px]">
            <img
              src={roofingTeam}
              alt="RCS Construction Services roofing team"
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div aria-hidden="true" className="absolute -bottom-3 -right-3 -z-10 h-28 w-28 rounded-br-xl border-b-4 border-r-4 border-rcs-gold" />
        </div>

        <div className="lg:pl-1">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold-ink sm:text-xs">
            WHY CHOOSE RCS
          </p>
          <h2 className="max-w-xl font-heading text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[38px]">
            Why Choose RCS Construction Services for Your Roofing Needs?
          </h2>

          <h3 className="mt-5 font-heading text-lg font-semibold text-rcs-gold-ink sm:text-xl">
            Roofing expertise built on quality and trust
          </h3>

          <div className="mt-5 space-y-3">
            {benefits.map((benefit) => (
              <p
                key={benefit.title}
                className="text-[15px] leading-relaxed text-rcs-muted"
              >
                <span className="font-bold text-rcs-charcoal">
                  {benefit.title}{" "}
                </span>
                {benefit.description}
              </p>
            ))}
          </div>

          <Link
            to="/contact-us"
            className="group/btn mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-rcs-gold px-7 py-3.5 text-sm font-bold text-rcs-charcoal transition-all duration-300 hover:-translate-y-1 hover:bg-rcs-gold-hover hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rcs-gold-ink motion-reduce:transition-none"
          >
            Contact our team
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAbsolute;
