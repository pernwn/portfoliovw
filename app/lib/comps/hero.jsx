"use client";
import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-row gap-2 ">
      <div className="flex-auto w-2/3">
        <h5>Hello, my name is</h5>
        <h1 className="leading-[100%] py-2">
          <span className="text-accent">Victoria</span> Waetthaisong
        </h1>
        <h5 className="capitalize">
          multimedia designer and frontend developer
        </h5>
      </div>
      <div className="flex-auto w-1/3">
        <Card className="glassmorph bg-secondary-800 relative">
          <CardHeader floated={false} className="bg-transparent">
            <h5 className="text-xs">About me</h5>
            <h2 className="text-ss text-textCol">
              Skilled and passionate <br />
              <span className="text-accent">Frontend Developer</span>
            </h2>
          </CardHeader>
          <CardBody>
            
            <Image src="/profile.png" alt="Portrait" layout="fill" objectFit="contain" objectPosition="right" className="grayscale hover:grayscale-0 objTransitions" />
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
