"use client";
import { Button } from "@/components/ui/button";
import { OutfitFont } from "@/lib/font";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = [
    {
      label: "Whitepaper",
      href: "#whitepaper",
    },
    {
      label: "Contact",
      href: "#contact",
    },
    {
      label: "Tokenomics",
      href: "#tokenomics",
    },
    {
      label: "Roadmap",
      href: "#roadmap",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed  ${
          isScrolled ? "top-4" : "top-0"
        } left-2 right-2 xl:left-0 xl:right-0 z-50 transition-all duration-300  ${
          OutfitFont.className
        }`}
      >
        <div
          className={`container mx-auto lg:px-0 transition-all duration-300 ${
            isScrolled
              ? "bg-white rounded-full backdrop-blur-md other-shadow  py-2 !px-4 "
              : "bg-transparent py-4 lg:py-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={isScrolled ? 80 : 100}
                height={isScrolled ? 80 : 100}
                className="transition-all duration-300"
              />
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {NavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#444444] hover:text-[#FF4F3A] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button variant="default" className="rounded-full !pl-4 !pr-2">
                Join Community
                <ArrowUpRight
                  strokeWidth={2.5}
                  className="!h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
                />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 !pl-4 !pr-2"
              >
                Join Waitlist
                <ArrowUpRight
                  strokeWidth={2.5}
                  className="!h-4.5 !w-4.5 text-white p-0.5 bg-black rounded-full"
                />
              </Button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-[#444444] hover:text-black hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80"
            onClick={toggleMobileMenu}
          />
          <div className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <Image src="/logo.png" alt="logo" width={60} height={60} />
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-[#444444] hover:text-black hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 px-6 py-6">
                <nav className="space-y-4">
                  {NavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-lg text-[#444444] hover:text-black transition-colors duration-200 font-medium py-2"
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="p-6 border-t space-y-4">
                <Button
                  variant="default"
                  className="w-full rounded-full !pl-4 !pr-2"
                  onClick={toggleMobileMenu}
                >
                  Join Community
                  <ArrowUpRight
                    strokeWidth={2.5}
                    className="!h-4.5 !w-4.5 text-black p-0.5 bg-white rounded-full"
                  />
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 !pl-4 !pr-2"
                  onClick={toggleMobileMenu}
                >
                  Join Waitlist
                  <ArrowUpRight
                    strokeWidth={2.5}
                    className="!h-4.5 !w-4.5 text-white p-0.5 bg-black rounded-full"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-24 lg:h-28" />
    </>
  );
};

export default Navbar;
