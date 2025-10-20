import EveryDayIsMinted from "@/components/EveryDayIsMinted/EveryDayIsMinted";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Navbar from "@/components/shared/Navbar";
import UserTestimonials from "@/components/UserTestimonials/UserTestimonials";
import VoteToEarn from "@/components/VoteToEarn/VoteToEarn";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <main className="">
        <Hero />
        <HowItWorks />
        <EveryDayIsMinted />
        <UserTestimonials />
        <VoteToEarn />
      </main>
      <footer className=""></footer>
    </div>
  );
}
