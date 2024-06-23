import Link from "next/link";
import React from "react";
import { LinkButton } from "./ui/buttons";
import Image from "next/image";

const Nav = () => {
  return (
    <section className="flex justify-between h-[10rem]">
      <a href="/" className="z-2 flex rounded-full relative w-16 h-16 border-2 border-primary-700">
        <Image
          alt="Profile"
          src="/profileNoBG.png"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-full"
          />

      </a>
      <div className="flex justify-evenly h-fit">
        <LinkButton title="Home" url="/" />
        <LinkButton title="About" url="/about" />
        <LinkButton title="Projects" url="/frontend" />
        <LinkButton title="Gallery" url="/gallery" />
        <Link className="btn btn-secondary font-light" href="mailto:vicwaet@hotmail.com">
          Direct Contact
        </Link>
      </div>
    </section>
  );
};

export default Nav;
