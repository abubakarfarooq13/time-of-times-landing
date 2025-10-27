import RoadmapIcon from "@/icons/RoadmapIcon";
import { AntaFont, RubikFont, TomorrowFont } from "@/lib/font";
import React from "react";

const RoadMap = () => {
  const roadmap = [
    {
      month: "September 2025",
      title: "Early Birds Program Start",
      top: "top-8 md:top-7 lg:-top-13",
      left: " lg:-left-6  xl:left-10",
      right: "right-48 md:right-12",
      bottom: "",
    },
    {
      month: "December 2025",
      title: "Platform Kickoff",
      top: "top-27 lg:top-30 xl:top-38",
      left: "left-44 md:left-12 lg:left-16 xl:left-34",
      right: "",
      bottom: "",
    },
    {
      month: "End of January 2026",
      title: "Foundation Phase",
      top: "top-46 md:top-44 lg:-top-13",
      left: "lg:left-35 xl:left-60",
      right: "right-48 md:right-14",
      bottom: "",
    },
    {
      month: "End of February 2026",
      title: "AI Development Phase",
      top: "top-65 md:top-64 lg:top-30 xl:top-38",
      left: "left-44 md:left-12 lg:left-53 xl:left-[340px]",
      right: "",
      bottom: "",
    },
    {
      month: "End of March 2026",
      title: "Feature Expansion Phase ",
      top: "top-84 md:top-82 lg:-top-13",
      left: " lg:left-73 xl:left-[440px]",
      right: "right-47 md:right-11",
      bottom: "",
    },
    {
      month: "April 2026",
      title: "Testing & Preparations",
      top: "top-103 md:top-102 lg:top-30 xl:top-38",
      left: "left-44 md:left-12 lg:left-93 xl:left-[540px]",
      right: "",
      bottom: "",
    },
    {
      month: "April 30, 2026",
      title: "Official Launch ",
      top: "top-122 lg:-top-13",
      left: "lg:left-113 xl:left-[645px]",
      right: "right-56 md:right-25.5",
      bottom: "",
    },
    {
      month: "Future",
      title: "Global Expansion ",
      top: "top-141 md:top-140 lg:top-30 xl:top-38",
      left: "left-44 md:left-12 lg:left-130 xl:left-[750px]",
      right: "",
      bottom: "",
    },
  ];

  return (
    <div id="roadmap" className="scroll-mt-30 mt-10 flex justify-center">
      <div className="flex flex-col lg:flex-row w-full items-center bg-[#1A0705] rounded-4xl pt-6 lg:pt-0 justify-between xl:p-6 md:gap-6 min-h-[300px] overflow-hidden">
        <div>
          <h2
            data-aos="fade-left"
            className={`text-[48px] lg:text-5xl xl:text-[48px] text-[#FF4F3A] ${TomorrowFont.className} font-semibold lg:ml-10`}
          >
            Roadmap
          </h2>
        </div>
        <div className="relative pr-10  xl:mr-10">
          {roadmap.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 50}
              key={index}
              className={`${TomorrowFont.className} absolute flex flex-col gap-2 ${item.top} ${item.left} ${item.right} ${item.bottom}`}
            >
              <h3 className="text-xs md:text-[16px] lg:text-[14px] xl:text-[16px] font-medium text-nowrap whitespace-nowrap text-[#FF4F3A] -mb-1">
                {item.month}
              </h3>
              <span className="text-[10px] md:text-[14px] lg:text-[12px] xl:text-[14px] font-normal text-white">
                {item.title}
              </span>
            </div>
          ))}

          <RoadmapIcon className="w-[600px] lg:rotate-0 rotate-90  xl:w-[900px] h-[700px] lg:h-full lg:max-h-[150px] " />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
