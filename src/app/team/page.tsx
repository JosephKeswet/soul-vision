import React from "react";
import TeamCard from "./_components/TeamCard";
import { members } from "@/lib/constants";

type Props = {};

export default function page({}: Props) {
  function BioItem({
    name,
    contentOne,
    contentTwo,
  }: {
    name: string;
    contentOne: string;
    contentTwo: string;
  }) {
    return (
      <div className="space-y-6">
        <p>
          <span className="font-IBM font-medium">{name}</span>
          {contentOne}
        </p>
        <p>{contentTwo}</p>
      </div>
    );
  }
  return (
    <div className="px-4 lg:px-10">
      <div className="flex flex-col gap-16 pt-24 lg:pt-32">
        <h1 className="text-primary-black text-[32px] lg:text-[76.56px] font-light font-IBM leading-[7px] lg:leading-[80px] lg:-tracking-[4.8px]">
          Leadership
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-primary-foreground text-[15px] lg:text-[17px] font-light font-IBM leading-[24px] ">
            Soul Vision Studio&apos;s leadership is defined by a powerful
            synergy of creativity and technical expertise. The team driving the
            studio&apos;s vision is dedicated to preserving the essence of art
            while pushing the boundaries of technology in cinema. They bring
            together a unique combination of skills, with expertise in
            animation, visual effects, sound design, and storytelling, which
            allows the studio to blend live-action with computer-generated
            imagery seamlessly.
          </p>
          <p className="text-primary-foreground text-[15px] lg:text-[17px] font-light font-IBM leading-[24px] ">
            The leadership is committed to more than just technical mastery;
            they hold a deep belief that every piece of art has its own
            consciousness, and this conviction guides the studio&apos;s approach
            to storytelling. This philosophy ensures that their creations
            maintain a sense of integrity and soul, resulting in films that
            resonate emotionally with audiences. Their focus is not merely on
            producing content, but on creating immersive cinematic experiences
            that re-ignite the spirit of storytelling. Through years of
            experience in visual effects, sound design, branding and business,
            the leadership team has built a solid foundation for the
            studio&apos;s mission.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16 pb-24">
        <TeamCard
          name="JESIMIEL BELLO"
          role="PRINCIPAL ARTIST + Co-Founder"
          image={members.member1}
          bio={
            <BioItem
              name="Jesimiel Bello,"
              contentOne={`, born in 1999, studied Film Arts at the National Film Institute in Jos. He began his career scoring and doing sound design for student films, as well as creating storyboards. His first feature film was “Rukkaya” (2022), and he has since scored numerous short films, feature films, series, and a couple of animations. Dafe also has music production and audio engineering credits on several albums, EPs, and singles..`}
              contentTwo={`"Amina," premiered in December 2022, achieved remarkable success, amassing a total of 30 thousand views and resonating with audiences worldwide. Jesimiel also directed an animated short film "Haske,"  in 2023 which was screened in more than six festivals globally. "Haske" has not only showcased his creative prowess but has also earned acclaim on the international stage`}
            />
          }
        />
        <TeamCard
          name="DAFE EDESIRI"
          role="AUDIO PRODUCER + Co-Founder"
          image={members.member2}
          bio={
            <BioItem
              name="Dafe Edesiri"
              contentOne={`,born in 1999, studied Film Arts at the National Film Institute in Jos. He began his career scoring and doing sound design for student films, as well as creating storyboards. His first feature film was “Rukkaya” (2022), and he has since scored numerous short films, feature films, series, and a couple of animations. Dafe also has music production and audio engineering credits on several albums, EPs, and singles.`}
              contentTwo={`In 2022, Dafe co-founded Soul Vision Studio with his friend and secondary school mate, Jesimiel Bello. They produced “Haske,” an animated short film that was screened at AFRIFF and AVIJOZI. Dafe is currently collaborating on several feature films and music projects.`}
            />
          }
        />
        <TeamCard
          name="DOYIN AMU"
          role="BUSINESS DEVELOPMENT LEAD"
          image={members.member3}
          bio={
            <BioItem
              name="Doyin Amu"
              contentOne=", joined “Soul Vision Studio” in April 2024, bringing  a strong background in project management to the studio. He holds a MSc in Business and Management and a BEng in Chemical Engineering from Aston University, along with several professional certifications in project management.
Before joining “Soul Vision Studio”, Doyin managed various projects across different sectors, including the defence, healthcare and the energy sector. Outside of his roles, Doyin shared his love for movies on his blog, where he reviewed films"
              contentTwo="His passion for cinema and digital transformation, combined with his professional acumen gives him unique insight, and made him a valuable asset to the Soul Vision team."
            />
          }
        />
        <TeamCard
          name="PRAISE AMEH"
          role="CREATIVE DIRECTOR - BRAND & DIGITAL EXPERIENCE"
          image={members.member4}
          bio={
            <BioItem
              name="Praise Ameh"
              contentOne=",is a broad-spectrum, analytics-oriented and result-driven designer with over 6 years of experience spanning Artificial Intelligence, health tech, b2b SaaS, and supply chain."
              contentTwo={`"Amina," premiered in December 2022, achieved remarkable success, amassing a total of 30 thousand views and resonating with audiences worldwide. Jesimiel also directed an animated short film "Haske,"  in 2023 which was screened in more than six festivals globally. "Haske" has not only showcased his creative prowess but has also earned acclaim on the international stage`}
            />
          }
        />
      </div>
    </div>
  );
}
