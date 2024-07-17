"use client";
import { useRef, useState } from "react";
import Navbar from "@/components/global/Navbar";
import { fonts } from "@/lib/constants";
import { VideoCard } from "@/components/global/VideoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <main className="">
      <div className="relative w-full h-[832px] bg-black overflow-hidden">
        {/* <video
          ref={videoRef}
          className="absolute inset-0 object-cover w-full h-full"
          playsInline
          controls={false} // Hide the controls
          onEnded={() => setIsPlaying(false)} // Optional: Reset state on video end
        >
          <source src="/assets/TestVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="relative z-30">
          <Navbar />
        </div>
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <img
              onClick={handlePlay}
              src="/assets/PlayIcon.png"
              className="w-[100px] h-[100px] cursor-pointer"
              alt="Play"
            />
          </div>
        )}
      </div>
      <section className="px-4 lg:px-10">
        <div className="pt-8 lg:pt-24 ">
          <h1
            className={`text-primary-blue text-[60px] font-light font-IBM leading-[68px]`}
          >
            Staying true to Art.
          </h1>
          <p className="text-primary-black text-[60px] font-light font-IBM leading-[82.8px]">
            A future-focused animation studio bridging the gap between CGI and
            live action.
          </p>
        </div>
        <div className="py-8 lg:py-24">
          <img
            src="/assets/ArrowDown.svg"
            className="w-[43px] h-[34px] cursor-pointer"
            alt="Arrow Down"
          />
        </div>
        <div className="w-full py-8 lg:py-24">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
            }}
            orientation="horizontal"
            className="w-full h-[615px]"
          >
            <CarouselContent className="flex gap-6">
              {" "}
              {/* Added gap-4 for spacing */}
              <CarouselItem className="w-[781px]  basis-7/12">
                <VideoCard title="Pathos" />
              </CarouselItem>
              <CarouselItem className=" w-[781px] basis-7/12">
                <VideoCard title="Haske - Light In The Dark" />
              </CarouselItem>
              <CarouselItem className="w-[781px] basis-7/12">
                <VideoCard title="Pathos" />
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious className="absolute z-30 top-[90%] bottom-0 left-2" /> */}

            <CarouselNext className="absolute z-30 top-[90%] bottom-0 right-8" />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
