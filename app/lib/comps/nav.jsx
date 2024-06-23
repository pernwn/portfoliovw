import Link from "next/link";
import React from "react";
import { LinkButton } from "./ui/buttons";
import Image from "next/image";
import styles from "@/app/style";

const Nav = () => {
  return (
    <section className={`${styles.padding} inline-grid grid-cols-2 bg-darkShade-800 bg-opacity-60 glassmorph w-full h-14 fixed z-50`}>
      <a
        href="/"
        className="flex rounded-full relative w-16 h-16 border-2 border-primary-700"
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
      <div className="flex justify-between w-full h-fit">
        <LinkButton title="Home" url="/" />
        <LinkButton title="About" url="/about" />
        <LinkButton title="Projects" url="/frontend" />
        <LinkButton title="Gallery" url="/gallery" />
        <Link
          className="btn btn-secondary font-light"
          href="mailto:vicwaet@hotmail.com"
        >
          Direct Contact
        </Link>
      </div>
    </section>
  );
};

export default Nav;
