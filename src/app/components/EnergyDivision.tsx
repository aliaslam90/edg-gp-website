import React from "react";
import { motion } from "motion/react";
import refineryImg from "figma:asset/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";

export const EnergyDivision = () => {
  const listItems = ["Fuel Oil", "Gas Oil", "Gasoline (Mogas)"];

  return (
    <section 
      className="relative w-full overflow-hidden py-[160px]"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={refineryImg}
            alt="Refinery background"
            className="absolute max-w-none object-cover size-full opacity-40"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-[80px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column (Pillars) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-[1px] h-[40px] bg-[#ceae5a]" />
              <h3 className="font-['Plus_Jakarta_Sans'] text-[12px] tracking-[0.5em] font-bold text-white uppercase">
                ENERGY PORTFOLIO
              </h3>
            </div>

            <ul className="flex flex-col gap-6 mb-12 w-full">
              {listItems.map((item) => (
                <li key={item} className="flex items-center group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ceae5a] mr-6 group-hover:scale-150 transition-transform duration-300" />
                  <span className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/80 group-hover:text-white transition-colors duration-300 tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="font-['Plus_Jakarta_Sans'] px-10 py-4 border border-[#ceae5a]/30 rounded-sm text-[#ceae5a] text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-[#ceae5a] hover:text-white transition-all duration-500"
            >
              INQUIRE PORTFOLIO
            </motion.button>
          </div>

          {/* Right Column (Content) */}
          <div className="lg:col-span-8 flex flex-col items-start lg:pl-12">
            <span className="font-['Plus_Jakarta_Sans'] text-[13px] tracking-[0.6em] text-[#ceae5a] font-bold uppercase mb-8">
              PETROLEUM TRADING
            </span>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] md:text-[56px] font-light text-white leading-[1.1] mb-2 tracking-[-0.03em]">
                Energy Division.
              </h2>
              <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] md:text-[56px] font-normal italic text-[#ceae5a] leading-[1.1] mb-10 tracking-[-0.03em]">
                Petroleum Trading Excellence
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-['Plus_Jakarta_Sans'] max-w-[640px] text-[16px] md:text-[17px] leading-[1.8] text-white/60 tracking-wide"
            >
              We supply a wide range of refined oil products tailored to meet the enduring needs of government agencies, public institutions, and private corporations. Our operational strength lies in our ability to offer reliable, on-time delivery with competitive pricing and full compliance with international quality standards.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};