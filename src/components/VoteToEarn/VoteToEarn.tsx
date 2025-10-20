import { AntaFont, RubikFont } from "@/lib/font";
import Image from "next/image";
import React from "react";
import { Tokenomics } from "./Tokenomics";
import { FairPlayEconomy } from "./FairPlayEconomy";

const VoteToEarn = () => {
  return (
    <div
      className={` bg-white py-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col  w-full ${AntaFont.className}`}
    >
      <div className="text-center">
        <h2 className="text-[56px]">Vote-to-Earn </h2>
        <span
          className={`text-[24px] font-medium block ${RubikFont.className}`}
        >
          Your Voice Matters — and Pays
        </span>
        <p className={`text-[16px] ${RubikFont.className} mt-2`}>
          By voting with $TIMES tokens, users shape the platform’s history. If
          your chosen artwork wins, you receive part of the auction profits. The
          more <br /> you engage, the more you earn.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-14 relative">
        <Image
          src="/votetoearn/img.png"
          alt=""
          width={550}
          height={550}
          quality={100}
        />
        <div
          className={`bg-[#FFCDC7] -rotate-6 other-shadow rounded-full px-7 py-4 ${RubikFont.className} text-[16px] absolute bottom-0 text-center leading-4.5 font-normal`}
        >
          <p>
            Artificial Intelligence curates daily news and ensures fair voting.
            DAO <br />
            governance gives power to the community, not corporations. Time of
            <br /> Times runs on transparency and decentralization.{" "}
          </p>
        </div>
      </div>
      <div className={`bg-[#FF4F3A] rounded-4xl mt-24 ${RubikFont.className}`}>
        <Tokenomics />
        <FairPlayEconomy />
      </div>
    </div>
  );
};

export default VoteToEarn;
