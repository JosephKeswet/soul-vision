import { VideoCard } from "@/components/global/VideoCard";
import { ImageWork } from "@/components/global/VideoWork";
import { videos } from "@/lib/constants";
import React from "react";

type Props = {};

export default function AminaComponent({}: Props) {
  return (
    <div className="pb-[100px] lg:pb-[200px] ">
      <div className="relative w-full ">
        <ImageWork title="Amina" image="/assets/Amina/vid5.png" controls={true} />
        {/* <div className="absolute bottom-20 left-8 py-2">
          <p className="text-white text-lg lg:text-[54px] text-left font-normal font-IBM uppercase">
            AMINA
          </p>
        </div> */}
        <div className="pt-8  px-4 lg:px-10">
        <p className="text-[17px] md:text-[20px]  font-IBM font-light">
            Amina: Amina is a 4-minute sci-fi short that explores the clash of
            belief systems through symbolic storytelling. It highlights how,
            despite our efforts, we can&apos;t escape our human nature.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="col-span-2">
              <ImageWork
                title="Amina"
                // video={videos.aminaMontage}
                image="/assets/Amina/vid1.png"
                controls={true}
              />
            </div>
            <div className="col-span-2">
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
                <VideoCard
                  title=""
                  // video={videos.aminaMontage}
                  image="/assets/Amina/vid4.png"
                  controls={true}
                />
                 <VideoCard
                  title=""
                  // video={videos.aminaMontage}
                  image="/assets/Amina/vid2.png"
                  controls={true}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-8">
                <ImageWork
                  title=""
                  // video={videos.aminaMontage}
                  image="/assets/Amina/vid3.png"
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
