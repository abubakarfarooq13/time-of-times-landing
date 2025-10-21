import { AntaFont, OutfitFont, RubikFont } from "@/lib/font";
import React from "react";
import { FeatureCardsSection } from "./FeatureCardSection";
import { OwnTheDaySection } from "./OwnTheDaySection";
import { RiskStatementBanner } from "./RiskStatementBanner";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const JoinCommunity = () => {
  return (
    <div
      className={` bg-white pt-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col  w-full ${AntaFont.className}`}
    >
      <div className="text-center">
        <h2 className="text-[56px]">JOIN COMMUNITY</h2>
        <span
          className={`text-[24px] font-medium block ${RubikFont.className}`}
        >
          Early followers get the most benefits
        </span>
      </div>
      <section className="py-16 px-4 md:px-8 mt-10">
        <div className=" mx-auto">
          <FeatureCardsSection />
        </div>
      </section>

      <section className="py-2 px-4 md:px-8 ">
        <div className=" mx-auto flex justify-center gap-4">
          <Button
            variant="default"
            className={`rounded-full max-w-max !px-6 !py-5.5  text-[16px] font-medium ${OutfitFont.className}`}
          >
            Join Telegram
            <ArrowUpRight
              strokeWidth={2.5}
              className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
            />
          </Button>
          <Button
            variant="default"
            className={`rounded-full max-w-max !px-6 !py-5.5  text-[16px] font-medium ${OutfitFont.className}`}
          >
            Follow on X
            <ArrowUpRight
              strokeWidth={2.5}
              className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
            />
          </Button>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-8">
        <div className=" mx-auto">
          <OwnTheDaySection />
        </div>
      </section>

      <section className="py-8 px-4 md:px-8">
        <div className=" mx-auto">
          <RiskStatementBanner />
        </div>
      </section>
    </div>
  );
};

export default JoinCommunity;
