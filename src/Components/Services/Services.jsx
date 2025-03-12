import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../../Resume.docx'

import {themeContext} from '../../Context'
import { useContext } from 'react'

const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
        {/* leftside */}
        <div className="s-awesome">
            <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
            <span>Services</span>
            <spane>Lorem ipsum dolor sit cipit expedita sed asperiores enim quisquam libero nesciunt<br/>
             quos nobis corporis accusamus magni voluptatem excepturi dolorem.
            </spane>
            <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={
                {
                    background: '#abf1ff94'
                }
            }></div>
        </div>
        {/* rightside */}
        <div className="s-cards">
            {/* 1st card */}
            <div style={{
                left: '14rem'
            }}>
                <Card 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    details={"Adobe, Photoshop, Figma, Sketch"}
                />
            </div>
            {/* 2nd card */}
            <div style={{
                top: '12rem',
                left: '-4rem'
            }}>
                <Card 
                    emoji={Glasses}
                    heading={'Developer'}
                    details={"HTML, CSS, Bootstrap, JavaScript, ReactJS"}
                />
            </div>
            {/* 3rd card */}
            <div style={{
                left: '12rem',
                top: '19rem'
            }}>
                <Card 
                    emoji={Humble}
                    heading={'UI/UX'}
                    details={"Lorem, Lorem, Lorem, Lorem, Lorem"}
                />
            </div>
            <div className='blur s-blur2' style={{
                background: "var(--purple)"
            }}></div>
        </div>
    </div>    
  )
}

export default Services