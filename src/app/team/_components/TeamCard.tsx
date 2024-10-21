"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

type Props = {
  name: string;
  role: string;
  image: string;
  bio: any; // Add bio prop for more information
};

export default function TeamCard({ name, role, image, bio }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [showBio, setShowBio] = useState(false); // State to toggle bio content
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload the image and update the loading state once it's loaded
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoading(false);
  }, [image]);

  return (
    <div className="w-full lg:w-[454px]">
      {/* Conditional rendering based on showBio */}
      {isLoading ? (
        <Skeleton
          className={`w-full h-[500px] lg:h-[605px] rounded-lg transition-all duration-700 ease-in-out ${
            showBio ? "max-h-0 opacity-0" : "max-h-[736px] opacity-100"
          } overflow-hidden`}
        />
      ) : (
        <div
          className={`transition-all duration-700 ease-in-out ${
            showBio ? "max-h-0 opacity-0" : "max-h-[736px] opacity-100"
          } overflow-hidden`}
        >
          <img
            src={image}
            className="w-[454px] h-full rounded-lg"
            alt="Team Member"
          />
          <div className="pt-3">
            <p className="text-[21.75px] text-primary-teamTitle font-normal font-IBM leading-[25px] uppercase">
              {name}
            </p>
            <p className="text-[15.13px] text-primary-teamTitle font-light font-IBM uppercase">
              {role}
            </p>
          </div>
        </div>
      )}

      {/* Bio content with animation */}
      <div
        ref={bioRef}
        className={`transition-all duration-700 ease-in-out ${
          showBio ? "max-h-[736px] opacity-100 " : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-10 py-20 text-[14px] text-gray-600 font-light bg-gray-100 h-[605px] rounded-lg">
          {bio}
        </div>
      </div>
      {/* Button to toggle between image and bio */}
      <button
        className="flex items-center text-black text-sm mt-2"
        onClick={() => setShowBio(!showBio)}
      >
        {showBio ? "HIDE BIO" : "FULL BIO "}
        {showBio ? (
          <ArrowRight className="w-4 h-4 ml-1" />
        ) : (
          <ArrowLeft className="w-4 h-4 ml-1" />
        )}
      </button>
    </div>
  );
}
