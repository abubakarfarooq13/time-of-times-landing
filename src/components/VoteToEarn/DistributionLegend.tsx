"use client";

const distributionData = [
  { label: "Community", percentage: "35.00%", color: "#FF9999" },
  { label: "Marketing", percentage: "15.00%", color: "#FF6B5B" },
  { label: "Seed", percentage: "14.00%", color: "#E8A8A8" },
  { label: "Team", percentage: "10.00%", color: "#D4A5A5" },
  { label: "Treasury", percentage: "10.00%", color: "#1a1a2e" },
  { label: "Liquidity", percentage: "7.00%", color: "#6B7280" },
  { label: "KOL", percentage: "4.00%", color: "#9CA3AF" },
  { label: "Public", percentage: "2.00%", color: "#D1D5DB" },
  { label: "Staking", percentage: "2.00%", color: "#E5E7EB" },
  { label: "Advisors", percentage: "1.00%", color: "#F3F4F6" },
];

export function DistributionLegend() {
  return (
    <div className="space-y-3">
      <h3
        data-aos="fade-up"
        className="text-xl md:text-2xl font-medium text-white mb-4"
      >
        Distribution
      </h3>
      <div className="space-y-2">
        {distributionData.map((item, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex items-center gap-3 text-white"
          >
            <div
              className="w-6 h-2 md:w-[20px] md:h-2 border border-white rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="flex-1 text-[16px] font-normal">
              {item.label}:
            </span>
            <span className="text-[16px] font-normal">{item.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
