import Link from "next/link";
import Image from "next/image";
import { RubikFont, TomorrowFont } from "@/lib/font";

export default function Footer() {
  return (
    <footer className="bg-[#1A0705] rounded-4xl text-white mb-6 md:mb-10 overflow-hidden flex w-full mt-20">
      <div className=" lg:mx-auto px-12  lg:px-12 pb-8 pt-10   w-full">
        <div className="flex  flex-col md:flex-row justify-center md:justify-between gap-8 md:gap-12">
          <div className="flex flex-col items-center  md:items-start md:space-y-6 relative">
            <div className="flex items-center space-x-2">
              <div
                data-aos="fade-up"
                className="text-2xl md:text-3xl font-bold tracking-wider"
              >
                <Image
                  src="/logofootern.png"
                  alt="logo"
                  width={230}
                  height={230}
                  quality={100}
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="flex items-center mt-2 md:mt-0 space-x-6"
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff4e3b] transition-colors"
                aria-label="Twitter"
              >
                <Image
                  src="/footer/x.png"
                  alt="x"
                  width={24}
                  height={24}
                  quality={100}
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff4e3b] transition-colors"
                aria-label="Discord"
              >
                <Image
                  src="/footer/md.png"
                  alt="x"
                  width={24}
                  height={24}
                  quality={100}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff4e3b] transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src="/footer/insta.png"
                  alt="x"
                  width={24}
                  height={24}
                  quality={100}
                />
              </a>
              <a
                href="https://telegram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff4e3b] transition-colors"
                aria-label="Telegram"
              >
                <Image
                  src="/footer/t.png"
                  alt="x"
                  width={24}
                  height={24}
                  quality={100}
                />
              </a>
            </div>

            <div
              data-aos="fade-up"
              className={`text-center md:text-start hidden md:block ${RubikFont.className}`}
            >
              <p className="text-[#9BEFE3] font-semibold text-[16px]">
                Contact us:
              </p>
              <a
                href="mailto:support@timeoftimes.com"
                className="text-white transition-colors"
              >
                support@timeoftimes.com
              </a>
            </div>
            <p
              className={`text-[12px] md:absolute md:text-nowrap z-10 -bottom-8  text-center mt-4 -mb-4 md:mb-0 md:mt-0  md:text-start text-[#FFE0E0] ${TomorrowFont.className}`}
            >
              Risk Statement:
              <br className="md:hidden block" /> Investment in cryptocurrencies
              and NFTs carries risk. Please read our full risk statement before
              investing.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center relative w-[350px] z-0">
            <div data-aos="fade-up" className="absolute lg:-top-30">
              <Image
                src="/footer/img.png"
                alt="x"
                width={450}
                height={450}
                quality={100}
              />
            </div>
          </div>

          <div
            className={`flex  flex-col text-nowrap whitespace-nowrap space-y-4 ${RubikFont.className} text-[16px] xl:pr-30`}
          >
            <nav className="text-center md:text-start md:space-y-6 ">
              <Link
                data-aos="fade-up"
                href="/community"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                Join Community
              </Link>
              <Link
                href="/waitlist"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                Join Waitlist
              </Link>
              <Link
                data-aos="fade-up"
                href="/whitepaper"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                White Paper
              </Link>
              <Link
                data-aos="fade-up"
                href="/tokenomics"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                Tokenomics
              </Link>
              <Link
                data-aos="fade-up"
                href="/terms"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                data-aos="fade-up"
                href="/privacy"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className={`text-center md:text-start md:hidden block mt-2 md:mt-0 ${RubikFont.className}`}
        >
          <p className="text-[#9BEFE3] font-semibold text-[16px]">
            Contact us:
          </p>
          <a
            href="mailto:support@timeoftimes.com"
            className="text-white transition-colors "
          >
            support@timeoftimes.com
          </a>
        </div>
        <div className="border-t border-[#BDB8C333]  my-8 md:mt-10 z-20 flex  relative"></div>

        <div
          className={`text-center text-sm md:text-[16px] text-white z-10 flex justify-center ${RubikFont.className} mt-4 relative`}
        >
          © Time of Times, 2025. All rights reserved
        </div>
      </div>
    </footer>
  );
}
