import React, { useState } from 'react'
import './Contact.css'
import '../Services/Services.css'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import {themeContext} from '../../Context'
import { useContext } from 'react'

const Contact = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();
    
    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9ytt9wh', 'template_hckfqyi', form.current, {
        publicKey: '6mN5bdiYNkcHeS3jW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="s-awesome">
                <span style={{color: darkMode ? 'white' : ''}}>Get in Touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user-name' className='user' placeholder='Name' />
                <input type="email" name='user-email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for Contacting me..."}</span>
                <div
                    className='blur c-blur1'
                    style={{background: "var(--purple)"}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact