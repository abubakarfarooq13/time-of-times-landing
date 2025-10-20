"use client";
import { Button } from "@/components/ui/button";
import { OutfitFont } from "@/lib/font";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const NavItems = [
    {
      label: "Whitepaper",
      href: "#whitepaper",
    },
    {
      label: "Contact",
      href: "#contact",
    },
    {
      label: "Tokenomics",
      href: "#tokenomics",
    },
    {
      label: "Roadmap",
      href: "#roadmap",
    },
  ];

  return (
    <nav
      className={`flex items-center justify-between  py-6 bg-background w-full ${OutfitFont.className}`}
    >
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>

      <div className="hidden md:flex items-center gap-8 ">
        {NavItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-[#444444]">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button variant="default" className="rounded-full !pl-4 !pr-2 ">
          Join Community
          <ArrowUpRight
            strokeWidth={2.5}
            className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
          />
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-2 !pl-4 !pr-2 "
        >
          Join Waitlist
          <ArrowUpRight
            strokeWidth={2.5}
            className=" !h-4.5 !w-4.5 text-white p-0.5 bg-black rounded-full"
          />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
