import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import svgPaths from "../../imports/svg-cxr7evlui7";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { 
      name: "About Us", 
      path: "/about/who-we-are",
      dropdown: [
        { name: "Who We Are", path: "/about/who-we-are" },
        { name: "CEO Message", path: "/about/ceo-message" },
        { name: "Our Business Approach", path: "/about/business-approach" },
      ]
    },
    { 
      name: "Business Sectors", 
      path: "/services/petroleum-products",
      dropdown: [
        { name: "Petroleum Products", path: "/services/petroleum-products" },
        { name: "Precious Metals", path: "/services/gold-trading" },
      ]
    },
    { name: "Operations", path: "/operations" },
  ];

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-[#080808] ${
        isScrolled ? "py-2.5 shadow-xl shadow-black/50" : "py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[45px] flex items-center justify-between gap-4">
        
        {/* LEFT: Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <div className="h-[55px] lg:h-[60px] w-auto aspect-[101/110] transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <svg className="block h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 101 110">
              <g id="LogoMain">
                <path d={svgPaths.p3e70b880} fill="#CEAE5A" />
                <path d={svgPaths.p1d5b6a00} fill="white" />
                <path d={svgPaths.p3020dd80} fill="white" />
                <path d={svgPaths.p25e918c0} fill="white" />
                <path d={svgPaths.p6f02500} fill="white" />
                <path d={svgPaths.p21670600} fill="white" />
                <path d={svgPaths.p56fb180} fill="white" />
                <path d={svgPaths.pf418900} fill="white" />
                <path d={svgPaths.p3f451b00} fill="white" />
                <path d={svgPaths.p2c72e700} fill="#CEAE5A" />
                <path d={svgPaths.p333ef800} fill="#CEAE5A" />
                <path d={svgPaths.p2b9f1600} fill="#CEAE5A" />
                <path d={svgPaths.p37784d00} fill="#CEAE5A" />
                <path d={svgPaths.p37e70f00} fill="#CEAE5A" />
                <path d={svgPaths.p1fa41200} fill="#CEAE5A" />
                <path d={svgPaths.p2cecb100} fill="#CEAE5A" />
                <path d={svgPaths.p16b42a80} fill="#CEAE5A" />
                <path d={svgPaths.p2ee024f2} fill="#CEAE5A" />
                <path d={svgPaths.pfd2b680} fill="#CEAE5A" />
                <path d={svgPaths.p2340f060} fill="#CEAE5A" />
                <path d={svgPaths.p1d06d880} fill="#CEAE5A" />
                <path d={svgPaths.p24df4c00} fill="#CEAE5A" />
                <path d={svgPaths.pd6da200} fill="#CEAE5A" />
              </g>
            </svg>
          </div>
        </Link>

        {/* CENTER: Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-[28px] xl:gap-[40px] relative h-full">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="flex flex-col items-center justify-center relative group pt-0.5 h-full py-4"
              onMouseEnter={() => {
                if (item.name === "About Us") setIsAboutOpen(true);
                if (item.name === "Business Sectors") setIsSectorsOpen(true);
              }}
              onMouseLeave={() => {
                if (item.name === "About Us") setIsAboutOpen(false);
                if (item.name === "Business Sectors") setIsSectorsOpen(false);
              }}
            >
              {item.dropdown ? (
                <div className="flex items-center gap-1 cursor-pointer">
                  <div className="relative inline-block">
                    <span className={`font-['Plus_Jakarta_Sans'] font-medium text-[14px] xl:text-[15px] whitespace-nowrap transition-colors ${
                      (item.name === "About Us" && location.pathname.startsWith('/about')) || 
                      (item.name === "Business Sectors" && location.pathname.startsWith('/services')) 
                      ? "text-white" : "text-white/80 hover:text-[#ceae5a]"
                    }`}>
                      {item.name}
                    </span>
                    {/* Underline under text only (centered), for dropdown items */}
                    <div 
                      className={`absolute left-0 right-0 bottom-0 h-[2px] bg-[#ceae5a] transition-all duration-300 ${
                        (item.name === "About Us" && location.pathname.startsWith('/about')) || 
                        (item.name === "Business Sectors" && location.pathname.startsWith('/services')) 
                        ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`} 
                    />
                  </div>
                  <svg className={`size-3 transition-transform duration-300 ${
                    (item.name === "About Us" && isAboutOpen) || (item.name === "Business Sectors" && isSectorsOpen) ? "rotate-180" : ""
                  }`} fill="none" viewBox="0 0 10 6">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`relative inline-block font-['Plus_Jakarta_Sans'] font-medium text-[14px] xl:text-[15px] leading-tight whitespace-nowrap transition-colors ${
                    location.pathname === item.path ? "text-white" : "text-white/80 hover:text-[#ceae5a]"
                  }`}
                >
                  {item.name}
                  {/* Underline under text (centered), for direct links */}
                  <span 
                    className={`absolute left-0 right-0 bottom-0 h-[2px] bg-[#ceae5a] transition-all duration-300 ${
                      location.pathname === item.path ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`} 
                  />
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <AnimatePresence>
                  {((item.name === "About Us" && isAboutOpen) || (item.name === "Business Sectors" && isSectorsOpen)) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-[240px] bg-white rounded-[10px] shadow-2xl py-2 overflow-hidden z-50 border border-gray-100"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            console.log("Navigating to:", subItem.path);
                            setIsAboutOpen(false);
                            setIsSectorsOpen(false);
                          }}
                          className={`block px-5 py-3 text-[14px] font-medium font-['Plus_Jakarta_Sans'] transition-colors ${
                            location.pathname === subItem.path 
                              ? "text-[#CEAE5A] bg-gray-50" 
                              : "text-[#151515] hover:text-[#CEAE5A] hover:bg-gray-50"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3 sm:gap-[20px] lg:gap-[30px] xl:gap-[50px]">
          {/* Contact details - hide on small screens */}
          <div className="hidden xl:flex items-center gap-[25px]">
            {/* Call Us */}
            <div className="flex items-center gap-[8px]">
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[#8a8a8a] text-[13px] leading-none">
                Call us:
              </span>
              <div className="flex flex-col items-center group cursor-pointer relative">
                <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-white leading-tight group-hover:text-[#ceae5a] transition-colors whitespace-nowrap pb-[1px]">
                  (+971) 45548286
                </span>
                <div className="bg-[#ceae5a] h-px w-full absolute bottom-0" />
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-center gap-[8px]">
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[#8a8a8a] text-[13px] leading-none">
                Email us:
              </span>
              <div className="flex flex-col items-center group cursor-pointer relative">
                <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-white leading-tight group-hover:text-[#ceae5a] transition-colors whitespace-nowrap pb-[1px]">
                  info@edg-gp.com
                </span>
                <div className="bg-[#ceae5a] h-px w-full absolute bottom-0" />
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-[18px] sm:gap-[24px]">
            <Link to="/contact">
              <button className="bg-[#ceae5a] h-[44px] w-[130px] rounded-[6px] font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-center text-white capitalize flex items-center justify-center hover:bg-[#b89b4f] transition-all hover:shadow-lg active:scale-95">
                Contact us
              </button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
            onClick={() => setIsMobileOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[2px] w-5 bg-current transition-transform ${
                  isMobileOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-current transition-opacity ${
                  isMobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-current transition-transform ${
                  isMobileOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/10 bg-[#080808]/98 backdrop-blur-sm"
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <Link
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`font-['Plus_Jakarta_Sans'] font-medium text-[14px] tracking-wide ${
                      location.pathname === item.path ||
                      (item.name === "About Us" && location.pathname.startsWith("/about")) ||
                      (item.name === "Business Sectors" && location.pathname.startsWith("/services"))
                        ? "text-white"
                        : "text-white/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-3 flex flex-col gap-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={closeMobileMenu}
                          className={`font-['Plus_Jakarta_Sans'] text-[13px] ${
                            location.pathname === subItem.path
                              ? "text-[#CEAE5A]"
                              : "text-white/60"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile contact button */}
              <Link to="/contact" onClick={closeMobileMenu} className="mt-2">
                <button className="w-full bg-[#ceae5a] h-[44px] rounded-[6px] font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-center text-white capitalize flex items-center justify-center hover:bg-[#b89b4f] transition-all hover:shadow-lg active:scale-95">
                  Contact us
                </button>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
