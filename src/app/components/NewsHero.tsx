import React from "react";
import { motion } from "motion/react";
import imgHero from "figma:asset/869053afd4838d03fa361c9154a35ecb01a0a116.png";
import imgDecorPng from "figma:asset/a3dece847acdf1321aff9e051494b49b5b4ae175.png";
import { Link } from "react-router";

export const NewsHero = () => {
  return (
    <section className="relative h-[480px] md:h-[540px] w-full overflow-hidden flex flex-col justify-end">
      {/* Background Image */}
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover size-full pointer-events-none"
        src={imgHero}
      />
      
      {/* Overlays */}
      <div
        className="absolute inset-0 z-1"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(206, 174, 90, 0.3) 0%, rgba(0, 0, 0, 0) 57.057%), linear-gradient(0deg, rgba(0, 0, 0, 0) 45.746%, rgba(44, 37, 19, 0.8) 95.546%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50.05%, rgb(11, 20, 32) 95.045%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.6) 25%, rgba(11, 43, 63, 0) 100%)",
        }}
      />

      {/* Decor PNG Overlay */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-full max-w-[1920px] h-full pointer-events-none z-2 opacity-50">
         <img src={imgDecorPng} alt="" className="absolute left-[-20%] md:left-[5%] w-[800px] h-auto" />
      </div>

      <div className="relative z-10 px-8 md:px-[80px] pb-[40px] md:pb-[60px] max-w-[1440px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-white text-[48px] md:text-[64px] font-bold font-['Plus_Jakarta_Sans'] leading-tight">
            News
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/60 text-[12px] uppercase tracking-widest font-['Plus_Jakarta_Sans'] border-t border-white/20 pt-6 w-full">
            <Link to="/" className="hover:text-[#CEAE5A] transition-colors">Home Page</Link>
            <span className="text-[#CEAE5A]">•</span>
            <span className="text-[#CEAE5A]">News</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};