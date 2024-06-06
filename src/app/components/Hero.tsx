"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

const AchavmentList = [
  {
    title: "Projects",
    value: 50,
  },
  {
    title: "Users",
    value: 25,
  },
  {
    title: "Awards",
    value: 10,
  },
  {
    title: "Years",
    value: 5,
  },
];

export const Hero = () => {
  return (
    <section
      id="Hero"
      className=" scroll-smooth container lg:px-10 p-10 lg:pt-20"
    >
      <div className="flex flex-col lg:flex-row pb-10">
        <div className="w-5/8">
          <h1 className="text-white mb-4 md:text-center text-center lg:text-start text-4xl lg:text-6xl font-extrabold">
            {" "}
            <span className="  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500  ">
              Hello, I'm <br />
            </span>
            <TypeAnimation
              sequence={[
                "LazHer",
                1000,
                "Web Developer",
                1000,
                "UI / UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-center lg:pr-10 lg:text-start mb-6 text-lg lg:text-xl">
            In my role as a UI Designer and Web Developer,i working closely with
            cross-functional teams to translate design concepts into functional
            code. Whether it's designing user interfaces, implementing frontend
            components, or optimizing website performance, I am committed to
            delivering high-quality solutions that exceed expectations and drive
            business results.
          </p>
          <div className="text-center  lg:text-start ">
            <Link
              href={"#Contact"}
              className="px-5 py-2 rounded-full w-full sm:w-fit mr-4  bg-blue-500 text-white"
            >
              contact me
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/13E3aF0B7lyWnwDQqWQ6tqdUQbxi6_lzW/view?usp=sharing"
              }
              className="px-5 py-2 rounded-full w-full sm:w-fit   bg-pink-500 text-white"
            >
              Download Cv
            </Link>
          </div>
        </div>
        <div className="w-3/8 mt-10 lg:mt-0 flex  justify-center">
          {" "}
          <div className="flex justify-center items-center rounded-full bg-[#181818] w-[400px] h-[400px] ">
            <Image
              className=" "
              src="/Frame 1.png"
              alt="Hero image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className=" py-8 sm:px-4  xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353f] border rounded-md py-8 px-5 sm:px-16 flex flex-row items-center justify-between">
          {AchavmentList.map((achavment, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col items-center justify-center mx-2  md:mx-4"
              >
                <h2 className=" flex items-center justify-center text-white text-xl md:text-4xl font-bold">
                  <CountUp
                    start={0}
                    end={achavment.value}
                    duration={2}
                  ></CountUp>{" "}
                  +
                </h2>
                <p className=" text-[#adb7be] text-base">{achavment.title} </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
