import { VideoCard } from "@/components/global/VideoCard";
import { VideoWork } from "@/components/global/VideoWork";
import { videos } from "@/lib/constants";
import React from "react";

type Props = {};

export default function AminaComponent({}: Props) {
  return (
    <div className="pb-[1900px] lg:pb-[2800px] ">
      <div className="relative w-full h-[702px] lg:h-[810px]">
        <VideoWork title="Amina" video={videos.aminaMontage} controls={true} />
        {/* <div className="absolute bottom-20 left-8 py-2">
          <p className="text-white text-lg lg:text-[54px] text-left font-normal font-IBM uppercase">
            AMINA
          </p>
        </div> */}
        <div className="pt-8  px-4 lg:px-10">
          <p className="text-[20px]">
            Amina: Amina is a 4-minute sci-fi short that explores the clash of
            belief systems through symbolic storytelling. It highlights how,
            despite our efforts, we can&apos;t escape our human nature.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="col-span-2">
              <VideoWork
                title="Amina"
                video={videos.aminaMontage}
                controls={true}
              />
            </div>
            <div className="col-span-2">
              <div className="flex flex-wrap items-center gap-8">
                <VideoCard
                  title=""
                  video={videos.aminaMontage}
                  controls={true}
                />
                <VideoCard
                  title=""
                  video={videos.aminaMontage}
                  controls={true}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-8">
                <VideoCard
                  title=""
                  video={videos.aminaMontage}
                  controls={true}
                />
     
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
