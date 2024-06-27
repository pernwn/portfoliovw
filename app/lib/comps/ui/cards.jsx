"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";

export const FieldCard = (props) => {
  const { title, content, icon } = props;
  return (
    <Card className="flex flex-col p-2 glassmorph bg-transparent relative group objTransitions overflow-hidden">
      <CardHeader
        floated={false}
        className="text-primary flex align-center gap-4 justify-center shadow-none bg-transparent rounded-xl p-4 border border-primary-200 w-18 h-18"
      >
        <FontAwesomeIcon icon={icon} size="xl" />
        <h3>{title}</h3>
      </CardHeader>
      <CardBody>
        <p>{content}</p>
      </CardBody>
    </Card>
  );
};

export const HeadingComp = (props) => {
  const { title, content } = props;

  return (
    <span>
      <h3 className="">
        {title}
        My professional <span className="text-accent">toolbox</span>
      </h3>
      <p>
        {content}
        Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum amet
        venenatis ut.
      </p>
    </span>
  );
};
