import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import imgBlog1 from "@/assets/fd2cf1e39860b2496ed6ebd6d1953f2f649e8996.png";
import imgBlog2 from "@/assets/7603bd7e1fc180b700e61b67914a6de6cc719f55.png";
import imgBlog3 from "@/assets/1370241e735e9efbf3419fe9f3557ea6a94a4cff.png";
import imgBlog4 from "@/assets/1d8394cc6579b1a4991700c125327b5b3c5edfd0.png";
import imgBlog5 from "@/assets/50c075019ef14d613858c4a38a22d51e9300a26c.png";
import imgBlog6 from "@/assets/0d7b01fbb392357a72a3db80beed5f06b4534543.png";
import imgBlog7 from "@/assets/92f8bf08770cdf997085977e248bbb5306c95ede.png";
import imgBlog8 from "@/assets/cc70606063a8bffc99917cb7476dc61c425d44c9.png";
import imgBlog9 from "@/assets/ef84372341dc923f2fc5698cd67afa66b6dd5e11.png";

const newsItems = [
  {
    id: 1,
    date: "November 11, 2025",
    title: "Khaled bin Mohamed bin Zayed chairs meeting of Executive Committee of...",
    image: imgBlog1,
  },
  {
    id: 2,
    date: "November 17, 2025",
    title: "Oil slips as Novorossiysk resumes loadings after Ukrainian attack",
    image: imgBlog2,
  },
  {
    id: 3,
    date: "Nov 04, 2025",
    title: "ADNOC Signs 15-Year, 1 mtpa Supply Deal with Shell for Ruwais LNG Project",
    image: imgBlog3,
  },
  {
    id: 4,
    date: "October 28, 2025",
    title: "ENOC’s AutoPro builds on record transaction growth to drive innovation, strategic expansion",
    image: imgBlog4,
  },
  {
    id: 5,
    date: "November 20, 2025",
    title: "Oman invites FEED bids for new NGL extraction project",
    image: imgBlog5,
  },
  {
    id: 6,
    date: "November 20, 2025",
    title: "BP awards subsea boosting contract to SLB OneSubsea",
    image: imgBlog6,
  },
  {
    id: 7,
    date: "November 20, 2025",
    title: "ADIPEC 2025: Varel drives innovation in drilling",
    image: imgBlog7,
  },
  {
    id: 8,
    date: "November 19, 2025",
    title: "ADIPEC 2025: Nabors sets new benchmarks in well-construction",
    image: imgBlog8,
  },
  {
    id: 9,
    date: "November 06, 2025",
    title: "TA’ZIZ Signs Landmark Offtake Agreement with India’s Sanmar,...",
    image: imgBlog9,
  },
];

export const NewsGrid = () => {
  return (
    <section className="py-[100px] px-8 md:px-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {newsItems.map((item, index) => (
            <Link
              to={`/news/${item.id}`}
              key={item.id}
              className="flex flex-col group cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full h-full"
              >
                <div className="relative overflow-hidden rounded-[10px] mb-6 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-none w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[#8C8C8C] text-[14px] font-['Plus_Jakarta_Sans']">
                    {item.date}
                  </span>
                  <h3 className="text-[#000000] text-[24px] md:text-[27px] font-semibold font-['Plus_Jakarta_Sans'] leading-[1.3] tracking-tight group-hover:text-[#CEAE5A] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#CEAE5A] text-white px-[48px] py-[16px] rounded-[6px] font-bold text-[14px] uppercase tracking-wider transition-all"
          >
            Load More
          </motion.button>
        </div>
      </div>
    </section>
  );
};