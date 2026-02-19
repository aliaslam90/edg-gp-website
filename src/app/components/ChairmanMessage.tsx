import React from "react";
import { motion } from "motion/react";
import imgChairman from "@/assets/chairman.jpg";
import svgPaths from "../../imports/svg-ixy99k2xf7";

export const ChairmanMessage = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-6 sm:px-8 lg:px-[80px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Left: Portrait Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[42%] shrink-0 rounded-[10px] overflow-hidden"
        >
          <div className="relative w-full aspect-[760/892]">
            <img
              src={imgChairman}
              alt="Chairman"
              className="absolute max-w-none object-cover size-full rounded-[10px]"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex-1 flex flex-col gap-[28px]"
        >
          {/* Quote Icon + Label + Heading */}
          <div className="flex flex-col gap-[17px]">
            <div className="h-[36px] lg:h-[48px] w-auto aspect-[97/64] opacity-60">
              <svg className="block h-full w-full" fill="none" viewBox="0 0 97 64">
                <path clipRule="evenodd" d={svgPaths.p34cfc200} fill="#CEAE5A" fillRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-[#ceae5a] text-[14px] lg:text-[18px] font-medium font-['Plus_Jakarta_Sans']">
                Chairman's Message
              </span>
              <h2 className="text-[22px] md:text-[28px] lg:text-[36px] font-bold text-black leading-[1.2] font-['Plus_Jakarta_Sans']">
                Charting Growth.<br />
                Fueling Trust. Forging the Future.
              </h2>
            </div>
          </div>

          {/* Body Text */}
          <div className="text-[#555] text-[14px] lg:text-[15px] leading-[26px] font-normal font-['Plus_Jakarta_Sans'] tracking-[-0.18px] space-y-4">
            <p>
              At EDG Gold & Petroleum, our journey has always been guided by a singular purpose: to create lasting value through responsible global trade. From the heart of the UAE to emerging and established markets across the Middle East and Africa, our company has evolved into a trusted name in energy and precious metals trading.
            </p>
            <p>
              In a world where access to reliable energy and ethically sourced resources defines both economic growth and social stability, our role has never been more critical. We take pride in being at the intersection of opportunity and responsibility—delivering high-quality oil, gas, and gold products to clients who rely on our consistency, transparency, and market insight.
            </p>
            <p>
              What sets us apart is not just our ability to move commodities efficiently across borders—it's our commitment to integrity, innovation, and long-term partnerships. Our customers and partners know that when they work with EDG, they are choosing a team that stands for ethical business practices, operational excellence, and forward-thinking strategies.
            </p>
            <p>
              As we continue to expand our footprint, invest in smarter logistics, and embrace sustainable practices, our mission remains clear: to be a catalyst for progress—not only for our stakeholders but for the communities and industries we serve. I am proud of our achievements, grateful for the trust placed in us, and optimistic about the future we are building—together.
            </p>
          </div>

          {/* Signature */}
          <div className="flex flex-col gap-0.5 text-[#555] font-['Plus_Jakarta_Sans'] leading-[27px] tracking-[-0.18px]">
            <p className="text-[13px] lg:text-[15px] font-normal">Warm regards,</p>
            <p className="text-[15px] lg:text-[18px] font-semibold text-black">Chief Executive Officer</p>
            <p className="text-[13px] lg:text-[15px] font-normal text-[#ceae5a]">EDG Gold &amp; Petroleum</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
