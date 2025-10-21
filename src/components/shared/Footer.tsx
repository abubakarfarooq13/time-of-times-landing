import Link from "next/link";
import Image from "next/image";
import { RubikFont } from "@/lib/font";

export default function Footer() {
  return (
    <footer className="bg-[#221235] rounded-4xl text-white mb-10 overflow-hidden flex w-full">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 lg:pb-8 pt-12 md:pt-10  w-full">
        <div className="flex justify-between gap-8 md:gap-12">
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-2xl md:text-3xl font-bold tracking-wider">
                <Image
                  src="/logofooter.png"
                  alt="logo"
                  width={230}
                  height={230}
                  quality={100}
                />
              </div>
            </div>

            <div className="flex items-center space-x-6">
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

            <div className={`${RubikFont.className}`}>
              <p className="text-[#ff4e3b] font-semibold text-[16px]">
                Contact us:
              </p>
              <a
                href="mailto:support@timeoftimes.com"
                className="text-white transition-colors underline"
              >
                support@timeoftimes.com
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center relative w-[350px] z-0">
            <div className="absolute -top-30">
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
            className={`flex flex-col space-y-4 ${RubikFont.className} text-[16px] xl:pr-30`}
          >
            <nav className="space-y-6">
              <Link
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
                href="/whitepaper"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                White Paper
              </Link>
              <Link
                href="/tokenomics"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                Tokenomics
              </Link>
              <Link
                href="/terms"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-white hover:text-[#ff4e3b] transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white  my-8 md:mt-10 z-20 flex  relative"></div>

        <div
          className={`text-center text-sm md:text-[16px] text-white z-10 flex justify-center ${RubikFont.className} mt-4 relative`}
        >
          © Time of Times, 2025. All rights reserved
        </div>
      </div>
    </footer>
  );
}
