"use client";
import { routes } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type Props = {};

export default function Navbar({}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close the sheet when the pathname changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);
  return (
    <div className={`bg-transparent `}>
      <div className="flex items-center justify-between w-full p-4 lg:p-10">
        {pathname === routes.home ? (
          <Link href={routes.home}>
            <img
              src="/assets/Logo.png"
              className="w-[72px] lg:w-[102px] h-[27px]"
              alt="Logo"
            />
          </Link>
        ) : (
          <Link href={routes.home}>
            <img
              src="/assets/LogoPurple.png"
              className="w-[72px] lg:w-[102px] h-[27px]"
              alt="Logo"
            />
          </Link>
        )}

        <ul
          className={`hidden md:flex items-center text-base font-light font-IBM ${
            pathname === routes.home || pathname === routes.work
              ? "text-white"
              : "text-black"
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

        <div className="flex md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger className="flex md:hidden">
              <div>
                <Image
                  src="/assets/hamburger-menu.svg"
                  width={68}
                  height={42}
                  alt="Menu"
                  priority
                />
              </div>
            </SheetTrigger>
            <SheetContent className="bg-white pt-16">
              <Link href="#" className=" flex items-center gap-6 h-[44.3px]">
                <span className="text-xs font-IBM font-light">01</span>
                <p className="font-IBM font-light text-[24.32px] text-primary">
                  Our Story
                </p>
              </Link>
              <Link href="#" className=" flex items-center gap-6 h-[44.3px]">
                <span className="text-xs font-IBM font-light">02</span>

                <p className="font-IBM font-light text-[24.32px] text-primary">
                  Team
                </p>
              </Link>
              <div className=" flex items-center gap-6 h-[44.3px]">
                <span className="text-xs font-IBM font-light">03</span>

                <p className="font-IBM font-light text-[24.32px] text-primary">
                  Work
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
