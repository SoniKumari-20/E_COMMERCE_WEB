import React from 'react'
import './style.css'
export const Header = () => {
  return (
    <div>
    <nav>
      <div className="logo">Brand</div>
      <input type="checkbox" id="click" />
      <label for="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li  ><button className="btn btn-outline-light my-2 my-sm-0">Home</button></li>
        <li className="btn btn-outline-light my-2 my-sm-0">About</li>
        <li className="btn btn-outline-light my-2 my-sm-0">Services</li>
        <li className="btn btn-outline-light my-2 my-sm-0">Gallery</li>
        <li className="btn btn-outline-light my-2 my-sm-0">Feedback</li>
      </ul>
    </nav>

    </div>
  )
}
