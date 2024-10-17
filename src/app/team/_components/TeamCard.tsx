"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState, useEffect } from "react";

type Props = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload the image and update the loading state once it's loaded
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoading(false);
  }, [image]);

  return (
    <div>
      {isLoading ? (
        <Skeleton className="w-full lg:w-[454px] h-[500px] lg:h-[590px] rounded-lg" />
      ) : (
        <img
          src={image}
          className="w-[454px]  rounded-lg"
          alt="Team Member"
        />
      )}
      <div className="pt-3">
        <p className="text-[21.75px] text-primary-teamTitle font-normal font-IBM leading-[25px] uppercase">
          {name}
        </p>
        <p className="text-[15.13px] text-primary-teamTitle font-light font-IBM uppercase">
          {role}
        </p>
      </div>
    </div>
  );
}
