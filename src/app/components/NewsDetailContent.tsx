import React from "react";
import { motion } from "motion/react";
import imgBlogFeatured from "figma:asset/2167be0b6c76c24be05ad0929d12d838cd63b0b6.png";
import imgSection from "figma:asset/0c4be190a8eb1ce8c184bdb17b1fc6ac0ee2159b.png";

export const NewsDetailContent = () => {
  return (
    <section className="py-[100px] px-8 md:px-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Date and Title */}
        <div className="max-w-[1000px] mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#8C8C8C] text-[18px] font-['Plus_Jakarta_Sans'] block mb-6"
          >
            November 17, 2025
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black text-[36px] md:text-[56px] lg:text-[65px] font-bold font-['Plus_Jakarta_Sans'] leading-[1.1] tracking-tight"
          >
            Oil slips as Novorossiysk resumes loadings after Ukrainian attack
          </motion.h1>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[10px] overflow-hidden mb-16 aspect-[21/9]"
        >
          <img
            src={imgBlogFeatured}
            alt="Oil Industry"
            className="max-w-none w-full h-full object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <div className="flex flex-col gap-12 text-[#555] text-[18px] font-['Plus_Jakarta_Sans'] leading-[1.6] max-w-[1440px]">
          <div className="flex flex-col gap-6">
            <p>
              Oil prices retreated in early Asian trading on Monday, reversing gains from the previous week, as crude loadings resumed at the key Russian export hub of Novorossiysk after a two-day suspension triggered by a Ukrainian strike. According to the <a href="#" className="underline text-[#CEAE5A]">news report</a> by Zawya, brent crude futures fell 58 cents, or 0.9%, to $63.81 a barrel at 0050 GMT, while U.S. West Texas Intermediate (WTI) crude was down 59 cents, or 1%, at $59.50 a barrel.
            </p>
            <p>
              Both benchmarks had ended last week with modest gains, rising more than 2% on Friday, after disruptions at Novorossiysk and the neighbouring Caspian Pipeline Consortium terminal affected roughly 2% of global supply.
            </p>
            <p>
              Novorossiysk resumed operations on Sunday, according to industry sources and LSEG data, though ongoing Ukrainian attacks on Russian oil infrastructure continue to pose potential risks. Ukraine’s military reported striking the Ryazan oil refinery on Saturday, while its General Staff said it targeted the Novokuibyshevsk refinery in Russia’s Samara region on Sunday.
            </p>
            <p>
              “Investors are trying to gauge how Ukraine’s attacks will affect Russia’s crude exports in the long term, while also locking in profits after last Friday’s rally,” said Toshitaka Tazawa, analyst at Fujitomi Securities.
            </p>
          </div>

          {/* Subheading Section */}
          <div className="flex flex-col gap-8 mt-4">
            <h2 className="text-black text-[32px] md:text-[48px] font-bold font-['Plus_Jakarta_Sans'] leading-tight tracking-tight">
              Western sanctions on Russian energy companies
            </h2>
            <p>
              Western sanctions on Russian energy companies remain another key focus for markets. The U.S. has announced a ban on transactions with Russian oil giants Lukoil and Rosneft, effective after November 21, as part of efforts to pressure Moscow toward peace negotiations. U.S. President Donald Trump also indicated plans to introduce legislation sanctioning any country doing business with Russia, with the possibility of including Iran.
            </p>
            
            {/* Split Section: Image and Text */}
            <div className="flex flex-col lg:flex-row gap-12 items-start mt-4">
              <div className="lg:w-1/2 rounded-[10px] overflow-hidden aspect-[4/3]">
                 <img src={imgSection} alt="Energy Industry" className="max-w-none w-full h-full object-cover" />
              </div>
              <div className="lg:w-1/2 flex flex-col gap-6">
                <p>
                  OPEC+ policy has further influenced market sentiment. The alliance agreed earlier this month to increase December output targets by 137,000 barrels per day, consistent with the levels for October and November, while pausing output growth in the first quarter of next year.
                </p>
                <p>
                  Meanwhile, U.S. oil production activity is showing modest growth. Data from oilfield services company Baker Hughes indicated that the number of active oil rigs in the United States rose by three to 417 in the week to November 14, highlighting steady drilling activity amid fluctuating global prices.
                </p>
                <p>
                  The resumption of exports at Novorossiysk, combined with ongoing geopolitical risks and Western sanctions, continues to create a complex backdrop for oil markets. Traders and investors are closely monitoring both supply-side developments in Russia and broader OPEC+ policies.
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 p-6 bg-[#000000]/[0.01] border-l-4 border-[#CEAE5A] flex flex-wrap gap-x-4 gap-y-2 text-[14px] font-medium font-['Plus_Jakarta_Sans']">
            <span className="text-black font-bold">TAGGED:</span>
            {["BRENT CRUDE OIL", "INDUSTRY TRENDS", "NEWS", "OIL", "RUSSIA", "UKRAINE", "US SANCTIONS"].map(tag => (
              <span key={tag} className="text-[#CEAE5A] uppercase hover:underline cursor-pointer">
                {tag}
              </span>
            ))}
          </div>

          {/* Comment Form */}
          <div className="mt-20 max-w-[800px]">
            <h3 className="text-black text-[32px] md:text-[40px] font-bold font-['Plus_Jakarta_Sans'] mb-4">
              Leave a Reply
            </h3>
            <p className="text-[#8C8C8C] text-[16px] mb-10">
              Your email address will not be published. Required fields are marked *
            </p>

            <form className="flex flex-col gap-8">
              <div className="border-b border-black/10 py-4">
                <textarea 
                  placeholder="Comment*" 
                  className="w-full bg-transparent outline-none min-h-[120px] resize-none text-black placeholder:text-[#555]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-black/10 py-4">
                  <input type="text" placeholder="Your Name*" className="w-full bg-transparent outline-none text-black placeholder:text-[#555]" />
                </div>
                <div className="border-b border-black/10 py-4">
                  <input type="email" placeholder="Email Address*" className="w-full bg-transparent outline-none text-black placeholder:text-[#555]" />
                </div>
              </div>
              <div className="border-b border-black/10 py-4">
                <input type="text" placeholder="Your Website" className="w-full bg-transparent outline-none text-black placeholder:text-[#555]" />
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="save-info" className="accent-[#CEAE5A]" />
                <label htmlFor="save-info" className="text-[#8C8C8C] text-[14px]">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#CEAE5A] text-white px-[40px] py-[16px] rounded-[6px] font-bold text-[14px] uppercase tracking-wider w-fit mt-4"
              >
                Post Comment
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};