"use client";
import { AntaFont, OutfitFont, RubikFont, TomorrowFont } from "@/lib/font";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import TiersAndPerks from "./TiersAndPerks";
import RoadMap from "./RoadMap";
import { motion } from "motion/react";
const EarlyBirdsAirdrop = () => {
  return (
    <div
      className={` py-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col overflow-hidden  w-full ${TomorrowFont.className}`}
    >
      <div className="text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-semibold md:text-[44px]"
        >
          {" "}
          Early Birds Airdrop
        </h2>
        <span
          data-aos="fade-up"
          className={`text-xl md:text-[24px] font-medium block mt-4 ${TomorrowFont.className}`}
        >
          Earn Pre-TGE $TIMES Now
        </span>
      </div>
      <div className="flex mt-6 md:mt-10 xl:mt-8  justify-center lg:justify-around">
        <div className="xl:space-y-8 space-y-6 text-center md:text-start relative">
          <div>
            <h2
              data-aos="fade-left"
              className={`font-medium text-[24px] ${TomorrowFont.className}`}
            >
              ”Early Birds” Program{" "}
            </h2>
            <p
              data-aos="fade-left"
              className={`text-[16px] mt-2 font-normal ${RubikFont.className}`}
            >
              You are lucky to be here before TGE. You can get tokens{" "}
              <br className="xl:hidden md:block hidden" /> on the most favorable
              <br className="hidden xl:block" /> terms – even for free!{" "}
            </p>
          </div>
          <div>
            <h2
              data-aos="fade-left"
              className={`font-medium text-[24px] ${TomorrowFont.className}`}
            >
              How it works
            </h2>
            <p
              data-aos="fade-left"
              className={`text-[16px] mt-2 font-normal ${RubikFont.className}`}
            >
              Follow Time of Times on Telegram and X, complete quests,
              <br className="xl:hidden md:block hidden" /> post public
              <br className="hidden xl:block" /> mentions, join AMAs, and invite
              friends. Rewards <br className="xl:hidden hidden lg:block" />
              may include $TIMES with
              <br className="hidden xl:block" /> vesting and role badges.
            </p>
          </div>
          <Button
            data-aos="fade-left"
            variant="default"
            className={`rounded-full max-w-max bg-transparent border-2 border-[#9BEFE3] text-white !px-6 !py-5.5  md:text-[16px] font-medium ${OutfitFont.className}`}
          >
            LEARN MORE ON TELEGRAM
            <ArrowUpRight
              strokeWidth={2.5}
              className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
            />
          </Button>
          <div className="absolute -top-10 -left-4 md:hidden">
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, 50, 0, -40, 0],
                rotate: [0, -30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/earlybirdsairdrop/b3.png"
                alt=""
                width={30}
                height={30}
                quality={100}
              />
            </motion.div>
          </div>
          <div className="absolute top-30 right-4 md:hidden">
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, 50, 0, -40, 0],
                rotate: [0, -30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/earlybirdsairdrop/b3.png"
                alt=""
                width={30}
                height={30}
                quality={100}
              />
            </motion.div>
          </div>
        </div>
        <div className="md:flex relative hidden">
          <div className="absolute hidden lg:block w-[80px] xl:w-[100px] -left-30  2xl:-left-50 top-20">
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, 100, 0],
                rotate: [0, 30, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/earlybirdsairdrop/b1.png"
                alt=""
                width={100}
                height={100}
                quality={100}
              />
            </motion.div>
          </div>
          <div className="lg:mr-10 xl:mr-20 w-[200px] xl:w-[250px]">
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, -60, 0],
                rotate: [0, -20, 0],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/earlybirdsairdrop/b2.png"
                alt=""
                width={250}
                height={300}
                quality={100}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -100, 0],
                rotate: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/earlybirdsairdrop/b3.png"
                alt=""
                width={50}
                height={50}
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <TiersAndPerks />
      <RoadMap />
    </div>
  );
};

export default EarlyBirdsAirdrop;
