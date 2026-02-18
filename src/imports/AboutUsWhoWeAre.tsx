import svgPaths from "./svg-91r9uekqyq";
import imgHero from "@/assets/535e8e792ff7af27821bfc3fd8773435c26fd91b.png";
import imgDecorPng from "@/assets/a3dece847acdf1321aff9e051494b49b5b4ae175.png";
import imgBackground1 from "@/assets/d6476fda33009cbd54e41a9a5e032505b1113a18.png";
import imgBackground2 from "@/assets/a4c4e05b29a9187a98e4b34e896c8c07af6ed533.png";
import imgFrame64 from "@/assets/e82cf92c9617fe67354327de7e9e517a2e5bc58a.png";
import imgDecor2Png from "@/assets/d04c7631bc9524f2a543f3cc95f383c977d3b38c.png";
import imgAbImg1Jpg from "@/assets/1ac783f921d4f235befbc08ea089608fd5ca7f33.png";
import imgAbImg1Jpg1 from "@/assets/7a2bbfab3869ed54c0dac75db39e66942ee54f70.png";
import imgAbImg1Jpg2 from "@/assets/c50290f6d265153aa2608cc818b152b7d1e913d3.png";
import imgAbImg1Jpg3 from "@/assets/dc0ffd624c21a3b416fa79072c458ee4456224b8.png";
import imgBpPng from "@/assets/d49f19aa8493aac5092e4202074027f4138cec9a.png";
import imgHarbourEnergyPng from "@/assets/0858992a4b38f6eee43970c07dfaa06babf77247.png";
import imgEquinorPng from "@/assets/509a55a1a570e289f42a47af3e76d143f3910ddf.png";
import imgMaersekPng from "@/assets/45b5a55fe23efc25cb1a2a83edffa56651de175c.png";
import imgPerencoPng from "@/assets/0f312acfd7661746df1a946a8f08b75656c8d77a.png";
import imgSubsea7Png from "@/assets/04a38e18500a05c9338f7e479bacabfd32910efa.png";
import imgSpiritEnergyPng from "@/assets/2835c4df047e146bffdc6d4eaac3a16e85f5bd7c.png";
import imgTotalPng from "@/assets/1f87f80505240dbe46a6b23840a9e076447e4ce8.png";
import imgRectangle from "@/assets/be514fd866e5546a105d135dc899bd98fe99b8d8.png";
import imgSection from "@/assets/0c4be190a8eb1ce8c184bdb17b1fc6ac0ee2159b.png";
import { imgBackground, imgBackground3 } from "./svg-x4f1i";

function MaskGroup() {
  return (
    <div className="absolute bottom-0 h-[40px] left-0 right-0" data-name="Mask Group">
      <div className="absolute bg-white bottom-0 h-[40px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_40px] right-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }} />
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#ceae5a] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[9px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-white">
            <p className="leading-[24px] whitespace-pre-wrap">Who We Are</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[9px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#151515] text-[14px]">
            <p className="leading-[24px] whitespace-pre-wrap">CEO Message</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[9px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#151515] text-[14px]">
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
      <Frame69 />
      <Frame68 />
      <Frame70 />
    </div>
  );
}

function MenuDropDown() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[347px] top-[61px] w-[267px]" data-name="menu drop down">
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
        <p className="leading-[16px]">Who We are</p>
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[45px] text-[55.4px] text-white top-[343.5px] w-[377.75px]">
        <p className="leading-[67px] whitespace-pre-wrap">Who We Are</p>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Item → Link">
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

function Frame2() {
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
      <Frame2 />
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

function Frame() {
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
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.1px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">info@edg-gp.com</p>
      </div>
      <div className="bg-[#ceae5a] h-px shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a8a8a] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">Email us:</p>
      </div>
      <Button1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <Frame />
      <Frame4 />
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[66px] items-center justify-end relative shrink-0">
      <Frame5 />
      <ItemLink5 />
      <Link />
    </div>
  );
}

function Frame3() {
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
      <Frame1 />
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 px-[45px] top-[12px] w-[1920px]" data-name="Header">
      <Frame3 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[540px] left-0 right-0 top-0" data-name="hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(270deg, rgba(204, 174, 92, 0.3) 0%, rgba(0, 0, 0, 0) 57.057%), linear-gradient(1.42109e-14deg, rgba(0, 0, 0, 0) 45.746%, rgba(44, 37, 19, 0.8) 95.546%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50.05%, rgb(11, 20, 32) 95.045%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.6) 25%, rgba(11, 43, 63, 0) 100%)" }} />
      <Container />
      <Header />
    </div>
  );
}

function Background() {
  return (
    <div className="h-[483px] relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute h-[120.81%] left-[-0.05%] max-w-none top-[-10.41%] w-[100.05%]" src={imgBackground1} />
        </div>
        <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgBackground2} />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] items-start relative shrink-0 w-[820px]">
      <Background />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[44px] relative shrink-0 text-[28.3px] text-black tracking-[-1.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`At EDG Gold & Petroleum DMCC, we are more than a commodities`}</p>
        <p className="mb-0">trading company—we are a strategic partner in powering global</p>
        <p>markets and enabling responsible growth.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[27px] relative shrink-0 text-[#555] text-[18px] tracking-[-0.18px] w-[915px] whitespace-pre-wrap">
        <p className="mb-0">{`With a focus on the ethical and efficient trading of petroleum products and precious metals, we operate across key geographies including the Middle East, Africa, and beyond. Our business model spans the full supply chain—from sourcing and transportation to storage and distribution—ensuring product availability, quality, and reliability for both public and private sectors. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`What sets us apart is our deep market insight, logistical strength, and unwavering commitment to sustainability and integrity. Through our expansive network and sister companies, we provide tailored solutions that address evolving energy needs and market opportunities while contributing positively to the communities we serve. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`From fuel oil, gasoil, and gasoline to responsibly sourced gold, our diverse portfolio reflects our ability to navigate the complexities of global markets while meeting the evolving needs of both public and private sector clients. Whether it’s securing energy access for governments or supplying refined products to industrial operators, we deliver with precision, professionalism, and integrity. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Our integrated supply chain operations span the full cycle—from sourcing and logistics to distribution and delivery—enabling us to optimize performance, reduce risk, and ensure product availability across borders. Through our network of sister companies and regional offices, we bring a local understanding to global trading, blending market insight with on-the-ground agility.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
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

function Frame13() {
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
        <p className="leading-[30px]">request a quote Us</p>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start pt-[20px] relative shrink-0 w-[915px]">
      <Frame30 />
      <Link1 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame26 />
      <Frame12 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[49.99px] relative w-[49.82px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.82 49.99">
        <g id="Icon">
          <path d={svgPaths.p270f2a00} fill="var(--fill-0, #CEAE5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <div className="absolute flex h-[49.99px] items-center justify-center left-[0.09px] top-[0.01px] w-[49.82px]">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container1 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-center text-white tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">30</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.4px] text-white tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Years of experience</p>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.4)] border-solid border-t inset-0 pointer-events-none" />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[27px] relative shrink-0 text-[17px] text-white tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">leaders in industrial</p>
        <p>{`manufacturing & technology`}</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[44px] items-start justify-center p-[44px] relative w-full">
          <Frame16 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-black content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame17 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[49.99px] relative w-[49.82px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.82 49.99">
        <g id="Icon">
          <path d={svgPaths.p2efe3f00} fill="var(--fill-0, #CEAE5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <div className="absolute flex h-[49.99px] items-center justify-center left-[0.09px] top-[0.01px] w-[49.82px]">
        <div className="-scale-y-100 flex-none">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-black text-center tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">75</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.6px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Global locations</p>
      </div>
      <Frame20 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[27px] relative shrink-0 text-[#8c8c8c] text-[17px] tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">countries where the Group has built</p>
        <p>at least one project</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[44px] items-start p-[44px] relative w-full">
        <Frame19 />
        <Frame23 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame18 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[49.99px] relative w-[49.82px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.82 49.99">
        <g id="Icon">
          <path d={svgPaths.p2134d800} fill="var(--fill-0, #CEAE5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <div className="absolute flex h-[49.99px] items-center justify-center left-[0.09px] top-[0.01px] w-[49.82px]">
        <div className="-scale-y-100 flex-none">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container3 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-black text-center tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">1.2.K</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.4px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Total employee</p>
      </div>
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[27px] relative shrink-0 text-[#8c8c8c] text-[17px] tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">direct and indirect employees</p>
        <p>working on our projects</p>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Frame35 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[44px] relative w-full">
        <Frame112 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame24 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[49.99px] relative w-[49.82px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.82 49.99">
        <g id="Icon">
          <path d={svgPaths.p18c43880} fill="var(--fill-0, #CEAE5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <div className="absolute flex h-[49.99px] items-center justify-center left-[0.09px] top-[0.01px] w-[49.82px]">
        <div className="-scale-y-100 flex-none">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container4 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-black text-center tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">15B</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.4px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Annual revenue</p>
      </div>
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[17px] items-start min-h-px min-w-px relative w-full">
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c8c] text-[17px] tracking-[-0.18px] w-[280px]">
        <p className="leading-[27px] whitespace-pre-wrap">total project value of all time</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] h-[280px] items-start relative shrink-0 w-full">
      <Frame38 />
      <Frame40 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[44px] relative w-full">
        <Frame113 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame37 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
      <Frame25 />
      <Frame22 />
      <Frame31 />
      <Frame36 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[140px] items-center left-0 px-[45px] py-[100px] top-[500px] w-[1920px]">
      <Frame29 />
      <Frame21 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[27px] items-center relative shrink-0 w-[155px]" data-name="Container">
      <div className="h-[35px] relative shrink-0 w-[31px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 35">
          <g id="Vector">
            <path d={svgPaths.p270af370} fill="var(--fill-0, white)" />
            <path d={svgPaths.p255b1f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2704b200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ff00280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8376d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p15721d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3e8ce280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f7bc000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36dcb000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1dffc100} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ceae5a] text-[30px] whitespace-nowrap">
        <p className="leading-[30px]">Vision</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f3f3f3] text-[16px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">To become the first-choice partner for investors in the energy and precious metals sectors. Our long-term goal is to expand strategic corridors, lead in ethical sourcing, and enable access to essential commodities, especially across high-growth regions in the Middle East and Africa.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="backdrop-blur-[10.7px] content-stretch flex flex-col gap-[33px] h-[348px] items-start pb-[39px] pt-[32px] px-[29px] relative rounded-tl-[10px] shrink-0 w-[577px]" data-name="Container" style={{ backgroundImage: "linear-gradient(213.303deg, rgba(0, 0, 0, 0) 58.539%, rgba(0, 0, 0, 0.8) 88.96%), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(206, 174, 90, 0.1) 0%, rgba(206, 174, 90, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-tl-[10px]" />
      <Container6 />
      <Frame7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[27px] items-center relative shrink-0 w-[181px]" data-name="Container">
      <div className="h-[35px] relative shrink-0 w-[34px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 35">
          <g id="Vector">
            <path d={svgPaths.p2a25ac80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2866b800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p86366f0} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ceae5a] text-[30px] whitespace-nowrap">
        <p className="leading-[30px]">Mission</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f3f3f3] text-[16px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">To support the energy and precious metals sectors through an integrated business model that enhances sustainability, advances infrastructure, and maximizes value for every EDG partner—through strategic, intelligent solutions that deliver long-term growth and impact. We are driven by our dedication to operational efficiency, responsible sourcing, and long-term partnerships that empower global supply chains and energy access.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="backdrop-blur-[10.7px] content-stretch flex flex-col gap-[33px] h-[348px] items-start pb-[39px] pt-[32px] px-[29px] relative rounded-tr-[10px] shrink-0 w-[577px]" data-name="Container" style={{ backgroundImage: "linear-gradient(146.6deg, rgba(0, 0, 0, 0) 58.578%, rgba(0, 0, 0, 0.8) 97.515%), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(206, 174, 90, 0.1) 0%, rgba(206, 174, 90, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-tr-[10px]" />
      <Container8 />
      <Frame8 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end pl-[102px] relative shrink-0">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[722px] items-center justify-end left-[45px] pl-[460px] rounded-[10px] top-[1853px] w-[1830px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute h-[169.01%] left-0 max-w-none top-[-65.97%] w-full" src={imgFrame64} />
        </div>
        <div className="absolute inset-0 rounded-[10px]" style={{ backgroundImage: "linear-gradient(160.937deg, rgba(0, 0, 0, 0) 32.933%, rgba(0, 0, 0, 0.5) 67.854%)" }} />
      </div>
      <Frame42 />
    </div>
  );
}

function Decor2Png() {
  return (
    <div className="-translate-x-1/2 absolute h-[724px] left-[calc(50%+578px)] top-[731px] w-[764px]" data-name="decor-2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDecor2Png} />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[0] relative shrink-0 text-[#8c8c8c] tracking-[0.28px] uppercase w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[13px] w-[471px]">
        <p className="leading-[14px] whitespace-pre-wrap">We are providing for your business.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[13.1px] whitespace-nowrap">
        <p className="leading-[14px]">[ why choose us ]</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame45 />
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#dce0e3] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="h-[94px] relative shrink-0 w-[607px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#ceae5a] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[93px] justify-center leading-[0] left-[33px] text-[#555] text-[16px] top-[46.5px] tracking-[-0.18px] w-[574px]">
        <p className="leading-[31.2px] whitespace-pre-wrap">{`At EDG Gold & Petroleum, our values are the foundation of everything we do. They define how we operate, how we serve, and how we grow — together with our clients, partners, and communities.`}</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[50.4px] text-black w-[589px]">
        <p className="leading-[100px] whitespace-pre-wrap">Our Core values</p>
      </div>
      <VerticalBorder />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[45px] top-[100px] w-[1830px]">
      <Frame44 />
      <Frame46 />
    </div>
  );
}

function AbImg1Jpg() {
  return (
    <div className="h-[180px] relative rounded-[10px] shrink-0 w-[419px]" data-name="ab-img1.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgAbImg1Jpg} />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#ceae5a] text-[14.5px] tracking-[-0.18px] w-[19.86px]">
        <p className="leading-[24px] whitespace-pre-wrap">01.</p>
      </div>
      <AbImg1Jpg />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame47 />
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#dce0e3] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[30px]">{`Integrity `}</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#555] text-[16px] w-[418px]">
        <p className="leading-[22px] whitespace-pre-wrap">We conduct every transaction with honesty, transparency, and a deep respect for ethical practices. Trust is not just earned—it’s built through consistent action, and we uphold that trust in every partnership, every time.</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col gap-[38px] items-start p-[40px] relative w-full">
        <Frame48 />
        <Frame50 />
      </div>
    </div>
  );
}

function AbImg1Jpg1() {
  return (
    <div className="h-[180px] relative rounded-[10px] shrink-0 w-[419px]" data-name="ab-img1.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgAbImg1Jpg1} />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ceae5a] text-[14.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">02.</p>
      </div>
      <AbImg1Jpg1 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame54 />
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#dce0e3] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[30px]">Customer Focus</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[87px] justify-center leading-[22px] relative shrink-0 text-[#555] text-[16px] w-[418px] whitespace-pre-wrap">
        <p className="mb-0">Our clients are at the center of our strategy. We listen closely, respond swiftly, and deliver tailored solutions that drive results. Your success is our mission— every deal, every delivery, every day.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-full">
      <Frame53 />
      <Frame55 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch">
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <Frame52 />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full">
      <Frame49 />
      <Frame51 />
    </div>
  );
}

function AbImg1Jpg2() {
  return (
    <div className="h-[180px] relative rounded-[10px] shrink-0 w-[419px]" data-name="ab-img1.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgAbImg1Jpg2} />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ceae5a] text-[14.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">03.</p>
      </div>
      <AbImg1Jpg2 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame62 />
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#dce0e3] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[30px]">{`Sustainability  `}</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#555] text-[16px] w-[418px]">
        <p className="leading-[22px] whitespace-pre-wrap">We are committed to responsible sourcing, sustainable trading, and minimizing our environmental impact. From ethical gold sourcing to fuel efficiency, we champion practices that benefit both business and the planet.</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-full">
      <Frame61 />
      <Frame63 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch">
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <Frame57 />
      </div>
    </div>
  );
}

function AbImg1Jpg3() {
  return (
    <div className="h-[180px] relative rounded-[10px] shrink-0 w-[419px]" data-name="ab-img1.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgAbImg1Jpg3} />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ceae5a] text-[14.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">04.</p>
      </div>
      <AbImg1Jpg3 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame67 />
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#dce0e3] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[30px]">{`Innovation `}</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#555] text-[16px] w-[418px]">
        <p className="leading-[22px] whitespace-pre-wrap">In a rapidly changing world, we believe in staying ahead. We invest in technology, adopt data-driven insights, and continuously evolve to offer smarter, faster, and more agile trading solutions across our gold and petroleum divisions.</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-full">
      <Frame66 />
      <Frame71 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch">
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <Frame65 />
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full">
      <Frame56 />
      <Frame64 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[65px] items-start left-[35px] p-[10px] top-[399px] w-[1850px]">
      <Frame58 />
      <Frame60 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#fafafa] h-[1468px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_1468px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Decor2Png />
      <Frame43 />
      <Frame59 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute h-[1468px] left-0 right-0 top-[2575px]" data-name="Mask Group">
      <Background1 />
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="h-[62px] relative shrink-0 w-[609px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#ceae5a] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[62.21px] justify-center leading-[0] left-[33px] text-[#555] text-[16px] top-[31.1px] tracking-[-0.18px] w-[398.23px]">
        <p className="leading-[31.2px] whitespace-pre-wrap">Dedicated to supporting our clients and partners in every strategic step.</p>
      </div>
    </div>
  );
}

function Icon5() {
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
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
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
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <ButtonPreviousSlide />
      <ButtonNextSlide />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <VerticalBorder1 />
      <Frame72 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-end justify-between pl-[172px] relative shrink-0 w-[2001px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[50.4px] text-black w-[373.45px]">
        <p className="leading-[100px] whitespace-pre-wrap">Partners</p>
      </div>
      <Frame111 />
    </div>
  );
}

function BpPng() {
  return (
    <div className="h-[129.75px] relative rounded-[10px] shrink-0 w-[210.84px]" data-name="bp.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBpPng} />
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-white h-[192px] relative rounded-[247px] shrink-0 w-[311px]">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <BpPng />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[247px]" />
    </div>
  );
}

function HarbourEnergyPng() {
  return (
    <div className="h-[129.75px] relative shrink-0 w-[210px]" data-name="harbour-energy.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHarbourEnergyPng} />
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#fefefe] h-[192px] relative rounded-[247px] shrink-0 w-[311px]" data-name="Item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[9px] relative rounded-[inherit] size-full">
        <HarbourEnergyPng />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[247px]" />
    </div>
  );
}

function EquinorPng() {
  return (
    <div className="h-[129.75px] relative shrink-0 w-[210px]" data-name="equinor.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEquinorPng} />
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-[#fefefe] h-[192px] relative rounded-[247px] shrink-0 w-[311px]" data-name="Item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[9px] relative rounded-[inherit] size-full">
        <EquinorPng />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[247px]" />
    </div>
  );
}

function MaersekPng() {
  return (
    <div className="h-[131px] relative shrink-0 w-[212px]" data-name="maersek.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMaersekPng} />
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="bg-[#fefefe] h-[192px] relative rounded-[247px] shrink-0 w-[311px]" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[9px] relative rounded-[inherit] size-full">
        <MaersekPng />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[247px]" />
    </div>
  );
}

function PerencoPng() {
  return (
    <div className="h-[131px] relative shrink-0 w-[212px]" data-name="perenco.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPerencoPng} />
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="bg-[#fefefe] h-[192px] relative rounded-[247px] shrink-0 w-[311px]" data-name="Item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[9px] relative rounded-[inherit] size-full">
        <PerencoPng />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[247px]" />
    </div>
  );
}

function Subsea7Png() {
  return (
    <div className="h-[129.75px] relative shrink-0 w-[210px]" data-name="subsea7.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSubsea7Png} />
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="bg-[#fefefe] h-[192px] relative rounded-[247px] shrink-0 w-[311px]" data-name="Item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[9px] relative rounded-[inherit] size-full">
        <Subsea7Png />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[247px]" />
    </div>
  );
}

function SpiritEnergyPng() {
  return (
    <div className="h-[129.75px] relative shrink-0 w-[210px]" data-name="spirit-energy.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSpiritEnergyPng} />
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="bg-[#fefefe] h-[192px] relative rounded-[247px] shrink-0 w-[311px]" data-name="Item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[9px] relative rounded-[inherit] size-full">
        <SpiritEnergyPng />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[247px]" />
    </div>
  );
}

function TotalPng() {
  return (
    <div className="h-[129.75px] relative shrink-0 w-[210px]" data-name="total.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTotalPng} />
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="bg-[#fefefe] h-[192px] relative rounded-[247px] shrink-0 w-[311px]" data-name="Item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-px py-[9px] relative rounded-[inherit] size-full">
        <TotalPng />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[247px]" />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[20px] items-start px-[45px] relative shrink-0">
      <Frame82 />
      <Item />
      <Item1 />
      <ItemLink6 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-start left-[-126px] top-[4402px] w-[2172px]">
      <Frame106 />
      <Frame81 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[0] relative shrink-0 text-[#8c8c8c] tracking-[0.28px] uppercase w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[13px] w-[471px]">
        <p className="leading-[14px] whitespace-pre-wrap">TRADING ACTIVITES</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[13.1px] whitespace-nowrap">
        <p className="leading-[14px]">[Core Business Focus]</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame74 />
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#dce0e3] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[27px] relative shrink-0 text-[#555] text-[18px] tracking-[-0.18px] w-[915px] whitespace-pre-wrap">
        <p className="mb-0">{`At EDG Gold & Petroleum, our core strength lies in the strategic trading of a diverse portfolio of oil and petroleum-based products. We operate with precision, foresight, and adaptability—enabling us to respond to emerging opportunities and evolving global demand with speed and confidence. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Our trading activities span a full spectrum of refined fuels, with a growing emphasis on diesel and mogas exports to high-demand international markets. This uptick reflects both our market agility and our ability to identify and capitalize on dynamic shifts in regional and global energy trends. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Leveraging deep industry expertise and robust global networks, we have forged reliable spot and term purchase and supply agreements with leading trading partners. These long-standing relationships allow us to deliver exceptional value while ensuring continuity, scalability, and responsiveness in an increasingly complex energy environment. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Whether navigating volatile markets or entering new frontiers, EDG Gold & Petroleum stands as a trusted partner—powering growth through innovation, insight, and integrity.`}</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame78 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame77 />
    </div>
  );
}

function Icon7() {
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

function Frame79() {
  return (
    <div className="bg-[#0b2b3f] content-stretch flex items-center p-[9px] relative rounded-[30px] shrink-0 size-[30px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex gap-[18px] items-center overflow-clip px-[26px] py-[12px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14.6px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[30px]">View Our Licence</p>
      </div>
      <Frame79 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[58px] relative shrink-0 text-[50.4px] text-black whitespace-nowrap">
        <p className="mb-0">{`Energy &`}</p>
        <p>Opportunity Aligned</p>
      </div>
      <Frame76 />
      <Link2 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[980px]">
      <Frame75 />
    </div>
  );
}

function Background2() {
  return (
    <div className="h-[703px] relative rounded-[10px] shrink-0 w-[749px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-[120.81%] left-[-0.05%] max-w-none top-[-10.41%] w-[100.05%]" src={imgBackground1} />
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex h-[703px] items-center justify-between relative shrink-0 w-full">
      <Frame108 />
      <Background2 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[45px] py-[10px] top-[4876px] w-[1830px]">
      <Frame73 />
      <Frame109 />
    </div>
  );
}

function Frame85() {
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

function Frame88() {
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

function Frame89() {
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

function Frame87() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[rgba(255,255,255,0.8)] w-full">
      <Frame88 />
      <Frame89 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start leading-[0] relative shrink-0 w-[360px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Quick Links</p>
      </div>
      <Frame87 />
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

function ItemLink7() {
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

function ItemLink8() {
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
      <ItemLink7 />
      <ItemLink8 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-[276px]">
        <p className="leading-[30px] whitespace-pre-wrap">{`DMCC Business Centre, Level No 1 Jewellery & Gemplex 3, Dubai - UAE`}</p>
      </div>
      <List />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] h-[251px] items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">Contact Info</p>
      </div>
      <Frame91 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1174px]">
      <Frame85 />
      <Frame86 />
      <Frame90 />
    </div>
  );
}

function Icon8() {
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

function Background3() {
  return (
    <div className="bg-[#ceae5a] overflow-clip relative rounded-[15px] shrink-0 size-[30px]" data-name="Background">
      <div className="absolute flex h-[12px] items-center justify-center left-[9.08px] top-[9px] w-[11.84px]">
        <div className="-scale-y-100 flex-none">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[30px]">subscribe</p>
      </div>
      <Background3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16.9px] text-white tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">Your email</p>
      </div>
      <Frame94 />
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

function Frame93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container9 />
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

function Frame95() {
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

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[511px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-[271px]">
        <p className="leading-[24px] whitespace-pre-wrap">Stay tuned for more updates</p>
      </div>
      <Frame93 />
      <Frame95 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame84 />
      <Frame92 />
    </div>
  );
}

function Frame99() {
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

function Frame98() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame99 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame98 />
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

function Frame101() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <List1 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame101 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-[1830px]">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Frame97 />
      <Frame100 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[51px] items-start left-[45px] top-[79px] w-[1830px]">
      <Frame83 />
      <Frame96 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black h-[471px] left-0 overflow-clip right-0 top-[6441px]" data-name="Footer">
      <div className="absolute inset-[0.16%_0_-5.09%_59.9%]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgRectangle} />
      </div>
      <Frame80 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[6px] shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">Your journey starts now</p>
      </div>
    </div>
  );
}

function Frame104() {
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

function Frame105() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0 w-full">
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center relative shrink-0 w-full">
      <Frame9 />
      <Frame103 />
    </div>
  );
}

function Section() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 px-[328px] py-[140px] top-[5844px] w-[1920px]" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSection} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(3.59003e-06deg, rgba(0, 4, 53, 0.6) 9.42%, rgba(11, 43, 63, 0) 75.33%)" }} />
      </div>
      <Frame102 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[5844px]">
      <Footer />
      <Section />
    </div>
  );
}

export default function AboutUsWhoWeAre() {
  return (
    <div className="bg-white relative size-full" data-name="About Us - Who We Are">
      <Hero />
      <Frame28 />
      <Frame41 />
      <MaskGroup1 />
      <Frame107 />
      <Frame110 />
      <Group />
    </div>
  );
}