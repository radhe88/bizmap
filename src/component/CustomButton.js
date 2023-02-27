import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = (props) => {
  return (
    <Button className={props.active ? 'customBtn active' : "customBtn "}>{props.icon} {props.name}</Button>
  )
}

export default CustomButton
