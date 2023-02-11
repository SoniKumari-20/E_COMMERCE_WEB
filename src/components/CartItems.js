import './AboutPage.css'
import React, { useContext, useState, useEffect } from 'react'
import { MainContext } from './Context/MainProvider'
import { Link } from 'react-router-dom'

export const CartItems = () => {
  const { cartItems, allItems, setCartItems } = useContext(MainContext)
  const [totalPrice, setTotalPrice] = useState(0)
  // console.log(cartItems)
  const cartItemId = cartItems.map((e) => e.id)
  // console.log(cartItemId) 
  const AllCartProducts = allItems?.products?.filter(e => cartItemId.includes(e.id));
  // console.log(AllCartProducts)

  const handleRemove = (id) => {
    let removeData = cartItems.filter(e => e.id !== id)
    setCartItems(removeData)
  }


  const setQuantity = (id, data) => {
    let tempData = [...cartItems]
    console.log(tempData)
    tempData.forEach(e => {
      if (e.id === id) {
        e.count += data
      }
    })
    setCartItems(tempData)
  }

  const handleQuantity = () => {
    let amount = 0;
    AllCartProducts?.forEach(elm => {
      let Data = cartItems?.find(e => e.id === elm.id)
      amount += (Data.count * elm.price)
    })
    setTotalPrice(amount)
  }

  useEffect(() => {
    handleQuantity()
  }, [cartItems])




  return (
    <div >
      <h1><Link to={"/home"}><i className='fa fa-home '></i></Link>       CART ITEMS</h1>

      <div className='d-flex justify-content-space-evenly'>
        <div className='container'>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Products </th>
                <th scope="col">Products Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            {
              AllCartProducts?.map((e, id) =>
                <tbody>
                  <tr key={id} style={{ color: "white" }}>
                    <td>{id + 1}</td>
                    <td><img src={e.thumbnail} alt="" height={50} width={50}></img></td>
                    <td>{e.title}</td>
                    <td className='QuantityContainer'>
                      {cartItems?.find(elm => elm.id === e.id).count}
                      <button className='btn btn-primary' onClick={() => { setQuantity(e.id, +1) }} ><i className='fa fa-plus '></i></button>
                      <button className='btn btn-info' onClick={() => { setQuantity(e.id, -1) }}><i className='fa fa-minus '></i></button>
                    </td>
                    <td>{(e.price * cartItems.find(element => element.id === e.id).count).toFixed(2)}</td>
                    <td><button className='btn btn-danger' onClick={() => handleRemove(e.id)}>Remove</button></td>
                  </tr>
                </ tbody>
              )
            }
          </table>
        </div>
        {
          AllCartProducts?.length > 0 && <div>
            <div className='card' style={{ marginRight: "20px" }}>
              <div className='card-body'>
                <h4 className='card-title'>Total Price</h4>
                {
                  AllCartProducts.map((elm) => {
                    let { count } = cartItems.find(e => e.id === elm.id)
                    return <>
                      <span>{`${count} * ${elm.price} = ${(count * elm.price).toFixed(2)}`}</span> <br /></>
                  })}


                <h5>${totalPrice.toFixed(2)}</h5>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
