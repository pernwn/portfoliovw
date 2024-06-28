"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LinkButton } from "./ui/buttons";
import Image from "next/image";
import styles from "@/app/style";
import navItems from "../data/nav";
import { useRouter } from "next/router";

const Nav = () => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handlePageLoad = () => {
    setIsOpen(false);
  }

  return (
    <div
      className={`${styles.paddingX} py-4 xl:py-8 inline-grid grid-cols-2 light:bg-lightShade-500 dark:bg-darkShade-500 bg-opacity-80 glassmorph w-full h-fit fixed z-50`}
    >
      <a
        href="/"
        className="flex rounded-full relative w-14 h-14 xl:w-16 xl:h-16 border-2 border-primary-200 hover:border-primary objTransitions"
      >
        <Image
          alt="Profile"
          src="/profileNoBG.png"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-full"
        />
      </a>
      <div className="flex justify-between items-center w-full h-fit sm:hidden">
        {navItems.map((data, index) => (
          <span key={index}>
            <LinkButton title={data.title} url={data.url} />
          </span>
        ))}

        <Link className="objTransitions" href="mailto:vicwaet@hotmail.com">
          <p className="leading-none text-accent-600 p-med btn btn-secondary">
            Direct Contact
          </p>
        </Link>
      </div>

      <div className="md:hidden lg:hidden xl:hidden flex flex-col text-right items-end">
        <div onClick={handleClick}>
          <div
            className={`relative float-right mt-4 space-y-2 items-center transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <div
              className={`w-10 h-1 bg-textCol-900 rounded-full transition duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-10 h-1 bg-accent rounded-full transform transition-transform duration-300 ${
                isOpen
                  ? "rotate-45 translate-x-1 origin-center"
                  : "rotate-0 translate-x-0"
              }`}
            />

            <div
              className={`w-10 h-1 bg-textCol-900 rounded-full transform transition-transform duration-300 ${
                isOpen
                  ? "-rotate-45 translate-x-1 origin-center -translate-y-3"
                  : "rotate-0 translate-x-0"
              }`}
            />
          </div>
        </div>

        <div className={`flex flex-col items-start`}>
          {isOpen && (
            <div
              className={`w-full transition-transform duration-300 animate-slideDown`}
            >
              <div className="w-full flex flex-col justify-evenly">
                <div>
                  {navItems.map((data, index) => (
                    <span key={index}>
                      <LinkButton title={data.title} url={data.url} onClick={handlePageLoad} />
                    </span>
                  ))}
                  <Link
                    className="objTransitions"
                    href="mailto:vicwaet@hotmail.com"
                  >
                    <p className="leading-none p-med text-[18px] mt-8 btn btn-primary">
                      Direct Contact
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
