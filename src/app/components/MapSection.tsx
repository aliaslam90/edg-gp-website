import React from "react";
import { motion } from "motion/react";
import imgMap from "@/assets/503ed9e527b193363b47769a3724ad89505a5289.png";

export const MapSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-[80px] pb-16 lg:pb-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-[10px] overflow-hidden shadow-2xl"
        >
          {/* Map Image Placeholder */}
          <img
            src={imgMap}
            alt="Dubai Locations Map"
            className="max-w-none w-full h-full object-cover"
          />
          
          {/* Stylized UI Elements on top of map (simulating Google Maps interface from design) */}
          <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded shadow text-[12px] font-bold text-[#666] hidden md:block">
            View larger map
          </div>
          
          <div className="absolute bottom-4 right-4 flex gap-2 hidden md:flex">
             <div className="bg-white p-2 rounded shadow">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 5V19M5 12H19" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
             <div className="bg-white p-2 rounded shadow">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M5 12H19" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};