/*eslint-disable*/
//@ts-nocheck
import { FeatureCard } from "@/components/JoinCommunity/FeatureCard";

const features = [
  {
    title: "Airdrop & Campaigns",
    description: "Fair, inclusive $TIMES rewards for early adopters.",
    icon: "/joincommunity/b.png",
    top: "-top-14",
    right: "right-4",
    width: 100,
  },
  {
    title: "Quests & Leaderboards",
    description: "Earn XP and prizes on Discord & Zealy.",
    icon: "/joincommunity/t.png",
    top: "-top-17",
    right: "right-4",
    width: 90,
  },
  {
    title: (
      <>
        Giveaways & <br />
        Contests
      </>
    ),
    description: "Participate to earn tokens and exclusive benefits.",
    icon: "/joincommunity/g.png",
    top: "-top-13",
    right: "right-4",
    width: 80,
  },
  {
    title: "Live Events & Expert Panels",
    description: "Join discussions that shape the future.",
    icon: "/joincommunity/m.png",
    top: "-top-13",
    right: "right-4",
    width: 80,
  },
];

export function FeatureCardsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 gap-y-20 xl:gap-y-0">
      {features.map((feature, index) => (
        <FeatureCard
          width={feature.width}
          top={feature.top}
          right={feature.right}
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}
