import DollarIcon from "@/icons/DollarIcon";
import { RubikFont } from "@/lib/font";
import Image from "next/image";
import React from "react";

const TiersAndPerks = () => {
  return (
    <div className="mt-6 xl:mt-4 flex justify-center">
      <div className="flex flex-col items-center  lg:flex-row justify-between bg-[#9BEFE3] rounded-4xl lg:rounded-[32px] px-20 py-6 max-w-7xl w-full">
        <div className="flex justify-center flex-col items-center lg:items-start lg:block">
          <h2
            data-aos="fade-left"
            className="font-medium text-5xl md:text-[48px] md:leading-14 text-[#221235] text-center lg:text-start"
          >
            Tiers&nbsp; and Perks
          </h2>
          <p
            data-aos="fade-left"
            className={`${RubikFont.className} bg-[#FF4F3A] text-[18px] md:text-3xl text-white rounded-[8px] text-center lg:text-start font-medium  mt-4 max-w-max px-2 py-1`}
          >
            The more active you are, the more rewards you get.
          </p>
        </div>
        <div className="flex items-center mt-8 lg:mt-0">
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-center"
          >
            <div
              className={`md:h-30 md:w-30 h-20 w-20 flex items-center justify-center rounded-full  mb-4`}
            >
              {/* <DollarIcon className="md:h-20 md:w-20 h-16 w-16 text-[#3E605B]" /> */}
              <Image
                src="/earlybirdsairdrop/silver.png"
                alt="Silver"
                width={120}
                height={120}
                quality={100}
              />
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
              {/* <DollarIcon className="md:h-20 md:w-20 h-16 w-16 text-[#FF4633]" /> */}
              <Image
                src="/earlybirdsairdrop/gold.png"
                alt="Gold"
                width={120}
                height={120}
                quality={100}
              />
            </div>
            <span
              className={`${RubikFont.className} text-sm md:text-[18px] text-black `}
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
              {/* <DollarIcon className="md:h-20 md:w-20 h-16 w-16 text-[#7CBFB6]" /> */}
              <Image
                src="/earlybirdsairdrop/platinum.png"
                alt="Platinum"
                width={120}
                height={120}
                quality={100}
              />
            </div>
            <span
              className={`${RubikFont.className} text-sm md:text-[18px] text-black uppercase`}
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
