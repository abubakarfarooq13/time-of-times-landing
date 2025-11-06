import { OutfitFont, RubikFont, TomorrowFont } from "@/lib/font";
import Image from "next/image";
import React from "react";
import { Tokenomics } from "./Tokenomics";
import { FairPlayEconomy } from "./FairPlayEconomy";
import {
  ClipboardCheck,
  Users,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../ui/button";
import FileIcon from "@/icons/FileIcon";
import PeoplesIcon from "@/icons/PeoplesIcon";
import ConnectIcon from "@/icons/ConnectIcon";

const VoteToEarn = () => {
  return (
    <div
      className={`xl:py-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col w-full ${TomorrowFont.className}`}
    >
      <div className="text-center">
        <h2
          data-aos="fade-up"
          className={`text-4xl md:text-[44px] font-semibold ${TomorrowFont.className}`}
        >
          Vote-to-Earn{" "}
        </h2>
        <span
          data-aos="fade-up"
          className={`text-xl md:text-[24px] font-medium block ${TomorrowFont.className}`}
        >
          Your Voice Matters — and Pays
        </span>
      </div>

      {/* Two-column layout: Image on left, Cards on right */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-14">
        {/* Left: Pixel Art Illustration */}
        <div className="flex-shrink-0 w-full max-w-[550px]" data-aos="fade-up">
          <Image
            src="/votetoearn/img.png"
            alt="Vote to Earn illustration"
            width={550}
            height={550}
            quality={100}
            className="w-full max-w-[550px] h-auto"
          />
        </div>

        <div
          className={`flex  flex-col gap-4  justify-center  items-center lg:items-start lg:max-w-[500px] ${RubikFont.className} `}
          data-aos="fade-up"
        >
          <div className="bg-white w-full rounded-[16px] p-4 md:p-5 flex-col lg:flex-row flex items-center gap-4 shadow-md">
            <div className="flex-shrink-0">
              <FileIcon className="w-[64px] h-[64px] md:w-[64px] md:h-[64px] " />
            </div>
            <p
              className={`text-black text-[18px]  md:text-base ${RubikFont.className} leading-relaxed text-center lg:text-start`}
            >
              Artificial Intelligence curates daily news and ensures fair
              voting.
            </p>
          </div>

          <div className="bg-white w-full rounded-[16px] p-4 md:p-5 flex flex-col lg:flex-row items-center gap-4 shadow-md">
            <div className="flex-shrink-0">
              <PeoplesIcon className="w-[64px] h-[64px] md:w-[64px] md:h-[64px] " />
            </div>
            <p
              className={`text-black text-[18px] md:text-base ${RubikFont.className} leading-relaxed text-center lg:text-start`}
            >
              DAO governance gives power to the community, not corporations.
            </p>
          </div>

          <div className="bg-white w-full rounded-[16px] p-4 md:p-5 flex flex-col lg:flex-row items-center gap-4 shadow-md">
            <div className="flex-shrink-0">
              <ConnectIcon className="w-[64px] h-[64px] md:w-[64px] md:h-[64px]" />
            </div>
            <p
              className={`text-black text-[18px]  md:text-base ${RubikFont.className} leading-relaxed text-center lg:text-start`}
            >
              Time of Times runs on transparency and decentralization.
            </p>
          </div>

          <p
            className={`text-sm md:text-[18px] ${RubikFont.className} text-[#FFFBFB] mt-1 leading-7 text-center lg:text-start`}
          >
            By voting with $TIMES tokens, users shape the platform&apos;s
            history. If your chosen artwork wins, you receive part of the
            auction profits. The more you engage, the more you earn.
          </p>

          <div className="mt-1">
            <Button
              data-aos="fade-left"
              variant="default"
              className={`rounded-full bg-[#9BEFE3] max-w-max !px-6 !py-5.5   md:text-[16px] font-medium ${OutfitFont.className}`}
            >
              Lets vote
              <ArrowUpRight
                strokeWidth={2.5}
                className=" !h-4.5 !w-4.5 text-[#9BEFE3] p-0.5 bg-black rounded-full"
              />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`bg-[#1A0705] overflow-hidden rounded-4xl mt-24 ${RubikFont.className}`}
      >
        <Tokenomics />
        <FairPlayEconomy />
      </div>
    </div>
  );
};

export default VoteToEarn;
