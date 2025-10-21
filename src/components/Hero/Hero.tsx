import { Button } from "@/components/ui/button";
import { RubikFont, TomorrowFont } from "@/lib/font";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Hero = () => {
  const contentMarque = [
    {
      text: "Pre-Sale coming soon",
    },
    {
      text: "Join Now for early Birds benefits",
    },
  ];
  return (
    <div className="relative overflow-hidden rounded-4xl hero-bg-shadow z-10">
      <div className=" hero-bg rounded-4xl  w-full  min-h-[650px] ">
        <div className={`w-full px-8  pt-8 ${RubikFont.className}`}>
          <Marquee
            speed={70}
            className="bg-[#FFEFE9] h-[50px] rounded-full   w-full "
          >
            {[
              ...contentMarque,
              ...contentMarque,
              ...contentMarque,
              ...contentMarque,
            ].map((item, index) => (
              <div
                key={index}
                className={`flex px-8 justify-between text-[12px] ${
                  index % 2 === 0 ? "text-[#FF4F3A]" : "text-black"
                } font-semibold items-center`}
              >
                <span className="px-4  w-full">{item.text}</span>
                <div className="h-5 w-0.5 bg-[#FF4F3A] ml-12"></div>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="relative z-10 container mx-auto px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-3 pl-16">
              <h1
                className={`text-6xl md:text-[64px] font-medium leading-tight ${TomorrowFont.className}`}
              >
                Historically
                <br />
                Valuable NFTs
              </h1>

              <div className={`space-y-4 ${RubikFont.className}`}>
                <h2 className="text-2xl font-semibold">
                  Today&apos;s News Carved in NFT
                </h2>

                <p className="text-[16px] text-white/90 max-w-xl leading-relaxed">
                  Every day, one global event. One AI artwork + One
                  artist&apos;s creation.
                  <br />
                  Selected by the community, minted as a unique collectible NFT.
                  <br />
                  Create, vote, trade, and hold &quot;NFTs of the Day&quot;.
                  Literally.
                </p>
              </div>

              <div className="flex gap-4 pt-8">
                <Button className="rounded-full bg-[#FF4F3A] border-2 border-[#FF4F3A] text-white hover:bg-white/90 font-medium text-[16px] !px-6 !py-6">
                  Join Community
                  <ArrowUpRight
                    strokeWidth={2.5}
                    className=" !h-6 !w-6 text-[#FF4F3A] p-0.5 bg-white rounded-full"
                  />
                </Button>

                <Button
                  variant="outline"
                  className="rounded-full bg-transparent border-2 border-[#FF4F3A] text-white hover:bg-white/90 font-medium text-[16px] !px-6 !py-6"
                >
                  Join Community
                  <ArrowUpRight
                    strokeWidth={2.5}
                    className=" !h-6 !w-6 text-[#4a1e37] p-0.5 bg-white rounded-full"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
          <div>
            <Image src="/hero/times.svg" alt="" width={700} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
