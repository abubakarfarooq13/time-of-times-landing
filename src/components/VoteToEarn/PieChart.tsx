"use client";

import Image from "next/image";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
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

export function PieChart() {
  return (
    <div className="w-full h-64 md:h-80 lg:h-[500px] lg:w-[500px] flex items-center justify-center relative">
      <ResponsiveContainer width="100%" height="100%" className="z-10 ">
        <RechartsPieChart>
          {/* <Tooltip /> */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={160}
            paddingAngle={0}
            stroke="none"
            dataKey="value"
            startAngle={90}
            endAngle={-270}
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
      <div className="absolute">
        <Image src="/votetoearn/bgchart.png" alt="" width={250} height={200} />
      </div>
    </div>
  );
}
