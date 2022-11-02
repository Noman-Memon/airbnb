import React from 'react'
// import logo from '../image/katie-zaferes.png'
// import logo1 from '../image/star.png'

export default function Card(props) {
  // console.log(props)
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">Sold Out</div>}
      <img src={props.img} className="card--image" alt="" />
      <div className="card--stats">
        <img src="./image/star.png" className="card--star" alt="" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewContent}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  )
}
