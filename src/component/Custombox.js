import React from 'react'
// import { BsFillCartDashFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';



const Custombox = (props) => {
  return (
    <div className='category-bx d-flex' >
      <div className='category'>
        <Button className={"custombxCate"}>{props.icon} {props.name}</Button>
      </div>

    </div>
  )
}
  
export default Custombox;