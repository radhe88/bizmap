import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Cardone = (props) => {
  return (

    <>
      <Col sm className='item p-2'>
        <Card className='client-box'>
          <div className='client-detail'>
            <Card.Img className='client-img' variant="top" src={props.src} />
            <div className='client-info'>
            <h5 className='client-name'>Diamond Anderson</h5>
            <span>Founder, uihub inc.</span>
          </div>
          </div>
          <div className='client-info-bx'>
            <h5>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
        </Card>
      </Col>
    </>

  )
}

export default Cardone