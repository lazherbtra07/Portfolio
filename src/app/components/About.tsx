"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { TapButton } from "./TapButton";

const skillsData = {
  skills: ["JavaScript", "React", "Next.js", "Node.js", "Express", "Figma"],
  Education: [
    "Frontend Academy of Code",
    "Uivercity of Mohemmed Boudiaf, Msila",
  ],
  Experionce: ["Frontend Developer web3pros", "Freelancer Project"],
};

export const About = () => {
  const [selectedButton, setSelectedButton] = useState<
    "skills" | "Education" | "Experionce"
  >("skills");
  return (
    <section id="About" className="container ">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 ">
          {" "}
          <Image
            className="w-full"
            src="/about-image.webp"
            width={1200}
            height={1200}
            alt={""}
          />
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <h2 className=" text-4xl md:mt-5 text-center lg:text-start font-bold text-white mb-4">
            About Me
          </h2>
          <p
            data-aos="flip-up"
            data-aos-delay="200"
            className="text-white text-lg md:text-lg text-center mb-5 lg:text-start "
          >
            I am a ui/ux designer and web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, Figma,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div>
            <div className="flex space-x-4">
              <p
                className={`font-bold ${
                  selectedButton === "skills"
                    ? "text-white border-b border-purple-500"
                    : ""
                }`}
                onClick={() => setSelectedButton("skills")}
              >
                skills
              </p>
              <p
                className={`font-bold ${
                  selectedButton === "Education"
                    ? "text-white border-b border-purple-500"
                    : ""
                }`}
                onClick={() => setSelectedButton("Education")}
              >
                Education
              </p>
              <p
                className={`font-bold ${
                  selectedButton === "Experionce"
                    ? "f text-white border-b border-purple-500"
                    : ""
                }`}
                onClick={() => setSelectedButton("Experionce")}
              >
                Experionce
              </p>
            </div>
            <div className=" mt-4">
              <TapButton skills={skillsData[selectedButton]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
