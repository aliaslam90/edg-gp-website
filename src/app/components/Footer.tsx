import React from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import svgPaths from "../../imports/svg-enws1wxon2";
import imgRectangle from "@/assets/be514fd866e5546a105d135dc899bd98fe99b8d8.png";

export const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden text-white pt-[80px] pb-[40px] px-4 sm:px-6 lg:px-[45px]">
      {/* Background Swirl Image Overlay */}
      <div className="absolute top-0 right-0 w-[40%] h-full pointer-events-none opacity-40">
        <img 
          src={imgRectangle} 
          alt="" 
          className="absolute max-w-none object-cover size-full"
        />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-[60px] mb-[80px]">
          
          {/* Column 1: Logo */}
          <div className="shrink-0">
            <div className="w-[120px] h-[130px] sm:w-[137px] sm:h-[149px]">
              <svg className="w-full h-full" viewBox="0 0 137 149" fill="none">
                <path d={svgPaths.p3a6d6532} fill="#CEAE5A" />
                <path d={svgPaths.p81b1e50} fill="white" />
                <path d={svgPaths.p37522800} fill="white" />
                <path d={svgPaths.p3fdc0e00} fill="white" />
                <path d={svgPaths.p16afcc80} fill="white" />
                <path d={svgPaths.p2dc71d00} fill="white" />
                <path d={svgPaths.pfc13400} fill="white" />
                <path d={svgPaths.p1af0b600} fill="white" />
                <path d={svgPaths.p380e1800} fill="white" />
                <path d={svgPaths.p30e35f00} fill="#CEAE5A" />
                <path d={svgPaths.p4655980} fill="#CEAE5A" />
                <path d={svgPaths.p229b2900} fill="#CEAE5A" />
                <path d={svgPaths.p3ad585f2} fill="#CEAE5A" />
                <path d={svgPaths.p2a54f072} fill="#CEAE5A" />
                <path d={svgPaths.p2f16b300} fill="#CEAE5A" />
                <path d={svgPaths.p32f76e00} fill="#CEAE5A" />
                <path d={svgPaths.p70fb200} fill="#CEAE5A" />
                <path d={svgPaths.p3a694d00} fill="#CEAE5A" />
                <path d={svgPaths.p3d17c680} fill="#CEAE5A" />
                <path d={svgPaths.p2be8e280} fill="#CEAE5A" />
                <path d={svgPaths.p3d92900} fill="#CEAE5A" />
                <path d={svgPaths.p3e7cb180} fill="#CEAE5A" />
                <path d={svgPaths.p1f7e4300} fill="#CEAE5A" />
              </svg>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-[24px] w-full lg:min-w-[260px] lg:w-auto">
            <h4 className="text-[20px] font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">Quick Links</h4>
            <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[40px] text-white/80 font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[24px]">
              <div className="flex flex-col gap-[10px]">
                <Link to="/about/who-we-are" className="hover:text-[#CEAE5A] transition-colors">Who We Are</Link>
                <Link to="/about/ceo-message" className="hover:text-[#CEAE5A] transition-colors">CEO Message</Link>
                <Link to="/about/business-approach" className="hover:text-[#CEAE5A] transition-colors">Our Business Approach</Link>
                <Link to="/services/petroleum-products" className="hover:text-[#CEAE5A] transition-colors">Petroleum Products</Link>
                <Link to="/services/gold-trading" className="hover:text-[#CEAE5A] transition-colors">Precious metals, led by gold</Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <Link to="/news" className="hover:text-[#CEAE5A] transition-colors font-normal text-[16px]">News</Link>
                <Link to="/contact" className="hover:text-[#CEAE5A] transition-colors font-normal text-[16px]">Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-[24px] w-full sm:max-w-[360px]">
            <h4 className="text-[20px] font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">Contact Info</h4>
            <div className="flex flex-col gap-[15px] text-white/80 font-['Plus_Jakarta_Sans'] text-[16px] leading-[30px]">
              <p>DMCC Business Centre, Level No 1 Jewellery & Gemplex 3, Dubai - UAE</p>
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d={svgPaths.p3cd11780} stroke="#CEAE5A" strokeWidth="1.8" strokeMiterlimit="10" />
                      <path d={svgPaths.p3e444ce0} stroke="#CEAE5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="hover:text-[#CEAE5A] transition-colors cursor-pointer">+(1) 1230 452 8759</span>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                      <path d={svgPaths.p3cd60880} stroke="#CEAE5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2c4421c0} stroke="#CEAE5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p22ce3880} stroke="#CEAE5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="hover:text-[#CEAE5A] transition-colors cursor-pointer">synox@mail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Stay Tuned */}
          <div className="flex flex-col gap-[28px] w-full lg:min-w-[360px]">
            <h4 className="text-[20px] font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">Stay tuned for more updates</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3 border-b border-white/60 pb-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-transparent border-none outline-none text-[16px] sm:text-[17px] font-normal placeholder:text-white/60 w-full"
                />
                <div className="flex items-center gap-[11px] cursor-pointer group">
                  <span className="text-[15px] font-bold uppercase tracking-tight group-hover:text-[#CEAE5A] transition-colors">SUBSCRIBE</span>
                  <div className="w-[30px] h-[30px] bg-[#CEAE5A] rounded-full flex items-center justify-center group-hover:bg-[#B89B4F] transition-all">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d={svgPaths.p1e44af80} fill="black" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-[10px]">
                <div className="mt-1 w-[14px] h-[14px] border border-white rounded-[1px] cursor-pointer shrink-0" />
                <span className="text-[14px] sm:text-[15px] text-white/80 tracking-tight">
                  By signing up, you agree to the <Link to="/privacy" className="text-[#CEAE5A] underline">Privacy Policy</Link>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 text-[14px] sm:text-[15px] md:text-[16px] text-white font-normal text-center md:text-left">
            <span>© 2025</span>
            <span className="text-[#CEAE5A]">edg-gp.com</span>
            <span>. All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center gap-[10px] sm:gap-[15px]">
            {[
              { icon: Facebook, path: svgPaths.pc8a9700 },
              { icon: Instagram, path: svgPaths.p1e304800 },
              { icon: Twitter, path: svgPaths.p3b61c280 },
              { icon: Youtube, path: svgPaths.p22d05b00 }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] bg-black/50 rounded-[5px] flex items-center justify-center hover:bg-[#CEAE5A]/20 transition-all border border-white/5"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d={social.path} fill="white" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};