import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import Floating from '../Floating/Floating'

import { themeContext } from "../../Context";

// import {motion} from 'framer-motion'

const Intro = () => {

  // const transition = {duration : 2, type: "spring"};

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? 'white' : ''}}>Hy! I Am</span>
                <span>Thulasi</span>
                <span>FrontEnd Developer with experience in web designing and develpment, producting the Quality work</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <a href="#github"><img src={Github} alt="" /></a>
                <a href="#linkedin"><img src={LinkedIn} alt="" /></a>
                <a href="#instagram"><img src={Instagram} alt="" /></a>   
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={Boy} alt=""/>
            {/* <motion.img
              initial= {{left: '-36%'}}
              whileInView= {{left: '-24%'}}
              transition={transition} */}
              <img src={Glassesimoji} alt=""/>
            <div style={{top: '-4%', left: '68%'}}>
               <Floating image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top: '18rem', left: '0rem'}}>
                <Floating image={Thumbup} txt1='Best_Design' txt2='Award'/>
            </div>
            {/* blur divs */}
            <div className="blur" style={
              {
                background: 'rgb(238 210 255)'
              }}></div>
            <div className="blur" style={
              {
                background: '#c1f5ff',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
              }
            }></div>
        </div>
    </div>
  )
}

export default Intro