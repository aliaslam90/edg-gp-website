import React from "react";
import { motion } from "motion/react";
import imgFrame9 from "@/assets/750d2003ab2fbe82c81bdb4dad6706aa07f3b34b.png";
import imgRectangle1 from "@/assets/b25bf13818fd4a847b2b7fc565076139896fafc8.png";

export const GoldTrading = () => {
  return (
    <section className="relative w-full overflow-hidden h-auto lg:h-[700px] flex items-end py-[80px] lg:py-[83px]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0) 59.459%, rgba(0,0,0,0.8) 114.36%), linear-gradient(270deg, rgba(206,174,90,0.3) 0%, rgba(0,0,0,0) 57.057%), linear-gradient(0deg, rgba(0,0,0,0) 45.746%, rgba(44,37,19,0.8) 95.546%), linear-gradient(180deg, rgba(0,0,0,0) 50.05%, rgba(206,174,90,0.5) 95.045%), linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)"
          }}
        />
      </div>

      {/* Left decorative bar */}
      <div className="absolute left-0 top-0 h-full w-[12px] lg:w-[15px] z-10">
        <img src={imgRectangle1} alt="" className="absolute max-w-none object-cover size-full" />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[64px] max-w-[1261px]"
        >
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[#ceae5a] px-[9px] py-px rounded-[6px] w-fit">
              <span className="font-['Plus_Jakarta_Sans'] font-medium text-[12px] lg:text-[14px] text-white uppercase leading-[24px]">
                Precious Metals Division
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] font-medium text-[30px] md:text-[40px] lg:text-[48px] text-[#ceae5a] leading-[1.2] tracking-[-0.96px]">
              Gold Trading with Integrity
            </h2>

            <div className="flex flex-col gap-6 max-w-[960px]">
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] lg:text-[24px] text-white leading-[1.58] lg:leading-[38px]">
                In parallel with our energy operations, EDG Gold is a trusted player in the global gold and precious metals trade. We provide end-to-end gold trading services—from sourcing and aggregation to final distribution—ensuring full traceability, compliance, and security at every step.
              </p>
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] lg:text-[24px] text-white leading-[1.58] lg:leading-[38px]">
                We support our clients with access to physical gold and custom trading solutions that align with investment, treasury, or commercial goals. Our approach blends traditional values of trust with modern trading platforms and data-driven decision-making.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#b89b4f" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#ceae5a] border border-[#ceae5a] px-[32px] py-[14px] rounded-[8px] font-['Plus_Jakarta_Sans'] font-medium text-[16px] lg:text-[20px] text-white leading-[28px] transition-all w-fit"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
