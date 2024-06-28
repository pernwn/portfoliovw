"use client";

import React, { useEffect, useRef } from "react";
import { FieldCard } from "./ui/cards";
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { SocialsButton } from "./ui/buttons";
import styles from "@/app/style";

import { skillIcons } from "../data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const DynamicColorH3 = ({ title, text }) => {
  const h3Ref = useRef(null);

  useEffect(() => {
    const h3 = h3Ref.current;
    if (h3) {
      const words = h3.innerText.split(" ");
      if (words.length > 1) {
        const lastWords = words.slice(-2).join(" ");
        const firstPart = words.slice(0, -2).join(" ");

        h3.innerHTML = `${firstPart} <span class="text-accent">${lastWords}</span>`;
      }
    }
  }, [title]);

  return (
    <div>
      <h3 ref={h3Ref} className="dynamic-color">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="space-y-20">
      <div className="flex gap-12 sm:flex-col sm:gap-8">
        <FieldCard
          icon={faCode}
          title="Web Development"
          content="Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet venenatis ut. Mauris senectus ut porttitor massa convallis arcu in lacus sit."
        />
        <FieldCard
          icon={faFigma}
          title="User Interface"
          content="Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet venenatis ut. Mauris senectus ut porttitor massa convallis arcu in lacus sit."
        />
        <FieldCard
          icon={faUser}
          title="User Experience"
          content="Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet venenatis ut. Mauris senectus ut porttitor massa convallis arcu in lacus sit."
        />
      </div>
      <div className={`${styles.flexCenter} flex-col`}>
        <span>
          <DynamicColorH3
            title="My professional toolbox"
            text="Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet venenatis ut."
          />
        </span>

        <div className="grid grid-rows-2 grid-cols-5 xl:grid-cols-4 xl:w-2/3 gap-4 items-center justify-items-center w-full h-full">
          {skillIcons.map((data, index) => (
            <div
              key={index}
              className="bg-primary-200 text-accent flex justify-center items-center rounded-md w-12 h-12 xl:w-16 xl:h-16 p-2"
            >
              {typeof data.icon === "string" ? (
                <Image
                  src={data.icon}
                  alt={`${data.title} logo`}
                  width={24}
                  height={24}
                />
              ) : (
                <FontAwesomeIcon icon={data.icon} size="xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
