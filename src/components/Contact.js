import React from 'react'
// import logo from '../image/phone-icon.png'
// import logo1 from '../image/mail-icon.png'

export default function Contact(props) {
  /**
   * Challenge: Fix the code below to use the `props`
   * object values in place of the hardcoded values below
   */
  console.log(props)
  return (
    <div className="contact-card">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./image/phone-icon.png" alt="" />
        {/* if there is an data in phone property then show what is in it (props.phone) */}
        {props.phone && (
          // we can also use this props.phone as a condition based
          <p style={{ color: props.phone ? 'blue' : 'none' }}>{props.phone}</p>
        )}
      </div>
      <div className="info-group">
        <img src="./image/mail-icon.png" alt="" />
        <p>{props.email}</p>
      </div>
      <div>
        <p>
          Auther:{props.comments.author}, Body:{props.comments.body}, Title:
          {props.comments.title}
        </p>
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
