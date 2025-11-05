"use client";
import { Button } from "@/components/ui/button";
import { AntaFont, OutfitFont, RubikFont, TomorrowFont } from "@/lib/font";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
export function OwnTheDaySection() {
  const contentMarque = [
    {
      text: "Pre-Sale coming soon",
    },
    {
      text: "Join Now for early Birds benefits",
    },
  ];
  return (
    <div className="border-2 bg-white border-[#9BEFE3] rounded-4xl p-8 lg:px-10 xl:px-12 overflow-hidden">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className={`w-full  ${TomorrowFont.className}`}
      >
        <Marquee
          speed={70}
          className="bg-[#AFF2E9] h-[40px] rounded-full   w-full "
        >
          {[
            ...contentMarque,
            ...contentMarque,
            ...contentMarque,
            ...contentMarque,
          ].map((item, index) => (
            <div
              key={index}
              className={`flex px-8 justify-between text-[16px] ${
                index % 2 === 0 ? "text-[#FF4F3A]" : "text-black"
              } font-medium items-center`}
            >
              <span className="px-4  w-full">{item.text}</span>
              <div className="h-5 w-0.5 bg-[#FF4F3A] ml-12"></div>
            </div>
          ))}
        </Marquee>
      </motion.div>
      <div className="flex flex-col lg:flex-row justify-center   md:justify-between gap-8 items-center mt-5 lg:mt-0">
        <div className="text-center lg:text-start">
          <h2
            data-aos="fade-left"
            className={`text-4xl md:text-[44px] font-semibold text-black  mb-4 ${TomorrowFont.className}`}
          >
            Own the Day!
          </h2>
          <p
            data-aos="fade-left"
            className={`text-sm md:text-[18px] text-black   ${RubikFont.className}`}
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
          <div className="flex flex-col items-center justify-center lg:justify-start sm:flex-row gap-4 ">
            <Button
              data-aos="fade-up"
              variant="default"
              className={`rounded-full w-full md:max-w-max !px-6 !py-5.5  text-sm md:text-[16px] bg-[#9BEFE3] font-medium ${OutfitFont.className}`}
            >
              JOIN WAITLIST
              <ArrowUpRight
                strokeWidth={2.5}
                className=" !h-4.5 !w-4.5 text-[#9BEFE3] p-0.5 bg-black rounded-full"
              />
            </Button>
            {/* <Button
              data-aos="fade-up"
              variant="default"
              className={`rounded-full w-full md:max-w-max !px-6 !py-5.5  text-sm md:text-[16px] font-medium ${OutfitFont.className}`}
            >
              JOIN TELEGRAM COMMUNITY
              <ArrowUpRight
                strokeWidth={2.5}
                className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
              />
            </Button> */}
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
                  width={250}
                  height={250}
                />
              </motion.div>
            </div>
            <p
              data-aos="fade-up"
              className={`text-black bg-[#FF6B5C] other-shadow-2 font-normal ${RubikFont.className} px-4 py-2 absolute bottom-5 right-4 xl:-right-2 rounded-full text-sm xl:text-[18px]`}
            >
              Scarce, meaningful, and eternal. Own the Day, and hold it forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
