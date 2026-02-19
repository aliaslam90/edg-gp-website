import React from "react";
import { motion } from "motion/react";
import imgHeroHeader from "@/assets/8fefd188229e3a9ca69fac13417d3ec9eba5d830.png";

export const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[680px] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={imgHeroHeader}
            alt="Dubai Skyline"
            className="absolute max-w-none object-cover size-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-[24px] md:gap-[32px] max-w-[800px]"
        >
          <h1 className="text-white text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-[-1.5px] font-['Plus_Jakarta_Sans']">
            Bridging markets,<br />
            Fueling prosperity
          </h1>

          <p className="text-white/80 text-[14px] md:text-[16px] lg:text-[18px] leading-[1.7] font-normal font-['Plus_Jakarta_Sans'] max-w-[700px]">
            At EDG Gold & Petroleum, we create lasting value through responsible global trade, building trust across energy and precious metals markets from the UAE to the Middle East and Africa.
          </p>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#b89b4f" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#ceae5a] border border-[#ceae5a] text-black px-[28px] py-[12px] rounded-[8px] font-medium text-[14px] md:text-[16px] leading-[24px] font-['Plus_Jakarta_Sans'] transition-all w-fit"
          >
            Explore Our Resources
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
