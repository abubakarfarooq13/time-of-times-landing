import RoadmapIcon from "@/icons/RoadmapIcon";
import { AntaFont, RubikFont } from "@/lib/font";
import React from "react";

const RoadMap = () => {
  const roadmap = [
    {
      month: "September 2025",
      title: "Early Birds Program Start",
      top: "-top-13",
      left: "left-10",
      right: "",
      bottom: "",
    },
    {
      month: "December 2025",
      title: "Platform Kickoff",
      top: "top-38",
      left: "left-34",
      right: "",
      bottom: "",
    },
    {
      month: "End of January 2026",
      title: "Foundation Phase",
      top: "-top-13",
      left: "left-60",
      right: "",
      bottom: "",
    },
    {
      month: "End of February 2026",
      title: "AI Development Phase",
      top: "top-38",
      left: "left-[340px]",
      right: "",
      bottom: "",
    },
    {
      month: "End of March 2026",
      title: "Feature Expansion Phase ",
      top: "-top-13",
      left: "left-[440px]",
      right: "",
      bottom: "",
    },
    {
      month: "April 2026",
      title: "Testing & Preparations",
      top: "top-38",
      left: "left-[540px]",
      right: "",
      bottom: "",
    },
    {
      month: "April 30, 2026",
      title: "Official Launch ",
      top: "-top-13",
      left: "left-[645px]",
      right: "",
      bottom: "",
    },
    {
      month: "Future",
      title: "Global Expansion ",
      top: "top-38",
      left: "left-[750px]",
      right: "",
      bottom: "",
    },
  ];

  return (
    <div className="mt-10 flex justify-center">
      <div className="flex w-full items-center bg-[#221235] rounded-4xl justify-between p-6 gap-6 min-h-[300px]">
        <div>
          <h2
            className={`text-[56px] text-[#FF4F3A] ${AntaFont.className} ml-10`}
          >
            Roadmap
          </h2>
        </div>
        <div className="relative mr-10">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className={`${RubikFont.className} absolute flex flex-col gap-2 ${item.top} ${item.left} ${item.right} ${item.bottom}`}
            >
              <h3 className="text-[16px] font-normal text-[#FF4F3A] -mb-1">
                {item.month}
              </h3>
              <span className="text-[14px] font-normal text-white">
                {item.title}
              </span>
            </div>
          ))}

          <RoadmapIcon className="w-[900px] h-full max-h-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
