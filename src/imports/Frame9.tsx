import imgFrame9 from "@/assets/750d2003ab2fbe82c81bdb4dad6706aa07f3b34b.png";
import imgRectangle1 from "@/assets/b25bf13818fd4a847b2b7fc565076139896fafc8.png";

function Frame1() {
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

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame1 />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[58px] min-w-full relative shrink-0 text-[#ceae5a] text-[48px] tracking-[-0.96px] w-[min-content] whitespace-pre-wrap">Gold Trading with Integrity</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[38px] relative shrink-0 text-[24px] text-white w-[960px] whitespace-pre-wrap">In parallel with our energy operations, EDG Gold is a trusted player in the global gold and precious metals trade. We provide end-to-end gold trading services—from sourcing and aggregation to final distribution—ensuring full traceability, compliance, and security at every step.</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[38px] relative shrink-0 text-[24px] text-white w-[960px] whitespace-pre-wrap">We support our clients with access to physical gold and custom trading solutions that align with investment, treasury, or commercial goals. Our approach blends traditional values of trust with modern trading platforms and data-driven decision-making.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[32px] py-[14px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ceae5a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[20px] text-white">Learn More</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Button />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[75px] top-[82px] w-[1261px]" data-name="Left Content">
      <Content />
      <Frame2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-end px-[13px] py-[83px] relative size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame9} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-9.9476e-14deg, rgba(0, 0, 0, 0) 59.459%, rgba(0, 0, 0, 0.8) 114.36%), linear-gradient(270deg, rgba(206, 174, 90, 0.3) 0%, rgba(0, 0, 0, 0) 57.057%), linear-gradient(2.84217e-14deg, rgba(0, 0, 0, 0) 45.746%, rgba(44, 37, 19, 0.8) 95.546%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50.05%, rgba(206, 174, 90, 0.5) 95.045%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="absolute h-[999px] left-0 top-px w-[15px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <LeftContent />
    </div>
  );
}