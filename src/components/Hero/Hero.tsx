"use client";
import { RubikFont, TomorrowFont } from "@/lib/font";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import ArrowIcon from "@/icons/ArrowIcon";
import Link from "next/link";
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
    <>
      <div className="h-[100dvh] flex items-center justify-center relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero/yt.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-between h-full max-h-[60dvh] relative z-10">
          <div
          // animate={{
          //   y: [0, -20, 0, 20, 0],
          //   x: [0, 10, 0, -10, 0],
          //   rotate: [0, -10, 0, 10, 0],
          // }}
          // transition={{
          //   duration: 20,
          //   repeat: Number.POSITIVE_INFINITY,
          //   ease: "easeInOut",
          // }}
          >
            {/* <Image
              src="/hero/btc.png"
              alt="logo"
              width={170}
              height={170}
              quality={100}
            /> */}
            <h1
              className={`text-center mt-30 text-6xl font-semibold ${TomorrowFont.className}`}
            >
              Be the One
              <br /> who Owns
              <br /> the Day
            </h1>
          </div>
          <Link href="#historically">
            {" "}
            <div className="flex items-center  -mb-80 gap-2 justify-center flex-col">
              <span
                className={`text-[18px] text-white font-normal ${RubikFont.className}`}
              >
                Scroll to explore
              </span>
              <ArrowIcon className="w-8 h-8 animate-bounce" />
            </div>
          </Link>
        </div>
      </div>
      <div
        id="historically"
        className="scroll-mt-30 relative overflow-hidden mt-1 md:mt-4 lg:mt-20  rounded-4xl hero-bg-shadow z-10 mx-2 "
      >
        <div className="bg-white rounded-4xl  w-full  xl:min-h-[650px] ">
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className={`w-full px-2 md:px-4 lg:px-8 pt-4 md:pt-8 ${TomorrowFont.className}`}
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
          <div className="flex flex-col ">
            <div className="relative z-10 container mx-auto px-4 lg:px-8 py-8 xl:py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  className="text-black text-center lg:text-start  space-y-3 "
                >
                  <h1
                    className={`text-5xl md:text-[64px] lg:text-6xl xl:text-[64px] font-medium leading-tight ${TomorrowFont.className}`}
                  >
                    Historically
                    <br />
                    Valuable NFTs
                  </h1>

                  <div className={`space-y-4 ${TomorrowFont.className}`}>
                    <h2 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold">
                      Today&apos;s News Carved in NFT
                    </h2>

                    <p className="text-sm md:text-[18px] text-black/90  lg:max-w-[390px] xl:max-w-[500px] leading-relaxed">
                      Every day, one global event. One AI artwork + One
                      artist&apos;s creation.
                      {/* <br className="hidden xl:block" /> */}
                      Selected by the community, minted as a unique collectible
                      NFT.
                      {/* <br className="hidden xl:block" /> */}
                      Create, vote, trade, and hold &quot;NFTs of the Day&quot;.
                      Literally.
                    </p>
                  </div>

                  {/* <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 lg:pt-4 xl:pt-8">
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
                  </div> */}
                </motion.div>
              </div>
            </div>
            <div className="lg:absolute right-0 bottom-0 md:w-auto   lg:w-[490px] xl:w-[700px] flex justify-end ">
              <motion.div
                initial={{ y: 400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="w-[800px] md:w-auto other-shadow rounded-[20px]"
              >
                <Image src="/hero/td2.png" alt="" width={790} height={600} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
