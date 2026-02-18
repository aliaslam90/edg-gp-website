import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgAbImg1Jpg from "figma:asset/1ac783f921d4f235befbc08ea089608fd5ca7f33.png";
import imgAbImg1Jpg1 from "figma:asset/7a2bbfab3869ed54c0dac75db39e66942ee54f70.png";
import imgAbImg1Jpg2 from "figma:asset/c50290f6d265153aa2608cc818b152b7d1e913d3.png";
import imgAbImg1Jpg3 from "figma:asset/dc0ffd624c21a3b416fa79072c458ee4456224b8.png";

const values = [
  {
    number: "01",
    title: "Integrity",
    image: imgAbImg1Jpg,
    description: "At EDG Gold & Petroleum DMCC, integrity is the cornerstone of everything we do. We operate with transparency, honesty, and accountability in every trade and partnership.",
  },
  {
    number: "02",
    title: "Customer Focus",
    image: imgAbImg1Jpg1,
    description: "Our clients are at the heart of our operations. We are dedicated to understanding their unique needs and providing tailored energy and commodities solutions.",
  },
  {
    number: "03",
    title: "Sustainability",
    image: imgAbImg1Jpg2,
    description: "We are committed to long-term sustainability, ensuring that our trading and logistical operations contribute positively to the global energy landscape.",
  },
  {
    number: "04",
    title: "Innovation",
    image: imgAbImg1Jpg3,
    description: "In an ever-evolving market, innovation is key. We leverage the latest technologies and market insights to optimize our supply chain and deliver value.",
  },
];

export const CoreValues = () => {
  return (
    <section className="bg-[#F8F9FA] py-[120px] px-8 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-[80px] gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-[#CEAE5A] font-bold text-[11px] uppercase tracking-[0.3em] font-['Plus_Jakarta_Sans']">
              OUR FOUNDATION
            </span>
            <h2 className="text-[42px] font-bold text-[#0B2B3F] font-['Plus_Jakarta_Sans'] leading-tight tracking-tight">
              Our Core values
            </h2>
          </div>
          <p className="max-w-[400px] text-[#555] text-[15px] font-['Plus_Jakarta_Sans'] leading-[1.7] mt-2">
            At EDG Gold & Petroleum DMCC, our core values define who we are and how we operate, guiding us towards excellence in every endeavor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[8px] p-[40px] border border-[#E9ECEF] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 group"
            >
              <div className="flex flex-col gap-[24px]">
                <div className="flex justify-between items-start">
                  <span className="text-[#CEAE5A] font-bold text-[18px] font-['Plus_Jakarta_Sans'] opacity-50">
                    {value.number}
                  </span>
                  <div className="w-[140px] h-[80px] overflow-hidden rounded-[4px]">
                    <ImageWithFallback
                      src={value.image}
                      alt={value.title}
                      className="max-w-none w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[#0B2B3F] mb-3 font-['Plus_Jakarta_Sans'] tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[#555] text-[15px] leading-[1.6] font-['Plus_Jakarta_Sans']">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};