import svgPaths from "./svg-ixy99k2xf7";
import imgHeroHeader from "figma:asset/8fefd188229e3a9ca69fac13417d3ec9eba5d830.png";
import imgFrame64 from "figma:asset/e82cf92c9617fe67354327de7e9e517a2e5bc58a.png";
import imgRightContent from "figma:asset/4738369dabf096199f374956d2410fe7d923ac7c.png";
import imgValuesMetron from "figma:asset/633432338628a91717fca8c2f1f8990243063025.png";
import imgValuesMetron1 from "figma:asset/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";
import imgFrame9 from "figma:asset/750d2003ab2fbe82c81bdb4dad6706aa07f3b34b.png";
import imgRectangle1 from "figma:asset/b25bf13818fd4a847b2b7fc565076139896fafc8.png";
import imgBpPng from "figma:asset/d49f19aa8493aac5092e4202074027f4138cec9a.png";
import imgHarbourEnergyPng from "figma:asset/0858992a4b38f6eee43970c07dfaa06babf77247.png";
import imgEquinorPng from "figma:asset/509a55a1a570e289f42a47af3e76d143f3910ddf.png";
import imgMaersekPng from "figma:asset/45b5a55fe23efc25cb1a2a83edffa56651de175c.png";
import imgPerencoPng from "figma:asset/0f312acfd7661746df1a946a8f08b75656c8d77a.png";
import imgSubsea7Png from "figma:asset/04a38e18500a05c9338f7e479bacabfd32910efa.png";
import imgSpiritEnergyPng from "figma:asset/2835c4df047e146bffdc6d4eaac3a16e85f5bd7c.png";
import imgTotalPng from "figma:asset/1f87f80505240dbe46a6b23840a9e076447e4ce8.png";
import imgValuesMetron2 from "figma:asset/c09daf8815cbf8141d45e5907ad2d5e544327ae8.png";
import imgRectangle from "figma:asset/be514fd866e5546a105d135dc899bd98fe99b8d8.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-start justify-center leading-[normal] relative shrink-0 text-[100px] text-white tracking-[-2px] w-[928px]" data-name="Heading">
      <p className="relative shrink-0">Bridging markets,</p>
      <p className="relative shrink-0">Fueling prosperity</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[32px] py-[14px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ceae5a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] text-black">Explore Our Resources</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[80px] top-[212px] w-[1280px]">
      <Heading />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[38px] relative shrink-0 text-[24px] text-white w-[896px] whitespace-pre-wrap">{`At EDG Gold & Petroleum, we create lasting value through responsible global trade, building trust across energy and precious metals markets from the UAE to the Middle East and Africa.`}</p>
      <Button />
    </div>
  );
}

function ItemLink() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Item → Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[23.11px]">Home</p>
      </div>
      <div className="bg-[#ceae5a] h-[2px] shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[23.11px]">About Us</p>
      </div>
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

function Button1() {
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
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-name="Button">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.1px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">info@edg-gp.com</p>
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
      <Button2 />
    </div>
  );
}

function Frame9() {
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
      <Frame9 />
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

function HeroHeader() {
  return (
    <div className="h-[830px] overflow-clip relative shrink-0 w-full" data-name="Hero Header">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroHeader} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <Frame88 />
      <Header />
    </div>
  );
}

function Icon() {
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

function Container() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <div className="absolute flex h-[49.99px] items-center justify-center left-[0.09px] top-[0.01px] w-[49.82px]">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-center text-white tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">30</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.4px] text-white tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Years of experience</p>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame28() {
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

function Frame30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[44px] items-start justify-center p-[44px] relative w-full">
          <Frame29 />
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-black content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame30 />
    </div>
  );
}

function Icon1() {
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

function Frame33() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container1 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-black text-center tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">75</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.6px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Global locations</p>
      </div>
      <Frame33 />
    </div>
  );
}

function Frame36() {
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

function Frame31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[44px] items-start p-[44px] relative w-full">
        <Frame32 />
        <Frame36 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame31 />
    </div>
  );
}

function Icon2() {
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

function Frame42() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-black text-center tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">1.2.K</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.4px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Total employee</p>
      </div>
      <Frame42 />
    </div>
  );
}

function Frame43() {
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

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full">
      <Frame39 />
      <Frame43 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[44px] relative w-full">
        <Frame91 />
      </div>
    </div>
  );
}

function Frame40() {
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

function Icon3() {
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

function Frame47() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container3 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-black text-center tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">15B</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.4px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Annual revenue</p>
      </div>
      <Frame47 />
    </div>
  );
}

function Frame48() {
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

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] h-[280px] items-start relative shrink-0 w-full">
      <Frame46 />
      <Frame48 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[44px] relative w-full">
        <Frame92 />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame45 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
      <Frame38 />
      <Frame35 />
      <Frame40 />
      <Frame44 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[45px] py-[100px] relative shrink-0 w-[1920px]">
      <Frame34 />
    </div>
  );
}

function Container5() {
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f3f3f3] text-[16px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">To become the first-choice partner for investors in the energy and precious metals sectors. Our long-term goal is to expand strategic corridors, lead in ethical sourcing, and enable access to essential commodities, especially across high-growth regions in the Middle East and Africa.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="backdrop-blur-[10.7px] content-stretch flex flex-col gap-[33px] h-[348px] items-start pb-[39px] pt-[32px] px-[29px] relative rounded-tl-[10px] shrink-0 w-[577px]" data-name="Container" style={{ backgroundImage: "linear-gradient(213.303deg, rgba(0, 0, 0, 0) 58.539%, rgba(0, 0, 0, 0.8) 88.96%), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(206, 174, 90, 0.1) 0%, rgba(206, 174, 90, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-tl-[10px]" />
      <Container5 />
      <Frame12 />
    </div>
  );
}

function Container7() {
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

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f3f3f3] text-[16px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">To support the energy and precious metals sectors through an integrated business model that enhances sustainability, advances infrastructure, and maximizes value for every EDG partner—through strategic, intelligent solutions that deliver long-term growth and impact. We are driven by our dedication to operational efficiency, responsible sourcing, and long-term partnerships that empower global supply chains and energy access.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="backdrop-blur-[10.7px] content-stretch flex flex-col gap-[33px] h-[348px] items-start pb-[39px] pt-[32px] px-[29px] relative rounded-tr-[10px] shrink-0 w-[577px]" data-name="Container" style={{ backgroundImage: "linear-gradient(146.6deg, rgba(0, 0, 0, 0) 58.578%, rgba(0, 0, 0, 0.8) 97.515%), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(206, 174, 90, 0.1) 0%, rgba(206, 174, 90, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-tr-[10px]" />
      <Container7 />
      <Frame13 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end pl-[102px] relative shrink-0">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col h-[722px] items-center justify-end pl-[460px] relative rounded-[10px] shrink-0 w-[1830px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute h-[169.01%] left-0 max-w-none top-[-65.97%] w-full" src={imgFrame64} />
        </div>
        <div className="absolute inset-0 rounded-[10px]" style={{ backgroundImage: "linear-gradient(160.937deg, rgba(0, 0, 0, 0) 32.933%, rgba(0, 0, 0, 0.5) 67.854%)" }} />
      </div>
      <Frame50 />
    </div>
  );
}

function RightContent() {
  return (
    <div className="h-[892px] relative rounded-[10px] shrink-0 w-[760px]" data-name="Right Content">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRightContent} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center py-px relative rounded-[6px] shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ceae5a] text-[24px] whitespace-nowrap">
        <p className="leading-[24px]">Chairman’s Message</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame82 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[61px] min-w-full relative shrink-0 text-[50.4px] text-black w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Charting Growth.</p>
        <p>Fueling Trust. Forging the Future.</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
      <div className="h-[64px] relative shrink-0 w-[97px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 64">
          <path clipRule="evenodd" d={svgPaths.p34cfc200} fill="var(--fill-0, #CEAE5A)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame83 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame84 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[27px] relative shrink-0 text-[#555] text-[18px] tracking-[-0.18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`At EDG Gold & Petroleum, our journey has always been guided by a singular purpose: to create lasting value through responsible global trade. From the heart of the UAE to emerging and established markets across the Middle East and Africa, our company has evolved into a trusted name in energy and precious metals trading. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`In a world where access to reliable energy and ethically sourced resources defines both economic growth and social stability, our role has never been more critical. We take pride in being at the intersection of opportunity and responsibility—delivering high- quality oil, gas, and gold products to clients who rely on our consistency, transparency, and market insight. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`What sets us apart is not just our ability to move commodities efficiently across borders—it’s our commitment to integrity, innovation, and long-term partnerships. Our customers and partners know that when they work with EDG, they are choosing a team that stands for ethical business practices, operational excellence, and forward-thinking strategies. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>As we continue to expand our footprint, invest in smarter logistics, and embrace sustainable practices, our mission remains clear: to be a catalyst for progress—not only for our stakeholders but for the communities and industries we serve. I am proud of our achievements, grateful for the trust placed in us, and optimistic about the future we are building—together.</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[27px] not-italic relative shrink-0 text-[#555] text-[0px] tracking-[-0.18px] w-[915px] whitespace-pre-wrap">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] mb-0 text-[18px]">Warm regards,</p>
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold mb-0 text-[22px] text-black">Chief Executive Officer</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#ceae5a] text-[18px]">{`EDG Gold & Petroleum`}</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame55 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0 w-[965px]">
      <Frame81 />
      <Frame54 />
      <Frame85 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <RightContent />
      <Frame25 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame53 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[80px] py-[100px] relative w-full">
        <Frame52 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#ceae5a] shrink-0 size-[7px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[22px] whitespace-pre-wrap">Fuel Oil</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#ceae5a] shrink-0 size-[7px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[22px] whitespace-pre-wrap">Gasoil (D2)</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#ceae5a] shrink-0 size-[7px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[22px] whitespace-pre-wrap">Gasoline (Mogas)</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-white w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Our Products</p>
      </div>
      <Frame15 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[32px] py-[14px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ceae5a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-white">Join as an Investor</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[36px] items-start min-h-px min-w-px relative">
      <Frame89 />
      <Button3 />
    </div>
  );
}

function Buttom() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Buttom">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[38px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">We supply a wide range of refined oil products tailored to meet the evolving needs of government agencies, public institutions, and private corporations. Our operational strength lies in our ability to offer reliable, on-time delivery with competitive pricing and full compliance with international quality standards.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[36px] items-start min-h-px min-w-px relative" data-name="Content">
      <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[68px] relative shrink-0 text-[60px] text-white tracking-[-1.2px] w-full whitespace-pre-wrap">
        <p className="mb-0">Energy Division</p>
        <p>Petroleum Trading Excellence</p>
      </div>
      <Buttom />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[100px] items-end relative shrink-0 w-full">
      <Frame93 />
      <Content />
    </div>
  );
}

function ValuesMetron() {
  return (
    <div className="h-[700px] relative shrink-0 w-full" data-name="Values Metron">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgValuesMetron} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgValuesMetron1} />
        <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      </div>
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[80px] py-[100px] relative size-full">
          <Frame90 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[9px] py-px relative rounded-[6px] shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] lowercase not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif]">
          <span className="leading-[24px] uppercase">P</span>
          <span className="leading-[24px]">{`RECIOUS `}</span>
          <span className="leading-[24px] uppercase">M</span>
          <span className="leading-[24px]">{`ETALS `}</span>
          <span className="leading-[24px] uppercase">D</span>
          <span className="leading-[24px]">IVISION</span>
        </p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame8 />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[58px] min-w-full relative shrink-0 text-[#ceae5a] text-[48px] tracking-[-0.96px] w-[min-content] whitespace-pre-wrap">Gold Trading with Integrity</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[38px] relative shrink-0 text-[24px] text-white w-[960px] whitespace-pre-wrap">In parallel with our energy operations, EDG Gold is a trusted player in the global gold and precious metals trade. We provide end-to-end gold trading services—from sourcing and aggregation to final distribution—ensuring full traceability, compliance, and security at every step.</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[38px] relative shrink-0 text-[24px] text-white w-[960px] whitespace-pre-wrap">We support our clients with access to physical gold and custom trading solutions that align with investment, treasury, or commercial goals. Our approach blends traditional values of trust with modern trading platforms and data-driven decision-making.</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[32px] py-[14px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ceae5a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] text-white">Learn More</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Button4 />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[75px] top-[82px] w-[1261px]" data-name="Left Content">
      <Content1 />
      <Frame87 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[700px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame9} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-9.9476e-14deg, rgba(0, 0, 0, 0) 59.459%, rgba(0, 0, 0, 0.8) 114.36%), linear-gradient(270deg, rgba(206, 174, 90, 0.3) 0%, rgba(0, 0, 0, 0) 57.057%), linear-gradient(2.84217e-14deg, rgba(0, 0, 0, 0) 45.746%, rgba(44, 37, 19, 0.8) 95.546%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50.05%, rgba(206, 174, 90, 0.5) 95.045%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[10px] items-end px-[13px] py-[83px] relative size-full">
          <div className="absolute h-[999px] left-0 top-px w-[15px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
          <LeftContent />
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="h-[62px] relative shrink-0 w-[609px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#ceae5a] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[62.21px] justify-center leading-[0] left-[33px] text-[#555] text-[16px] top-[31.1px] tracking-[-0.18px] w-[398.23px]">
        <p className="leading-[31.2px] whitespace-pre-wrap">Dedicated to supporting our clients and partners in every strategic step.</p>
      </div>
    </div>
  );
}

function Icon4() {
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
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
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
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <ButtonPreviousSlide />
      <ButtonNextSlide />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <VerticalBorder />
      <Frame56 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-end justify-between pl-[172px] relative shrink-0 w-[2001px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[50.4px] text-black w-[373.45px]">
        <p className="leading-[100px] whitespace-pre-wrap">Partners</p>
      </div>
      <Frame86 />
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

function Frame78() {
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

function Frame77() {
  return (
    <div className="content-stretch flex gap-[20px] items-start px-[45px] relative shrink-0">
      <Frame78 />
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

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start py-[100px] relative shrink-0 w-[2172px]">
      <Frame79 />
      <Frame77 />
    </div>
  );
}

function OurTeam() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Our Team">
      <div className="size-full" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame 33">
          <rect fill="var(--fill-0, #CEAE5A)" height="32" rx="16" width="32" />
          <path d={svgPaths.p22a62940} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <Frame21 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] lowercase not-italic relative shrink-0 text-[0px] text-white whitespace-nowrap">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px]">
          <span className="leading-[26px] text-white uppercase">M</span>
          <span className="leading-[26px]">{`IDDLE `}</span>
          <span className="leading-[26px] text-white uppercase">E</span>
          <span className="leading-[26px]">AST</span>
        </p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame 33">
          <rect fill="var(--fill-0, #CEAE5A)" height="32" rx="16" width="32" />
          <path d={svgPaths.p22a62940} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <Frame22 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] lowercase not-italic relative shrink-0 text-[0px] text-white whitespace-nowrap">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px]">
          <span className="leading-[26px] text-white uppercase">A</span>
          <span className="leading-[26px]">frica</span>
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[32px] py-[14px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ceae5a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-white">OUR MARKET PRESENCE</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[36px] items-start min-h-px min-w-px relative">
      <Frame18 />
      <Button5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[9px] py-px relative rounded-[6px] shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] lowercase not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif]">
          <span className="leading-[24px] uppercase">O</span>
          <span className="leading-[24px]">{`UR `}</span>
          <span className="leading-[24px] uppercase">M</span>
          <span className="leading-[24px]">{`ARKET `}</span>
          <span className="leading-[24px] uppercase">P</span>
          <span className="leading-[24px]">RESENCE</span>
        </p>
      </div>
    </div>
  );
}

function Buttom1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Buttom">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[38px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">{`At EDG Gold & Petroleum, the Middle East and Africa (MEA) are more than just markets—they are the beating heart of our business operations and a cornerstone of our long- term growth strategy. These regions offer a unique blend of natural wealth, industrial demand, and strategic geographic positioning that aligns perfectly with our core competencies in petroleum and precious metals trading.`}</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[709px]" data-name="Content">
      <Frame10 />
      <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[68px] min-w-full relative shrink-0 text-[60px] text-white tracking-[-1.2px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Strategic Regions.</p>
        <p className="mb-0">Expansive Opportunities.</p>
        <p>Lasting Impact.</p>
      </div>
      <Buttom1 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[100px] items-end relative shrink-0 w-full">
      <Frame95 />
      <Content2 />
    </div>
  );
}

function ValuesMetron1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center ml-0 mt-0 overflow-clip px-[80px] py-[100px] relative row-1 w-[1920px]" data-name="Values Metron">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-0.39%] max-w-none top-0 w-[181.89%]" src={imgValuesMetron2} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      </div>
      <Frame94 />
    </div>
  );
}

function Frame57() {
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

function Frame76() {
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

function Frame75() {
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

function Frame59() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[rgba(255,255,255,0.8)] w-full">
      <Frame76 />
      <Frame75 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start leading-[0] relative shrink-0 w-[360px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Quick Links</p>
      </div>
      <Frame59 />
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

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-[276px]">
        <p className="leading-[30px] whitespace-pre-wrap">{`DMCC Business Centre, Level No 1 Jewellery & Gemplex 3, Dubai - UAE`}</p>
      </div>
      <List />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] h-[251px] items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">Contact Info</p>
      </div>
      <Frame74 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1174px]">
      <Frame57 />
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Icon6() {
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

function Background() {
  return (
    <div className="bg-[#ceae5a] overflow-clip relative rounded-[15px] shrink-0 size-[30px]" data-name="Background">
      <div className="absolute flex h-[12px] items-center justify-center left-[9.08px] top-[9px] w-[11.84px]">
        <div className="-scale-y-100 flex-none">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[30px]">subscribe</p>
      </div>
      <Background />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16.9px] text-white tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">Your email</p>
      </div>
      <Frame63 />
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

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container8 />
      <FormInput />
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[23px] relative shrink-0 w-[103.17px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#ceae5a] text-[15px] top-[11.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="decoration-solid leading-[27px] underline">Privacy Policy</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <div className="relative rounded-[1px] shrink-0 size-[14px]">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[27px]">{`By signing up, you agree to the `}</p>
      </div>
      <Link1 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[511px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-[271px]">
        <p className="leading-[24px] whitespace-pre-wrap">Stay tuned for more updates</p>
      </div>
      <Frame68 />
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame62 />
      <Frame65 />
    </div>
  );
}

function Frame73() {
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

function Frame70() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame73 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame70 />
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

function Frame69() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <List1 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame69 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-[1830px]">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Frame71 />
      <Frame58 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[51px] items-start left-[45px] top-[79px] w-[1830px]">
      <Frame66 />
      <Frame72 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black col-1 h-[471px] ml-0 mt-[768px] overflow-clip relative row-1 w-[1920px]" data-name="Footer">
      <div className="absolute inset-[0.16%_0_-5.09%_59.9%]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgRectangle} />
      </div>
      <Frame67 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ValuesMetron1 />
      <Footer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Group />
    </div>
  );
}

export default function LandingPageUpdated() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Landing Page Updated">
      <HeroHeader />
      <Frame41 />
      <Frame49 />
      <Frame51 />
      <ValuesMetron />
      <Frame6 />
      <Frame80 />
      <OurTeam />
      <Frame />
    </div>
  );
}