import React from 'react'
// import logo from '../image/katie-zaferes.png'
// import logo1 from '../image/star.png'

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  }
  // console.log(props)
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
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
