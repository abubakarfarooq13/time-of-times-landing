"use client";
import { AntaFont, OutfitFont, RubikFont, TomorrowFont } from "@/lib/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HowItWorks = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const news = [
    {
      hr: "1 hr",
      details: "France & Britain refine UN Gaza force plans",
      top: "top-8",
      left: "left-6 md:left-auto",
    },
    {
      hr: "5 hr",
      details: "Japan to vote on next prime minister next week",
      top: "top-30",
      left: "left-22 md:left-1/2",
    },
    {
      hr: "3 hr",
      details: "Xi Jinping meets top officials after call with Trump",
      top: "top-56 md:top-76",
      left: "left-1/4",
    },
    {
      hr: "6 hr",
      details: "IMF raises global growth outlook, warns of trade risks",
      top: "top-72 md:top-92",
      left: "left-14 md:left-42",
    },
    {
      hr: "7 hr",
      details: "Oil outlook: surplus risk and price pressure",
      top: "bottom-18 md:bottom-6",
      left: "left-6",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalSteps = 6;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    const sections = Array.from(
      { length: totalSteps },
      (_, i) => `.step-${i + 1}-content`
    );

    gsap.set(sections, { opacity: 0, display: "none" });
    gsap.set(".step-1-content", { opacity: 1, display: "block" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-gsap",
        start: "top top",
        end: `+=${totalSteps * 150}`,
        scrub: 0.3,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: "labels",
          duration: { min: 0.3, max: 0.5 },
          ease: "power1.inOut",
        },
      },
      defaults: { ease: "power2.out" },
    });

    for (let i = 1; i < totalSteps; i++) {
      const current = `.step-${i}-content`;
      const next = `.step-${i + 1}-content`;
      tl.addLabel(`step${i}`);
      tl.to(current, { opacity: 0.3, y: -50, duration: 0.3 });
      if (next) {
        tl.set(current, { display: "none" });
        tl.set(next, { display: "block", opacity: 0.3, y: 50 });
        tl.to(next, { opacity: 1, y: 0, duration: 0.3 });
      }
    }

    tl.addLabel("endHold");

    ScrollTrigger.create({
      trigger: ".hero-gsap",
      start: "top top",
      end: `+=${totalSteps * 150}`,
      scrub: true,
      onUpdate: (self) => {
        const progressPerStep = 1 / (totalSteps - 1);
        const rawIndex = Math.floor(self.progress / progressPerStep) + 1;
        const step = Math.min(Math.max(rawIndex, 1), totalSteps);

        gsap.to(
          ".number-1 div, .number-2 div, .number-3 div, .number-4 div, .number-5 div, .number-6 div",
          {
            backgroundColor: "#E5E5E5",
            color: "#000",
            duration: 0.3,
            ease: "power2.out",
          }
        );

        gsap.to(`.number-${step} div`, {
          backgroundColor: "#9BEFE3",
          color: "#000000",
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  });

  return (
    <div className="hero-gsap relative mx-2 2xl:mx-0 md:pt-10 lg:pt-16 md:pb-10 flex flex-col ">
      <h1
        className={`${TomorrowFont.className} text-4xl  md:text-[44px] font-semibold text-center mt-23 md:mt-12 z-10 md:bg-transparent xl:bg-transparent`}
      >
        How it works
      </h1>
      <div className="flex   h-full  w-full md:flex-row flex-col">
        <div className="relative   flex md:items-center md:h-full ">
          <div className="h-[800px] w-[800px] absolute -top-30 -left-50 border-r-2 border-[#C0C0C0]    border-dashed  rounded-full hidden lg:block">
            <div className="relative h-[800px]">
              <div
                className={`absolute flex flex-col gap-3 number-1  w-[60px] z-20 -right-10 top-[360px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#FF4F3A] text-white rounded-full flex items-center justify-center text-[16px] font-medium h-[40px] w-[40px] z-20  ">
                  1
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3 number-2  w-[40px] z-20 -right-4 top-[430px]  ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  2
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3 number-3  w-[40px] z-20 -right-1 top-[495px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  3
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3 number-4  w-[40px] z-20 right-5 top-[555px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  4
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3 number-5  w-[40px] z-20 right-13.5 top-[615px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  5
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3 number-6  w-[40px] z-20 right-24 top-[665px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  6
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  md:h-full md:ml-14 mt-20">
            <div className="  step-1-content">
              <div className="relative -mt-16 md:mt-0 flex justify-center items-center md:w-[300px] md:h-[550px] h-[450px] ">
                <div
                  className="absolute md:left-16  w-[250px] h-[250px]  rounded-full border-none bg-[#FF4F3A]/30"
                  style={{
                    animation: "pulse-expand 2s ease-out infinite",
                    animationDelay: "1s",
                    opacity: 0,
                  }}
                />

                <div
                  className="absolute md:left-22.5 w-[200px] h-[200px] rounded-full border-none bg-[#FF4F3A]/40 "
                  style={{
                    animation: "pulse-expand 2s ease-out infinite",
                    animationDelay: "2s",
                    opacity: 0,
                  }}
                />
                <div className="w-[150px] z-10 h-[150px] bg-[#FF4F3A] rounded-full md:ml-20"></div>
              </div>
              {news.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${item.top} ${item.left} bg-white rounded-full other-shadow px-4 z-20 py-1 text-[10px] items-center absolute ${RubikFont.className}`}
                >
                  <span className="text-[#747474] text-nowrap">{item.hr}</span>
                  <span
                    className={`text-[#444444]  text-nowrap ${OutfitFont.className}`}
                  >
                    {item.details}
                  </span>
                </div>
              ))}
            </div>
            <div className="  step-2-content">
              <div className="relative  -mt-10 md:mt-0 flex justify-center items-center md:w-[400px] h-[450px] md:h-[550px]">
                <div className="absolute top-0 w-[200px] md:w-[300px]  z-5 right-2 md:-right-14">
                  <Image
                    src="/howitworks/2a.png"
                    alt="Step 2"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="absolute md:bottom-0 left-8 bottom-20 md:left-0  w-[200px] md:w-[300px]">
                  <Image
                    src="/howitworks/2b.png"
                    alt="Step 2"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className="  step-3-content">
              <div className="relative  -mt-20 md:-mt-0 flex justify-center items-center md:w-[400px] h-[450px] md:h-[550px]">
                <div className="w-[250px] md:w-[300px]">
                  <Image
                    src="/howitworks/3.png"
                    alt="Step 3"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className="  step-4-content">
              <div className="relative  -mt-16 md:mt-0 flex justify-center items-center md:w-[400px] h-[450px] md:h-[550px]">
                <div className="">
                  <Image
                    src="/howitworks/4.png"
                    alt="Step 4"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
            <div className="  step-5-content">
              <div className="relative  -mt-16 md:mt-0 flex justify-center items-center md:w-[400px] h-[450px] md:h-[550px]">
                <div className="w-[270px] md:w-[400px]">
                  <Image
                    src="/howitworks/5.png"
                    alt="Step 5"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
            <div className="  step-6-content">
              <div className="relative  -mt-20 md:mt-0 flex justify-center items-center md:w-[430px]  md:h-[550px] h-[450px]">
                <div className="">
                  <Image
                    src="/howitworks/6.png"
                    alt="Step 6"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:ml-[300px] -mt-6 text-center md:text-start xl:ml-[380px] md:mt-[220px] step-1-content">
          <div
            className={`flex flex-col ${TomorrowFont.className} text-[32px] font-medium `}
          >
            <span>Note of the Day</span>
            <span className={`${RubikFont.className} text-[19px] font-normal`}>
              AI scans global media and selects the most discussed news.
            </span>
          </div>
        </div>
        <div className=" text-center md:text-start -mt-10  lg:ml-[200px] xl:ml-[280px] md:mt-[400px] lg:mt-[220px] step-2-content hidden">
          <div
            className={`flex flex-col ${TomorrowFont.className} text-[32px] font-medium `}
          >
            <span>Two Artworks</span>
            <span className={`${RubikFont.className} text-[19px] font-normal`}>
              AI creates one artwork, while artists from the community upload
              their own.
            </span>
          </div>
        </div>
        <div className="text-center  md:text-start  md:-ml-[100px] lg:ml-[200px] xl:ml-[280px] md:mt-[220px] step-3-content hidden">
          <div
            className={`flex flex-col ${TomorrowFont.className} text-[32px] font-medium `}
          >
            <span>Community Voting</span>
            <span className={`${RubikFont.className} text-[19px] font-normal`}>
              Users vote with $TIMES tokens to choose the best human-made
              artwork.
            </span>
          </div>
        </div>
        <div className="lg:ml-[200px] -mt-6 text-center md:text-start xl:ml-[280px] md:mt-[220px] step-4-content hidden">
          <div
            className={`flex flex-col ${TomorrowFont.className} text-[32px] font-medium `}
          >
            <span> Minting & Auction</span>
            <span className={`${RubikFont.className} text-[19px] font-normal`}>
              The AI artwork and the winning human artwork are minted as NFTs
              and auctioned.
            </span>
          </div>
        </div>
        <div className="md:-ml-[50px] -mt-6 lg:ml-[200px] text-center md:text-start xl:ml-[280px] md:mt-[220px] step-5-content hidden">
          <div
            className={`flex flex-col ${TomorrowFont.className} text-[32px] font-medium `}
          >
            <span>Rewards</span>
            <span className={`${RubikFont.className} text-[19px] font-normal`}>
              Profits are shared fairly: 50% to the artist, 25% to voters, 25%
              to DAO.
            </span>
          </div>
        </div>
        <div className="text-center -mt-10 md:text-start md:-ml-[80px] lg:ml-[200px] xl:ml-[260px] md:mt-[220px]  step-6-content hidden">
          <div
            className={`flex flex-col ${TomorrowFont.className} text-[32px] font-medium `}
          >
            <span>Historical Value</span>
            <span className={`${RubikFont.className} text-[19px] font-normal`}>
              One-of-a-kind NFTs of the day grow over time, gaining historical
              value.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
