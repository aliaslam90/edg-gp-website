import React from "react";
import { motion } from "motion/react";
import imgProject from "@/assets/2d09c5cf3e6a35fbebcfa136dd060771dbf70d57.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  { label: "Ultra Low Sulphur Diesel (ULSD):", text: "Cleaner-burning diesel fuel, ideal for meeting environmental regulations while ensuring performance." },
  { label: "High Sulphur Diesel (HSD):", text: "Widely used for heavy-duty engines and equipment requiring cost-effective energy." },
  { label: "Unleaded Motor Gasoline:", text: "Refined for efficiency and consistency, tailored to global engine standards." },
  { label: "Naphtha:", text: "Essential for petrochemical industries and gasoline blending applications." },
  { label: "Liquefied Petroleum Gas (LPG):", text: "A versatile, clean energy source for heating, cooking, and automotive use." },
  { label: "Kerosene (Jet A-1):", text: "Aviation-grade fuel, ensuring reliability and compliance with international aviation standards." },
  { label: "Light Fuel Oil:", text: "Used in industrial heating and power generation." },
  { label: "Petroleum Solvent:", text: "Multi-purpose solvent supporting industrial applications." }
];

export const PetroleumPortfolio = () => {
  return (
    <section className="bg-[#f2f5fb] py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] lg:text-[28px] text-black leading-tight max-w-[710px]">
              Petroleum Products Portfolio
            </h2>
            <div className="h-full lg:h-[108px] border-l-3 border-[#ceae5a] pl-10 flex items-center">
              <p className="font-['Plus_Jakarta_Sans'] text-[16px] lg:text-[18px] text-[#555] max-w-[776px] leading-relaxed">
                At EDG Gold & Petroleum, we offer a comprehensive portfolio of petroleum products—designed to meet the diverse needs of governments, enterprises, and industrial clients. Each product is sourced, refined, and delivered with strict adherence to international quality standards and operational efficiency.
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="w-[54px] h-[54px] rounded-[8px] border border-[#ceae5a] flex items-center justify-center hover:bg-[#ceae5a] group transition-all">
              <ChevronLeft className="size-6 text-black group-hover:text-white" />
            </button>
            <button className="w-[54px] h-[54px] rounded-[8px] bg-[#ceae5a] flex items-center justify-center hover:bg-[#b89b4f] transition-all">
              <ChevronRight className="size-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="relative h-[740px] rounded-[10px] overflow-hidden flex shadow-2xl">
          {/* Left Content (Blue Box) */}
          <div className="w-full lg:w-[1301px] bg-[#000435] p-10 lg:p-[60px] flex flex-col justify-center relative z-10">
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] lg:text-[22px] text-white">
                Light Distillates
              </h3>
              <span className="text-[#ceae5a]/30 font-bold text-[100px] lg:text-[141px] leading-none">01</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px] gap-y-10">
              {portfolioItems.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] lg:text-[16px] text-[#ceae5a]">
                    {item.label}
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-[16px] lg:text-[18px] text-white/80 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block flex-1 relative">
            <img src={imgProject} alt="Project" className="absolute inset-0 max-w-none object-cover size-full" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-['Plus_Jakarta_Sans'] text-[16px] lg:text-[18px] text-[#555]">
            We turn your ideas to reality. We don’t stop until you’re satisfied.{" "}
            <button className="inline-flex items-center gap-2 font-bold text-black hover:text-[#ceae5a] transition-colors ml-2 group">
              Need to discuss 
              <div className="w-[30px] h-[30px] rounded-full bg-[#ceae5a] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChevronRight className="size-4 text-white" />
              </div>
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};