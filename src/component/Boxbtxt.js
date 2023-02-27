import React from 'react'
import { BiSearch } from "react-icons/bi";
import { TfiGift, TfiRocket} from "react-icons/tfi"
import Cardcat from './Cardcat';




const Boxbtxt = () => {
  return (
    <div className='section-full bg-img-fix most-visited content-inner overlay-primary-dark'>
      <div className='container'>
        <div className='section-head text-white text-center'>
          <h2 className='box-title'>How It Works?</h2>
          <div className='dlab-separator bg-white'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </div>
        <div className='row d-flex'>
        <Cardcat icon={<BiSearch className='abcd'/>} title="Choose What To Do?"  />
        <Cardcat icon={<TfiGift className='abcd' />} title="Find What Your Want?" />
        <Cardcat icon={<TfiRocket className='abcd' />} title="Explore Amazing Places" />
        </div>
        

    </div>
    </div>
  )
}

export default Boxbtxt