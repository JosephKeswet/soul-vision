import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="grid grid-cols-2 w-full p-4 lg:p-10 border">
      <div className="col-span-1 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-[22.1px] text-primary-grey font-IBM">Follow Us</p>
          <div className="flex items-center gap-4">
            <img
              src="/assets/InstagramIcon.svg"
              className="w-[22px] h-[22px]"
              alt="Instagram icon"
            />
            <img
              src="/assets/BeIcon.svg"
              className="w-[22px] h-[22px]"
              alt="Be icon"
            />
            <img
              src="/assets/VimeoIcon.svg"
              className="w-[22px] h-[22px]"
              alt="Vimeo icon"
            />
            <img
              src="/assets/LinkedInIcon.svg"
              className="w-[22px] h-[22px]"
              alt="LinkedIn icon"
            />
            <img
              src="/assets/FacebookIcon.svg"
              className="w-[22px] h-[22px]"
              alt="Facebook icon"
            />
            <img
              src="/assets/TwitterIcon.svg"
              className="w-[22px] h-[22px]"
              alt="Twitter icon"
            />
          </div>
        </div>
        <div>
          <p className="text-[22.1px] text-primary-grey font-IBM">Legal</p>
          <ul>
            <li className="text-[22.1px] underline underline-offset-4">
              Privacy
            </li>
            <li className="text-[22.1px] underline underline-offset-4">
              Cookies
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-10">
        <div>
          <p className="text-[22.1px] text-primary-grey font-IBM">Email Us</p>
          <ul>
            <li className="text-[22.1px] underline underline-offset-4">
              info@soulvision.studio
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[22.1px] text-primary-grey font-IBM">Talk to Us</p>
          <ul>
            <li className="text-[22.1px] underline underline-offset-4">
              +234 (0) 90 5706 8297
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[22.1px] text-primary-grey font-IBM">Join Us</p>
          <ul>
            <li className="text-[22.1px] underline underline-offset-4">
              View all openings
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[22.1px] text-primary-grey font-IBM">Location</p>
          <ul>
            <li className="text-[22.1px] underline underline-offset-4">
              Palm Springs Luxury Estate
            </li>
            <li className="text-[22.1px] underline underline-offset-4">
              Maitama Extension, Abuja 930001
            </li>
            <li className="text-[22.1px] underline underline-offset-4">
              Directions
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex items-center justify-between ">
          <p className="text-primary-black text-[14px] font-light font-IBM">
            &copy; 2023 SoulVision Studio. All rights reserved.
          </p>
        </div> */}
    </footer>
  );
}
