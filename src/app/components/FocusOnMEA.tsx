import React from "react";
import { motion } from "motion/react";

const focusItems = [
  "Home to some of the world’s largest oil producers and gold exporters",
  "Rapid urbanization and infrastructure development driving fuel and metal demand",
  "Strategic logistics corridors connecting Asia, Europe, and Africa",
  "Favorable trade ecosystems and evolving regulatory frameworks",
  "Opportunities for local impact, job creation, and community development"
];

export const FocusOnMEA = () => {
  return (
    <section className="bg-white py-[80px] lg:py-[140px] px-[45px]">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[40px] lg:text-[50.4px] text-black leading-tight">
            Why We Focus on MEA
          </h2>
          
          <div className="flex flex-col gap-4">
            {focusItems.map((item, idx) => (
              <div key={idx} className="flex gap-6 py-4 border-b border-gray-100 last:border-0 items-start group">
                <div className="w-[14px] h-[14px] rounded-full bg-[#ceae5a] mt-1.5 shrink-0 transition-transform group-hover:scale-125" />
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] lg:text-[18px] text-[#555] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#fafafa] p-10 lg:p-[60px] rounded-[10px] border border-gray-100"
        >
          <p className="font-['Plus_Jakarta_Sans'] text-[20px] lg:text-[24px] text-[#151515] leading-relaxed mb-8 italic">
            "At EDG Gold & Petroleum, our work in the Middle East and Africa is more than business—it’s a commitment to shared prosperity, sustainable trade, and long-term value creation. We don’t just serve these markets—we grow with them."
          </p>
          <div className="w-[60px] h-[2px] bg-[#ceae5a]" />
        </motion.div>
      </div>
    </section>
  );
};
