import React from "react";
import TeamCard from "./_components/TeamCard";
import { members } from "@/lib/constants";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="px-4 lg:px-10">
      <div className="flex flex-col gap-16 pt-10">
        <h1 className="text-primary-black text-[32px] lg:text-[76.56px] font-light font-IBM leading-[7px] lg:leading-[80px] lg:-tracking-[4.8px]">
          Leadership
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-primary-foreground text-[15px] lg:text-[17px] font-light font-IBM leading-[24px] ">
          Soul Vision Studio&apos;s leadership is defined by a powerful synergy of creativity and technical expertise. The team driving the studio&apos;s vision is dedicated to preserving the essence of art while pushing the boundaries of technology in cinema. They bring together a unique combination of skills, with expertise in animation, visual effects, sound design, and storytelling, which allows the studio to blend live-action with computer-generated imagery seamlessly.
          </p>
          <p className="text-primary-foreground text-[15px] lg:text-[17px] font-light font-IBM leading-[24px] ">
          The leadership is committed to more than just technical mastery; they hold a deep belief that every piece of art has its own consciousness, and this conviction guides the studio&apos;s approach to storytelling. This philosophy ensures that their creations maintain a sense of integrity and soul, resulting in films that resonate emotionally with audiences. Their focus is not merely on producing content, but on creating immersive cinematic experiences that re-ignite the spirit of storytelling. Through years of experience in visual effects, sound design, branding and business, the leadership team has built a solid foundation for the studio&apos;s mission. 
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16 pb-24">
        <TeamCard
          name="JESIMIEL BELLO"
          role="PRINCIPAL ARTIST + Co-Founder"
          image={members.member1}
        />
        <TeamCard
          name="DAFE EDESIRI"
          role="AUDIO PRODUCER + Co-Founder"
          image={members.member2}
        />
        <TeamCard
          name="DOYIN AMU"
          role="BUSINESS DEVELOPMENT LEAD"
          image={members.member3}
        />
        <TeamCard
          name="PRAISE AMEH"
          role="CREATIVE DIRECTOR - BRAND & DIGITAL EXPERIENCE"
          image={members.member4}
        />
      </div>
    </div>
  );
}
