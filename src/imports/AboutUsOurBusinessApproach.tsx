import svgPaths from "./svg-v7h5au7fd6";
import imgHero from "@/assets/6684a89f89ba72e1f6902e05b35efe7fa23cb84a.png";
import imgDecorPng from "@/assets/a3dece847acdf1321aff9e051494b49b5b4ae175.png";
import imgSection from "@/assets/0c4be190a8eb1ce8c184bdb17b1fc6ac0ee2159b.png";
import imgMaskGroup from "@/assets/722273c12fe8bd4b22edb18656ad4a5f9cab6430.png";
import imgBackground1 from "@/assets/7bcae03c705cb7635baed22c6a6f334f4613b10e.png";
import imgMaskGroup1 from "@/assets/ff209826221c5d435606888e985201bc4c5f292c.png";
import imgFrame64 from "@/assets/bacb3bf592da2f4f01aa9e2f2bcf9828c0af6854.png";
import imgRectangle from "@/assets/be514fd866e5546a105d135dc899bd98fe99b8d8.png";
import { imgBackground, imgImage, imgAbImgJpg } from "./svg-5dri3";

function MaskGroup() {
  return (
    <div className="absolute bottom-0 h-[40px] left-0 right-0" data-name="Mask Group">
      <div className="absolute bg-white bottom-0 h-[40px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_40px] right-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }} />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[9px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-black">
            <p className="leading-[24px] whitespace-pre-wrap">Who We Are</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[9px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-black">
            <p className="leading-[24px] whitespace-pre-wrap">CEO Message</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#ceae5a] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[9px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-white">
            <p className="leading-[24px] whitespace-pre-wrap">Our Business Approach</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="about">
      <Frame59 />
      <Frame58 />
      <Frame60 />
    </div>
  );
}

function MenuDropDown() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[348px] top-[61px] w-[267px]" data-name="menu drop down">
      <About />
    </div>
  );
}

function DecorPng() {
  return (
    <div className="-translate-x-1/2 absolute h-[724px] left-[calc(50%-538px)] overflow-clip top-[40px] w-[764px]" data-name="decor.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDecorPng} />
      </div>
      <MenuDropDown />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="absolute content-stretch flex font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[10px] items-center leading-[0] left-0 text-[12px] top-[30px] tracking-[0.24px] uppercase" data-name="Breadcrumb">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">Home Page</p>
      </div>
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 text-[rgba(255,255,255,0.6)] w-[3.26px]">
        <p className="leading-[16px] whitespace-pre-wrap">·</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">About Us</p>
      </div>
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 text-[rgba(255,255,255,0.6)] w-[3.26px]">
        <p className="leading-[16px] whitespace-pre-wrap">·</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ceae5a] whitespace-nowrap">
        <p className="leading-[16px]">Our Business Approach</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t h-[77px] left-[45px] right-[45px] top-[423px]" data-name="Nav">
      <Breadcrumb />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[540px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <MaskGroup />
      <DecorPng />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[45px] text-[55.4px] text-white top-[343.5px] whitespace-nowrap">
        <p className="leading-[67px]">Our Business Approach</p>
      </div>
      <Nav />
    </div>
  );
}

function ItemLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[23.11px]">Home</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Item → Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[23.11px]">About us</p>
      </div>
      <div className="bg-[#ceae5a] h-[2px] shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Item → Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[23.11px]">business sectors</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Item → Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[23.11px]">Operations</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Item → Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[23.11px]">News</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative shrink-0">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
    </div>
  );
}

function NavList() {
  return (
    <div className="content-stretch flex items-center pr-[102px] relative shrink-0" data-name="Nav → List">
      <Frame3 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-name="Button">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[14.1px] text-center text-white w-full">
        <p className="leading-[24px] whitespace-pre-wrap">(+971) 45548286</p>
      </div>
      <div className="bg-[#ceae5a] h-px shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#8a8a8a] text-[15px] w-[54.92px]">
        <p className="leading-[24px] whitespace-pre-wrap">Call us:</p>
      </div>
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-name="Button">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[14.1px] text-center text-white w-full">
        <p className="leading-[24px] whitespace-pre-wrap">info@edg-gp.com</p>
      </div>
      <div className="bg-[#ceae5a] h-px shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a8a8a] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">Email us:</p>
      </div>
      <Button1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <Frame1 />
      <Frame5 />
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="h-[26px] relative shrink-0 w-[40.94px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[17px] text-white top-[13px] whitespace-nowrap">
        <p className="leading-[25.6px]">EN</p>
      </div>
      <div className="absolute h-[6px] left-[30.73px] top-[9.64px] w-[9.73px]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.72973 6">
          <path d={svgPaths.p314c0200} fill="var(--fill-0, white)" id="icon" />
        </svg>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#ceae5a] h-[52px] relative rounded-[8px] shrink-0 w-[145.06px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[13.8px] text-center text-white top-[26px] w-[85.26px]">
        <p className="leading-[24px] whitespace-pre-wrap">Contact us</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[66px] items-center justify-end relative shrink-0">
      <Frame8 />
      <ItemLink5 />
      <Link />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div className="h-[110px] relative shrink-0 w-[101px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 110">
          <g id="Vector">
            <path d={svgPaths.p3e70b880} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p1d5b6a00} fill="white" />
            <path d={svgPaths.p3020dd80} fill="white" />
            <path d={svgPaths.p25e918c0} fill="white" />
            <path d={svgPaths.p6f02500} fill="white" />
            <path d={svgPaths.p21670600} fill="white" />
            <path d={svgPaths.p56fb180} fill="white" />
            <path d={svgPaths.pf418900} fill="white" />
            <path d={svgPaths.p3f451b00} fill="white" />
            <path d={svgPaths.p2c72e700} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p333ef800} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p2b9f1600} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p37784d00} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p37e70f00} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p1fa41200} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p2cecb100} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p16b42a80} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p2ee024f2} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.pfd2b680} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p2340f060} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p1d06d880} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p24df4c00} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.pd6da200} fill="var(--fill-0, #CEAE5A)" />
          </g>
        </svg>
      </div>
      <NavList />
      <Frame2 />
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 px-[45px] top-[12px] w-[1920px]" data-name="Header">
      <Frame4 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[540px] left-0 right-0 top-0" data-name="hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(270deg, rgba(206, 174, 90, 0.3) 0%, rgba(0, 0, 0, 0) 57.057%), linear-gradient(1.42109e-14deg, rgba(0, 0, 0, 0) 45.746%, rgba(44, 37, 19, 0.8) 95.546%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50.05%, rgb(11, 20, 32) 95.045%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.6) 25%, rgba(11, 43, 63, 0) 100%)" }} />
      <Container />
      <Header />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[6px] shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">Your journey starts now</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[50.4px] text-white w-[1199px]">
        <p className="leading-[63px] whitespace-pre-wrap">Let’s Create a Better Future Together</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#fffdf7] text-[18px] w-[min-content]">
        <p className="leading-[28px] whitespace-pre-wrap">Our team is committed to supporting you at every step—offering clear insights, reliable solutions, and prompt responses to all your inquiries. Whether it’s partnership opportunities, product specifications, or operational details, we’re here to help.</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[55.2px] relative rounded-[8px] shrink-0 w-[195.94px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[25.2px] justify-center leading-[0] left-[98.16px] text-[13.8px] text-black text-center top-[27.6px] w-[114.316px]">
        <p className="leading-[24px] whitespace-pre-wrap">Request a Call</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ceae5a] h-[55.2px] relative rounded-[8px] shrink-0 w-[171.27px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ceae5a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[25.2px] justify-center leading-[0] left-[85.8px] text-[13.8px] text-center text-white top-[27.6px] w-[89.608px]">
        <p className="leading-[24px] whitespace-pre-wrap">get a quote</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0 w-full">
      <Frame73 />
      <Frame74 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center relative shrink-0 w-full">
      <Frame10 />
      <Frame75 />
    </div>
  );
}

function Section() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 px-[328px] py-[140px] top-[4429px] w-[1920px]" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSection} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(3.59003e-06deg, rgba(0, 4, 53, 0.6) 9.42%, rgba(11, 43, 63, 0) 75.33%)" }} />
      </div>
      <Frame76 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="h-[681px] relative rounded-[8px] w-[422px]" data-name="Mask Group">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-full left-[-86.54%] max-w-none top-0 w-[219.23%]" src={imgMaskGroup} />
        </div>
      </div>
      <div className="absolute inset-[-0.12px_-0.02%_0.12px_0.02%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.016px_0%] mask-size-[422px_100%] rounded-[10px]" data-name="Image" style={{ maskImage: `url('${imgImage}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-full left-[-86.54%] max-w-none top-0 w-[219.23%]" src={imgMaskGroup} />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="h-[289px] relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgBackground1} />
    </div>
  );
}

function Frame97() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[22px] py-[28px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[28px] text-black tracking-[-0.48px]">
            <p className="leading-[41px] whitespace-pre-wrap">Our operations are powered by a diverse and highly skilled team spanning multiple geographies, operating with the same standard of precision and professionalism across all markets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[12px] relative w-[11.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.84 12">
        <g id="Icon">
          <path d={svgPaths.p1e44af80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#0b2b3f] content-stretch flex items-center p-[9px] relative rounded-[30px] shrink-0 size-[30px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex gap-[18px] items-center overflow-clip px-[26px] py-[12px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14.6px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[30px]">Contact Us</p>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[433px]">
      <Background1 />
      <Frame97 />
      <Link1 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[38px] h-[681px] items-start relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <MaskGroup2 />
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Petroleum products and derivatives</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d0be] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Precious metals</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d0be] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Infrastructure development for petroleum (storage terminals, ports, and related facilities)</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d0be] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Financing for smaInfrastructure development for precious metals (refineries, processing plants, mining zones for gold, silver, iron, etc.)ll to medium-scale mining projects in Africa and selected Asian markets.</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d0be] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Strategic partnerships with gold refineries and crude oil refineries</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d0be] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame45 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Alternative energy models and renewable energy project support</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d0be] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame47 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Logistics solutions including shipping, unloading, and transport services</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d0be] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Storage solutions with large-scale, strategically located facilities</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d0be] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame51 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Supply and support services for companies and institutions requiring regular deliveries of petroleum products, supported by logistics, storage, and hedging solutions</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d0be] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame53 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">{`Inventory management and risk control for clients using both large and  small volumes (retail and wholesale markets)`}</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[22px] items-start py-[14px] relative shrink-0 w-full">
      <div className="bg-[#ceae5a] rounded-[37px] shrink-0 size-[14px]" />
      <Frame55 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame42 />
      <Frame44 />
      <Frame46 />
      <Frame48 />
      <Frame50 />
      <Frame52 />
      <Frame54 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[21.9px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">{`EDG Gold & Petroleum is a truly global enterprise with a strong presence in multiple GCC states, African nations, and Asian markets. We specialize in:`}</p>
      </div>
      <Frame81 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[817px]">
      <Frame12 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame94 />
      <Frame13 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[44.89px] top-[140.12px] w-[1830px]">
      <Frame95 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute h-[1150px] left-0 right-0 top-0" data-name="Background">
      <Frame96 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute h-[835px] left-0 right-0 top-[500px]" data-name="Mask Group">
      <Background />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center py-px relative rounded-[6px] shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ceae5a] text-[24px] whitespace-nowrap">
        <p className="leading-[24px]">Key Strengths</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px relative">
      <Frame93 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[50.4px] text-black w-[1010px]">
        <p className="leading-[52px] whitespace-pre-wrap">Beyond bullet points, our strengths define our story.</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[12px] relative w-[11.83px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.83 12">
        <g id="Icon">
          <path d={svgPaths.p3107d000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPreviousSlide() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[54px]" data-name="Button - Previous slide">
      <div aria-hidden="true" className="absolute border border-[#ceae5a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute flex h-[12px] items-center justify-center left-[21.08px] top-[21px] w-[11.83px]">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[12px] relative w-[11.83px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.83 12">
        <g id="Icon">
          <path d={svgPaths.p2d521d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNextSlide() {
  return (
    <div className="bg-[#ceae5a] relative rounded-[8px] shrink-0 size-[54px]" data-name="Button - Next slide">
      <div aria-hidden="true" className="absolute border border-[#ceae5a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute flex h-[12px] items-center justify-center left-[21.08px] top-[21px] w-[11.83px]">
        <div className="-scale-y-100 flex-none">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <ButtonPreviousSlide />
      <ButtonNextSlide />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[30px] items-end justify-center relative shrink-0 w-full">
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function Background2() {
  return (
    <div className="relative shrink-0 size-[84px]" data-name="Background">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="Background">
          <rect fill="var(--fill-0, #7CC03F)" height="84" rx="42" width="84" />
          <path d={svgPaths.p44ba00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.07" />
        </g>
      </svg>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Background2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c8c8c] text-[14.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">01.</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#151515] text-[23px] w-[341px]">
        <p className="leading-[37.5px] whitespace-pre-wrap">Targeted Market Focus</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[18px] w-[min-content]">
        <p className="leading-[26.1px] whitespace-pre-wrap">{`Over 7 years of consistent trade across MENA & East Africa.`}</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[26px] items-start px-[40px] py-[36px] relative rounded-[15px] self-stretch shadow-[0px_4px_5px_0px_rgba(0,0,0,0.02)] shrink-0 w-[422px]" data-name="1">
      <Frame102 />
      <Frame66 />
    </div>
  );
}

function Background3() {
  return (
    <div className="relative shrink-0 size-[84px]" data-name="Background">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="Background">
          <rect fill="var(--fill-0, #7CC03F)" height="84" rx="42" width="84" />
          <g id="Vector">
            <path d={svgPaths.p2d13f840} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2770000} fill="var(--fill-0, white)" />
            <path d={svgPaths.pabc0980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31ed0b80} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[342px]">
      <Background3 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c8c8c] text-[14.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">02.</p>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame104 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[37.5px] justify-center leading-[0] relative shrink-0 text-[#151515] text-[23px] w-full">
        <p className="leading-[37.5px] whitespace-pre-wrap">Long-Term Partnerships</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[26.1px] relative shrink-0 text-[#555] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Partnerships with over 9 refineries</p>
        <p>and multiple governments.</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[26px] items-start px-[40px] py-[36px] relative rounded-[15px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.02)] shrink-0 w-[423px]" data-name="2">
      <Frame103 />
      <Frame64 />
    </div>
  );
}

function Background4() {
  return (
    <div className="relative shrink-0 size-[84px]" data-name="Background">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="Background">
          <rect fill="var(--fill-0, #7CC03F)" height="84" rx="42" width="84" />
          <g id="Vector">
            <path d={svgPaths.p3b870300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d617b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p366c6a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14c7ef00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p363bd7c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p4f3fd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p26992c90} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37e9300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2ff88670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3db50e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8161940} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2eaf6c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14fb9f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39d76c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2a1c8a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27bedd40} fill="var(--fill-0, white)" />
            <path d={svgPaths.pb906100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p26e1aa00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6552580} stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Background4 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c8c8c] text-[14.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">03.</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[37.5px] justify-center leading-[0] relative shrink-0 text-[#151515] text-[23px] w-full">
        <p className="leading-[37.5px] whitespace-pre-wrap">Strong Networks</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[26.1px] relative shrink-0 text-[#555] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Trusted suppliers and customers</p>
        <p>spanning continents.</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[26px] items-start px-[40px] py-[36px] relative rounded-[15px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.02)] shrink-0 w-[423px]" data-name="3">
      <Frame105 />
      <Frame63 />
    </div>
  );
}

function Background5() {
  return (
    <div className="relative shrink-0 size-[84px]" data-name="Background">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="Background">
          <rect fill="var(--fill-0, #7CC03F)" height="84" rx="42" width="84" />
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p24b27a80} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p171339f2} fill="var(--fill-0, white)" />
            <path d={svgPaths.p357a7500} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p2f6d4070} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2052d300} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p149c2a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1041b280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p5feb7f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.pcd3a930} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e7c8800} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p28a28e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p24b27a80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path d={svgPaths.p171339f2} stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path d={svgPaths.p357a7500} stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path clipRule="evenodd" d={svgPaths.p2f6d4070} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path clipRule="evenodd" d={svgPaths.p2052d300} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path d={svgPaths.p149c2a80} stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path d={svgPaths.p1041b280} stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path d={svgPaths.p5feb7f0} stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path d={svgPaths.pcd3a930} stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path d={svgPaths.p2e7c8800} stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <path clipRule="evenodd" d={svgPaths.p28a28e00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Background5 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c8c8c] text-[14.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">04.</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[37.5px] justify-center leading-[0] relative shrink-0 text-[#151515] text-[23px] w-full">
        <p className="leading-[37.5px] whitespace-pre-wrap">{`Reputation & Commitment`}</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[26.1px] relative shrink-0 text-[#555] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Delivering on promises with</p>
        <p>an excellent reputation.</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[26px] items-start px-[40px] py-[36px] relative rounded-[15px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.02)] shrink-0 w-[422px]" data-name="4">
      <Frame106 />
      <Frame62 />
    </div>
  );
}

function Background6() {
  return (
    <div className="relative shrink-0 size-[84px]" data-name="Background">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="Background">
          <rect fill="var(--fill-0, #7CC03F)" height="84" rx="42" width="84" />
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2ea59300} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.pbe3a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3fbe0480} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p3656fa00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2ea59300} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.6" />
            <path d={svgPaths.pbe3a80} stroke="var(--stroke-0, white)" strokeWidth="0.6" />
            <path d={svgPaths.p3fbe0480} stroke="var(--stroke-0, white)" strokeWidth="0.6" />
            <path clipRule="evenodd" d={svgPaths.p3656fa00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Background6 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c8c8c] text-[14.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">05.</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[37.5px] justify-center leading-[0] relative shrink-0 text-[#151515] text-[23px] w-full">
        <p className="leading-[37.5px] whitespace-pre-wrap">Flexible Services</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[26.1px] relative shrink-0 text-[#555] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Responsive and tailored solutions</p>
        <p>for diverse client needs.</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[26px] items-start px-[40px] py-[36px] relative rounded-[15px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.02)] shrink-0 w-[422px]" data-name="5">
      <Frame107 />
      <Frame65 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[33px] items-start relative shrink-0 w-[2075px]">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function HorizontalDivider() {
  return <div className="bg-[rgba(158,158,158,0.3)] h-[2px] shrink-0 w-[22px]" data-name="Horizontal Divider" />;
}

function HorizontalDivider1() {
  return <div className="bg-[#ceae5a] h-[2px] shrink-0 w-[22px]" data-name="Horizontal Divider" />;
}

function HorizontalDivider2() {
  return <div className="bg-[rgba(158,158,158,0.3)] h-[2px] shrink-0 w-[22px]" data-name="Horizontal Divider" />;
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[11px] items-end justify-center py-[8px] relative shrink-0 w-full">
      <HorizontalDivider />
      <HorizontalDivider1 />
      <HorizontalDivider2 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start justify-center relative shrink-0 w-full">
      <Frame61 />
      <Frame6 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col gap-[56px] items-start left-0 px-[45px] py-[140px] top-[2586px] w-[1920px]">
      <Frame31 />
      <Frame101 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[0] relative shrink-0 text-[#8c8c8c] tracking-[0.28px] uppercase w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[13px] w-[471px]">
        <p className="leading-[14px] whitespace-pre-wrap">{`OUR SERVICES & CAPABILITIES`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[13.1px] whitespace-nowrap">
        <p className="leading-[14px]">[CAPABILITIES]</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame35 />
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#dce0e3] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function AbImgJpg() {
  return (
    <div className="-translate-x-1/2 absolute h-[639px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_1px] mask-size-[893px_774px] top-[-1px] w-[893px]" data-name="ab-img.jpg" style={{ maskImage: `url('${imgAbImgJpg}')` }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMaskGroup1} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="h-[637px] relative rounded-[8px] shrink-0 w-[893px]" data-name="Mask Group">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMaskGroup1} />
      </div>
      <AbImgJpg />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col h-[637px] items-start relative shrink-0 w-[820px]">
      <MaskGroup3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[18px] tracking-[-0.18px] w-[806px]">
        <p className="leading-[27px] whitespace-pre-wrap">{`At EDG Gold & Petroleum, our services are designed to meet the dynamic needs of today’s global markets. With a strong foundation in commodity trading and an unwavering commitment to excellence, we offer a broad suite of solutions that span both the energy and precious metals sectors. Whether serving national governments, large enterprises, or strategic partners, we deliver performance with purpose and precision.`}</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[468px]">
      <Frame15 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[12px] relative w-[11.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.84 12">
        <g id="Icon">
          <path d={svgPaths.p1e44af80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#0b2b3f] content-stretch flex items-center p-[9px] relative rounded-[30px] shrink-0 size-[30px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex gap-[18px] items-center overflow-clip px-[26px] py-[12px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14.6px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[30px]">Get a Quote</p>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[58px] min-w-full relative shrink-0 text-[50.4px] text-black w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Empowering Trade. `}</p>
        <p>Delivering Value. Fueling Progress.</p>
      </div>
      <Frame26 />
      <Link2 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[818px]">
      <Frame27 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[192px] h-[637px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame90 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] h-[753px] items-start left-[45px] py-[10px] top-[3536px] w-[1830px]">
      <Frame34 />
      <Frame91 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start leading-[0] relative shrink-0 text-white w-[1002px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[50.4px] w-[499px]">
        <p className="leading-[61px] whitespace-pre-wrap">Bridging Two Strategic Sectors</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[24.3px] tracking-[-1.32px] w-[754px]">
        <p className="leading-[34px] whitespace-pre-wrap">{`At EDG Gold & Petroleum, our business model is truly unique—seamlessly integrating two of the most strategic sectors in the global marketplace:`}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[669px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[27px] relative shrink-0 text-[#555] text-[18px] tracking-[-0.18px] w-full whitespace-pre-wrap">
        <p className="mb-0">By combining these two critical industries into a unified commercial framework, we achieve exceptional risk management, optimized capital returns, and resilient market positioning. This integrated model enables us to balance cyclical market fluctuations, leverage cross-sector synergies, and deliver sustainable growth for our stakeholders.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Executing such a model demands a high level of professionalism and operational discipline. Every process, from sourcing to delivery, is designed to meet rigorous quality, compliance, and efficiency standards. Beyond trading, our focus extends to strategic investments in the infrastructure, logistics, and value-added industries connected to both gold and petroleum. These investments have allowed us to replicate and scale our successful model across multiple regions and continents.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] h-[406px] items-start justify-end pt-[56px] px-[63px] relative rounded-tl-[10px] shrink-0 w-[820px]" data-name="Container">
      <div className="absolute flex h-[406px] items-center justify-center left-0 top-0 w-[817px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[406px] relative w-[817px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 817 406">
              <path d={svgPaths.p17729200} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-end left-[1013px] rounded-[8px] top-[565px] w-[820px]">
      <Container1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[740px] items-start justify-end left-[45px] pb-[69px] pl-[56px] pt-[62px] rounded-[10px] top-[1475px] w-[1830px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgFrame64} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[10px] to-[rgba(44,37,18,0.5)]" />
      </div>
      <Frame108 />
      <Frame29 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="relative shrink-0 size-[102px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 102">
        <g id="Frame 891">
          <rect fill="var(--fill-0, #CEAE5A)" height="102" rx="51" width="102" />
          <g id="Vector">
            <path d={svgPaths.p3abbc300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p26da6340} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1766a800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p378cc1c0} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame98 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[31px] relative shrink-0 text-[24px] text-black tracking-[-0.6px] w-[217px] whitespace-pre-wrap">
        <p className="mb-0">Petroleum</p>
        <p>Products</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col h-[169px] items-start justify-center px-[44px] relative shrink-0 w-[470px]">
      <Frame17 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white content-stretch flex h-[169px] items-center relative rounded-[8px] shrink-0 w-[470px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame18 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="relative shrink-0 size-[102px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 102">
        <g id="Frame 891">
          <rect fill="var(--fill-0, #CEAE5A)" height="102" rx="51" width="102" />
          <g id="Vector">
            <path d={svgPaths.p1ff8cf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33dde000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3143e980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2dc53d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa773100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p338a3680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b607a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1db2f280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3490eb80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame99 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-black tracking-[-0.6px] w-[217px]">
        <p className="leading-[31px] whitespace-pre-wrap">Precious metals, led by gold</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col h-[169px] items-start justify-center px-[44px] relative shrink-0 w-[470px]">
      <Frame21 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white content-stretch flex gap-[30px] h-[169px] items-center relative rounded-[8px] shrink-0 w-[469px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute h-[169px] left-0 top-0 w-[470px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame20 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="absolute content-stretch flex gap-[44px] items-start left-[51px] top-[2277px] w-[1004px]">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="h-[149px] relative shrink-0 w-[137px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137 149">
        <g id="Frame 82">
          <g id="Vector">
            <path d={svgPaths.p3a6d6532} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p81b1e50} fill="white" />
            <path d={svgPaths.p37522800} fill="white" />
            <path d={svgPaths.p3fdc0e00} fill="white" />
            <path d={svgPaths.p16afcc80} fill="white" />
            <path d={svgPaths.p2dc71d00} fill="white" />
            <path d={svgPaths.pfc13400} fill="white" />
            <path d={svgPaths.p1af0b600} fill="white" />
            <path d={svgPaths.p380e1800} fill="white" />
            <path d={svgPaths.p30e35f00} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p4655980} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p229b2900} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p3ad585f2} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p2a54f072} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p2f16b300} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p32f76e00} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p70fb200} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p3a694d00} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p3d17c680} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p2be8e280} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p3d92900} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p3e7cb180} fill="var(--fill-0, #CEAE5A)" />
            <path d={svgPaths.p1f7e4300} fill="var(--fill-0, #CEAE5A)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[10px] items-start relative shrink-0 text-[14px] w-[221px]">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Who We Are</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[24px] whitespace-pre-wrap">CEO Message</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Our Business Approach</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Petroleum Products</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Precious metals, led by gold</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[16px] tracking-[-0.18px]">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[27px] whitespace-pre-wrap">News</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Contact Us</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[rgba(255,255,255,0.8)] w-full">
      <Frame71 />
      <Frame72 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start leading-[0] relative shrink-0 w-[360px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Quick Links</p>
      </div>
      <Frame70 />
    </div>
  );
}

function IconCalling2Svg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="icon_calling_2.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_401)" id="icon_calling_2.svg">
          <path d={svgPaths.p3cd11780} id="Vector" stroke="var(--stroke-0, #CEAE5A)" strokeMiterlimit="10" strokeWidth="1.8" />
          <path d={svgPaths.p3e444ce0} id="Vector_2" stroke="var(--stroke-0, #CEAE5A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_1_401">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconCalling2SvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="icon_calling_2.svg fill">
      <IconCalling2Svg1 />
    </div>
  );
}

function IconCalling2Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-0 overflow-clip size-[24px] top-[calc(50%+0.62px)]" data-name="icon_calling_2.svg">
      <IconCalling2SvgFill />
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[207.42px]" data-name="Item → Link">
      <IconCalling2Svg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[30px] justify-center leading-[0] left-[36px] text-[16px] text-[rgba(255,255,255,0.8)] top-[15px] w-[171.62px]">
        <p className="leading-[30px] whitespace-pre-wrap">+(1) 1230 452 8759</p>
      </div>
    </div>
  );
}

function IconEmail2Svg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[21.81px] left-1/2 top-1/2 w-[23.991px]" data-name="icon_email_2.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.991 21.81">
        <g clipPath="url(#clip0_1_373)" id="icon_email_2.svg">
          <path d={svgPaths.p3cd60880} id="Vector" stroke="var(--stroke-0, #CEAE5A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.63575" />
          <path d={svgPaths.p2c4421c0} id="Vector_2" stroke="var(--stroke-0, #CEAE5A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.63575" />
          <path d={svgPaths.p22ce3880} id="Vector_3" stroke="var(--stroke-0, #CEAE5A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.63575" />
        </g>
        <defs>
          <clipPath id="clip0_1_373">
            <rect fill="white" height="21.81" width="23.991" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconEmail2SvgFill() {
  return (
    <div className="absolute h-[21.81px] left-0 overflow-clip top-0 w-[24px]" data-name="icon_email_2.svg fill">
      <IconEmail2Svg1 />
    </div>
  );
}

function IconEmail2Svg() {
  return (
    <div className="-translate-y-1/2 absolute h-[21.81px] left-0 overflow-clip top-[calc(50%+0.62px)] w-[24px]" data-name="icon_email_2.svg">
      <IconEmail2SvgFill />
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="absolute h-[30px] left-0 top-[42px] w-[192.09px]" data-name="Item → Link">
      <IconEmail2Svg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[30px] justify-center leading-[0] left-[36px] text-[16px] text-[rgba(255,255,255,0.8)] top-[15px] w-[156.29px]">
        <p className="leading-[30px] whitespace-pre-wrap">synox@mail.com</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[72px] relative shrink-0 w-[300px]" data-name="List">
      <ItemLink6 />
      <ItemLink7 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-[276px]">
        <p className="leading-[30px] whitespace-pre-wrap">{`DMCC Business Centre, Level No 1 Jewellery & Gemplex 3, Dubai - UAE`}</p>
      </div>
      <List />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] h-[251px] items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">Contact Info</p>
      </div>
      <Frame78 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1174px]">
      <Frame68 />
      <Frame69 />
      <Frame77 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[12px] relative w-[11.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.84 12">
        <g id="Icon">
          <path d={svgPaths.p1e44af80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#ceae5a] overflow-clip relative rounded-[15px] shrink-0 size-[30px]" data-name="Background">
      <div className="absolute flex h-[12px] items-center justify-center left-[9.08px] top-[9px] w-[11.84px]">
        <div className="-scale-y-100 flex-none">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[30px]">subscribe</p>
      </div>
      <Background7 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16.9px] text-white tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">Your email</p>
      </div>
      <Frame82 />
    </div>
  );
}

function FormInput() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Form → Input">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.6)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container2 />
      <FormInput />
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[23px] relative shrink-0 w-[103.17px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#ceae5a] text-[15px] top-[11.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="decoration-solid leading-[27px] underline">Privacy Policy</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <div className="relative rounded-[1px] shrink-0 size-[14px]">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[27px]">{`By signing up, you agree to the `}</p>
      </div>
      <Link3 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[511px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-[271px]">
        <p className="leading-[24px] whitespace-pre-wrap">Stay tuned for more updates</p>
      </div>
      <Frame80 />
      <Frame83 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame67 />
      <Frame79 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[6px] items-center leading-[0] relative shrink-0 tracking-[-0.18px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[24px]">{`© 2025 `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ceae5a] text-[14.8px]">
        <p className="leading-[24px]">edg-gp.com</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14.6px] text-white">
        <p className="leading-[24px]">. All Rights Reserved.</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame87 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame86 />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.pc8a9700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListitemLink() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.5)] left-[calc(50%-82.24px)] rounded-[5px] size-[50px] top-0" data-name="Listitem → Link">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p1e304800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListitemLink1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.5)] left-[calc(50%-27.42px)] rounded-[5px] size-[50px] top-0" data-name="Listitem → Link">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p3b61c280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListitemLink2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.5)] left-[calc(50%+27.41px)] rounded-[5px] size-[50px] top-0" data-name="Listitem → Link">
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p22d05b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListitemLink3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.5)] left-[calc(50%+82.24px)] rounded-[5px] size-[50px] top-0" data-name="Listitem → Link">
      <Svg3 />
    </div>
  );
}

function List1() {
  return (
    <div className="h-[50px] relative shrink-0 w-[214.48px]" data-name="List">
      <ListitemLink />
      <ListitemLink1 />
      <ListitemLink2 />
      <ListitemLink3 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <List1 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame89 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-[1830px]">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Frame85 />
      <Frame88 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[51px] items-start left-[45px] top-[79px] w-[1830px]">
      <Frame57 />
      <Frame84 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black bottom-0 h-[471px] left-0 overflow-clip right-0" data-name="Footer">
      <div className="absolute inset-[0.16%_0_-5.09%_59.9%]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgRectangle} />
      </div>
      <Frame56 />
    </div>
  );
}

export default function AboutUsOurBusinessApproach() {
  return (
    <div className="bg-white relative size-full" data-name="About Us - Our Business Approach">
      <Hero />
      <Section />
      <MaskGroup1 />
      <Frame33 />
      <Frame92 />
      <Frame28 />
      <Frame100 />
      <Footer />
    </div>
  );
}