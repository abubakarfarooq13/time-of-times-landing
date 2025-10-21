import { AntaFont, OutfitFont, RubikFont } from "@/lib/font";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import TiersAndPerks from "./TiersAndPerks";
import RoadMap from "./RoadMap";

const EarlyBirdsAirdrop = () => {
  return (
    <div
      className={` bg-white py-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col  w-full ${AntaFont.className}`}
    >
      <div className="text-center">
        <h2 className="text-[56px]"> Early Birds Airdrop</h2>
        <span
          className={`text-[24px] font-medium block ${RubikFont.className}`}
        >
          Earn Pre-TGE $TIMES Now
        </span>
      </div>
      <div className="flex mt-10 xl:mt-8 justify-around">
        <div className="xl:space-y-8 space-y-6">
          <div>
            <h2 className={`font-medium text-[24px] ${RubikFont.className}`}>
              ”Early Birds” Program{" "}
            </h2>
            <p className={`text-[16px] font-normal ${RubikFont.className}`}>
              You are lucky to be here before TGE. You can get tokens{" "}
              <br className="xl:hidden block" /> on the most favorable
              <br className="hidden xl:block" /> terms – even for free!{" "}
            </p>
          </div>
          <div>
            <h2 className={`font-medium text-[24px] ${RubikFont.className}`}>
              How it works
            </h2>
            <p className={`text-[16px] font-normal ${RubikFont.className}`}>
              Follow Time of Times on Telegram and X, complete quests,
              <br className="xl:hidden block" /> post public
              <br className="hidden xl:block" /> mentions, join AMAs, and invite
              friends. Rewards <br className="xl:hidden block" />
              may include $TIMES with
              <br className="hidden xl:block" /> vesting and role badges.
            </p>
          </div>
          <Button
            variant="default"
            className={`rounded-full max-w-max !px-6 !py-5.5  text-[16px] font-medium ${OutfitFont.className}`}
          >
            LEARN MORE ON TELEGRAM
            <ArrowUpRight
              strokeWidth={2.5}
              className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
            />
          </Button>
        </div>
        <div className="flex relative ">
          <div className="absolute w-[80px] xl:w-[100px] -left-30  2xl:-left-50 top-20">
            <Image
              src="/earlybirdsairdrop/b1.png"
              alt=""
              width={100}
              height={100}
              quality={100}
            />
          </div>
          <div className="mr-10 xl:mr-20 w-[200px] xl:w-[250px]">
            <Image
              src="/earlybirdsairdrop/b2.png"
              alt=""
              width={250}
              height={300}
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/earlybirdsairdrop/b3.png"
              alt=""
              width={50}
              height={50}
              quality={100}
            />
          </div>
        </div>
      </div>
      <TiersAndPerks />
      <RoadMap />
    </div>
  );
};

export default EarlyBirdsAirdrop;
