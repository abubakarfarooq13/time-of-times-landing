import { RubikFont, TomorrowFont } from "@/lib/font";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  flag: string;
  headline: string;
  testimonial: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  flag,
  headline,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col h-full relative last:self-center xl:last:justify-self-auto last:justify-self-center md:last:col-span-2 xl:last:col-span-1 last:w-full xl:last:w-auto  last:max-w-[452px] "
    >
      <div className="  rounded-4xl p-6 sm:p-8 flex flex-col items-center  ">
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

        <h3
          className={`text-xl sm:text-[16px] font-medium text-foreground text-center  ${TomorrowFont.className}`}
        >
          {name}
        </h3>
        <p
          className={`text-sm sm:text-[12px] text-[#787878] text-center mt-1 mb-10 ${TomorrowFont.className}`}
        >
          {role}
        </p>
      </div>

      <div className="mt-4 sm:mt-6 bg-white rounded-[32px] px-3 xl:px-8 py-4  xl:py-4 flex items-center justify-center absolute -bottom-10 xl:-bottom-16 left-6 right-6 flex-col lg:gap-2">
        <h2
          className={`${TomorrowFont.className} text-[18px] md:text-[24px] font-medium text-black`}
        >
          {headline}
        </h2>
        <p
          className={`text-black text-center text-sm xl:text-[16px] leading-5 font-normal ${RubikFont.className}`}
        >
          {testimonial}
        </p>
      </div>
    </div>
  );
}
