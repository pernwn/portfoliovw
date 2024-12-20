"use client";
import React from "react";
import styles from "@/app/style";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  List,
  ListItem,
} from "@material-tailwind/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton, SecondaryButton, SocialsButton } from "./ui/buttons";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { skillList } from "../data/skills";


const Hero = () => {
  return (
    <section
      className={`flex xl:flex-row flex-col xl:gap-8 xl:px-4 px-2 ${styles.marginBottom}`}
    >
      <div className="flex flex-col xl:w-1/2 h-fit space-y-8">
        <span>
          <h4>Hello, my name is</h4>
          <h1 className="leading-[100%] py-2">
            <span className="text-accent-600">Victoria</span> Waetthaisong
          </h1>
          <h4 className="capitalize">
            multimedia designer and frontend developer
          </h4>
        </span>

        <div className="flex gap-4 sm:w-fit sm:justify-between">
          <PrimaryButton title="Get to know me" />
          <SecondaryButton title="My resume" icon={faFileArrowDown} />
        </div>

        <div className="flex gap-4 justify-start pb-8">
          <SocialsButton
            icon={faLinkedinIn}
            url="https://www.linkedin.com/in/vicwjohansen/"
          />
          <SocialsButton icon={faGithub} url="https://github.com/pernwn"/>
          <SocialsButton icon={faEnvelope} url="mailto:vicwaet@hotmail.com"/>
        </div>
      </div>

      <div className="flex-auto xl:w-1/2 h-fit">
        <Card className="glassmorph bg-secondary-100 relative group ring-1 ring-secondary-100 hover:ring-accent objTransitions overflow-hidden">
          <CardHeader
            floated={false}
            className="bg-transparent shadow-none rounded-none"
          >
            <h4 className="text-xs">About me</h4>
            <h2 className="text-ss">
              <span className="text-accent">Skilled and Passionate</span>
              <br />
              Frontend Developer
            </h2>
          </CardHeader>
          <CardBody className="pointer-events-none relative">
            <div className="w-2/3 clear-right">
              {skillList.map((data, index) => (
                <List key={index}>
                  <ListItem>
                    <span className="place-self-start text-sm sm:text-ss pr-2 text-accent-600">
                      <FontAwesomeIcon icon={faCheckDouble} />
                    </span>
                    <span className="flex flex-col w-fit">
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                    </span>
                  </ListItem>
                </List>
              ))}
            </div>
          </CardBody>
          <CardFooter>
            <Image
              src="/profile.png"
              alt="Portrait"
              width={500}
              height={500}
              objectFit="contain"
              className="grayscale group-hover:grayscale-0 objTransitions -right-36 sm:-right-28 float-right bottom-0 absolute z-1"
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
