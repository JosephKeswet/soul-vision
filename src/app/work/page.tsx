"use client";
import { VideoCard } from "@/components/global/VideoCard";
import { VideoWork } from "@/components/global/VideoWork";
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
    <div className="grid grid-cols-1 gap-6">
      <div className="relative w-full h-[702px] lg:h-[810px]">
        <VideoWork title="Amina" video={videos.aminaMontage} controls={true} />
        <div className="absolute bottom-20 left-8 py-2">
          <p className="text-white text-lg lg:text-[54px] text-left font-normal font-IBM uppercase">
            AMINA
          </p>
        </div>
        <div className="absolute bottom-20 right-8 py-2 z-50">
          <p className="text-white text-sm lg:text-[54px] text-left font-normal font-IBM uppercase">
            <RightIcon title="amina" />
          </p>
        </div>
      </div>
      <div className="relative w-full h-[702px] lg:h-[810px]">
        <VideoWork title="HASKE" video={videos.haskeMontage} controls={true} />
        <div className="absolute bottom-20 left-8 py-2 z-50">
          <p className="text-white text-lg lg:text-[54px] text-left font-normal font-IBM uppercase">
            HASKE
          </p>
        </div>
        <div className="absolute bottom-20 right-8 py-2  z-50">
          <p className="text-white text-sm lg:text-[54px] text-left font-normal font-IBM uppercase">
            <RightIcon title="haske" />
          </p>
        </div>
      </div>
      <div className="relative w-full h-[702px] lg:h-[810px] pb-40">
        <VideoWork
          title="PATHOS"
          video=""
          image="/assets/Pathos.png"
          controls={true}
        />
        <div className="absolute bottom-20 left-8 py-2">
          <p className="text-white text-lg lg:text-[54px] text-left font-normal font-IBM uppercase">
            PATHOS
          </p>
        </div>
        <div className="absolute bottom-20 right-8 py-2 z-50">
          <p className="text-white text-sm lg:text-[54px] text-left font-normal font-IBM uppercase">
            <RightIcon title="pathos" />
          </p>
        </div>
      </div>
    </div>
  );
}
