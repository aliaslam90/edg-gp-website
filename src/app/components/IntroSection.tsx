import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgBackground1 from "@/assets/d6476fda33009cbd54e41a9a5e032505b1113a18.png";
import { MoveRight } from "lucide-react";

export const IntroSection = () => {
  return (
    <section className="bg-white py-[120px] px-8 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[60px] items-start">
        {/* Left Column: Image Card */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[24px]"
          >
            <div className="rounded-[8px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
              <ImageWithFallback
                src={imgBackground1}
                alt="Who We Are Industrial"
                className="max-w-none w-full h-auto object-cover"
              />
            </div>
            <div className="text-[22px] font-normal text-black font-['Plus_Jakarta_Sans'] leading-[1.5] tracking-tight border-l-2 border-[#CEAE5A] pl-6">
              <p>At EDG Gold & Petroleum DMCC, we are more than a commodities trading company—we are a strategic partner in powering global markets and enabling responsible growth.</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Text block */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 pt-4"
          >
            <div className="flex flex-col gap-6 text-[#555] text-[15px] font-['Plus_Jakarta_Sans'] leading-[1.8] tracking-normal">
              <p>
                With a focus on the ethical and efficient trading of petroleum products and precious metals, we operate across key geographies including the Middle East, Africa, and beyond. Our business model spans the full supply chain—from sourcing and transportation to storage and distribution—ensuring product availability, quality, and reliability for both public and private sectors.
              </p>
              <p>
                What sets us apart is our deep market insight, logistical strength, and unwavering commitment to sustainability and integrity. Through our expansive network and sister companies, we provide tailored solutions that address evolving energy needs and market opportunities while contributing positively to the communities we serve.
              </p>
              <p>
                From fuel oil, gasoil, and gasoline to responsibly sourced gold, our diverse portfolio reflects our ability to navigate the complexities of global markets while meeting the evolving needs of both public and private sector clients.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-[14px] bg-[#CEAE5A] text-white px-[24px] py-[14px] rounded-[6px] font-bold text-[13px] uppercase tracking-wider w-fit transition-all shadow-lg shadow-[#CEAE5A]/20"
            >
              Request a quote
              <div className="bg-[#0B2B3F]/10 p-[6px] rounded-full group-hover:bg-[#0B2B3F]/20 transition-colors">
                <MoveRight size={14} className="text-white" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};