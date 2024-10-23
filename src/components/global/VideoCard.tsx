"use client";
import { useRef, useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton"; // Assuming you have a Skeleton component

type Props = {
  title: string;
  video?: string;
  image?: string;
  controls?: boolean;
};

export function VideoCard({ title, video, image, controls }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track image loading

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
      img.onload = () => setIsLoading(false); // Update loading state once image is loaded
    }
  }, [image]);

  return (
    <div className="w-full h-full ">
      {video ? (
        <div className="relative w-full h-[253px] lg:h-[515px]">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            playsInline
            controls={controls ? controls : false}
            autoPlay
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
      ) : (
        <div className="relative w-full h-[253px] lg:h-[515px]">
          {isLoading ? (
            <Skeleton className="w-full h-full rounded-lg" />
          ) : (
            <img
              src={image}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt={title}
            />
          )}
        </div>
      )}
      <div className="py-4 lg:py-6">
        <p className="text-primary-lightBlack text-sm lg:text-[28px] text-left font-normal font-IBM">
          {title}
        </p>
      </div>
    </div>
  );
}
