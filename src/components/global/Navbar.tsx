"use client";
import { routes } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useMemo } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Navbar() {
	const pathname = usePathname();
	const router = useRouter();
	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const [scrollState, setScrollState] = useState({
		isScrolled: false,
		isNearBottom: false,
	});

	// Close the sheet when the pathname changes
	useEffect(() => {
		setIsSheetOpen(false);
	}, [pathname]);

	// Scroll handler with debounce
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const handleScroll = () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				const scrollTop = window.scrollY;
				const windowHeight = window.innerHeight;
				const documentHeight = document.documentElement.scrollHeight;

				setScrollState({
					isScrolled: scrollTop > 100,
					isNearBottom: scrollTop + windowHeight >= documentHeight - 200,
				});
			}, 50); // Adjust debounce delay as needed
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Memoize logo source to prevent re-renders
	const logoSrc = useMemo(() => {
		if (pathname === routes.team) {
			return "/assets/Logo.png";
		}
		if (scrollState.isScrolled && !scrollState.isNearBottom) {
			return "/assets/Logo.png";
		}
		return "/assets/LogoWhite.png";
	}, [pathname, scrollState]);

	return (
		<div
			className={`${
				pathname === routes.home ? "bg-transparent" : "bg-transparent"
			}`}
		>
			<div className="flex items-center justify-between w-full p-4 lg:p-10">
				{/* Logo switch */}
				<Link href={routes.home}>
					<img
						src={logoSrc}
						className="w-[72px] lg:w-[102px]"
						alt="Logo"
					/>
				</Link>

				{/* Main navigation menu */}
				<ul
					className={`hidden md:flex items-center text-base font-light font-IBM ${
						pathname === routes.work
							? "text-white"
							: pathname === routes.team
							? "text-black"
							: scrollState.isScrolled && !scrollState.isNearBottom
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
					<Sheet
						open={isSheetOpen}
						onOpenChange={setIsSheetOpen}
					>
						<SheetTrigger className="flex md:hidden">
							<Image
								src={
									pathname === routes.team
										? "/assets/hamburger-menu.svg"
										: scrollState.isScrolled && !scrollState.isNearBottom
										? "/assets/hamburger-menu.svg"
										: "/assets/hamburger-menu-white.svg"
								}
								width={68}
								height={42}
								alt="Menu"
								priority
							/>
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
							<Link
								href={routes.team}
								className="flex items-center gap-6 h-[44.3px]"
							>
								<p className="font-IBM font-light text-[24.32px] text-primary">
									<span className="text-xs font-IBM font-light mr-5">02</span>
									Team
								</p>
							</Link>
							<Link
								href={routes.work}
								className="flex items-center gap-6 h-[44.3px]"
							>
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
