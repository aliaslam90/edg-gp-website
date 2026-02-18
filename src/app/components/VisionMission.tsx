import React from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-7eu6a3g9p9";
import imgVisionMission from "@/assets/e82cf92c9617fe67354327de7e9e517a2e5bc58a.png";

export const VisionMission = () => {
  return (
    <section className="relative h-[700px] flex flex-col justify-end overflow-hidden">
      {/* Background with subtle zoom effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={imgVisionMission}
            alt="Industrial excellence"
            className="absolute max-w-none h-[169.01%] left-0 top-[-65.97%] w-full"
          />
        </motion.div>
        {/* Main section gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: "linear-gradient(160.937deg, rgba(0, 0, 0, 0) 32.933%, rgba(0, 0, 0, 0.5) 67.854%)" }} 
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-[80px] pb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="backdrop-blur-[15px] bg-[#080808]/40 flex flex-col gap-8 p-10 md:p-14 border-l border-t border-[#ceae5a]/20"
          >
            <div className="flex items-center gap-6">
              <div className="h-[24px] w-[24px] shrink-0 opacity-80">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 35">
                  <g id="VisionIcon">
                    <path d={svgPaths.p270af370} fill="#CEAE5A" />
                    <path d={svgPaths.p255b1f00} fill="#CEAE5A" />
                    <path d={svgPaths.p2704b200} fill="#CEAE5A" />
                  </g>
                </svg>
              </div>
              <h2 className="text-[#ceae5a] text-[20px] font-bold uppercase tracking-[0.4em] font-['Plus_Jakarta_Sans']">
                Vision
              </h2>
            </div>
            <p className="text-white/80 text-[15px] md:text-[16px] leading-[1.8] font-normal font-['Plus_Jakarta_Sans'] tracking-wide">
              To become the first-choice partner for investors in the energy and precious metals sectors. Our long-term goal is to expand strategic corridors, lead in ethical sourcing, and enable access to essential commodities.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="backdrop-blur-[15px] bg-[#080808]/60 flex flex-col gap-8 p-10 md:p-14 border-r border-t border-[#ceae5a]/20"
          >
            <div className="flex items-center gap-6">
              <div className="h-[24px] w-[24px] shrink-0 opacity-80">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 35">
                  <g id="MissionIcon">
                    <path d={svgPaths.p2a25ac80} fill="#CEAE5A" />
                    <path d={svgPaths.p2866b800} fill="#CEAE5A" />
                  </g>
                </svg>
              </div>
              <h2 className="text-[#ceae5a] text-[20px] font-bold uppercase tracking-[0.4em] font-['Plus_Jakarta_Sans']">
                Mission
              </h2>
            </div>
            <p className="text-white/80 text-[15px] md:text-[16px] leading-[1.8] font-normal font-['Plus_Jakarta_Sans'] tracking-wide">
              To support the energy and precious metals sectors through an integrated business model that enhances sustainability, advances infrastructure, and maximizes value for every EDG partner through intelligent solutions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};