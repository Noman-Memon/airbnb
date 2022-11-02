import React from 'react'
// import logo from '../image/katie-zaferes.png'
// import logo1 from '../image/star.png'

export default function Card(props) {
  // console.log(props)
  return (
    <div className="card">
      <img src={props.img} className="card--image" alt="" />
      <div className="card--stats">
        <img src="./image/star.png" className="card--star" alt="" />
        <span>5.0</span>
        <span className="gray">({props.rating}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  )
}
