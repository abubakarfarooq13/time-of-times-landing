"use client";

import { PieChart } from "./PieChart";
import { DistributionLegend } from "./DistributionLegend";
import { AntaFont, OutfitFont } from "@/lib/font";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export function Tokenomics() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
      <div className=" mx-auto">
        <div className="flex justify-between gap-8 lg:gap-12 items-center relative">
          <div className="flex flex-col justify-center lg:col-span-1">
            <h1
              className={`text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-4 leading-16 ${AntaFont.className}`}
            >
              $TIMES
              <br />
              TOKENOMICS
            </h1>
            <p className="text-lg md:text-2xl text-white mb-4 font-medium">
              Your Voice Matters — and Pays
            </p>

            <div className=" mb-8 text-white text-sm md:text-[16px]">
              <p>
                <span className="font-semibold">Name:</span> Time of Times Token
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
              variant="default"
              className={`rounded-full max-w-max !px-6 !py-5.5  text-[16px] font-medium ${OutfitFont.className}`}
            >
              CHECK DETAILED TOKENOMICS{" "}
              <ArrowUpRight
                strokeWidth={2.5}
                className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
              />
            </Button>
          </div>

          <div className="flex justify-center w-full absolute">
            <PieChart />
          </div>

          <div className="">
            <DistributionLegend />
          </div>
        </div>
      </div>
    </section>
  );
}
