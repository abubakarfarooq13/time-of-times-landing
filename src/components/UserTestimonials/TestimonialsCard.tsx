import { RubikFont } from "@/lib/font";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  flag: string;
  testimonial: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  flag,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col h-full relative last:self-center xl:last:justify-self-auto last:justify-self-center md:last:col-span-2 xl:last:col-span-1 last:w-full xl:last:w-auto  last:max-w-[452px] "
    >
      <div className=" border-2 border-foreground rounded-4xl p-6 sm:p-8 flex flex-col items-center bg-card ">
        <div className="relative mb-4">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-2 text-2xl sm:text-3xl bg-white rounded-full w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center overflow-hidden">
            <Image
              src={flag || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h3 className="text-xl sm:text-[26px] font-bold text-foreground text-center ">
          {name}
        </h3>
        <p
          className={`text-sm sm:text-sm text-[#787878] text-center mt-1 mb-10 ${RubikFont.className}`}
        >
          {role}
        </p>
      </div>

      <div className="mt-4 sm:mt-6 bg-[#FF4F3A] rounded-full px-3 xl:px-8 py-4  xl:py-6 flex items-center justify-center absolute -bottom-8 xl:-bottom-10 left-6 right-6">
        <p
          className={`text-white text-center text-sm xl:text-[16px] leading-5 font-normal ${RubikFont.className}`}
        >
          {testimonial}
        </p>
      </div>
    </div>
  );
}
