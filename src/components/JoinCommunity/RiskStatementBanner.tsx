import { RubikFont } from "@/lib/font";

export function RiskStatementBanner() {
  return (
    <div
      className={`bg-[#FFCDC7] other-shadow-2  rounded-full p-4 text-center ${RubikFont.className}`}
    >
      <p className="text-[16px] text-black font-normal">
        <span className="font-bold">
          Risk Statement:
          <br className="lg:hidden block" />
        </span>{" "}
        &nbsp;&nbsp;Investment in cryptocurrencies and NFTs carries risk. Please
        read our full risk statement before investing.
      </p>
    </div>
  );
}
