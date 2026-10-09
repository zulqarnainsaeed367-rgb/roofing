
import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import communityImage from "../../assets/roof1.png";

const CommunityGiving = () => {
  return (
    <section className="w-full overflow-hidden bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* TOP CONTENT */}
        <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">

          {/* LEFT HEADING */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#D4AF37]" />

              <span className="text-sm font-bold uppercase tracking-wider text-[#B89229]">
                Community Giving
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#071C26] sm:text-4xl lg:text-[42px]">
              Making a Difference,
              <span className="block">
                One Roof at a Time
              </span>
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base leading-8 text-[#364554] md:text-[17px]">
              At RCS Construction Services, we believe our
              responsibility goes beyond providing dependable
              roofing and construction solutions. We value the
              communities we serve and understand the
              importance of building strong, lasting
              relationships. Our approach is rooted in trust,
              respect, and a commitment to making a positive
              difference through quality service and
              meaningful connections.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[390px] overflow-hidden rounded-xl bg-[#071C26] shadow-lg md:min-h-[500px]"
          >
            <img
              src={communityImage}
              alt="Roofing professionals working on a residential roof"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* DARK GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071C26]/95 via-[#071C26]/20 to-transparent" />

            {/* IMAGE CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-[#071C26] shadow-lg">
                <HeartHandshake
                  size={28}
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                Stronger Communities,
                <br />
                Stronger Connections
              </h3>

              <div className="mt-5 h-1 w-20 rounded-full bg-[#D4AF37]" />
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#FFF7F2] p-6 shadow-sm sm:p-8 lg:p-9"
          >
            {/* Decorative Corner */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D4AF37]/10" />

            <div className="relative z-10">

              {/* ICON */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#B89229]">
                <Handshake
                  size={32}
                  strokeWidth={1.6}
                />
              </div>

              {/* HEADING */}
              <h3 className="mb-5 text-2xl font-extrabold leading-tight text-[#071C26] md:text-[30px]">
                Our Commitment to Community
              </h3>

              {/* DESCRIPTION */}
              <p className="mb-6 text-[15px] leading-8 text-[#364554] md:text-base">
                At RCS Construction Services, our commitment
                extends beyond the roofs we build and repair.
                We strive to make a positive impact by treating
                every customer with care, respecting the
                properties we work on, and supporting stronger
                relationships within our communities.
              </p>

              {/* BUILDING TRUST */}
              <div className="mb-5 border-l-[3px] border-[#D4AF37] pl-4">
                <p className="text-[15px] leading-8 text-[#364554]">
                  <span className="font-bold text-[#071C26]">
                    Building Trust:{" "}
                  </span>
                  We believe meaningful relationships begin
                  with honest communication, reliable service,
                  and a genuine commitment to doing the job
                  right.
                </p>
              </div>

              {/* SERVING WITH PURPOSE */}
              <div className="mb-7 border-l-[3px] border-[#D4AF37] pl-4">
                <p className="text-[15px] leading-8 text-[#364554]">
                  <span className="font-bold text-[#071C26]">
                    Serving with Purpose:{" "}
                  </span>
                  Whether working on a residential roof or a
                  commercial construction project, we aim to
                  provide solutions that help protect and
                  improve the places where people live and work.
                </p>
              </div>

              {/* BOTTOM HIGHLIGHT BOX */}
              <div className="mb-7 flex items-start gap-4 rounded-lg border-l-4 border-[#D4AF37] bg-white p-5 shadow-sm">
                <HeartHandshake
                  size={29}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-[#B89229]"
                />

                <div>
                  <h4 className="mb-2 text-lg font-bold text-[#071C26]">
                    More Than Just Roofing
                  </h4>

                  <p className="text-sm leading-7 text-[#364554]">
                    We are dedicated to quality craftsmanship,
                    dependable service, and relationships
                    that last beyond every completed project.
                  </p>
                </div>
              </div>

              {/* CONTACT LINK */}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 border-b-2 border-[#D4AF37] pb-1 font-bold text-[#071C26] transition-colors duration-300 hover:text-[#B89229]"
              >
                Connect With Our Team

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGiving;
