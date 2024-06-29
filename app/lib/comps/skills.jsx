"use client";

import React, { useEffect, useRef } from "react";
import { DynamicColorH3, FieldCard } from "./ui/cards";
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import styles from "@/app/style";

import { skillIcons } from "../data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const IconSize = 38;
const Skills = () => {
  return (
    <section className="space-y-8 w-full">
      <div className="flex gap-12 sm:flex-col sm:gap-8 justify-center">
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
            heading="Tools"
            title="A developers toolkit"
            text="Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet venenatis ut."
          />
        </span>

        <div className="flex gap-2 sm:overflow-x-auto sm:gap-4 xl:w-3/4 w-[125%] px-14 xl:grid xl:grid-rows-2 xl:grid-cols-5 xl:gap-8 items-center justify-items-center h-full">
          {skillIcons.map((data, index) => (
            <div
              key={index}
              className="bg-primary-100 group hover:bg-secondary-100 objTransitions rounded-md flex flex-wrap flex-col justify-center gap-2 items-center p-4 w-20 h-20 xl:p-2 xl:w-32 xl:h-32"
            >
              <div className="text-accent group-hover:text-accent-900">
                {React.isValidElement(data.icon) ? (
                  React.cloneElement(data.icon, { width: IconSize, height: IconSize })
                ) : (
                  <FontAwesomeIcon
                    icon={data.icon}
                    style={{ width: IconSize, height: IconSize }}
                  />
                )}
              </div>
              <p className="p-med text-center group-hover:text-accent-900 xl:flex hidden">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
