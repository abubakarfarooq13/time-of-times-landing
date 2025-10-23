"use client";
import { Button } from "@/components/ui/button";
import { OutfitFont } from "@/lib/font";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = [
    {
      label: "Whitepaper",
      href: "/",
    },
    {
      label: "Contact",
      href: "/",
    },
    {
      label: "Tokenomics",
      href: "/",
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
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav
        className={`fixed  ${
          isScrolled ? "top-4" : "top-0"
        } left-2 right-2  z-50 transition-all duration-300  ${
          OutfitFont.className
        }`}
      >
        <div
          className={`container mx-auto lg:px-0 transition-all duration-300 ${
            isScrolled
              ? "bg-white rounded-full backdrop-blur-md other-shadow  py-2 !px-4 "
              : "bg-transparent  py-4 lg:py-6"
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
              {NavItems.map((item, index) => (
                <Link
                  key={index}
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-60 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="fixed inset-0 bg-black/80"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <motion.div
              className="fixed top-0 left-0 h-full w-full bg-white shadow-xl"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.5,
              }}
            >
              <div className="flex flex-col h-full">
                <motion.div
                  className="flex items-center justify-between p-6 border-b"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                >
                  <Image src="/logo.png" alt="logo" width={80} height={80} />
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-md text-[#444444] hover:text-black hover:bg-gray-100 transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </motion.div>

                <motion.div
                  className="flex-1 px-6 py-6 flex items-center justify-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                >
                  <nav className="space-y-6 text-center">
                    {NavItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          type: "tween",
                          ease: "easeOut",
                          duration: 0.4,
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{
                            type: "tween",
                            ease: "easeInOut",
                            duration: 0.2,
                          }}
                        >
                          <Link
                            href={item.href}
                            className="block text-2xl text-[#444444] hover:text-black transition-colors duration-200 font-medium py-3"
                            onClick={toggleMobileMenu}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>

                <motion.div
                  className="p-6 border-t space-y-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
                  >
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
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-24 lg:h-28" />
    </motion.div>
  );
};

export default Navbar;
