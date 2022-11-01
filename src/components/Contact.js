import React from 'react'
import logo from '../image/phone-icon.png'
import logo1 from '../image/mail-icon.png'

export default function Contact(props) {
  /**
   * Challenge: Fix the code below to use the `props`
   * object values in place of the hardcoded values below
   */
  return (
    <div className="contact-card">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={logo} alt="" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={logo1} alt="" />
        <p>{props.email}</p>
      </div>
    </div>
  )
}

/* 
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/
