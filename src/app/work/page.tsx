"use client";
import { VideoCard } from "@/components/global/VideoCard";
import { ImageWork } from "@/components/global/VideoWork";
import { ArrowRightIcon, routes, videos } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const router = useRouter();
  function RightIcon({ title }: { title: string }) {
    return (
      <div
      
        onClick={() => {
          router.push(`${routes.works}/${title.toLowerCase()}`);
        }}
        className="cursor-pointer "
      >
        <ArrowRightIcon color="white" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-2 lg:gap-6">
      <div className="relative w-full">
        <ImageWork title="Amina" image="/assets/Amina/vid1.png" controls={true} />
        <div className="absolute bottom-0 left-4 lg:bottom-20 lg:left-8 py-2 z-50">
          <p className="text-white text-lg lg:text-[54px] text-left font-normal font-IBM uppercase">
            AMINA
          </p>
        </div>
        <div className="absolute bottom-0 right-4 lg:bottom-20 lg:right-8  py-2 z-50">
          <p className="text-white text-sm lg:text-[54px] text-left font-normal font-IBM uppercase">
            <RightIcon title="amina" />
          </p>
        </div>
      </div>
      <div className="relative w-full ">
        <ImageWork title="HASKE" image="/assets/Haske/vid1.png" controls={true} />
        <div className="absolute bottom-0 left-4 lg:bottom-20 lg:left-8 py-2">
          <p className="text-white text-lg lg:text-[54px] text-left font-normal font-IBM uppercase">
            HASKE
          </p>
        </div>
        <div className="absolute bottom-0 right-4 lg:bottom-20 lg:right-8  py-2 z-50">
          <p className="text-white text-sm lg:text-[54px] text-left font-normal font-IBM uppercase">
            <RightIcon title="haske" />
          </p>
        </div>
      </div>
      <div className="relative w-full  pb-20">
        <ImageWork
          title="PATHOS"
          video=""
          image="/assets/Pathos.png"
          controls={true}
        />
        {/* <div className="absolute bottom-20 left-8 py-2">
          <p className="text-white text-lg lg:text-[54px] text-left font-normal font-IBM uppercase">
            PATHOS
          </p>
        </div>
        <div className="absolute bottom-20 right-8 py-2 z-50">
          <p className="text-white text-sm lg:text-[54px] text-left font-normal font-IBM uppercase">
            <RightIcon title="pathos" />
          </p>
        </div> */}
      </div>
    </div>
  );
}
