"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LinkButton } from "./ui/buttons";
import Image from "next/image";
import styles from "@/app/style";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navItems from "../data/nav";



const Nav = () => {
  const [isOpen, setIsOpen] = useState();
  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleClick = () => {
    setIsOpen(isOpen ? handleClose : handleOpen)
  }

  return (
    <div
      className={`${styles.padding} inline-grid grid-cols-2 light:bg-lightShade-500 dark:bg-darkShade-500 bg-opacity-80 glassmorph w-full h-fit fixed z-50`}
    >
      <a
        href="/"
        className="flex rounded-full relative w-16 h-16 border-2 border-secondary hover:border-primary objTransitions"
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

      <div className="lg:hidden xl:hidden flex text-right items-center justify-end">
        <div onClick={handleClick}>
          {isOpen ? (
          <FontAwesomeIcon icon={faXmark} size="2x" />
            
          ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            
          )}
        </div>
        {isOpen && (
          <div className="flex justify-center h-fit">
            <div className="w-full flex flex-col justify-evenly">
              <div className="flex flex-col">
                {navItems.map((data, index) => (
                  <span key={index}>
                    <LinkButton title={data.title} url={data.url} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
