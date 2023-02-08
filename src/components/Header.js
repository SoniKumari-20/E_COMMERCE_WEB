import React, { useContext } from 'react'
import { MainContext } from './Context/MainProvider'
import { Link } from 'react-router-dom'
import './style.css'
export const Header = () => {
  const {cartItems} = useContext(MainContext)
  console.log(cartItems)
  return (
    <div>
    <nav>
      <div className="logo">Brand</div>
      <input type="checkbox" id="click" />
      <label for="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <Link to='/home'><button className="btn btn-outline-light  ">Home</button></Link>
        <Link to='/users'><li className="btn btn-outline-light my-2 my-sm-0 a">Users</li></Link>
        <li className="btn btn-outline-light my-2 my-sm-0">Services</li>
        <li className="btn btn-outline-light my-2 my-sm-0">Gallery</li>
        <div className="btn btn-light my-2 my-sm-0"  >
        <div className='plus_product'>
                <h5>{cartItems?.length}</h5>
              </div>
              <i className="fa fa-shopping-cart" style={{fontSize:20}}></i>
        </div>
      </ul>
    </nav>

    </div>
  )
}
