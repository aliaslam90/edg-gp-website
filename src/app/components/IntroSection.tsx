import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgBackground1 from "@/assets/d6476fda33009cbd54e41a9a5e032505b1113a18.png";
import { ArrowRight } from "lucide-react";

export const IntroSection = () => {
  return (
    <section className="bg-white py-[80px] lg:py-[120px] px-4 sm:px-6 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Image (~40–45%) + intro text below, aligned with image */}
        <div className="lg:col-span-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="rounded-[8px] overflow-hidden">
              <ImageWithFallback
                src={imgBackground1}
                alt="Who We Are"
                className="max-w-none w-full h-auto object-cover aspect-[4/5] lg:aspect-auto"
              />
            </div>
            <p className="text-black font-['Plus_Jakarta_Sans'] text-[18px] lg:text-[20px] font-medium leading-[1.5] tracking-tight text-left">
              At EDG Gold & Petroleum DMCC, we are more than a commodities trading company—we are a strategic partner in powering global markets and enabling responsible growth.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Body text (~55–60%) + CTA right-aligned */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6 text-[#333] text-[15px] lg:text-[16px] font-['Plus_Jakarta_Sans'] leading-[1.8]">
              <p>
                With a focus on the ethical and efficient trading of petroleum products and precious metals, we operate across key geographies including the Middle East, Africa, and beyond. Our business model spans the full supply chain—from sourcing and transportation to storage and distribution—ensuring product availability, quality, and reliability for both public and private sectors.
              </p>
              <p>
                What sets us apart is our deep market insight, logistical strength, and unwavering commitment to sustainability and integrity. Through our expansive network and sister companies, we provide tailored solutions that address evolving energy needs and market opportunities while contributing positively to the communities we serve.
              </p>
              <p>
                From fuel oil, gasoil, and gasoline to responsibly sourced gold, our diverse portfolio reflects our ability to navigate the complexities of global markets while meeting the evolving needs of both public and private sector clients. Whether it's securing energy access for governments or supplying refined products to industrial operators, we deliver with precision, professionalism, and integrity.
              </p>
              <p>
                Our integrated supply chain operations span the full cycle—from sourcing and logistics to distribution and delivery—enabling us to optimize performance, reduce risk, and ensure product availability across borders. Through our network of sister companies and regional offices, we bring a local understanding to global trading, blending market insight with on-the-ground agility.
              </p>
            </div>

            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-0 bg-[#E5C189] text-[#1a1a1a] pl-6 pr-2 py-3 rounded-[8px] font-semibold text-[14px] tracking-tight transition-all"
              >
                Request A Quote
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-white ml-2 group-hover:bg-[#333] transition-colors">
                  <ArrowRight size={18} strokeWidth={2} />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};