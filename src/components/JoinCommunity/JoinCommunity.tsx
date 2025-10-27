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
      className={` xl:pt-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col  w-full ${AntaFont.className}`}
    >
      <div className="text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-semibold md:text-[44px]"
        >
          JOIN COMMUNITY
        </h2>
        <span
          data-aos="fade-up"
          className={`text-xl md:text-[18px] font-normal mt-2  block ${RubikFont.className}`}
        >
          Early followers get the most benefits
        </span>
      </div>
      <section className="py-8 md:py-16 px-4 md:px-8 mt-10">
        <div className=" mx-auto">
          <FeatureCardsSection />
        </div>
      </section>

      <section className="xl:py-2 px-4 md:px-8 ">
        <div className=" mx-auto flex justify-center items-center flex-col md:flex-row gap-4">
          <Button
            data-aos="fade-up"
            variant="default"
            className={`rounded-full bg-transparent border-2 border-[#9BEFE3] text-white w-full md:max-w-max !px-6 !py-5.5   text-[16px] font-medium ${OutfitFont.className}`}
          >
            Join Telegram
            <ArrowUpRight
              strokeWidth={2.5}
              className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
            />
          </Button>
          <Button
            data-aos="fade-up"
            variant="default"
            className={`rounded-full bg-transparent border-2 border-[#9BEFE3] text-white w-full md:max-w-max !px-6 !py-5.5  text-[16px] font-medium ${OutfitFont.className}`}
          >
            Follow on X
            <ArrowUpRight
              strokeWidth={2.5}
              className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
            />
          </Button>
        </div>
      </section>

      <section className="mt-8 md:mt-14 lg:px-4 xl:px-8">
        <div className=" mx-auto">
          <OwnTheDaySection />
        </div>
      </section>

      {/* <section className="py-8 px-4 md:px-8">
        <div className=" mx-auto">
          <RiskStatementBanner />
        </div>
      </section> */}
    </div>
  );
};

export default JoinCommunity;
