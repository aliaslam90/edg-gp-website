import React from "react";
import { motion } from "motion/react";
import imgFrame9 from "@/assets/750d2003ab2fbe82c81bdb4dad6706aa07f3b34b.png";
import imgRectangle1 from "@/assets/b25bf13818fd4a847b2b7fc565076139896fafc8.png";

export const GoldTrading = () => {
  return (
    <section className="relative w-full overflow-hidden py-[160px] min-h-[850px] flex items-center">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={imgFrame9}
            alt="Gold Background"
            className="absolute max-w-none object-cover size-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#080808]/40" />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "linear-gradient(to bottom, #080808 0%, transparent 40%, transparent 60%, #080808 100%), linear-gradient(to right, #080808 20%, transparent 100%)" 
          }} 
        />
      </div>

      {/* Decorative Left Bar */}
      <div className="absolute left-0 top-0 h-full w-[8px] z-10 opacity-60">
        <img 
          src={imgRectangle1} 
          alt="" 
          className="absolute max-w-none object-cover size-full"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-8 md:px-[80px] w-full">
        <div className="max-w-[1000px] flex flex-col gap-16">
          
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className="px-5 py-2 border border-[#ceae5a]/40 rounded-full">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] text-[#ceae5a] uppercase tracking-[0.4em]">
                  Precious Metals Division
                </span>
              </div>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] font-light text-[40px] md:text-[56px] leading-[1.1] text-white tracking-[-0.03em]">
              Gold Trading with <span className="text-[#ceae5a] font-normal italic">Integrity</span>
            </h2>

            <div className="flex flex-col gap-8 max-w-[750px]">
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] md:text-[18px] leading-[1.8] text-white/80 tracking-wide">
                In parallel with our energy operations, EDG Gold is a trusted player in the global gold and precious metals trade. We provide end-to-end gold trading services—from sourcing and aggregation to final distribution—ensuring full traceability, compliance, and security at every step.
              </p>
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] md:text-[18px] leading-[1.8] text-white/60 tracking-wide">
                We support our clients with access to physical gold and custom trading solutions that align with investment, treasury, or commercial goals. Our approach blends traditional values of trust with modern trading platforms and data-driven decision-making.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#ceae5a] px-12 py-4 rounded-sm font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-white uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl"
            >
              Learn More
            </motion.button>
            <div className="h-px w-32 bg-[#ceae5a]/30 hidden md:block" />
          </div>

        </div>
      </div>
    </section>
  );
};