"use client";
import React, { useState } from "react";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PrimaryButton = (props) => {
  const { title, url, icon } = props;
  return (
    <a href={url}>
      <Button>
        <span className="btn btn-primary p-med">
          {title} <FontAwesomeIcon icon={icon} />
        </span>
      </Button>
    </a>
  );
};
export const SecondaryButton = (props) => {
  const { title, url, icon } = props;
  return (
    <a href={url}>
      <Button>
        <span className="btn btn-secondary p-med">
          {title} <FontAwesomeIcon icon={icon} fixedWidth/>
        </span>
      </Button>
    </a>
  );
};

export const LinkButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, url } = props;

   /**
    const handleClick = () => {
      if (onClick) {
        onClick(); // Kald onClick prop hvis det er defineret
      }
    };
   */

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="btn-links"
      href={url}
      target="_blank"
    >
      <p 
        className={`cursor-pointer text-ss md:text-xs sm:font-light sm:text-textCol-800 sm:text-sm sm:relative sm: sm:after:block sm:after:h-[2px] sm:after:rounded sm:after:right-0 sm:after:bg-gradient-to-l sm:after:from-accent-600 sm:after:bg-no-repeat sm:after:scale-x-100 sm:before:origin-bottom-right sm:text-right ${
          isHovered
            ? "text-textCol-700 p-med relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:rounded before:-bottom-2 before:left-0 before:bg-gradient-to-r before:from-accent-600 before:bg-no-repeat before:hover:scale-x-100 before:origin-bottom-left before:transition-all before:ease-linear before:duration-300"
            : "text-textCol-800 p-med before:scale-x-0"
        }`}
      >
        {title}
      </p>
    </Link>
  );
};

export const SocialsButton = (props) => {
  const { url, icon } = props;

  return (
    <a href={url}>
      <Button className="bg-secondary-100 p-2 my-2 rounded-md w-12 h-12 border border-transparent hover:bg-secondary-100 hover:border-accent group objTransitions"><FontAwesomeIcon icon={icon} size="xl" className="text-accent group-hover:text-accent-900"/></Button>
    </a>
  );
};
