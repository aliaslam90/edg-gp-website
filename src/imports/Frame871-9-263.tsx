import svgPaths from "./svg-ln5ni56vgu";
import imgBpPng from "@/assets/d49f19aa8493aac5092e4202074027f4138cec9a.png";
import imgHarbourEnergyPng from "@/assets/0858992a4b38f6eee43970c07dfaa06babf77247.png";
import imgEquinorPng from "@/assets/509a55a1a570e289f42a47af3e76d143f3910ddf.png";
import imgMaersekPng from "@/assets/45b5a55fe23efc25cb1a2a83edffa56651de175c.png";
import imgPerencoPng from "@/assets/0f312acfd7661746df1a946a8f08b75656c8d77a.png";
import imgSubsea7Png from "@/assets/04a38e18500a05c9338f7e479bacabfd32910efa.png";
import imgSpiritEnergyPng from "@/assets/2835c4df047e146bffdc6d4eaac3a16e85f5bd7c.png";
import imgTotalPng from "@/assets/1f87f80505240dbe46a6b23840a9e076447e4ce8.png";

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

function Icon() {
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
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
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
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <ButtonPreviousSlide />
      <ButtonNextSlide />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <VerticalBorder />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-end justify-between pl-[172px] relative shrink-0 w-[2001px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[50.4px] text-black w-[373.45px]">
        <p className="leading-[100px] whitespace-pre-wrap">Partners</p>
      </div>
      <Frame5 />
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

function Frame2() {
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

function ItemLink() {
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start px-[45px] relative shrink-0">
      <Frame2 />
      <Item />
      <Item1 />
      <ItemLink />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start py-[100px] relative size-full">
      <Frame3 />
      <Frame1 />
    </div>
  );
}