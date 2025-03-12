import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className="experience">
        <div className="achievement">
            <div className="circle">8+</div>
            <span className='txt1'>Years</span>
            <span className='txt2'>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">20+</div>
            <span className='txt1'>Completed</span>
            <span className='txt2'>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span className='txt1'>Companies</span>
            <span className='txt2'>Work</span>
        </div>
    </div>
  )
}

export default Experience