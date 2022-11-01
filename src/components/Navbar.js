import React from 'react'
import logo from '../image/airbnb-logo.png'
import '../style.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} alt="pic" />
      </nav>
    </div>
  )
}
