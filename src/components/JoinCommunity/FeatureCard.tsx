"use client";

import { AntaFont, RubikFont, TomorrowFont } from "@/lib/font";
import Image from "next/image";
import { motion } from "motion/react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  top: string;
  right: string;
  width: number;
}

export function FeatureCard({
  title,
  description,
  icon,
  top,
  right,
  width,
}: FeatureCardProps) {
  return (
    <div
      data-aos="fade-up"
      className="bg-[#AFF2E9] rounded-4xl p-8 w-full relative "
    >
      <div className={`absolute ${top} ${right}`}>
        <motion.div
          animate={{
            y: [0, -10, 0, 10, 0],
            scale: [0.9, 1, 0.9, 1, 0.9],
            rotate: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Image
            src={icon}
            alt={title}
            width={width}
            height={100}
            quality={100}
          />
        </motion.div>
      </div>
      <h3
        className={`text-[32px] leading-9 font-medium text-[#221235] mb-3 mt-14 ${TomorrowFont.className}`}
      >
        {title}
      </h3>
      <p
        className={`text-[18px] text-[#221235] leading-5 ${RubikFont.className}`}
      >
        {description}
      </p>
    </div>
  );
}
