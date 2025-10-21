import { AntaFont, OutfitFont, RubikFont, TomorrowFont } from "@/lib/font";
import React from "react";

const HowItWorks = () => {
  const news = [
    {
      hr: "1 hr",
      details: "France & Britain refine UN Gaza force plans",
      top: "top-8",
      left: "",
    },
    {
      hr: "5 hr",
      details: "Japan to vote on next prime minister next week",
      top: "top-30",
      left: "left-1/2",
    },
    {
      hr: "3 hr",
      details: "Putin meets top officials after call with Trump",
      top: "top-1/2",
      left: "left-1/4",
    },
    {
      hr: "6 hr",
      details: "IMF raises global growth outlook, warns of trade risks",
      top: "top-[70%]",
      left: "left-[70%]",
    },
    {
      hr: "7 hr",
      details: "Oil outlook: surplus risk and price pressure",
      top: "bottom-6",
      left: "left-6",
    },
  ];

  return (
    <div className=" relative pt-10 pb-16">
      <h1
        className={`${AntaFont.className} text-[56px] font-normal text-center mt-12`}
      >
        How it works
      </h1>
      <div className="flex  h-[500px] w-full ">
        <div className="relative flex items-center h-full ">
          <div className="h-[800px] w-[800px] absolute -top-50 -left-60 border-r-2 border-[#C0C0C0]   border-dashed  rounded-full ">
            <div className="relative h-[800px]">
              <div
                className={`absolute flex flex-col gap-3  w-[60px] z-20 -right-7 top-[430px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#FF4F3A] text-white rounded-full flex items-center justify-center text-[32px] font-medium h-[60px] w-[60px] z-20  ">
                  1
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3  w-[40px] z-20 -right-0 top-[510px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  2
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3  w-[40px] z-20 right-5.5 top-[565px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  3
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3  w-[40px] z-20 right-13.5 top-[615px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  4
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3  w-[40px] z-20 right-23 top-[660px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  5
                </div>
              </div>
              <div
                className={`absolute flex flex-col gap-3  w-[40px] z-20 right-34 top-[700px] ${TomorrowFont.className}`}
              >
                <div className="bg-[#E5E5E5] font-medium text-black rounded-full flex items-center justify-center text-[16px] h-[40px] w-[40px] z-20  ">
                  6
                </div>
              </div>
            </div>
          </div>
          <div className="w-[150px] h-[150px] bg-[#FFCEC8] rounded-full ml-20"></div>
          {news.map((item, index) => (
            <div
              key={index}
              className={`flex gap-2 ${item.top} ${item.left} bg-white rounded-full other-shadow px-4 py-1 text-[10px] items-center absolute ${RubikFont.className}`}
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

        <div className="ml-[380px] mt-[220px]">
          <div
            className={`flex flex-col ${TomorrowFont.className} text-[32px] font-medium `}
          >
            <span>Note of the Day</span>
            <span className={`${RubikFont.className} text-[19px] font-normal`}>
              AI scans global media and selects the most discussed news.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
