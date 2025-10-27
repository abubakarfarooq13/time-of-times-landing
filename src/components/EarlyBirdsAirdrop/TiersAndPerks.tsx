import DollarIcon from "@/icons/DollarIcon";
import { RubikFont } from "@/lib/font";
import React from "react";

const TiersAndPerks = () => {
  return (
    <div className="mt-6 xl:mt-4 flex justify-center">
      <div className="flex flex-col items-center  lg:flex-row justify-between bg-[#9BEFE3] rounded-4xl lg:rounded-full px-20 py-6 max-w-7xl w-full">
        <div className="flex justify-center flex-col items-center lg:items-start lg:block">
          <h2
            data-aos="fade-left"
            className="font-medium text-5xl md:text-[48px] md:leading-14 text-[#221235] text-center lg:text-start"
          >
            Tiers&nbsp;
            <br className="hidden lg:block" />
            and Perks
          </h2>
          <p
            data-aos="fade-left"
            className={`${RubikFont.className} bg-[#FF6B5C] text-sm md:text-[18px] text-black rounded-full text-center -rotate-6 mt-4 max-w-max px-4 py-2`}
          >
            The more active you are,
            <br /> the more rewards you get.
          </p>
        </div>
        <div className="flex items-center mt-8 lg:mt-0">
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-center"
          >
            <div
              className={`md:h-30 md:w-30 h-20 w-20 flex items-center justify-center rounded-full bg-[#5D8F88] mb-4`}
            >
              <DollarIcon className="md:h-20 md:w-20 h-16 w-16 text-[#3E605B]" />
            </div>
            <span
              className={`${RubikFont.className} text-sm md:text-[18px] text-black `}
            >
              SILVER
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-center -ml-2 md:-ml-4"
          >
            <div
              className={`md:h-30 md:w-30 h-20 w-20 flex items-center justify-center rounded-full bg-[#FF9085] mb-4`}
            >
              <DollarIcon className="md:h-20 md:w-20 h-16 w-16 text-[#FF4633]" />
            </div>
            <span
              className={`${RubikFont.className} text-sm md:text-[16px] text-black `}
            >
              GOLD
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-center -ml-2 md:-ml-4"
          >
            <div
              className={`md:h-30 md:w-30 h-20 w-20 flex items-center justify-center rounded-full bg-[#101817] mb-4`}
            >
              <DollarIcon className="md:h-20 md:w-20 h-16 w-16 text-[#7CBFB6]" />
            </div>
            <span
              className={`${RubikFont.className} text-sm md:text-[16px] text-black uppercase`}
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
