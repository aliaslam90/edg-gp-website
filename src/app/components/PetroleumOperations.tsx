import React from "react";
import { motion } from "motion/react";
import imgPumpjack from "figma:asset/3a4c879691ae817b0a2cf2a3818c3ff693d5145e.png";

const highlights = [
  { label: "Optimal Reach:", text: "Seamless access to some of the world’s most strategic markets." },
  { label: "Competitive Edge:", text: "Leveraging partnerships and scale to deliver cost efficiencies." },
  { label: "Continuity & Resilience:", text: "Safeguarding supply chains against market volatility and geopolitical risks." }
];

export const PetroleumOperations = () => {
  return (
    <section className="bg-white py-[80px] lg:py-[140px] px-[45px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="relative h-[774px] rounded-[10px] overflow-hidden group shadow-2xl flex items-center">
          <img src={imgPumpjack} alt="Oil Operations" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="relative z-10 p-10 lg:p-[72px] max-w-[700px]">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[30px] lg:text-[35px] text-white leading-tight">
              Our petroleum division operates across key trade corridors in the Middle East, Africa, and Asia, ensuring: <span className="text-[#ceae5a]">.</span>
            </h2>
          </div>

          {/* Highlights Overlay Box */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute right-0 top-[calc(50%+152px)] -translate-y-1/2 bg-white w-full lg:w-[45%] p-10 lg:p-[66px] rounded-tl-[10px] shadow-2xl z-20"
          >
            <div className="flex flex-col gap-0">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 py-10 border-b border-gray-100 last:border-0 group/item">
                  <div className="w-[14px] h-[14px] rounded-full bg-[#ceae5a] shrink-0" />
                  <div className="flex flex-col gap-2">
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[22px] lg:text-[25px] text-black">
                      {item.label}
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-[16px] lg:text-[18px] text-[#555]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};