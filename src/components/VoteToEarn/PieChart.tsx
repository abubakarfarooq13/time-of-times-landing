"use client";

import Image from "next/image";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Community", value: 35, color: "#FF9999" },
  { name: "Marketing", value: 15, color: "#FF6B5B" },
  { name: "Seed", value: 14, color: "#E8A8A8" },
  { name: "Team", value: 10, color: "#D4A5A5" },
  { name: "Treasury", value: 10, color: "#1a1a2e" },
  { name: "Liquidity", value: 7, color: "#6B7280" },
  { name: "KOL", value: 4, color: "#9CA3AF" },
  { name: "Public", value: 2, color: "#D1D5DB" },
  { name: "Staking", value: 2, color: "#E5E7EB" },
  { name: "Advisors", value: 1, color: "#F3F4F6" },
];

export function PieChart() {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center relative">
      <ResponsiveContainer width="100%" height="100%" className="z-10 ">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
      <div className="absolute">
        <Image src="/votetoearn/bgchart.png" alt="" width={200} height={200} />
      </div>
    </div>
  );
}
