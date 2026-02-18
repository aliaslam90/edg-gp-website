import React from "react";
import { motion } from "motion/react";
import imgRig from "figma:asset/722273c12fe8bd4b22edb18656ad4a5f9cab6430.png";
import imgGold from "figma:asset/7bcae03c705cb7635baed22c6a6f334f4613b10e.png";
import { ArrowRight } from "lucide-react";

export const BusinessIntro = () => {
  const specializations = [
    "Petroleum products and derivatives",
    "Precious metals",
    "Infrastructure development for petroleum (storage terminals, ports, and related facilities)",
    "Financing for small to medium-scale mining projects in Africa and selected Asian markets.",
    "Strategic partnerships with gold refineries and crude oil refineries",
    "Alternative energy models and renewable energy project support",
    "Logistics solutions including shipping, unloading, and transport services",
    "Storage solutions with large-scale, strategically located facilities",
    "Supply and support services for companies and institutions requiring regular deliveries of petroleum products, supported by logistics, storage, and hedging solutions",
    "Inventory management and risk control for clients using both large and small volumes (retail and wholesale markets)"
  ];

  return (
    <section className="bg-white py-[80px] lg:py-[140px] px-[45px]">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-start">
        
        {/* LEFT SIDE: Visuals */}
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[38px] items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[422px] h-[400px] lg:h-[681px] rounded-[10px] overflow-hidden shadow-2xl"
          >
            <img src={imgRig} alt="Oil Rig" className="max-w-none w-full h-full object-cover" />
          </motion.div>
          
          <div className="flex-1 flex flex-col gap-[30px] lg:gap-[40px] h-full lg:h-[681px] justify-between">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full h-[200px] lg:h-[289px] rounded-[10px] overflow-hidden shadow-xl"
            >
              <img src={imgGold} alt="Gold Bars" className="max-w-none w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 px-2 lg:px-[22px]"
            >
              <p className="font-['Plus_Jakarta_Sans'] font-medium text-[22px] lg:text-[28px] text-[#151515] leading-[1.4] tracking-tight mb-8">
                Our operations are powered by a diverse and highly skilled team spanning multiple geographies, operating with the same standard of precision and professionalism across all markets.
              </p>
              
              <button className="flex items-center gap-[18px] bg-[#ceae5a] hover:bg-[#b89b4f] text-white px-[26px] py-[14px] rounded-[8px] font-bold text-[14.6px] transition-all group">
                Contact Us
                <div className="w-[30px] h-[30px] rounded-full bg-[#0b2b3f] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="size-3.5 text-white" strokeWidth={3} />
                </div>
              </button>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:max-w-[817px]"
        >
          <h2 className="font-['Plus_Jakarta_Sans'] font-medium text-[20px] lg:text-[21.9px] text-[#151515] leading-[1.4] tracking-tight mb-[30px] lg:mb-[40px]">
            EDG Gold & Petroleum is a truly global enterprise with a strong presence in multiple GCC states, African nations, and Asian markets. We specialize in:
          </h2>
          
          <div className="flex flex-col gap-[6px]">
            {specializations.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-[22px] py-[12px] lg:py-[14px]"
              >
                <div className="w-[14px] h-[14px] rounded-full bg-[#ceae5a] mt-1.5 shrink-0" />
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] lg:text-[18px] text-[#555] leading-[1.5]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};