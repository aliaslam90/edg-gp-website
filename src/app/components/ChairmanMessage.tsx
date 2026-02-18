import React from "react";
import { motion } from "motion/react";
import imgRightContent from "@/assets/4738369dabf096199f374956d2410fe7d923ac7c.png";
import svgPaths from "../../imports/svg-ixy99k2xf7";

export const ChairmanMessage = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Image - Refined Scale */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative w-full aspect-[4/5] rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]"
        >
          <img
            src={imgRightContent}
            alt="Chairman"
            className="absolute max-w-none object-cover size-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-[#ceae5a]/5 mix-blend-multiply" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-12"
        >
          {/* Label + Heading */}
          <div className="flex flex-col gap-8">
             <div className="h-[32px] w-auto aspect-square opacity-60">
                <svg className="block h-full w-full" fill="none" viewBox="0 0 97 64">
                   <path clipRule="evenodd" d={svgPaths.p34cfc200} fill="#CEAE5A" fillRule="evenodd" />
                </svg>
             </div>
             <div>
                <span className="text-[#ceae5a] text-[12px] font-bold uppercase tracking-[0.5em] mb-6 block font-['Plus_Jakarta_Sans']">
                    Chairman’s Message
                </span>
                <h2 className="text-[22px] md:text-[28px] font-light text-black leading-[1.2] font-['Plus_Jakarta_Sans'] tracking-[-0.03em]">
                    Charting Growth.<br />
                    Fueling Trust. <span className="text-[#ceae5a] font-normal italic">Forging the Future.</span>
                </h2>
             </div>
          </div>

          {/* Body Text - Refined Spacing */}
          <div className="text-black/60 text-[14px] md:text-[15px] leading-[1.8] font-normal font-['Plus_Jakarta_Sans'] space-y-8 max-w-[650px]">
            <p className="tracking-wide">
                At EDG Gold & Petroleum, our journey has always been guided by a singular purpose: to create lasting value through responsible global trade. From the heart of the UAE to emerging and established markets, our company has evolved into a trusted name in energy and precious metals trading. 
            </p>
            <p className="tracking-wide">
                In a world where access to reliable energy and ethically sourced resources defines both economic growth and social stability, our role has never been more critical. We take pride in being at the intersection of opportunity and responsibility.
            </p>
          </div>

          {/* Signature Info */}
          <div className="pt-10 border-t border-black/5 flex flex-col gap-2">
            <p className="text-[10px] uppercase tracking-[0.5em] text-black/30">Chief Executive Officer</p>
            <p className="font-semibold text-[18px] text-black tracking-tight font-['Plus_Jakarta_Sans']">EDG Gold & Petroleum Group</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};