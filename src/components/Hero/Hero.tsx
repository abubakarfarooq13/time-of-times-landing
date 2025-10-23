"use client";
import { Button } from "@/components/ui/button";
import { RubikFont, TomorrowFont } from "@/lib/font";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
const Hero = () => {
  const contentMarque = [
    {
      text: "Pre-Sale coming soon",
    },
    {
      text: "Join Now for early Birds benefits",
    },
  ];
  return (
    <div className="relative overflow-hidden mt-1 md:mt-4 lg:mt-0  rounded-4xl hero-bg-shadow z-10 mx-2 ">
      <div className=" hero-bg rounded-4xl  w-full  xl:min-h-[650px] ">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className={`w-full px-2 md:px-4 lg:px-8 pt-4 md:pt-8 ${RubikFont.className}`}
        >
          <Marquee
            speed={70}
            className="bg-[#FFEFE9] h-[50px] rounded-full   w-full "
          >
            {[
              ...contentMarque,
              ...contentMarque,
              ...contentMarque,
              ...contentMarque,
            ].map((item, index) => (
              <div
                key={index}
                className={`flex px-8 justify-between text-[12px] ${
                  index % 2 === 0 ? "text-[#FF4F3A]" : "text-black"
                } font-semibold items-center`}
              >
                <span className="px-4  w-full">{item.text}</span>
                <div className="h-5 w-0.5 bg-[#FF4F3A] ml-12"></div>
              </div>
            ))}
          </Marquee>
        </motion.div>
        <div className="flex flex-col ">
          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-8 xl:py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="text-white text-center lg:text-start  space-y-3 lg:pl-8 xl:pl-16"
              >
                <h1
                  className={`text-5xl md:text-[64px] lg:text-6xl xl:text-[64px] font-medium leading-tight ${TomorrowFont.className}`}
                >
                  Historically
                  <br />
                  Valuable NFTs
                </h1>

                <div className={`space-y-4 ${RubikFont.className}`}>
                  <h2 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold">
                    Today&apos;s News Carved in NFT
                  </h2>

                  <p className="text-sm md:text-[16px] text-white/90  lg:max-w-[390px] xl:max-w-[500px] leading-relaxed">
                    Every day, one global event. One AI artwork + One
                    artist&apos;s creation.
                    <br className="hidden xl:block" />
                    Selected by the community, minted as a unique collectible
                    NFT.
                    <br className="hidden xl:block" />
                    Create, vote, trade, and hold &quot;NFTs of the Day&quot;.
                    Literally.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 lg:pt-4 xl:pt-8">
                  <Button className="rounded-full bg-[#FF4F3A] border-2 border-[#FF4F3A]  text-white hover:bg-transparent font-medium text-[16px] !px-5 !py-5 xl:!px-6 xl:!py-6">
                    Join Community
                    <ArrowUpRight
                      strokeWidth={2.5}
                      className="!h-5 !w-5  xl:!h-6 xl:!w-6 text-[#FF4F3A] p-0.5 bg-white rounded-full"
                    />
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-full bg-transparent border-2 border-[#FF4F3A] text-white hover:text-white hover:bg-[#FF4F3A] font-medium text-[16px] !px-5 !py-5 xl:!px-6 xl:!py-6"
                  >
                    Join Community
                    <ArrowUpRight
                      strokeWidth={2.5}
                      className=" !h-5 !w-5 xl:!h-6 xl:!w-6 text-[#4a1e37] p-0.5 bg-white rounded-full"
                    />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="lg:absolute right-0 bottom-0 md:w-auto   lg:w-[490px] xl:w-[690px] flex justify-end ">
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="w-[330px] sm:w-auto"
            >
              <Image src="/hero/t2.png" alt="" width={690} height={600} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
