"use client";
import { Button } from "@/components/ui/button";
import { AntaFont, OutfitFont, RubikFont } from "@/lib/font";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
export function OwnTheDaySection() {
  return (
    <div className="border-2 border-black rounded-4xl p-8 lg:px-10 xl:px-12 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center   md:justify-between gap-8 items-center">
        <div className="text-center lg:text-start">
          <h2
            data-aos="fade-left"
            className={`text-4xl md:text-[56px] font-normal  mb-4 ${AntaFont.className}`}
          >
            Own the Day!
          </h2>
          <p
            data-aos="fade-left"
            className={`text-sm md:text-[16px] text-black   ${RubikFont.className}`}
          >
            Every day leaves a mark – in headlines, in memories, in culture.
            With Time of Times, that mark
            <br className="hidden 2xl:block" /> becomes yours. We capture the
            most important story of the day and transform it into an art,
            <br className="hidden 2xl:block" /> preserved forever as a unique
            NFT.
          </p>
          <p
            data-aos="fade-left"
            className={`text-sm md:text-[16px] text-black   ${RubikFont.className} mb-6`}
          >
            By collecting these one-of-a-kind pieces, you don&apos;t just buy an
            image – you claim a moment
            <br className="hidden 2xl:block" /> in history. Each NFT is a living
            record, a piece of time that only one person can truly own.
          </p>
          <div className="flex flex-col items-center justify-center lg:justify-start sm:flex-row gap-4">
            <Button
              data-aos="fade-up"
              variant="default"
              className={`rounded-full w-full md:max-w-max !px-6 !py-5.5  text-sm md:text-[16px] font-medium ${OutfitFont.className}`}
            >
              JOIN WAITLIST
              <ArrowUpRight
                strokeWidth={2.5}
                className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
              />
            </Button>
            <Button
              data-aos="fade-up"
              variant="default"
              className={`rounded-full w-full md:max-w-max !px-6 !py-5.5  text-sm md:text-[16px] font-medium ${OutfitFont.className}`}
            >
              JOIN TELEGRAM COMMUNITY
              <ArrowUpRight
                strokeWidth={2.5}
                className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
              />
            </Button>
          </div>
        </div>

        <div className="">
          <div className=" py-6 text-center relative w-[310px] xl:w-[320px] pr-6 xl:pr-0 xl:mr-6">
            <div
              data-aos="fade-right"
              className="text-6xl mb-4 w-full flex justify-end"
            >
              <motion.div
                animate={{
                  // y: [0, -10, 0, 10, 0],
                  // scale: [0.9, 1, 0.9, 1, 0.9],
                  rotate: [0, -8, 0, 8, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/joincommunity/c.png"
                  alt="day"
                  width={200}
                  height={200}
                />
              </motion.div>
            </div>
            <p
              data-aos="fade-up"
              className={`text-black bg-[#FFCDC7] other-shadow-2 font-normal ${RubikFont.className} px-4 py-2 absolute bottom-5 right-4 xl:-right-2 rounded-full text-sm xl:text-[16px]`}
            >
              Scarce, meaningful, and eternal. Own <br />
              the Day, and hold it forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
