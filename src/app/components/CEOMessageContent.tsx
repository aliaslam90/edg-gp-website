import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../../imports/svg-hgxcwngpmx";
import imgRightContent from "figma:asset/4738369dabf096199f374956d2410fe7d923ac7c.png";

export const CEOMessageContent = () => {
  return (
    <section className="bg-white py-[120px] px-8 md:px-[45px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[80px] items-start">
        {/* Left Column: CEO Image */}
        <div className="flex-1 w-full lg:sticky lg:top-[120px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[10px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]"
          >
            <ImageWithFallback
              src={imgRightContent}
              alt="Chairman of EDG Gold & Petroleum"
              className="max-w-none w-full h-auto object-cover aspect-[3/4]"
            />
          </motion.div>
        </div>

        {/* Right Column: Message */}
        <div className="flex-[1.3] w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            {/* Quote Icon */}
            <div className="w-[80px] h-[52px]">
              <svg className="w-full h-full" viewBox="0 0 97 64" fill="none">
                <path d={svgPaths.p34cfc200} fill="#CEAE5A" />
              </svg>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[#CEAE5A] font-medium text-[16px] font-['Plus_Jakarta_Sans']">
                Chairman's Message
              </span>
              <h2 className="text-[42px] font-bold text-black font-['Plus_Jakarta_Sans'] leading-[1.2] tracking-tight">
                Charting Growth. <br />
                Fueling Trust. Forging the Future.
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-[#555] text-[15.5px] font-['Plus_Jakarta_Sans'] leading-[1.8] font-light">
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

            <div className="pt-8 border-t border-gray-100 flex flex-col gap-1">
              <span className="text-[#555] text-[15px] font-['Plus_Jakarta_Sans']">Warm regards,</span>
              <span className="text-black font-bold text-[20px] font-['Plus_Jakarta_Sans']">Chief Executive Officer</span>
              <span className="text-[#CEAE5A] font-medium text-[15px] font-['Plus_Jakarta_Sans'] tracking-wide">EDG Gold & Petroleum</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};