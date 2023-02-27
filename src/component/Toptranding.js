import React from 'react'
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Cardgroup from 'react-bootstrap/Cardgroup';
import { FaStar } from "react-icons/fa";
import { BsMoon, BsMap } from "react-icons/bs";
import Boxcard from './Boxcard';


const Toptranding = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className='section-full bg-gray content-inner about-us '>
      <div className='container-fluid'>
        <div className='section-head text-black text-center'>
          <h2 className='box-title'>Top Trending Places</h2>
          <div className='dlab-separator bg-primary'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </div>
        <div className='slick-slider'>
          <Slider {...settings}>
            <div>
              <Boxcard src="https://bizmap.dexignzone.com/react/demo/static/media/pic1.5c66f3f1.jpg" title="King Organic Shop" />
            </div>
            <div>
              <Boxcard src="https://bizmap.dexignzone.com/react/demo/static/media/pic2.42911ffc.jpg" title="King Organic Shop" />
            </div>
            <div>
              <Boxcard src="https://bizmap.dexignzone.com/react/demo/static/media/pic3.8b3fb00e.jpg" title="King Organic Shop" />
            </div>
            <div>
              <Boxcard src="https://bizmap.dexignzone.com/react/demo/static/media/pic4.720238df.jpg" title="King Organic Shop" />
            </div>
            <div>
              <Boxcard src="https://bizmap.dexignzone.com/react/demo/static/media/pic5.e54217a0.jpg" title="King Organic Shop" />
            </div>
            <div>
              <Boxcard src="https://bizmap.dexignzone.com/react/demo/static/media/pic6.ee849428.jpg" title="King Organic Shop" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Toptranding