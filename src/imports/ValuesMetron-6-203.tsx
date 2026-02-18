import imgValuesMetron from "@/assets/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#ceae5a] shrink-0 size-[7px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[22px] whitespace-pre-wrap">Fuel Oil</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#ceae5a] shrink-0 size-[7px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[22px] whitespace-pre-wrap">Gasoil (D2)</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#ceae5a] shrink-0 size-[7px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[22px] whitespace-pre-wrap">Gasoline (Mogas)</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-white w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Our Products</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[32px] py-[14px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ceae5a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-white">Join as an Investor</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[36px] items-start min-h-px min-w-px relative">
      <Frame4 />
      <Button />
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[100px] items-end relative shrink-0 w-full">
      <Frame6 />
      <Content />
    </div>
  );
}

export default function ValuesMetron() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[80px] py-[100px] relative size-full" data-name="Values Metron">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgValuesMetron} />
        <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      </div>
      <Frame5 />
    </div>
  );
}