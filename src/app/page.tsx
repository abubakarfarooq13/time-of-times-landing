import EveryDayIsMinted from "@/components/EveryDayIsMinted/EveryDayIsMinted";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <main className="">
        <Hero />
        <HowItWorks />
        <EveryDayIsMinted />
      </main>
      <footer className=""></footer>
    </div>
  );
}
