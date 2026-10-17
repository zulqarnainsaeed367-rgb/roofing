
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // Update your logo path

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Residential", path: "/residential" },
  { name: "Commercial", path: "/commercial" },
  { name: "Capability Statement", path: "/capability-statement" },
  { name: "Free Inspection", path: "/free-inspection" },
  { name: "FAQ", path: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#100E0B] shadow-lg">
      <div className="mx-auto flex h-[84px] w-full max-w-[1500px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8 2xl:px-10">

        {/* LOGO */}
        <Link
          to="/"
          aria-label="RCS Construction Services Home"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="RCS Construction Services"
            className="h-[66px] w-auto max-w-[115px] object-contain md:h-[72px]"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 flex-1 items-center justify-center gap-x-3 xl:gap-x-5 2xl:gap-x-7 lg:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `group relative inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap text-[11px] font-bold transition-colors duration-300 xl:text-[12px] 2xl:text-[14px] ${
                  isActive
                    ? "text-[#D9A441]"
                    : "text-[#F4E9D0] hover:text-[#D9A441]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute bottom-[6px] left-0 h-[2px] bg-[#D9A441] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <Link
          to="/contact-us"
          className="hidden shrink-0 items-center justify-center gap-3 rounded-[5px] bg-[#D9A441] px-5 py-3.5 text-[13px] font-bold text-[#100E0B] transition-all duration-300 hover:bg-[#F2C567] hover:shadow-[0_5px_20px_rgba(217,164,65,0.25)] sm:inline-flex lg:px-6"
        >
          Contact
          <ArrowUpRight size={17} strokeWidth={2} />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#D9A441]/40 text-[#D9A441] transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/10 bg-[#100E0B] transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[650px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 px-5 py-5 sm:px-8"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-md border-l-[3px] px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "border-[#D9A441] bg-white/10 text-[#D9A441]"
                    : "border-transparent text-[#F4E9D0] hover:border-[#D9A441] hover:bg-white/5"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#D9A441] px-5 py-3.5 text-sm font-bold text-[#100E0B]"
          >
            Contact Us
            <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
