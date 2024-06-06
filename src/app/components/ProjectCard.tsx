import React from "react";
import { FaCode } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import Link from "next/link";

type proCardProps = {
  imgUrl: any;
  title: any;
  description: any;
  getUrl: any;
  previewUrl: any;
};

export const ProjectCard: React.FC<proCardProps> = ({
  imgUrl,
  title,
  description,
  getUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div
        className=" h-52 md:h-72 rounded-t-xl relative group "
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className=" overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden  group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={getUrl}
            className=" h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link "
          >
            <FaCode className=" h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className=" h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link "
          >
            <LuEye className=" h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white mt-2 rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className=" text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};
