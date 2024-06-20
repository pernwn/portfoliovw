import React from 'react'
import { Button } from "@headlessui/react";

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




