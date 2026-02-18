import React from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-ixy99k2xf7";

const StatCard = ({ title, value, subtext, isDark = false, iconPath }: { title: string, value: string, subtext: string, isDark?: boolean, iconPath: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex-1 aspect-square rounded-[8px] p-8 border transition-all duration-700 flex flex-col justify-between group ${
        isDark 
          ? "bg-[#080808] border-[#ceae5a]/20 hover:border-[#ceae5a]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          : "bg-white border-[#dce0e3] hover:border-[#ceae5a]/30 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
      }`}
    >
      <div className="flex flex-col gap-4 items-start w-full">
        <h3 className={`text-[16px] font-normal tracking-[-0.2px] ${isDark ? "text-white" : "text-black"} font-['Plus_Jakarta_Sans'] leading-tight`}>
          {title}
        </h3>
        <div className="flex items-end justify-between w-full">
          <div className="w-[32px] h-[32px] shrink-0 opacity-100 group-hover:scale-110 transition-all duration-500 scale-y-[-1]">
            <svg className="w-full h-full" viewBox="0 0 50 50">
               <path d={iconPath} fill="#CEAE5A" />
            </svg>
          </div>
          <span className={`text-[40px] lg:text-[44px] leading-none font-normal tracking-[-2px] ${isDark ? "text-white" : "text-black"} font-['Plus_Jakarta_Sans']`}>
            {value}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className={`h-px w-full relative`}>
          <div className={`absolute inset-0 border-t border-solid ${isDark ? "border-white/40" : "border-black/10"}`} />
        </div>
        <p className={`text-[13px] leading-[1.5] font-normal tracking-tight ${isDark ? "text-white/70" : "text-[#8c8c8c]"} font-['Plus_Jakarta_Sans']`}>
          {subtext}
        </p>
      </div>
    </motion.div>
  );
};

export const Stats = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-8 md:px-[80px]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:grid lg:grid-cols-4 gap-[24px]">
        <StatCard
          title="Years of experience"
          value="30"
          subtext="leaders in industrial manufacturing & technology"
          isDark={true}
          iconPath={svgPaths.p270f2a00}
        />
        <StatCard
          title="Global locations"
          value="75"
          subtext="countries where the Group has built projects"
          iconPath={svgPaths.p2efe3f00}
        />
        <StatCard
          title="Total employee"
          value="1.2K"
          subtext="direct and indirect employees working on our projects"
          iconPath={svgPaths.p2134d800}
        />
        <StatCard
          title="Annual revenue"
          value="15B"
          subtext="total project value of all time across the globe"
          iconPath={svgPaths.p18c43880}
        />
      </div>
    </section>
  );
};
