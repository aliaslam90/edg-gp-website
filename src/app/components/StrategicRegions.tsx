import React from "react";
import { motion } from "motion/react";
import imgValuesMetron2 from "figma:asset/c09daf8815cbf8141d45e5907ad2d5e544327ae8.png";

export const StrategicRegions = () => {
  return (
    <section className="relative min-h-[850px] flex items-center overflow-hidden py-[160px]">
      {/* Background Earth at Night */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={imgValuesMetron2}
          alt="Earth at night"
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-[#080808]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-[80px] w-full flex flex-col lg:grid lg:grid-cols-12 gap-20 items-center">
        
        {/* Left Side: Regions List */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-10">
            {[
              { id: "01", name: "Middle East" },
              { id: "02", name: "Africa" },
              { id: "03", name: "Strategic Corridors" }
            ].map((region) => (
              <div key={region.id} className="flex items-center gap-8 group cursor-pointer">
                <span className="text-[#ceae5a]/40 text-[10px] font-bold tracking-widest group-hover:text-[#ceae5a] transition-colors duration-500">{region.id}</span>
                <div className="w-[40px] h-[1px] bg-[#ceae5a]/20 group-hover:w-[60px] group-hover:bg-[#ceae5a] transition-all duration-500" />
                <span className="text-white/60 group-hover:text-white text-[16px] md:text-[18px] font-medium tracking-[0.3em] uppercase font-['Plus_Jakarta_Sans'] transition-all duration-500">
                  {region.name}
                </span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-12 bg-transparent border border-[#ceae5a]/30 hover:border-[#ceae5a] text-[#ceae5a] px-12 py-4 rounded-sm font-bold text-[11px] uppercase tracking-[0.4em] font-['Plus_Jakarta_Sans'] transition-all duration-500 w-fit"
          >
            Market Presence
          </motion.button>
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start lg:items-end text-left lg:text-right"
        >
          <span className="text-[#ceae5a] text-[12px] font-bold uppercase tracking-[0.5em] mb-10 block font-['Plus_Jakarta_Sans']">
            Strategic Growth
          </span>
          <h2 className="text-white text-[40px] md:text-[56px] font-light leading-[1.1] mb-10 font-['Plus_Jakarta_Sans'] tracking-[-0.03em]">
            Strategic Regions.<br />
            <span className="text-[#ceae5a] italic font-normal">Expansive Opportunities.</span><br />
            Lasting Impact.
          </h2>
          <p className="text-white/50 text-[16px] md:text-[17px] leading-[1.8] font-normal font-['Plus_Jakarta_Sans'] tracking-wide max-w-[600px] lg:ml-auto">
            At EDG Gold & Petroleum, the Middle East and Africa are far more than just locations—they are the beating heart of our business operations and a cornerstone of our long-term growth strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};