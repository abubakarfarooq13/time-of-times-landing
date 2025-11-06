"use client";

import { TomorrowFont } from "@/lib/font";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Sector,
} from "recharts";

const data = [
  { name: "Community", value: 35, color: "#ff644f" },
  { name: "Marketing", value: 15, color: "#ff7663" },
  { name: "Seed", value: 14, color: "#ff988c" },
  { name: "Team", value: 10, color: "#ffbbb3" },
  { name: "Treasury", value: 10, color: "#1a1a2e" },
  { name: "Liquidity", value: 7, color: "#4d3f5c" },
  { name: "KOL", value: 4, color: "#7b7287" },
  { name: "Public", value: 2, color: "#a9a2b0" },
  { name: "Staking", value: 2, color: "#d5d2d9" },
  { name: "Advisors", value: 1, color: "#ffffff" },
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name?: string;
    value?: number;
    payload?: {
      name: string;
      value: number;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    const value = data.value ?? data.payload?.value ?? 0;
    const name = data.name ?? data.payload?.name ?? "";
    const percentage = value.toFixed(2);

    return (
      <div
        className={`relative pointer-events-none ${TomorrowFont.className} z-50`}
      >
        <div className="absolute left-[-8px] sm:left-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 z-10 border-t-[8px] sm:border-t-[10px] border-b-[8px] sm:border-b-[10px] border-r-[8px] sm:border-r-[10px] border-t-transparent border-b-transparent border-r-white" />
        <div className="bg-white rounded-lg sm:rounded-xl px-3 py-2 sm:px-5 sm:py-3.5 shadow-lg min-w-[100px] sm:min-w-[130px] text-center border-0">
          <div
            className="text-sm sm:text-[16px] font-medium mb-0.5 leading-tight"
            style={{
              color: "#FF5733",
              letterSpacing: "0.5px",
            }}
          >
            {percentage}%
          </div>
          <div className="text-xs sm:text-base font-medium text-black leading-tight">
            {name}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

type DataItem = {
  name: string;
  value: number;
  color: string;
};

const MobileTooltip = ({
  activeIndex,
  chartData,
}: {
  activeIndex: number | null;
  chartData: DataItem[];
}) => {
  if (activeIndex === null) return null;

  const item = chartData[activeIndex];
  if (!item) return null;

  const percentage = item.value.toFixed(2);

  return (
    <div
      className={`absolute top-2 left-1/2 -translate-x-1/2 ${TomorrowFont.className} z-50 pointer-events-none`}
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[8px] w-0 h-0 z-10"
        style={{
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: "8px solid white",
        }}
      />
      <div className="bg-white rounded-lg px-3 py-2 shadow-lg min-w-[100px] text-center border-0">
        <div
          className="text-sm font-medium mb-0.5 leading-tight"
          style={{
            color: "#FF5733",
            letterSpacing: "0.5px",
          }}
        >
          {percentage}%
        </div>
        <div className="text-xs font-medium text-black leading-tight">
          {item.name}
        </div>
      </div>
    </div>
  );
};

export function PieChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [radii, setRadii] = useState({ inner: 80, outer: 160 });

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 640) {
        setRadii({ inner: 60, outer: 120 });
      } else if (width < 1024) {
        setRadii({ inner: 60, outer: 120 });
      } else {
        setRadii({ inner: 80, outer: 160 });
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && activeIndex !== null) {
      const handleClickOutside = (e: MouseEvent | TouchEvent) => {
        const target = e.target as HTMLElement;
        if (
          !target.closest(".recharts-wrapper") &&
          !target.closest('[class*="MobileTooltip"]')
        ) {
          setActiveIndex(null);
        }
      };

      document.addEventListener("click", handleClickOutside);
      document.addEventListener("touchend", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("touchend", handleClickOutside);
      };
    }
  }, [isMobile, activeIndex]);

  const { inner: innerRadius, outer: outerRadius } = radii;

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const renderActiveShape = (props: unknown) => {
    const sectorProps = props as {
      cx: number;
      cy: number;
      innerRadius: number;
      outerRadius: number;
      startAngle: number;
      endAngle: number;
      fill: string;
    };

    const {
      cx,
      cy,
      innerRadius: inner,
      outerRadius: outer,
      startAngle,
      endAngle,
      fill,
    } = sectorProps;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={inner}
          outerRadius={outer + 5}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          stroke="#ffffff"
          strokeWidth={5}
        />
      </g>
    );
  };

  const handlePieClick = (_: unknown, index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="w-full h-80 sm:h-80 md:h-96 xl:h-[500px] xl:w-[500px] flex items-center justify-center relative z-10">
      {isMobile && <MobileTooltip activeIndex={activeIndex} chartData={data} />}
      <ResponsiveContainer width="100%" height="100%" className="z-10">
        <RechartsPieChart>
          <Tooltip
            content={<CustomTooltip />}
            trigger={isMobile ? "click" : "hover"}
            allowEscapeViewBox={{ x: true, y: true }}
            wrapperStyle={{ zIndex: 50 }}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={0}
            stroke="none"
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            activeShape={renderActiveShape}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            onClick={handlePieClick}
          >
            {data.map((entry, index) => (
              <Cell
                stroke="#ffffff"
                strokeWidth={5}
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
      <div className="absolute w-full h-full inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/votetoearn/bgchart.png"
          alt=""
          width={500}
          height={500}
          className="w-[200px] lg:w-[260px] xl:w-[260px]  "
        />
      </div>
    </div>
  );
}
