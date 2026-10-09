import { useRef, useState } from "react";
import { ArrowRight, ChevronRight, Gem, House, Layers3, Waves, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./ResidentialTypes.css";

import asphaltImage from "../../assets/roofing-types/asphalt.jpg";
import metalImage from "../../assets/roofing-types/metal.jpg";
import tileImage from "../../assets/roofing-types/tile.jpg";
import slateImage from "../../assets/roofing-types/slate.jpg";
import woodShakeImage from "../../assets/roofing-types/wood-shake.jpg";
import syntheticImage from "../../assets/roofing-types/synthetic.jpg";
import rubberImage from "../../assets/roofing-types/rubber.jpg";

function RoofPanelsIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M8 3h22l-6 26H2L8 3Z" fill="currentColor" />
      <path d="m15 3-6 26M23 3l-6 26" stroke="white" strokeWidth="1.5" />
      <path d="m10 8-1 5m-1 4-1 5m17-14-1 5m-1 4-1 5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function RubberRoofIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 23H8a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v7" />
      <ellipse cx="8" cy="11" rx="3" ry="5" />
      <path d="M8 16v7m10-7h6a6 6 0 0 1 0 12H14a4 4 0 0 1-4-4c0-4 3-8 8-8Z" />
      <path d="M14 28c-2-3 0-7 4-7h6" />
    </svg>
  );
}

const roofingTypes = [
  {
    title: "Asphalt Shingle Roofing",
    image: asphaltImage,
    imageAlt: "Gray asphalt shingle roof on a light-colored home with a dormer",
    icon: House,
    description:
      "A popular and versatile option offering reliable performance, curb appeal, and value for residential homes.",
    details:
      "Asphalt shingles are a versatile choice for homeowners looking for dependable protection and a wide range of styles. Our team can help you choose an option suited to your home's design and roofing needs.",
  },
  {
    title: "Metal Roofing",
    image: metalImage,
    imageAlt: "Dark standing-seam metal roof on a home with warmly lit windows",
    icon: RoofPanelsIcon,
    description:
      "Durable, energy-efficient, and long-lasting roofing solution with a modern and sleek appearance.",
    details:
      "Metal roofing offers a distinctive modern look and durable protection. We can discuss available styles and help determine whether metal roofing is right for your home.",
  },
  {
    title: "Tile Roofing",
    image: tileImage,
    imageAlt: "Terracotta tile roof on a cream Mediterranean-style home",
    icon: Waves,
    description:
      "A stylish and durable option known for its classic look, long lifespan, and excellent weather resistance.",
    details:
      "Tile roofing is known for its classic appearance and lasting performance. Our team can review your home's requirements and help you explore tile roofing options.",
  },
  {
    title: "Slate Roofing",
    image: slateImage,
    imageAlt: "Blue-gray slate roof with dormer windows on a stone house",
    icon: Gem,
    description:
      "A premium and natural roofing material that offers exceptional durability and a timeless appearance.",
    details:
      "Slate provides a distinctive natural appearance and premium finish. Contact us to discuss your project and find out whether slate is a suitable option for your home.",
  },
  {
    title: "Wood Shake Roofing",
    image: woodShakeImage,
    imageAlt: "Warm cedar wood shake roof on a rustic timber home",
    icon: RoofPanelsIcon,
    description:
      "A natural and attractive option that offers rustic charm and blends beautifully with many home styles.",
    details:
      "Wood shake roofing brings a warm, natural character to a home. We can help you consider its appearance, maintenance needs, and suitability for your project.",
  },
  {
    title: "Synthetic Roofing",
    image: syntheticImage,
    imageAlt: "Gray composite roofing on a suburban home with white-trimmed dormers",
    icon: Layers3,
    description:
      "A modern alternative that offers the look of natural materials with enhanced durability and lower maintenance.",
    details:
      "Synthetic roofing offers a range of styles inspired by natural materials. Talk with our team about the options that may best fit your home and preferences.",
  },
  {
    title: "Rubber Roofing",
    image: rubberImage,
    imageAlt: "Dark rubber membrane on a flat residential roof surrounded by trees",
    icon: RubberRoofIcon,
    description:
      "A reliable solution for certain low-slope residential applications, known for its weather resistance and durability.",
    details:
      "Rubber roofing can be a practical option for certain low-slope areas. Our team can assess your roof and discuss the right approach for your home's needs.",
  },
];

const ResidentialTypes = () => {
  const [selectedType, setSelectedType] = useState(null);
  const dialogRef = useRef(null);

  const openDetails = (type) => {
    setSelectedType(type);
    dialogRef.current?.showModal();
  };

  return (
    <section className="roofing-types" aria-labelledby="residential-types-heading">
      <div className="roofing-types__container">
        <header className="roofing-types__header">
          <p className="roofing-types__eyebrow">
            <span aria-hidden="true" />
            Explore Our Residential
            <span aria-hidden="true" />
          </p>
          <h2 id="residential-types-heading" className="roofing-types__heading">
            Roofing <span>Types</span>
          </h2>
          <p className="roofing-types__intro">
            Choose from a variety of residential roofing materials to match your
            home&apos;s style, performance needs, and budget.
            <br className="roofing-types__line-break" /> Each option offers unique
            benefits and lasting protection.
          </p>
        </header>

        <div className="roofing-types__grid">
          {roofingTypes.map((type) => {
            const Icon = type.icon;

            return (
              <article key={type.title} className="roofing-type-card">
                <div className="roofing-type-card__image-wrap">
                  <img
                    src={type.image}
                    alt={type.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="roofing-type-card__image"
                  />
                </div>
                <div className="roofing-type-card__body">
                  <h3 className="roofing-type-card__title">
                    <Icon className="roofing-type-card__icon" aria-hidden="true" />
                    {type.title}
                  </h3>
                  <p className="roofing-type-card__description">{type.description}</p>
                  <button
                    type="button"
                    onClick={() => openDetails(type)}
                    aria-label={`View details about ${type.title}`}
                    className="roofing-type-card__details"
                  >
                    <span className="roofing-type-card__details-label">
                      View Details <ArrowRight size={17} aria-hidden="true" />
                    </span>
                    <span className="roofing-type-card__arrow" aria-hidden="true">
                      <ChevronRight size={24} />
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="roofing-type-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="roofing-type-dialog"
      >
        {selectedType && (
          <>
            <div className="roofing-type-dialog__image-wrap">
              <img src={selectedType.image} alt={selectedType.imageAlt} />
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close details"
                className="roofing-type-dialog__close"
              >
                <X size={21} aria-hidden="true" />
              </button>
            </div>
            <div className="roofing-type-dialog__body">
              <p className="roofing-type-dialog__eyebrow">Residential Roofing</p>
              <h3 id="roofing-type-dialog-title">{selectedType.title}</h3>
              <p className="roofing-type-dialog__description">{selectedType.details}</p>
              <Link
                to="/contact-us"
                onClick={() => dialogRef.current?.close()}
                className="roofing-type-dialog__contact"
              >
                Ask About This Roof <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
};

export default ResidentialTypes;
