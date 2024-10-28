"use client";
import { useRef, useState, useEffect } from "react";
import { ArrowRightIcon, fonts, routes, videos } from "@/lib/constants";
import { VideoCard } from "@/components/global/VideoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Loader from "@/components/global/Loader";
import Navbar from "@/components/global/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handlePlay();
          } else {
            handlePause();
          }
        });
      },
      { threshold: 0.5 }, // Adjust threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <main className="">
    <div className="w-full h-[50vh] lg:h-[832px] bg-black overflow-hidden">
  {isLoading && <Loader />}
  <video
    ref={videoRef}
    className="w-full h-full object-cover bg-black"
    playsInline
    controls={false}
    autoPlay
    loop
    onLoadedMetadata={() => setIsLoading(false)}
  >
    <source src="/assets/Land.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      <section>
        <div className="pt-8 lg:pt-64 px-4 lg:px-10">
          <h1
            className={`text-primary-blue text-[22.1px] lg:text-[60px] font-light font-IBM leading-[35.33px] lg:leading-[68px]`}
          >
            Staying true to Art.
          </h1>
          <p className="text-primary-black text-[22.1px] lg:text-[60px] font-light font-IBM leading-[30.5px] lg:leading-[82.8px]">
            A future-focused animation studio bridging the gap between CGI and
            live action.
          </p>
        </div>
        <div className="py-8 lg:py-24 px-4 lg:px-10">
          <img
            src="/assets/ArrowDown.svg"
            className="w-[43px] h-[34px] cursor-pointer"
            alt="Arrow Down"
          />
        </div>

        <div
          id="story"
          className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 lg:gap-0 px-4 lg:px-10"
        >
          <div className="col-span-1">
            <h1 className="text-[32px] lg:text-[62px] text-black font-light font-IBM">
              Our Story
            </h1>
          </div>
          <div className="col-span-1 flex flex-col gap-8">
            <p className="text-[15px] lg:text-[17px] text-primary-lightBlack font-extralight font-IBM">
              Soul Vision Studio is an animation film company dedicated to
              preserving the essence of art and cinema. We aim to bridge the gap
              between live-action and computer-generated imagery while
              developing new technologies to enhance storytelling, creating a
              truly immersive cinematic experience.
            </p>
            <p className="text-[15px] lg:text-[17px] text-primary-lightBlack font-extralight font-IBM">
              Founded in 2022, our studio has been focused on establishing an
              effective production pipeline that enables us to develop our
              intellectual properties and achieve our goals. Since our
              inception, we have released several concept films that have
              garnered significant attention organically, proving the viability
              of our endeavour.
            </p>
            <p className="text-[15px] lg:text-[17px] text-primary-lightBlack font-extralight font-IBM">
              Our mission is to restore the spark that cinema once had and
              illuminate a new way of storytelling. At its core, Soul Vision
              Studio possesses its own consciousness. We believe that every
              piece of art has a soul and must remain closely tethered to the
              essence for which it was created. Our commitment goes beyond mere
              production; we care deeply about the integrity and spirit of our
              creations.
            </p>
          </div>
        </div>
        <div className="w-full py-8 lg:py-24 px-4 lg:pl-10">
          <Carousel
            opts={{ align: "start" }}
            orientation="horizontal"
            className="w-full h-auto lg:h-[615px]"
          >
            <CarouselContent className="flex flex-col lg:flex-row gap-6">
              <CarouselItem className="w-full lg:w-[781px] basis-7/12">
                <VideoCard title="Amina" video={videos.aminaMontage} />
              </CarouselItem>
              <CarouselItem className="w-full lg:w-[781px]  basis-7/12">
                <VideoCard
                  title="Haske - Light In The Dark"
                  video={videos.haskeMontage}
                />
              </CarouselItem>
              <CarouselItem className="w-full lg:w-[781px]  basis-7/12">
                <VideoCard
                  title="Pathos (Coming This Summer)"
                  video=""
                  image="/assets/Pathos.png"
                />
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious className="hidden lg:flex absolute z-30 top-[100%] bottom-0 left-[40%] right-8 my-10" /> */}

            {/* <CarouselNext className="hidden lg:flex lg:absolute z-30 top-[100%] bottom-0 right-5 " /> */}
            <div
              onClick={() => router.push(routes.work)}
              className="flex justify-end pb-8 pt-8 lg:pt-10 lg:pb-24 px-4 lg:px-10 cursor-pointer"
            >
              <ArrowRightIcon />
            </div>
          </Carousel>
        </div>
      </section>
    </main>
  );
}
