import React from "react";
import TeamCard from "./_components/TeamCard";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="px-4 lg:px-10">
      <div className="flex flex-col gap-16 pt-10">
        <h1 className="text-primary-black text-[76.56px] font-light font-IBM leading-[80px] -tracking-[4.8px]">
          Leadership
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-primary-foreground text-[17px] font-normal font-IBM leading-[24px] ">
            Dá Design Studio is a Brand Identity Design Studio helping Africans
            create real brands that work. Quintessential brands that aren&apos;t
            flawless or perfect, but honest and relatable. For us, Brand
            Identity design is about genuinely connecting, it&apos;s about
            helping brands reflect their true images in the hearts of their
            market. This is our mission. It&apos;s not really about us,
            it&apos;s about the brands we help people love
          </p>
          <p className="text-primary-foreground text-[17px] font-normal font-IBM leading-[24px] ">
            Since our launch in April 2016, we have worked with some of the most
            progressive companies in Nigeria, exhibited internationally, and
            have had significant collaborations including with the world&apos;s
            largest independent design{" "}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16 pb-24">
        <TeamCard
          name="JESIMIEL BELLO"
          role="PRINCIPAL ARTIST + Co-Founder"
          image="/assets/TeamMember1.png"
        />
        <TeamCard
          name="DAFE EDESIRI"
          role="AUDIO PRODUCER + Co-Founder"
          image="/assets/TeamMember1.png"
        />
        <TeamCard
          name="DOYIN AMU"
          role="BUSINESS DEVELOPMENT LEAD"
          image="/assets/TeamMember1.png"
        />
        <TeamCard
          name="PRAISE AMEH"
          role="CREATIVE DIRECTOR - BRAND & DIGITAL EXPERIENCE"
          image="/assets/TeamMember1.png"
        />
      </div>
    </div>
  );
}
