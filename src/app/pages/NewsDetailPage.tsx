import React, { useEffect } from "react";
import { NewsHero } from "../components/NewsHero";
import { NewsDetailContent } from "../components/NewsDetailContent";
import { CTABanner } from "../components/CTABanner";

export const NewsDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col w-full bg-white relative z-0 overflow-x-hidden">
      <NewsHero />
      <NewsDetailContent />
      <CTABanner />
    </main>
  );
};
