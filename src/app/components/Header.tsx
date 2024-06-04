"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import Headroom from "react-headroom";

const NavLinks = [
  {
    link: "About",
    path: "About",
  },
  {
    link: "Project",
    path: "Project",
  },
  {
    link: "Contact",
    path: "Contact",
  },
];

export const Header = () => {
  const [navbarOpen, setnevbarOpen] = useState(false);

  return (
    <Headroom>
      <nav className=" top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="container flex flex-wrap items-center justify-between mx-auto px-4 p-8">
          <Link
            to="/Hero"
            className="text-3xl md:text-5xl  text-white font-semibold"
          >
            Portfolio
          </Link>
          <div className=" lg:flex gap-x-10 hidden  py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0  ">
            {NavLinks.map(({ link, path }) => (
              <Link
                className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 hover:text-white cursor-pointer"
                to={path}
                smooth={true}
                spy={true}
                offset={-100}
              >
                {link}
              </Link>
            ))}
          </div>
          {/* moble mode */}
          <div
            onClick={() => setnevbarOpen(!navbarOpen)}
            className="lg:hidden "
          >
            {navbarOpen ? (
              <div>
                <button className="border-[#adb7be]  border rounded-lg p-2">
                  {" "}
                  <FaXmark size={25} />
                </button>
                <div className=" absolute pb-5 md:p-10  top-[107px] w-[100%] left-0 right-0  z-10 bg-[#121212] bg-opacity-90">
                  {" "}
                  {NavLinks.map(({ link, path }) => (
                    <Link
                      onClick={() => setnevbarOpen(false)}
                      className=" text-2xl py-5 md:p-5  hover:text-[#adb7be] flex justify-center items-center p-4  md:flex-row md:space-x-8 mt-0  cursor-pointer"
                      to={path}
                      smooth={true}
                      spy={true}
                      offset={-100}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <button className="border-[#adb7be] rounded-lg  border p-2">
                <FaBars size={25} />
              </button>
            )}
          </div>
        </div>
      </nav>
    </Headroom>
  );
};
