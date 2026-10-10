import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesIntro() {
  return (
    <section id="home-services" className="scroll-mt-28 bg-rcs-surface pt-16 md:pt-[88px]">
      <div className="site-container flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Our services</p>
          <h2 className="section-title text-rcs-charcoal">
            Roofing support, from inspection to replacement.
          </h2>
          <p className="section-copy mt-5">
            A small repair or a new roof. Explore how we help Texas homeowners
            look after their property.
          </p>
        </div>
        <Link
          to="/free-inspection"
          className="inline-flex min-h-12 shrink-0 items-center gap-2 self-start text-sm font-semibold text-rcs-gold-ink underline underline-offset-8 lg:self-end"
        >
          Request an inspection <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
