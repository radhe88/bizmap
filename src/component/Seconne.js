import React from 'react'
import Slider from "react-slick";
import Sectwo from './Sectwo';

const Seconne = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (

    <div className='section-full bg-white content-inner about-us '>
      <div className='container-fluid'>
        <div className='section-head text-black text-center'>
          <h2 className='box-title'>From The Blog</h2>
          <div className='dlab-separator bg-primary'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </div>
        <div className='slick-slider2'>
        <Slider {...settings}>
        <div>
            <h3> <Sectwo src="https://bizmap.dexignzone.com/react/demo/static/media/pic1.36c3b65c.jpg" title="Directory Will Be A Thing Of The Past."/> </h3>
          </div>
          <div>
            <h3> <Sectwo src="https://bizmap.dexignzone.com/react/demo/static/media/pic2.a50dbb62.jpg" title="7 Moments To Remember From Directory."/></h3>
          </div>
          <div>
            <h3> <Sectwo src="https://bizmap.dexignzone.com/react/demo/static/media/pic3.3c3c4211.jpg" title="Ten Things Your Competitors Know About." /></h3>
          </div>
           <div>
            <h3> <Sectwo src="https://bizmap.dexignzone.com/react/demo/static/media/pic1.36c3b65c.jpg" title="Directory Will Be A Thing Of The Past." /> </h3>
          </div>
          <div>
            <h3> <Sectwo src="https://bizmap.dexignzone.com/react/demo/static/media/pic2.a50dbb62.jpg" title="7 Moments To Remember From Directory."/></h3>
          </div>
          <div>
            <h3> <Sectwo src="https://bizmap.dexignzone.com/react/demo/static/media/pic3.3c3c4211.jpg" title="Ten Things Your Competitors Know About." /></h3>
          </div>
         
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default Seconne