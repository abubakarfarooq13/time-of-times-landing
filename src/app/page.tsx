/*eslint-disable*/
//@ts-nocheck
import EarlyBirdsAirdrop from "@/components/EarlyBirdsAirdrop/EarlyBirdsAirdrop";
import EveryDayIsMinted from "@/components/EveryDayIsMinted/EveryDayIsMinted";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import JoinCommunity from "@/components/JoinCommunity/JoinCommunity";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import UserTestimonials from "@/components/UserTestimonials/UserTestimonials";
import VoteToEarn from "@/components/VoteToEarn/VoteToEarn";

export default function Home() {
  return (
    <div className="container  overflow-hidden 2xl:overflow-visible xl:px-0 mx-auto">
      <Navbar />
      <main className="">
        <Hero />
        <HowItWorks />
        <EveryDayIsMinted />
        <UserTestimonials />
        <VoteToEarn />
        <EarlyBirdsAirdrop />
        <JoinCommunity />
      </main>
      <footer className="mx-2 ">
        <Footer />
      </footer>
    </div>
  );
}
