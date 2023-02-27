import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { ImLocation } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";

const Boxcard = (props) => {
  return (
    <>  
     <Col sm className='rk-5'>
      <Card className='boxcard'>
        <Card.Img className='topbox' variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
          </Card.Text>
          <ul className='place-info'>
            <li className='place-location'>
              <i><ImLocation /></i>
              12/a, New
            </li>
            <li className='open'>
              <i><BsCheckLg /></i>
              Open Now
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Col>  
    </>
   
  )
}

export default Boxcard; 