"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AntaFont, OutfitFont, RubikFont, TomorrowFont } from "@/lib/font";
import Image from "next/image";

interface Event {
  id: number;
  date: string;
  dateColor: string;
  title: string;
  images: {
    ai: string;
    artist: string;
  };
}

const events: Event[] = [
  {
    id: 1,
    date: "January 20, 2025",
    dateColor: "text-orange-500",
    title: "Donald Trump Inauguration",
    images: {
      ai: "/everydayisminted/ai.png",
      artist: "/everydayisminted/topvoted.png",
    },
  },
  {
    id: 2,
    date: "March 2, 2025",
    dateColor: "text-orange-500",
    title: "Successful Lunar Landing of Blue Ghost",
    images: {
      ai: "/everydayisminted/ai-2.png",
      artist: "/everydayisminted/topvoted-2.png",
    },
  },
  {
    id: 3,
    date: "April 15, 2025",
    dateColor: "text-orange-500",
    title: "Historic Climate Summit Agreement",
    images: {
      ai: "/everydayisminted/ai.png",
      artist: "/everydayisminted/topvoted.png",
    },
  },
  {
    id: 4,
    date: "May 10, 2025",
    dateColor: "text-orange-500",
    title: "Revolutionary AI Breakthrough",
    images: {
      ai: "/everydayisminted/ai-2.png",
      artist: "/everydayisminted/topvoted-2.png",
    },
  },
];

export default function EveryDayIsMinted() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, events.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const visibleEvents = events.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div
      className={`  py-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col w-full ${AntaFont.className}`}
    >
      <div className=" mx-auto">
        <div className="text-center mb-18">
          <h1
            data-aos="fade-up"
            className={`text-4xl md:text-[44px] font-semibold dark:text-white text-black mb-2 text-balance ${TomorrowFont.className}`}
          >
            Every Day Is Minted
          </h1>
          <p
            data-aos="fade-up"
            className={`text-xl md:text-[18px] font-normal text-balance ${RubikFont.className}`}
          >
            Once and Forever
          </p>
        </div>
        <div className="relative mx-2 xl:mx-0 ">
          <button
            onClick={handlePrev}
            className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 z-10 p-2 bg-[#9BEFE3] rounded-full border-1 border-[#9BEFE3] text-black other-shadow-2 hover:bg-orange-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft strokeWidth={3} className="w-6 h-6" />
          </button>

          <div data-aos="fade-up" className={`${OutfitFont.className} `}>
            <div className="flex gap-4 sm:gap-6 lg:gap-8 ">
              {visibleEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex-1 min-w-0 bg-white other-shadow-2 rounded-3xl p-6 sm:p-8 "
                >
                  <p
                    className={`${event.dateColor} text-[16px]  font-medium mb-0 text-[#FF4F3A] text-center ${TomorrowFont.className}`}
                  >
                    {event.date}
                  </p>

                  <h2
                    className={`text-sm lg:text-[24px] text-center font-medium text-[#101010] mb-6 text-balance ${TomorrowFont.className}`}
                  >
                    {event.title}
                  </h2>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex flex-col">
                      <div className="relative w-full aspect-square rounded-t-[17px] overflow-hidden ">
                        <Image
                          src={event.images.ai || "/placeholder.svg"}
                          alt="AI Vision"
                          className="w-full h-full object-cover"
                          width={400}
                          height={400}
                        />
                      </div>
                      <p className="text-center text-sm lg:text-[20px] bg-[#000000B2] font-medium text-white py-2 rounded-b-[17px]">
                        AI Vision
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <div className="relative w-full aspect-square ounded-t-[17px] overflow-hidden">
                        <Image
                          src={event.images.artist || "/placeholder.svg"}
                          alt="Top Voted Artist"
                          className="w-full h-full object-cover"
                          width={400}
                          height={400}
                        />
                      </div>
                      <p className="text-center text-sm lg:text-[20px] bg-[#000000B2] font-medium text-white py-2 rounded-b-[17px] ">
                        Top Voted Artist
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 z-10 p-2 rounded-full border-1 border-[#9BEFE3] text-black other-shadow-2 bg-[#9BEFE3] hover:bg-orange-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight strokeWidth={3} className="w-6 h-6" />
          </button>
        </div>

        {/* <div
          data-aos="fade-up"
          className="flex justify-center gap-2 mt-8 sm:mt-12"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#FF4F3A] w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
      <div className="flex justify-between flex-col md:flex-row items-center  mt-[200px] xl:mt-[280px] gap-8">
        <div
          data-aos="fade-right"
          className="bg-[#9BEFE3] md:min-h-[347px] lg:min-h-[276px] xl:min-h-auto  rounded-4xl p-6 relative w-full"
        >
          <div className="absolute w-[250px] lg:w-auto -top-[150px] lg:-top-[140px] xl:-top-[180px] left-1/2 -translate-x-1/2">
            <Image
              src="/everydayisminted/man.png"
              alt="AI Vision"
              width={300}
              height={300}
            />
          </div>
          <div
            className={`text-center text-black mt-4 xl:mt-8 font-normal ${TomorrowFont.className}`}
          >
            <span className="text-[24px] font-medium">FOR ARTIST</span>
            <h2 className="text-[32px] font-medium leading-11 mt-2 xl:mt-2">
              Turn Headlines Into Art{" "}
            </h2>
            <p
              className={`${RubikFont.className} text-[18px] font-normal my-2`}
            >
              Upload your vision of the day’s event, compete in community
              voting, and earn <br className="hidden 2xl:block" />
              rewards. Top artists gain exposure, income, and a place in
              history.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="bg-[#FF6B5C] lg:min-h-[276px] xl:min-h-auto rounded-4xl p-6 mt-44 md:mt-0 relative w-full"
        >
          <div className="absolute w-[250px] lg:w-auto -top-[150px] lg:-top-[140px] xl:-top-[180px] left-1/2 -translate-x-1/2">
            <Image
              src="/everydayisminted/man-2.png"
              alt="AI Vision"
              width={300}
              height={300}
            />
          </div>
          <div
            className={`text-center text-black mt-4 xl:mt-8 font-medium ${AntaFont.className}`}
          >
            <span
              className={`text-[24px] font-medium ${TomorrowFont.className}`}
            >
              FOR COLLECTOR
            </span>
            <h2
              className={`text-[32px] font-medium leading-11 mt-2 xl:mt-2 ${TomorrowFont.className}`}
            >
              Own a Piece of History
            </h2>
            <p
              className={`${RubikFont.className} text-[18px] font-normal my-2`}
            >
              Each NFT is scarce and meaningful. With only 365 per year,
              collectors secure digital artifacts with cultural and historical
              value. Buy, resell, or hold forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
