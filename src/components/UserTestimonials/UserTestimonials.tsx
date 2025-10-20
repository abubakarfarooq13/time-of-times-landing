import { AntaFont } from "@/lib/font";
import TestimonialCard from "./TestimonialsCard";

const testimonials = [
  {
    id: 1,
    name: "Pooja",
    role: "Artist",
    image: "/testimonials/pooja.png",
    flag: "/testimonials/ind.png",
    testimonial: "Won the daily vote, earned $1,200, gained global exposure.",
  },
  {
    id: 2,
    name: "Oleg",
    role: "Daily User",
    image: "/testimonials/oleg.png",
    flag: "/testimonials/ukrine.png",
    testimonial: "Voted daily, earned $350 in one month from rewards.",
  },
  {
    id: 3,
    name: "Sarah",
    role: "Collector",
    image: "/testimonials/sarah.png",
    flag: "/testimonials/usa.png",
    testimonial:
      "Bought a historical NFT on the inauguration day, resold with +3300% profit.",
  },
];

export default function UserTestimonials() {
  return (
    <section className="w-full pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground ${AntaFont.className}`}
        >
          User Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
