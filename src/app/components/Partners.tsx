import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgBpPng from "@/assets/d49f19aa8493aac5092e4202074027f4138cec9a.png";
import imgHarbourEnergyPng from "@/assets/0858992a4b38f6eee43970c07dfaa06babf77247.png";
import imgEquinorPng from "@/assets/509a55a1a570e289f42a47af3e76d143f3910ddf.png";
import imgSpiritEnergyPng from "@/assets/2835c4df047e146bffdc6d4eaac3a16e85f5bd7c.png";
import imgMaersekPng from "@/assets/45b5a55fe23efc25cb1a2a83edffa56651de175c.png";
import imgTotalEnergiesPng from "@/assets/1f87f80505240dbe46a6b23840a9e076447e4ce8.png";
import imgPerencoPng from "@/assets/0f312acfd7661746df1a946a8f08b75656c8d77a.png";
import imgSubsea7Png from "@/assets/04a38e18500a05c9338f7e479bacabfd32910efa.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Partners = () => {
  const partners = [
    { name: "BP", logo: imgBpPng },
    { name: "Harbour Energy", logo: imgHarbourEnergyPng },
    { name: "Equinor", logo: imgEquinorPng },
    { name: "Spirit Energy", logo: imgSpiritEnergyPng },
    { name: "Maersk", logo: imgMaersekPng },
    { name: "Total Energies", logo: imgTotalEnergiesPng },
    { name: "Perenco", logo: imgPerencoPng },
    { name: "Subsea 7", logo: imgSubsea7Png },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="bg-white overflow-hidden w-full py-[56px] lg:py-[72px]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-[80px] relative">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-[80px] gap-12">
          <div className="flex flex-col gap-6">
            <span className="text-[#ceae5a] text-[12px] font-bold uppercase tracking-[0.5em] block font-['Plus_Jakarta_Sans']">
                Global Network
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-light text-[22px] md:text-[28px] text-black leading-tight tracking-[-0.03em]">
              Strategic Partners
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-20">
            <div className="relative pl-8 border-l-2 border-[#ceae5a] py-1 max-w-[450px]">
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[15px] md:text-[16px] leading-[1.8] text-black/50 tracking-wide">
                Dedicated to supporting our clients and partners in every strategic step across the global energy and precious metals landscape.
              </p>
            </div>

            <div className="flex gap-4">
              <button 
                className="w-12 h-12 border border-[#f0f0f0] rounded-sm flex items-center justify-center hover:border-[#ceae5a] transition-all group"
              >
                <ChevronLeft size={18} className="text-black/40 group-hover:text-[#ceae5a]" strokeWidth={1.5} />
              </button>
              <button 
                className="w-12 h-12 bg-[#ceae5a] rounded-sm flex items-center justify-center hover:bg-[#b89b4f] transition-all"
              >
                <ChevronRight size={18} className="text-white" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full">
          <Slider {...settings} className="partner-slider -mx-6">
            {partners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="px-6">
                <div 
                  className="bg-white rounded-full h-[100px] flex items-center justify-center p-8 border border-[#f5f5f5] hover:border-[#ceae5a]/20 transition-all duration-500 group mx-auto"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-[45px] max-w-[130px] object-contain opacity-40 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .partner-slider .slick-track {
          display: flex !important;
          align-items: center !important;
          transition-timing-function: linear !important;
        }
      `}} />
    </section>
  );
};
