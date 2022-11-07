import React from 'react'
// import logo from '../image/katie-zaferes.png'
// import logo1 from '../image/star.png'

export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE'
  }
  // console.log(props)
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card--image" alt="" />
      <div className="card--stats">
        <img src="./image/star.png" className="card--star" alt="" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From {props.item.price}</span> / person
      </p>
    </div>
  )
}
