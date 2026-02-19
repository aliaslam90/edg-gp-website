import React from "react";
import { motion } from "motion/react";
import refineryImg from "@/assets/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";

export const EnergyDivision = () => {
  const products = ["Fuel Oil", "Gas Oil", "Gasoil (D2)", "Gasoline (Mogas)"];

  return (
    <section className="relative w-full overflow-hidden h-auto lg:h-[700px] flex items-center py-[80px] lg:py-[100px]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={refineryImg}
            alt="Refinery background"
            className="absolute max-w-none object-cover size-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[100px] items-end">

          {/* Left: Products List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-[36px] lg:flex-1"
          >
            <div className="flex flex-col gap-[25px]">
              <h3 className="font-['Inter'] font-semibold text-[20px] lg:text-[25px] text-white leading-[30px]">
                Our Products
              </h3>
              <ul className="flex flex-col gap-[4px]">
                {products.map((item) => (
                  <li key={item} className="flex items-center gap-[10px]">
                    <div className="w-[7px] h-[7px] bg-[#ceae5a] shrink-0" />
                    <span className="font-['Inter'] font-medium text-[14px] lg:text-[16px] text-white leading-[22px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#b89b4f" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#ceae5a] border border-[#ceae5a] px-[32px] py-[14px] rounded-[8px] font-['Plus_Jakarta_Sans'] font-medium text-[18px] lg:text-[24px] text-white leading-[32px] transition-all w-fit"
            >
              Join as an Investor
            </motion.button>
          </motion.div>

          {/* Right: Heading + Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-[36px] lg:flex-1"
          >
            <h2 className="font-['Plus_Jakarta_Sans'] font-medium text-[32px] md:text-[44px] lg:text-[60px] text-white leading-[1.13] tracking-[-1.2px]">
              Energy Division<br />
              Petroleum Trading Excellence
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] lg:text-[24px] text-white leading-[1.58] lg:leading-[38px]">
              We supply a wide range of refined oil products tailored to meet the evolving needs of government agencies, public institutions, and private corporations. Our operational strength lies in our ability to offer reliable, on-time delivery with competitive pricing and full compliance with international quality standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
