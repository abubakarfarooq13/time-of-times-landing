"use client";

import { AntaFont, RubikFont, TomorrowFont } from "@/lib/font";

export function FairPlayEconomy() {
  return (
    <section className="pb-4 md:pb-8 px-4 md:px-8">
      <div className=" mx-auto">
        <h2
          data-aos="fade-up"
          className={`text-5xl md:text-[48px]  font-medium text-center text-white mb-6 md:mb-4 ${TomorrowFont.className}`}
        >
          FAIR PLAY ECONOMY
        </h2>

        <div className="bg-[#9BEFE3] rounded-4xl p-6 lg:px-6 xl:px-12 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
            <div className="lg:col-span-1 flex flex-col justify-center items-center lg:items-start">
              <h3
                data-aos="fade-left"
                className={`text-3xl md:text-[48px] lg:text-5xl xl:text-[48px] leading-14 font-medium text-black mb-4 ${TomorrowFont.className}`}
              >
                Distribution&nbsp;
                <br className="hidden lg:block" />
                Points:
              </h3>
              <div
                data-aos="fade-up"
                className={`bg-[#FF6B5C] rounded-full px-4 py-3 w-fit md:text-[18px] text-sm ${RubikFont.className} -rotate-6 -mt-3`}
              >
                <p className=" text-black text-center font-normal">
                  Simple, transparent, fair.
                  <br />
                  It&apos;s Win-Win-Win.
                </p>
              </div>
            </div>

            <div
              className={`lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 ${TomorrowFont.className}`}
            >
              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                <div className="text-4xl md:text-[48px] font-medium text-black mb-2">
                  50%
                </div>
                <p
                  className={`text-black text-sm md:text-[16px] font-medium mb-5 uppercase tracking-wide ${TomorrowFont.className}`}
                >
                  To the Artist
                </p>
                <p
                  className={`text-black text-sm  leading-relaxed ${RubikFont.className}`}
                >
                  As a creator, you get rewarded for your artworks
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                <div className="text-4xl md:text-[48px] font-medium text-black mb-2">
                  25%
                </div>
                <p
                  className={`text-black text-sm md:text-[16px] font-medium mb-5 uppercase tracking-wide ${TomorrowFont.className}`}
                >
                  To the Voters
                </p>
                <p
                  className={`text-black text-sm  leading-relaxed ${RubikFont.className}`}
                >
                  As someone who votes for the best artworks daily, you earn
                  tokens for successful votes
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                <div className="text-4xl md:text-[48px] font-medium text-black mb-2">
                  25%
                </div>
                <p
                  className={`text-black text-sm md:text-[16px] font-medium mb-5 uppercase tracking-wide ${TomorrowFont.className}`}
                >
                  To the DAO Treasury
                </p>
                <p
                  className={`text-black text-sm  leading-relaxed ${RubikFont.className}`}
                >
                  The team and the users have funding for sustainable growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
