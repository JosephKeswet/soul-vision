"use client";
import { routes } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const pathname = usePathname();
  const router = useRouter()
  return (
    <div className={`${pathname === routes.home ? "bg-black" : "bg-white"} `}>
      <div className="flex items-center justify-between w-full p-4 lg:p-10">
        {pathname === routes.home ? (
          <Link href={routes.home}>
            <img
              src="/assets/Logo.png"
              className="w-[102px] h-[27px]"
              alt="Logo"
            />
          </Link>
        ) : (
          <Link href={routes.home}>
            <img
              src="/assets/LogoPurple.png"
              className="w-[102px] h-[27px]"
              alt="Logo"
            />
          </Link>
        )}
        <ul
          className={`hidden md:flex items-center ${pathname === routes.home ? "text-white" : "text-black"} text-base font-light font-IBM`}
        >
          <li
            className={`w-fit h-[30px] px-4 cursor-pointer ${pathname === routes.story ? "underline underline-offset-4 text-primary-blue " : ""}`}
          >
            {" "}
            <p onClick={() =>{
              router.push(routes.home)
               scrollToSection("story")
              }}
            >Our Story</p>
          </li>
          <li
            className={`w-fit h-[30px] px-4 cursor-pointer ${pathname === routes.team ? "underline underline-offset-4 text-primary-blue " : ""}`}
          >
            <Link href="/team">Team </Link>
          </li>
          <li
            className={`w-fit h-[30px] px-4 cursor-pointer ${pathname === routes.work ? "underline underline-offset-4 text-primary-blue " : ""}`}
          >
            <Link href="#">Work </Link>
          </li>
        </ul>
        <div className="flex md:hidden">
          <HamburgerMenuIcon className="text-white" />
        </div>
      </div>
    </div>
  );
}
