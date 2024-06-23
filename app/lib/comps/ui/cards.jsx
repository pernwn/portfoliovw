'use client'
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import React from 'react'

export const FieldCard = (props) => {
    const { title, sub, content, icon } = props;
  return (
    <Card>
      <CardHeader floated={false}>
        <span>{icon}</span>
        
      </CardHeader>
      <CardBody>
        <h3>{title}</h3>
        <p>{content}</p>
      </CardBody>
    </Card>
  )
}

