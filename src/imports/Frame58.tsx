import svgPaths from "./svg-dsjkm9x0nr";

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

function Frame1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-center text-white tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">30</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.4px] text-white tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Years of experience</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
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

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[44px] items-start justify-center p-[44px] relative w-full">
          <Frame3 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-black content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame4 />
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

function Frame7() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container1 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-black text-center tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">75</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.6px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Global locations</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame10() {
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

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[44px] items-start p-[44px] relative w-full">
        <Frame6 />
        <Frame10 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame5 />
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

function Frame16() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-black text-center tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">1.2.K</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.4px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Total employee</p>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame17() {
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

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame17 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[44px] relative w-full">
        <Frame23 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame11 />
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

function Frame21() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Container3 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[86px] text-black text-center tracking-[-4px] whitespace-nowrap">
        <p className="leading-[100px]">15B</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[23.4px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Annual revenue</p>
      </div>
      <Frame21 />
    </div>
  );
}

function Frame22() {
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] h-[280px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[44px] relative w-full">
        <Frame24 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white content-stretch flex gap-[30px] items-center relative rounded-[8px] shrink-0 w-[435px]">
      <div aria-hidden="true" className="absolute border border-[#dce0e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute h-[369px] left-0 top-0 w-[435px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
      <Frame12 />
      <Frame9 />
      <Frame14 />
      <Frame18 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

export default function Frame15() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[45px] py-[100px] relative size-full">
      <Frame8 />
    </div>
  );
}