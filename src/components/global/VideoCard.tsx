"use client";
import { useRef, useState, useEffect } from "react";

type Props = {
  title: string;
  video?: string;
};

export function VideoCard({ title, video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="relative  lg:h-[515px]">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full"
          playsInline
          controls={false}
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
      <div className="py-2">
        <p className="text-primary-lightBlack text-[28px] text-left font-normal font-IBM">
          {title}
        </p>
      </div>
    </div>
  );
}
