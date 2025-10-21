"use client";

import { AntaFont, RubikFont } from "@/lib/font";

export function FairPlayEconomy() {
  return (
    <section className="pb-8 px-8">
      <div className=" mx-auto">
        <h2
          className={`text-3xl md:text-[56px] text-[56px] font-normal text-center text-[#221235] mb-12 md:mb-4 ${AntaFont.className}`}
        >
          FAIR PLAY ECONOMY
        </h2>

        <div className="bg-[#221235] rounded-3xl p-6 lg:px-6 xl:px-12 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
            <div className="lg:col-span-1 flex flex-col justify-center items-center lg:items-start">
              <h3
                className={`text-[56px] lg:text-5xl xl:text-[56px] leading-14 font-medium text-[#FF4F3A] mb-4 ${AntaFont.className}`}
              >
                Distribution&nbsp;
                <br className="hidden lg:block" />
                Points:
              </h3>
              <div
                className={`bg-white rounded-full px-4 py-3 w-fit text-[16px] ${AntaFont.className} -rotate-6 -mt-3`}
              >
                <p className=" text-black text-center font-medium">
                  Simple, transparent, fair.
                  <br />
                  It&apos;s Win-Win-Win.
                </p>
              </div>
            </div>

            <div
              className={`lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 ${AntaFont.className}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-[56px] font-normal text-white mb-2">
                  50%
                </div>
                <p
                  className={`text-white text-sm md:text-[16px] font-normal mb-5 uppercase tracking-wide ${RubikFont.className}`}
                >
                  To the Artist
                </p>
                <p
                  className={`text-white text-sm  leading-relaxed ${RubikFont.className}`}
                >
                  As a creator, you get rewarded for your artworks
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-[56px] font-normal text-white mb-2">
                  25%
                </div>
                <p
                  className={`text-white text-sm md:text-[16px] font-normal mb-5 uppercase tracking-wide ${RubikFont.className}`}
                >
                  To the Voters
                </p>
                <p
                  className={`text-white text-sm  leading-relaxed ${RubikFont.className}`}
                >
                  As someone who votes for the best artworks daily, you earn
                  tokens for successful votes
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-[56px] font-normal text-white mb-2">
                  25%
                </div>
                <p
                  className={`text-white text-sm md:text-[16px] font-normal mb-5 uppercase tracking-wide ${RubikFont.className}`}
                >
                  To the DAO Treasury
                </p>
                <p
                  className={`text-white text-sm  leading-relaxed ${RubikFont.className}`}
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
