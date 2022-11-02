import React from 'react'
// import logo from '../image/katie-zaferes.png'
// import logo1 from '../image/star.png'

export default function Card() {
  return (
    <div className="card">
      <img src="./image/katie-zaferes.png" className="card--image" alt="" />
      <div className="card--stats">
        <img src="./image/star.png" className="card--star" alt="" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  )
}
