import React from "react";

type Props = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: Props) {
  return (
    <div>
      <img src={image} className="w-[454px] " alt="Team Member" />
      <div className="pt-3">
        <p className="text-[21.75px] text-primary-teamTitle font-normal font-IBM leading-[25px]">
          {name}
        </p>
        <p className="text-[15.13px] text-primary-teamTitle font-normal font-IBM">
          {role}
        </p>
      </div>
    </div>
  );
}
