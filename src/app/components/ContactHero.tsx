import React from "react";
import { motion } from "motion/react";
import imgHero from "@/assets/89ed61e191ca1f575e9f07f32c71a39e73a9ec25.png";
import imgDecor from "@/assets/a3dece847acdf1321aff9e051494b49b5b4ae175.png";

export const ContactHero = () => {
  return (
    <section className="relative h-[540px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgHero}
          alt="Contact Us"
          className="absolute max-w-none object-cover size-full"
        />
        {/* Gradients */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "linear-gradient(270deg, rgba(206, 174, 90, 0.3) 0%, rgba(0, 0, 0, 0) 57.057%), linear-gradient(0deg, rgba(0, 0, 0, 0) 45.746%, rgba(44, 37, 19, 0.8) 95.546%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50.05%, rgb(11, 20, 32) 95.045%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.6) 25%, rgba(11, 43, 63, 0) 100%)" 
          }} 
        />
      </div>

      {/* Decor Element */}
      <div className="absolute left-[10%] top-[40px] w-[764px] h-[724px] pointer-events-none opacity-50">
        <img src={imgDecor} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto h-full px-8 md:px-[80px] flex flex-col justify-end pb-[40px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-white text-[28px] md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] leading-tight tracking-tight">
            Contact Us
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-[12px] uppercase tracking-widest font-['Plus_Jakarta_Sans']">
            <span className="text-white/60">Home Page</span>
            <span className="text-white/60">•</span>
            <span className="text-[#CEAE5A]">Contact Us</span>
          </div>
        </motion.div>
      </div>

      {/* Glassmorphism Navigation Bar Line Integration */}
      <div className="absolute bottom-[80px] left-[45px] right-[45px] h-px bg-white/20 z-10" />
    </section>
  );
};