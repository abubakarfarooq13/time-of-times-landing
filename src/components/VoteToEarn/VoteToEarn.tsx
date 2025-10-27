import { AntaFont, RubikFont, TomorrowFont } from "@/lib/font";
import Image from "next/image";
import React from "react";
import { Tokenomics } from "./Tokenomics";
import { FairPlayEconomy } from "./FairPlayEconomy";

const VoteToEarn = () => {
  return (
    <div
      className={`  xl:py-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col  w-full ${TomorrowFont.className}`}
    >
      <div className="text-center">
        <h2
          data-aos="fade-up"
          className={`text-4xl  md:text-[44px] font-semibold ${TomorrowFont.className}`}
        >
          Vote-to-Earn{" "}
        </h2>
        <span
          data-aos="fade-up"
          className={`text-xl md:text-[24px] font-medium block ${TomorrowFont.className}`}
        >
          Your Voice Matters — and Pays
        </span>
        <p
          data-aos="fade-up"
          className={`text-sm md:text-[18px] font-normal ${RubikFont.className} mt-2`}
        >
          By voting with $TIMES tokens, users shape the platform’s history. If
          your chosen artwork wins,
          <br className="hidden xl:block" /> you receive part of the auction
          profits. The more you engage, the more you earn.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-14 relative">
        <Image
          data-aos="fade-up"
          src="/votetoearn/img.png"
          alt=""
          width={550}
          height={550}
          quality={100}
        />
        <div
          data-aos="fade-up"
          className={`bg-[#9BEFE3] -rotate-5 md:-rotate-6 other-shadow rounded-4xl md:rounded-full px-2 md:px-7 md:py-4 py-2 ${RubikFont.className} text-sm md:text-[18px] absolute -bottom-10  md:bottom-0 text-center leading-4.5 font-normal text-black`}
        >
          <p>
            Artificial Intelligence curates daily news and ensures fair voting.
            DAO <br className="hidden lg:block" />
            governance gives power to the community, not corporations. Time of
            <br className="hidden lg:block" /> Times runs on transparency and
            decentralization.{" "}
          </p>
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
