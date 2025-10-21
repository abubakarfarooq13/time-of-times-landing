import DollarIcon from "@/icons/DollarIcon";
import { RubikFont } from "@/lib/font";
import React from "react";

const TiersAndPerks = () => {
  return (
    <div className="mt-4 flex justify-center">
      <div className="flex justify-between bg-[#BDB8C3] rounded-full px-20 py-6 max-w-7xl w-full">
        <div>
          <h2 className="font-normal text-[56px] leading-14 text-[#221235]">
            Tiers
            <br />
            and Perks
          </h2>
          <p
            className={`${RubikFont.className} bg-white rounded-full text-center -rotate-6 mt-4`}
          >
            The more active you are,
            <br /> the more rewards you get.
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-center">
            <div
              className={`h-30 w-30 flex items-center justify-center rounded-full bg-[#928B99] mb-4`}
            >
              <DollarIcon className="h-20 w-20 text-[#7C7188]" />
            </div>
            <span className={`${RubikFont.className} text-[16px] text-white `}>
              SILVER
            </span>
          </div>
          <div className="text-center -ml-4">
            <div
              className={`h-30 w-30 flex items-center justify-center rounded-full bg-[#FF8C82] mb-4`}
            >
              <DollarIcon className="h-20 w-20 text-[#FF4F3A]" />
            </div>
            <span className={`${RubikFont.className} text-[16px] text-white `}>
              GOLD
            </span>
          </div>
          <div className="text-center -ml-4">
            <div
              className={`h-30 w-30 flex items-center justify-center rounded-full bg-[#251137] mb-4`}
            >
              <DollarIcon className="h-20 w-20 text-[#584E62]" />
            </div>
            <span
              className={`${RubikFont.className} text-[16px] text-white uppercase`}
            >
              Platinum
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiersAndPerks;
