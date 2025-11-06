"use client";

import { PieChart } from "./PieChart";
import { DistributionLegend } from "./DistributionLegend";
import { AntaFont, OutfitFont, RubikFont, TomorrowFont } from "@/lib/font";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Tokenomics() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-12 xl:px-12 lg:py-16">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-center relative">
          <div className="flex flex-col md:flex-row items-center w-full justify-between">
            <div className="flex flex-col items-center md:items-start justify-center lg:col-span-1">
              <h1
                data-aos="fade-left"
                className={`text-center md:text-start text-4xl md:text-[48px] lg:text-5xl xl:text-[44px] font-semibold text-white mb-1 md:mb-2 md:leading-14 ${TomorrowFont.className}`}
              >
                $TIMES
                <br />
                TOKENOMICS
              </h1>
              <p
                data-aos="fade-left"
                className={`text-xl text-center md:text-start md:text-2xl lg:text-xl xl:text-2xl text-white mb-2 md:mb-4 font-medium ${TomorrowFont.className}`}
              >
                Your Voice Matters — and Pays
              </p>

              <div
                data-aos="fade-left"
                className={` mb-4 md:mb-8 text-white text-[18px] ${RubikFont.className}`}
              >
                <p>
                  <span className="">Name:</span> Time of Times Token
                </p>
                <p>
                  <span className="">Ticker:</span> $TIMES
                </p>
                <p>
                  <span className="">Total supply:</span> 1,000,000,000
                </p>
              </div>
              <Button
                data-aos="fade-left"
                variant="default"
                className={`rounded-full bg-[#9BEFE3] max-w-max !px-6 !py-5.5   md:text-[16px] font-medium ${OutfitFont.className}`}
              >
                CHECK DETAILED TOKENOMICS{" "}
                <ArrowUpRight
                  strokeWidth={2.5}
                  className=" !h-4.5 !w-4.5 text-[#9BEFE3] p-0.5 bg-black rounded-full"
                />
              </Button>
            </div>

            <div
              data-aos="fade-up"
              className="flex md:hidden ml-8 my-8 md:my-0 md:ml-0 lg:flex  justify-center w-full lg:absolute   left-16 xl:left-14"
            >
              {/* <PieChart /> */}
              <Image
                src="/votetoearn/pie.png"
                alt="Pie Chart"
                className="w-auto h-auto lg:w-[350px] xl:w-[420px]"
                width={420}
                height={420}
                quality={100}
              />
            </div>

            <div className="mt-6 md:mt-0">
              <DistributionLegend />
            </div>
          </div>
          {/* <div className="hidden lg:block">
            <DistributionLegend />
          </div> */}
        </div>
      </div>
    </section>
  );
}
