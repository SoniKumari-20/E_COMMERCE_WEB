import React, { useContext } from 'react'
import { MainContext } from './Context/MainProvider'
import { Link, useNavigate  } from 'react-router-dom'
import './style.css'
export const Header = () => {
  const {cartItems} = useContext(MainContext);
  const navigate = useNavigate();

  
  // console.log(cartItems)
  const handleLogout = () =>{
    localStorage.getItem("Token")
    navigate("/")
  } 

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
        <li className="btn btn-outline-light my-2 my-sm-0">Todos</li>
        <li className="btn btn-outline-light my-2 my-sm-0">Quotes</li>
        <li className="btn btn-outline-light my-2 my-sm-0">Posts</li>
        <li className="btn btn-outline-light my-2 my-sm-0">Comments</li>
        <div className="btn btn-light my-2 my-sm-0"  >
        <div className='plus_product'>
                <h5>{cartItems?.length}</h5>
              </div>
              <i className="fa fa-shopping-cart" style={{fontSize:20}}></i>
        </div>
        <li className="btn btn-outline-light my-2 my-sm-0" onClick={handleLogout}>LogOut</li>
      </ul>
    </nav>

    </div>
  )
}
