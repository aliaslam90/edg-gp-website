import React from "react";
import { motion } from "motion/react";
import imgHandshake from "@/assets/ee0b7b6c9f51d92a04742e10a9d36bf9e33d15ea.png";
import { ArrowRight } from "lucide-react";

export const PartnerTrust = () => {
  return (
    <section className="bg-[#fefefe] py-[80px] lg:py-[140px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-gray-200 pb-6 mb-12">
          <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            OUR SERVICES & CAPABILITIES
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#8c8c8c] tracking-[0.28px] uppercase">
            [CAPABILITIES]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[188px] items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[10px] overflow-hidden shadow-2xl h-[500px] lg:h-[637px]"
          >
            <img src={imgHandshake} alt="Partner Handshake" className="max-w-none w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[40px] lg:text-[50.4px] text-black leading-tight uppercase">
              A Partner <br /> You Can Trust
            </h2>
            
            <div className="flex flex-col gap-8">
              <p className="font-['Plus_Jakarta_Sans'] text-[16px] lg:text-[18px] text-[#555] leading-relaxed">
                At EDG Gold & Petroleum, our services are designed to meet the dynamic needs of today’s global markets. With a strong foundation in commodity trading and an unwavering commitment to excellence, we offer a broad suite of solutions that span both the energy and precious metals sectors. Whether serving national governments, large enterprises, or strategic partners, we deliver performance with purpose and precision.
              </p>
              
              <p className="font-['Plus_Jakarta_Sans'] font-medium text-[22px] lg:text-[25.9px] text-[#151515] leading-[1.4] tracking-tight">
                From fueling economies to securing wealth, we are committed to being your strategic trade partner of choice.
              </p>
            </div>
            
            <button className="flex items-center gap-[18px] bg-[#ceae5a] hover:bg-[#b89b4f] text-white px-[26px] py-[14px] rounded-[8px] font-bold text-[14.6px] transition-all group w-fit">
              Get a Quote
              <div className="w-[30px] h-[30px] rounded-full bg-[#0b2b3f] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="size-3.5 text-white" strokeWidth={3} />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};