import svgPaths from "./svg-ue2oexrfro";
import imgHero from "@/assets/869053afd4838d03fa361c9154a35ecb01a0a116.png";
import imgDecorPng from "@/assets/a3dece847acdf1321aff9e051494b49b5b4ae175.png";
import imgSection from "@/assets/0c4be190a8eb1ce8c184bdb17b1fc6ac0ee2159b.png";
import imgBlog121024X509Jpg from "@/assets/fd2cf1e39860b2496ed6ebd6d1953f2f649e8996.png";
import imgBlog121024X509Jpg1 from "@/assets/7603bd7e1fc180b700e61b67914a6de6cc719f55.png";
import imgBlog121024X509Jpg2 from "@/assets/1370241e735e9efbf3419fe9f3557ea6a94a4cff.png";
import imgBlog121024X509Jpg3 from "@/assets/1d8394cc6579b1a4991700c125327b5b3c5edfd0.png";
import imgBlog121024X509Jpg4 from "@/assets/2f7e308c7c3cd82a67cb04e9aa85a0b0074f3ef6.png";
import imgImage3 from "@/assets/50c075019ef14d613858c4a38a22d51e9300a26c.png";
import imgBlog121024X509Jpg5 from "@/assets/0d7b01fbb392357a72a3db80beed5f06b4534543.png";
import imgBlog121024X509Jpg6 from "@/assets/92f8bf08770cdf997085977e248bbb5306c95ede.png";
import imgBlog121024X509Jpg7 from "@/assets/cc70606063a8bffc99917cb7476dc61c425d44c9.png";
import imgBlog121024X509Jpg8 from "@/assets/ef84372341dc923f2fc5698cd67afa66b6dd5e11.png";
import imgRectangle from "@/assets/be514fd866e5546a105d135dc899bd98fe99b8d8.png";

function MaskGroup() {
  return (
    <div className="absolute bottom-0 h-[40px] left-0 right-0" data-name="Mask Group">
      <div className="absolute bg-gradient-to-r bottom-0 from-white h-[40px] left-0 right-0 to-white" data-name="Background" />
    </div>
  );
}

function DecorPng() {
  return (
    <div className="-translate-x-1/2 absolute h-[724px] left-[calc(50%-538px)] top-[40px] w-[764px]" data-name="decor.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDecorPng} />
      </div>
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
      <div className="flex flex-col justify-center relative shrink-0 text-[#ceae5a] whitespace-nowrap">
        <p className="leading-[16px]">News</p>
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
        <p className="leading-[67px]">News</p>
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
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Item → Link">
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
      <div className="bg-[#ceae5a] h-[2px] shrink-0 w-full" data-name="Horizontal Divider" />
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
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[14.1px] text-center text-white w-full">
        <p className="leading-[24px] whitespace-pre-wrap">info@edg-gp.com</p>
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
      <div className="absolute h-[6px] left-[30.74px] top-[9.64px] w-[9.73px]" data-name="icon">
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
      <div className="absolute inset-[0_0_7.41%_0]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(270deg, rgba(206, 174, 90, 0.3) 0%, rgba(0, 0, 0, 0) 57.057%), linear-gradient(1.42109e-14deg, rgba(0, 0, 0, 0) 45.746%, rgba(44, 37, 19, 0.8) 95.546%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50.05%, rgb(11, 20, 32) 95.045%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.6) 25%, rgba(11, 43, 63, 0) 100%)" }} />
      <Container />
      <Header />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[6px] shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">Your journey starts now</p>
      </div>
    </div>
  );
}

function Frame27() {
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

function Frame28() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0 w-full">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center relative shrink-0 w-full">
      <Frame6 />
      <Frame29 />
    </div>
  );
}

function Section() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 px-[328px] py-[140px] top-[2351px] w-[1920px]" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSection} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(3.59003e-06deg, rgba(0, 4, 53, 0.6) 9.42%, rgba(11, 43, 63, 0) 75.33%)" }} />
      </div>
      <Frame30 />
    </div>
  );
}

function Blog121024X509Jpg() {
  return (
    <div className="h-[331px] relative rounded-[10px] shrink-0 w-full" data-name="blog_12-1024x509.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgBlog121024X509Jpg} />
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8c8c8c] text-[13.9px] top-[10px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">November 11, 2025</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Link1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame31 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[72px] justify-center leading-[0] relative shrink-0 text-[27px] text-black tracking-[-0.6px] w-full">
        <p className="leading-[33px] whitespace-pre-wrap">Khaled bin Mohamed bin Zayed chairs meeting of Executive Committee of...</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Blog121024X509Jpg />
      <Frame36 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame37 />
    </div>
  );
}

function Blog121024X509Jpg1() {
  return (
    <div className="h-[331px] relative rounded-[10px] shrink-0 w-full" data-name="blog_12-1024x509.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgBlog121024X509Jpg1} />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8c8c8c] text-[13.9px] top-[10px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">November 17, 2025</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Link2 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame41 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[72px] justify-center leading-[0] relative shrink-0 text-[27px] text-black tracking-[-0.6px] w-full">
        <p className="leading-[33px] whitespace-pre-wrap">Oil slips as Novorossiysk resumes loadings after Ukrainian attack</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Blog121024X509Jpg1 />
      <Frame40 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame39 />
    </div>
  );
}

function Blog121024X509Jpg2() {
  return (
    <div className="h-[331px] relative rounded-[10px] shrink-0 w-full" data-name="blog_12-1024x509.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgBlog121024X509Jpg2} />
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8c8c8c] text-[13.9px] top-[10px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">Nov 04, 2025</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Link3 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame45 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[72px] justify-center leading-[0] relative shrink-0 text-[27px] text-black tracking-[-0.6px] w-full">
        <p className="leading-[33px] whitespace-pre-wrap">ADNOC Signs 15-Year, 1 mtpa Supply Deal with Shell for Ruwais LNG Project</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Blog121024X509Jpg2 />
      <Frame44 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame43 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0 w-[1830px]">
      <Frame32 />
      <Frame35 />
      <Frame42 />
    </div>
  );
}

function Blog121024X509Jpg3() {
  return (
    <div className="h-[331px] relative rounded-[10px] shrink-0 w-full" data-name="blog_12-1024x509.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgBlog121024X509Jpg3} />
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8c8c8c] text-[13.9px] top-[10px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">October 28, 2025</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Link4 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame50 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[72px] justify-center leading-[0] relative shrink-0 text-[27px] text-black tracking-[-0.6px] w-full">
        <p className="leading-[33px] whitespace-pre-wrap">ENOC’s AutoPro builds on record transaction growth to drive innovation, strategic expansion</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Blog121024X509Jpg3 />
      <Frame49 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame48 />
    </div>
  );
}

function Blog121024X509Jpg4() {
  return (
    <div className="h-[331px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="blog_12-1024x509.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-full left-[-1.3%] max-w-none top-0 w-[102.6%]" src={imgBlog121024X509Jpg4} />
      </div>
      <div className="absolute h-[450px] left-[-10px] top-[-59px] w-[600px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8c8c8c] text-[13.9px] top-[10px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">November 20, 2025</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Link5 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame54 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[72px] justify-center leading-[0] relative shrink-0 text-[27px] text-black tracking-[-0.6px] w-[488px]">
        <p className="leading-[33px] whitespace-pre-wrap">Oman invites FEED bids for new NGL extraction project</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Blog121024X509Jpg4 />
      <Frame53 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame52 />
    </div>
  );
}

function Blog121024X509Jpg5() {
  return (
    <div className="h-[331px] relative rounded-[10px] shrink-0 w-full" data-name="blog_12-1024x509.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgBlog121024X509Jpg5} />
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8c8c8c] text-[13.9px] top-[10px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">November 20, 2025</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Link6 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame58 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[72px] justify-center leading-[0] relative shrink-0 text-[27px] text-black tracking-[-0.6px] w-[471px]">
        <p className="leading-[33px] whitespace-pre-wrap">BP awards subsea boosting contract to SLB OneSubsea</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Blog121024X509Jpg5 />
      <Frame57 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame56 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0 w-[1830px]">
      <Frame47 />
      <Frame51 />
      <Frame55 />
    </div>
  );
}

function Blog121024X509Jpg6() {
  return (
    <div className="h-[331px] relative rounded-[10px] shrink-0 w-full" data-name="blog_12-1024x509.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgBlog121024X509Jpg6} />
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8c8c8c] text-[13.9px] top-[10px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">November 20, 2025</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Link7 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame63 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[72px] justify-center leading-[0] relative shrink-0 text-[27px] text-black tracking-[-0.6px] w-[508px]">
        <p className="leading-[33px] whitespace-pre-wrap">ADIPEC 2025: Varel drives innovation in drilling</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Blog121024X509Jpg6 />
      <Frame62 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame61 />
    </div>
  );
}

function Blog121024X509Jpg7() {
  return (
    <div className="h-[331px] relative rounded-[10px] shrink-0 w-full" data-name="blog_12-1024x509.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgBlog121024X509Jpg7} />
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8c8c8c] text-[13.9px] top-[10px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">November 18, 2025</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Link8 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame67 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[72px] justify-center leading-[0] relative shrink-0 text-[27px] text-black tracking-[-0.6px] w-full">
        <p className="leading-[33px] whitespace-pre-wrap">ADIPEC 2025: Nabors sets new benchmarks in well-construction</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Blog121024X509Jpg7 />
      <Frame66 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame65 />
    </div>
  );
}

function Blog121024X509Jpg8() {
  return (
    <div className="h-[331px] relative rounded-[10px] shrink-0 w-full" data-name="blog_12-1024x509.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgBlog121024X509Jpg8} />
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8c8c8c] text-[13.9px] top-[10px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">November 06, 2025</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Link9 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame71 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[72px] justify-center leading-[0] relative shrink-0 text-[27px] text-black tracking-[-0.6px] w-full">
        <p className="leading-[33px] whitespace-pre-wrap">TA’ZIZ Signs Landmark Offtake Agreement with India’s Sanmar,...</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Blog121024X509Jpg8 />
      <Frame70 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame69 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0 w-[1830px]">
      <Frame60 />
      <Frame64 />
      <Frame68 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0">
      <Frame33 />
      <Frame46 />
      <Frame59 />
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-[#ceae5a] content-stretch flex items-center justify-center overflow-clip px-[57px] py-[12px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14.6px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[30px]">Load More</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[88px] items-center left-[45px] top-[628px] w-[1830px]">
      <Frame38 />
      <Link10 />
    </div>
  );
}

function Frame7() {
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

function Frame26() {
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

function Frame25() {
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[rgba(255,255,255,0.8)] w-full">
      <Frame26 />
      <Frame25 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start leading-[0] relative shrink-0 w-[360px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Quick Links</p>
      </div>
      <Frame9 />
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-[276px]">
        <p className="leading-[30px] whitespace-pre-wrap">{`DMCC Business Centre, Level No 1 Jewellery & Gemplex 3, Dubai - UAE`}</p>
      </div>
      <List />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] h-[251px] items-start relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">Contact Info</p>
      </div>
      <Frame24 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1174px]">
      <Frame7 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Icon() {
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
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[30px]">subscribe</p>
      </div>
      <Background />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16.9px] text-white tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">Your email</p>
      </div>
      <Frame13 />
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

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container1 />
      <FormInput />
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[23px] relative shrink-0 w-[103.17px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#ceae5a] text-[15px] top-[11.5px] tracking-[-0.18px] whitespace-nowrap">
        <p className="decoration-solid leading-[27px] underline">Privacy Policy</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <div className="relative rounded-[1px] shrink-0 size-[14px]">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[27px]">{`By signing up, you agree to the `}</p>
      </div>
      <Link11 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[511px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.48px] w-[271px]">
        <p className="leading-[24px] whitespace-pre-wrap">Stay tuned for more updates</p>
      </div>
      <Frame18 />
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Frame23() {
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

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame23 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame20 />
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

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <List1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-[1830px]">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Frame21 />
      <Frame8 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[51px] items-start left-[45px] top-[79px] w-[1830px]">
      <Frame16 />
      <Frame22 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black bottom-0 h-[471px] left-0 overflow-clip right-0" data-name="Footer">
      <div className="absolute inset-[0.16%_0_-5.09%_59.9%]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgRectangle} />
      </div>
      <Frame17 />
    </div>
  );
}

export default function News() {
  return (
    <div className="bg-white relative size-full" data-name="News">
      <Hero />
      <Section />
      <div className="absolute h-[807px] left-0 top-[500px] w-[1920px]" data-name="image 1" />
      <Frame34 />
      <Footer />
    </div>
  );
}