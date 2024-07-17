import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title: string;
  video?: string;
};
export function VideoCard({ title }: Props) {
  return (
    <div className="w-full h-full overflow-hidden  ">
      <div className="relative pb-56 lg:h-[515px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full "
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="py-4">
        <p className="text-primary-lightBlack text-[28px] text-left font-normal font-IBM">
          {title}
        </p>
      </div>
    </div>
  );
}
