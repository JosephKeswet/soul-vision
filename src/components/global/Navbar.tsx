import { fonts } from "@/lib/constants/fonts";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div>
      <div className="flex items-center justify-between w-full p-4 lg:p-10">
        <img src="/assets/Logo.png" className="w-[102px] h-[27px]" alt="Logo" />
        <ul
          className={`hidden md:flex items-center text-white text-base font-light font-IBM`}
        >
          <li className="w-fit h-[30px] px-4 cursor-pointer">
            {" "}
            <Link href="#">Our Story</Link>
          </li>
          <li className="w-fit h-[30px] px-4 cursor-pointer">
            <Link href="#">Team </Link>
          </li>
          <li className="w-fit h-[30px] px-4 cursor-pointer">
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
