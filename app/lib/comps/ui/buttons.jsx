'use client'
import React, { useState } from 'react'
import { Button } from "@headlessui/react";
import Link from 'next/link';

export const PrimaryButton = (props) => {
  const {title, url} = (props)
  return (
    <a href={url}>
      <Button className="btn btn-primary">{title}</Button>
    </a>
  )
}
export const SecondaryButton = (props) => {
  const { title, url } = props;
  return(
  <a href={url}>
    <Button className="btn btn-secondary bg- ">{title}</Button>
  </a>)
}

export const LinkButton = props => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, url } = props;
  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="btn-links"
      href={url}
    >
      <p
        className={`cursor-pointer ${
          isHovered
            ? "text-textCol relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:rounded before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-accent-600 before:bg-no-repeat before:hover:scale-x-100 before:origin-bottom-left before:transition-all before:ease-linear before:duration-300"
            : "text-textCol-700 before:scale-x-0"
        }`}
      >
        {title}
      </p>
    </Link>
  );
}




