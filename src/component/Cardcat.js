import React from 'react'

const Cardcat = (props) => {
    return (
        <div className='col-lg-4 col-md-4'>
            <div className='icon-bx-wraper sr-box center box1 m-b30'>
                <div className='icon-bx-lg radius bg-white m-b20'>
                    {props.icon}
                </div>
                <div className='font1'>
                    {props.title}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            

        </div>
    )
}

export default Cardcat