import React from "react";
import { motion } from "motion/react";
import imgHeroHeader from "@/assets/8fefd188229e3a9ca69fac13417d3ec9eba5d830.png";

export const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[750px] overflow-hidden flex items-center">
      {/* Background with Parallax effect simulation */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={imgHeroHeader}
          alt="Dubai Skyline"
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-[#080808]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-[80px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[800px]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#ceae5a]" />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-[#ceae5a] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.5em] block font-['Plus_Jakarta_Sans']"
            >
              Excellence in Global Trade
            </motion.span>
          </div>
          
          <h1 className="text-white text-[44px] md:text-[64px] leading-[1.1] font-light tracking-[-0.03em] mb-8 font-['Plus_Jakarta_Sans']">
            Bridging markets,<br />
            Fueling <span className="text-[#ceae5a] font-normal italic">prosperity</span>
          </h1>
          
          <p className="text-white/70 text-[16px] md:text-[17px] leading-[1.8] font-normal mb-12 max-w-[600px] font-['Plus_Jakarta_Sans'] tracking-wide">
            At EDG Gold & Petroleum, we create lasting value through responsible global trade, building trust across energy and precious metals markets from the UAE to the Middle East and Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#b89b4f" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#ceae5a] text-white px-12 py-4 rounded-sm font-semibold text-[13px] uppercase tracking-[0.2em] font-['Plus_Jakarta_Sans'] transition-all shadow-2xl w-full sm:w-auto"
            >
              Explore Our Resources
            </motion.button>
            
            <motion.button
              whileHover={{ x: 8 }}
              className="text-white/80 hover:text-white text-[14px] font-medium flex items-center gap-3 group tracking-[0.1em] uppercase transition-all"
            >
              Learn More
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - desktop only, left-aligned with content */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-8 md:left-[80px] z-10 hidden lg:flex flex-col items-start gap-4"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] rotate-90 origin-left translate-x-3 mb-12">Scroll</span>
        <div className="w-[1px] h-[80px] bg-gradient-to-b from-[#ceae5a] via-[#ceae5a]/50 to-transparent" />
      </motion.div>
    </section>
  );
};