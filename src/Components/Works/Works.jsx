import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

import {themeContext} from '../../Context'
import { useContext } from 'react'

const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="works">
        {/* leftside */}
        <div className="s-awesome">
            <span style={{color: darkMode ? 'white' : ''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <spane>Lorem ipsum dolor sit cipit expedita sed asperiores enim quisquam libero nesciunt<br/>
             quos nobis corporis accusamus magni voluptatem excepturi dolorem.<br/>
             quos nobis corporis accusamus  excepturi dolorem<br/>
             ipsum dolor sit cipit expedita
            </spane>
            <button className='button s-button'>Hire me..</button>       
            <div className='blur w-blur' style={
                {
                    background: '#abf1ff94'
                }
            }></div>
        </div>
        {/* rightside */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* background circles */}
            <div className="w-backgroundCircle blueCircle">

            </div>
            <div className="w-backgroundCircle yellowCircle">

            </div>
        </div>

    </div>
  )
}

export default Works