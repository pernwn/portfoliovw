"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React, { useEffect, useRef } from "react";
import styles from "@/app/style";
import Image from "next/image";
export const FieldCard = (props) => {
  const { title, content, icon } = props;
  return (
    <Card
      className={`flex flex-col glassmorph bg-transparent group objTransitions overflow-hidden shadow-none w-full`}
    >
      <CardHeader
        floated={false}
        className="text-primary flex gap-4 justify-center items-center shadow-none bg-transparent rounded-xl p-4 border border-primary-200"
      >
        <FontAwesomeIcon icon={icon} size="lg" className="w-8 h-8" />
        <h3>{title}</h3>
      </CardHeader>
      <CardBody>
        <p>{content}</p>
      </CardBody>
    </Card>
  );
};

export const DynamicColorH3 = ({ title, text, heading }) => {
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
    <div className={`text-center py-8 ${styles.paddingX}`}>
      <h4>{heading}</h4>
      <h3 ref={h3Ref} className="dynamic-color">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
};

export const PicCard = ({ title, content, pic }) => {
  return (
    <a href="#">
      <Card className="w-fit h-full flex justify-center items-center bg-secondary-100 p-8">
        <CardHeader className="w-full h-full">
          <Image
            alt="Mountain Stock"
            src={pic}
            width={400}
            height={400}
            objectFit="contain"
          />
        </CardHeader>
        <CardBody>
          <h4>{title}</h4>
          <p>{content}</p>
        </CardBody>
      </Card>
    </a>
  );
};
