import { Button } from "@/components/ui/button";
import { AntaFont, OutfitFont, RubikFont } from "@/lib/font";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function OwnTheDaySection() {
  return (
    <div className="border-2 border-black rounded-4xl p-8 md:px-12 ">
      <div className="flex justify-between gap-8 items-center">
        <div>
          <h2
            className={`text-4xl md:text-[56px] font-normal  mb-4 ${AntaFont.className}`}
          >
            Own the Day!
          </h2>
          <p className={`text-[16px] text-black   ${RubikFont.className}`}>
            Every day leaves a mark – in headlines, in memories, in culture.
            With Time of Times, that mark
            <br /> becomes yours. We capture the most important story of the day
            and transform it into an art,
            <br /> preserved forever as a unique NFT.
          </p>
          <p className={`text-[16px] text-black   ${RubikFont.className} mb-6`}>
            By collecting these one-of-a-kind pieces, you don&apos;t just buy an
            image – you claim a moment
            <br /> in history. Each NFT is a living record, a piece of time that
            only one person can truly own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              className={`rounded-full max-w-max !px-6 !py-5.5  text-[16px] font-medium ${OutfitFont.className}`}
            >
              JOIN WAITLIST
              <ArrowUpRight
                strokeWidth={2.5}
                className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
              />
            </Button>
            <Button
              variant="default"
              className={`rounded-full max-w-max !px-6 !py-5.5  text-[16px] font-medium ${OutfitFont.className}`}
            >
              JOIN TELEGRAM COMMUNITY
              <ArrowUpRight
                strokeWidth={2.5}
                className=" !h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
              />
            </Button>
          </div>
        </div>

        <div className="">
          <div className=" py-6 text-center relative w-[320px] mr-6">
            <div className="text-6xl mb-4 w-full flex justify-end">
              <Image
                src="/joincommunity/c.png"
                alt="day"
                width={200}
                height={200}
              />
            </div>
            <p
              className={`text-black bg-[#FFCDC7] other-shadow-2 font-normal ${RubikFont.className} px-4 py-2 absolute bottom-5 -right-2 rounded-full text-[16px]`}
            >
              Scarce, meaningful, and eternal. Own <br />
              the Day, and hold it forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
