import {
  ShieldCheck,
  Award,
  HardHat,
  Lightbulb,
  HeartHandshake,
  Handshake,
} from "lucide-react";

const values = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We believe in honesty and transparency, ensuring every roofing and construction project is handled with trust, clear communication, and respect for our clients.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Quality",
    description:
      "Excellence is our priority. We focus on reliable materials, skilled craftsmanship, and attention to detail to deliver durable roofing and construction solutions.",
    icon: Award,
  },
  {
    id: 3,
    title: "Safety",
    description:
      "Protecting our team, clients, and their properties is essential. We prioritize safe working practices throughout every phase of our projects.",
    icon: HardHat,
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "We embrace modern roofing techniques, improved materials, and practical solutions to deliver efficient and dependable results.",
    icon: Lightbulb,
  },
  {
    id: 5,
    title: "Customer Satisfaction",
    description:
      "We listen to our clients, understand their needs, and work hard to meet expectations while building lasting relationships through dependable service.",
    icon: HeartHandshake,
  },
  {
    id: 6,
    title: "Community Commitment",
    description:
      "We value the communities we serve and strive to support local property owners through professional service, reliability, and lasting workmanship.",
    icon: Handshake,
  },
];

const CoreValues = () => {
  return (
    <section
      aria-labelledby="core-values-heading"
      className="w-full bg-rcs-charcoal px-6 py-16 font-sans text-rcs-cream sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-7 bg-rcs-gold/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rcs-gold sm:text-xs">
              OUR CORE VALUES
            </span>
            <span aria-hidden="true" className="h-px w-7 bg-rcs-gold/60" />
          </div>
          <h2
            id="core-values-heading"
            className="mb-5 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-rcs-cream sm:text-4xl lg:text-[44px]"
          >
            Building Beyond <span className="text-rcs-gold">Roofs</span>
          </h2>
          <p className="mx-auto max-w-3xl font-sans text-base leading-[1.8] text-rcs-cream/75 sm:text-[17px]">
            At RCS Construction Services, our core values define
            who we are and how we work. We believe that roofing
            and construction are about more than completing a
            project — they are about earning trust, protecting
            properties, and delivering quality results. From
            integrity and safety to innovation and customer
            satisfaction, our values guide every step of our work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.id}
                className="group min-w-0 rounded-2xl border border-rcs-gold/20 bg-rcs-card p-6 transition-colors duration-300 hover:border-rcs-gold/50 motion-reduce:transition-none sm:p-7"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-rcs-gold/10 text-rcs-gold transition-colors duration-300 group-hover:bg-rcs-gold group-hover:text-rcs-charcoal motion-reduce:transition-none">
                  <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold leading-snug tracking-[-0.02em] text-rcs-cream">
                  {value.title}
                </h3>
                <p className="font-sans text-base leading-[1.8] text-rcs-cream/75">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
