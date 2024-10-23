import { VideoCard } from "@/components/global/VideoCard";
import { ImageWork } from "@/components/global/VideoWork";
import { videos } from "@/lib/constants";
import React from "react";

type Props = {};

export default function HaskeComponent({}: Props) {
  return (
    <div className="pb-[100px] lg:pb-[200px] ">
      <div className="relative w-full ">
        <ImageWork
          title="Haske"
          image="/assets/Haske/vid1.png"
          controls={true}
        />

        {/* <div className="absolute bottom-20 left-8 py-2">
          <p className="text-white text-lg lg:text-[54px] text-left font-normal font-IBM uppercase">
            AMINA
          </p>
        </div> */}
        <div className="pt-8  px-4 lg:px-10">
          <p className="text-[17px] md:text-[20px]  font-IBM font-light">
            HASKE,&quot; conceived during the making of &quot;AMINA,&quot; feels
            like its spiritual predecessor. Both films faced similar
            challenges—lack of funding, equipment, and support. At its heart,
            &quot;HASKE&quot; is about perseverance, overcoming inner struggles,
            and finding strength to face external obstacles.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="col-span-2">
              <ImageWork
                title="Haske"
                // video={videos.haskeMontage}
                image="/assets/Haske/vid5.png"
                controls={true}
              />
            </div>
            <div className="col-span-2">
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
                <VideoCard
                  title=""
                  // video={videos.haskeMontage}
                  image="/assets/Haske/vid4.png"
                  controls={true}
                />
                <VideoCard
                  title=""
                  // video={videos.haskeMontage}
                  image="/assets/Haske/vid2.png"
                  controls={true}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-8">
                <ImageWork
                  title=""
                  // video={videos.aminaMontage}
                  image="/assets/Haske/vid3.png"
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
