import { AntaFont, RubikFont } from "@/lib/font";
import Image from "next/image";
import React from "react";
import { Tokenomics } from "./Tokenomics";
import { FairPlayEconomy } from "./FairPlayEconomy";

const VoteToEarn = () => {
  return (
    <div
      className={` bg-white xl:py-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col  w-full ${AntaFont.className}`}
    >
      <div className="text-center">
        <h2 data-aos="fade-up" className="text-4xl  md:text-[56px] font-normal">
          Vote-to-Earn{" "}
        </h2>
        <span
          data-aos="fade-up"
          className={`text-xl md:text-[24px] font-medium block ${RubikFont.className}`}
        >
          Your Voice Matters — and Pays
        </span>
        <p
          data-aos="fade-up"
          className={`text-sm md:text-[16px] ${RubikFont.className} mt-2`}
        >
          By voting with $TIMES tokens, users shape the platform’s history. If
          your chosen artwork wins, you receive part of the auction profits. The
          more <br className="hidden xl:block" /> you engage, the more you earn.
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
          className={`bg-[#FFCDC7] -rotate-5 md:-rotate-6 other-shadow rounded-4xl md:rounded-full px-2 md:px-7 md:py-4 py-2 ${RubikFont.className} text-sm md:text-[16px] absolute -bottom-10  md:bottom-0 text-center leading-4.5 font-normal`}
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
        className={`bg-[#FF4F3A] overflow-hidden rounded-4xl mt-24 ${RubikFont.className}`}
      >
        <Tokenomics />
        <FairPlayEconomy />
      </div>
    </div>
  );
};

export default VoteToEarn;
