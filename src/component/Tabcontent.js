import React from 'react'
import { FaSearch } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const Tabcontent = () => {
  return (
    <div className='lorem'>
      <div className='tab-content'>
        <div className='tabpanel'>
          <form>
            <div className='input-group'>
              <input type="text" className='form-control' placeholder='What Are You looking For ?' />
              <select className='form-control' id="">
                <option value="">Select Category</option>
                <option value="">Construction</option>
                <option value="">Corodinator</option>
                <option value="">Employer</option>
                <option value="">Financial Career</option>
                <option value="">Information Technology</option>
                <option value="">Marketing</option>
                <option value="">Quality check</option>
                <option value="">Real Estate</option>
                <option value="">Sales</option>
                <option value="">Supporting</option>
                <option value="">Teaching </option>
              </select>
              <div className='input-group-prepend'>
                <Button className=' site-button text-uppercase' > <FaSearch />Search</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p className ="m-t30">Find awesome places, bars, restaurants & activities.</p>
      </div>
    </div>

  )
}

export default Tabcontent;
