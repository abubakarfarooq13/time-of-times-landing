"use client";

import { PieChart } from "./PieChart";
import { DistributionLegend } from "./DistributionLegend";
import { AntaFont, OutfitFont } from "@/lib/font";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export function Tokenomics() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-12 xl:px-12 lg:py-16">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-center relative">
          <div className="flex flex-col md:flex-row items-center w-full justify-between">
            <div className="flex flex-col items-center md:items-start justify-center lg:col-span-1">
              <h1
                data-aos="fade-left"
                className={`text-center md:text-start text-4xl md:text-[56px] lg:text-5xl xl:text-[56px] font-bold text-white mb-1 md:mb-4 md:leading-16 ${AntaFont.className}`}
              >
                $TIMES
                <br />
                TOKENOMICS
              </h1>
              <p
                data-aos="fade-left"
                className="text-xl text-center md:text-start md:text-2xl lg:text-xl xl:text-2xl text-white mb-2 md:mb-4 font-medium"
              >
                Your Voice Matters — and Pays
              </p>

              <div
                data-aos="fade-left"
                className=" mb-4 md:mb-8 text-white text-[16px]"
              >
                <p>
                  <span className="font-semibold">Name:</span> Time of Times
                  Token
                </p>
                <p>
                  <span className="font-semibold">Ticker:</span> $TIMES
                </p>
                <p>
                  <span className="font-semibold">Total supply:</span>{" "}
                  1,000,000,000
                </p>
              </div>
              <Button
                data-aos="fade-left"
                variant="default"
                className={`rounded-full max-w-max !px-6 !py-5.5   md:text-[16px] font-medium ${OutfitFont.className}`}
              >
                CHECK DETAILED TOKENOMICS{" "}
                <ArrowUpRight
                  strokeWidth={2.5}
                  className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
                />
              </Button>
            </div>

            <div
              data-aos="fade-up"
              className="hidden lg:flex  justify-center w-full lg:absolute  left-10 xl:left-0"
            >
              <PieChart />
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
