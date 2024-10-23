"use client";
import { ArrowRightIcon } from "@/lib/constants";
import { useRef, useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {
  title: string;
  video?: string;
  image?: string;
  controls?: boolean;
};

export function ImageWork({ title, video, image, controls }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
            return;
          } else {
            handlePause();
          }
        });
      },
      { threshold: 0.5 },
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

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => setIsLoading(false); // Stop loading when image is fully loaded
    }
  }, [image]);

  return (
    <div className="w-full h-full overflow-hidden">
      {isLoading ? (
        <Skeleton className="w-full h-[500px] lg:h-[605px] rounded-lg" />
      ) : (
        <div className="relative w-full h-[252px] lg:h-[810px]">
          <img
            src={image}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt={title}
          />
        </div>
      )}

      {video ? (
        <div className="relative w-full h-[702px] lg:h-[810px]">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            playsInline
            controls={controls ? controls : false}
            autoPlay={false}
            loop
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
      ) : null}
    </div>
  );
}
