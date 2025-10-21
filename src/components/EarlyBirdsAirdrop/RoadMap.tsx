import RoadmapIcon from "@/icons/RoadmapIcon";
import { AntaFont, RubikFont } from "@/lib/font";
import React from "react";

const RoadMap = () => {
  const roadmap = [
    {
      month: "September 2025",
      title: "Early Birds Program Start",
      top: "-top-13",
      left: "-left-6  xl:left-10",
      right: "",
      bottom: "",
    },
    {
      month: "December 2025",
      title: "Platform Kickoff",
      top: "top-30 xl:top-38",
      left: "left-16 xl:left-34",
      right: "",
      bottom: "",
    },
    {
      month: "End of January 2026",
      title: "Foundation Phase",
      top: "-top-13",
      left: "left-35 xl:left-60",
      right: "",
      bottom: "",
    },
    {
      month: "End of February 2026",
      title: "AI Development Phase",
      top: "top-30 xl:top-38",
      left: "left-53 xl:left-[340px]",
      right: "",
      bottom: "",
    },
    {
      month: "End of March 2026",
      title: "Feature Expansion Phase ",
      top: "-top-13",
      left: "left-73 xl:left-[440px]",
      right: "",
      bottom: "",
    },
    {
      month: "April 2026",
      title: "Testing & Preparations",
      top: "top-30 xl:top-38",
      left: "left-93 xl:left-[540px]",
      right: "",
      bottom: "",
    },
    {
      month: "April 30, 2026",
      title: "Official Launch ",
      top: "-top-13",
      left: "left-113 xl:left-[645px]",
      right: "",
      bottom: "",
    },
    {
      month: "Future",
      title: "Global Expansion ",
      top: "top-30 xl:top-38",
      left: "left-130 xl:left-[750px]",
      right: "",
      bottom: "",
    },
  ];

  return (
    <div className="mt-10 flex justify-center">
      <div className="flex w-full items-center bg-[#221235] rounded-4xl justify-between xl:p-6 gap-6 min-h-[300px] overflow-hidden">
        <div>
          <h2
            className={`text-5xl xl:text-[56px] text-[#FF4F3A] ${AntaFont.className} ml-10`}
          >
            Roadmap
          </h2>
        </div>
        <div className="relative pr-10 xl:pr-0 xl:mr-10">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className={`${RubikFont.className} absolute flex flex-col gap-2 ${item.top} ${item.left} ${item.right} ${item.bottom}`}
            >
              <h3 className="text-[14px] xl:text-[16px] font-normal text-[#FF4F3A] -mb-1">
                {item.month}
              </h3>
              <span className="text-[12px] xl:text-[14px] font-normal text-white">
                {item.title}
              </span>
            </div>
          ))}

          <RoadmapIcon className="w-[600px] xl:w-[900px] h-full max-h-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
