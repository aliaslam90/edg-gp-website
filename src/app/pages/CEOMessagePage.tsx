import React, { useEffect } from "react";
import { HeroCEOMessage } from "../components/HeroCEOMessage";
import { CEOMessageContent } from "../components/CEOMessageContent";
import { CTABanner } from "../components/CTABanner";

export const CEOMessagePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("CEOMessagePage mounted");
  }, []);

  return (
    <div className="flex flex-col w-full bg-white relative z-0">
      <HeroCEOMessage />
      <CEOMessageContent />
      <CTABanner />
    </div>
  );
};