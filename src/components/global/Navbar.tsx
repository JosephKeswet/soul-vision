"use client";
import { routes } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type Props = {};

export default function Navbar({}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  // Close the sheet when the pathname changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  // Detect scroll to toggle between hamburger and regular menu and logo
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if the user is near the bottom (e.g., within 200px)
      if (scrollTop + windowHeight >= documentHeight - 200) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${pathname === routes.home ? "bg-transparent" : "bg-transparent"} `}>
      <div className="flex items-center justify-between w-full p-4 lg:p-10">
        
        {/* Logo switch based on scroll position */}
        <Link href={routes.home}>
          <img
            src={
              isScrolled && !isNearBottom
                ? "/assets/Logo.png" // Regular logo when scrolled
                : "/assets/LogoWhite.png" // White logo at top or near bottom
            }
            className="w-[72px] lg:w-[102px]"
            alt="Logo"
          />
        </Link>

        {/* Main navigation menu */}
        <ul
          className={`hidden md:flex items-center text-base font-light font-IBM ${
            isScrolled && !isNearBottom
              ? "text-black"
              : "text-white"
          }`}
        >
          <li
            className={`w-fit h-[30px] px-4 cursor-pointer ${
              pathname === routes.story
                ? "underline underline-offset-4 text-primary-blue"
                : ""
            }`}
          >
            <p
              onClick={() => {
                router.push(routes.home);
                scrollToSection("story");
              }}
            >
              Our Story
            </p>
          </li>
          <li
            className={`w-fit h-[30px] px-4 cursor-pointer ${
              pathname === routes.team
                ? "underline underline-offset-4 text-primary-blue"
                : ""
            }`}
          >
            <Link href={routes.team}>Team</Link>
          </li>
          <li
            className={`w-fit h-[30px] px-4 cursor-pointer ${
              pathname === routes.work
                ? "underline underline-offset-4 text-primary-blue"
                : ""
            }`}
          >
            <Link href={routes.work}>Work</Link>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="flex md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger className="flex md:hidden">
              {isScrolled && !isNearBottom ? (
                <Image
                  src="/assets/hamburger-menu.svg"
                  width={68}
                  height={42}
                  alt="Menu"
                  priority
                />
              ) : (
                <Image
                  src="/assets/hamburger-menu-white.svg"
                  width={68}
                  height={42}
                  alt="Menu"
                  priority
                />
              )}
            </SheetTrigger>
            <SheetContent className="bg-white pt-16">
              <div
                onClick={() => {
                  router.push(routes.home);
                  scrollToSection("story");
                }}
                className="flex items-end gap-6 h-[44.3px]"
              >
                <p className="font-IBM font-light text-[24.32px] text-primary">
                  <span className="text-xs font-IBM font-light mr-5">01</span>
                  Our Story
                </p>
              </div>
              <Link href={routes.team} className="flex items-center gap-6 h-[44.3px]">
                <p className="font-IBM font-light text-[24.32px] text-primary">
                  <span className="text-xs font-IBM font-light mr-5">02</span>
                  Team
                </p>
              </Link>
              <Link href={routes.work} className="flex items-center gap-6 h-[44.3px]">
                <p className="font-IBM font-light text-[24.32px] text-primary">
                  <span className="text-xs font-IBM font-light mr-5">03</span>
                  Work
                </p>
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
