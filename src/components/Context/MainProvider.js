import React from 'react'
import {createContext, useState } from 'react'
import { getAllProductsData, getAllUsers } from '../api'

export const MainContext = createContext({})

export const MainProvider = ({children}) => {
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [users, setUsers] =useState([]);



const getProducts = async () => {
    
    getAllProductsData(10).then((res) => {setAllItems(res.data); setLoading(false); }
    ).catch((err) => err)
    const total = getAllProductsData.headers.get('x-total-count')
    console.log(total)
}

const getAllUser = async () => {
    getAllUsers().then((res) => {setUsers(res.data); setLoading(false); }).catch((err) => err)
}




const handleAddDataIntoCart = (id) => {
  let itemId = Number(id)
  let cartTempItems = [...cartItems]
  if (cartTempItems.find(e => e.id === itemId)) {
      cartTempItems.forEach((e => {
          if (e.id === itemId) {
              e.count++
          }
      }))
  } else {
      cartTempItems.push({ id: (itemId), count: 1 })
  }
  setCartItems(cartTempItems)
}

  return (
    <div>
        <MainContext.Provider
        value= {{
           getProducts,
           allItems,
           loading,
           handleAddDataIntoCart,
           cartItems,
           getAllUser,
           users
        }}
        >
            {children}
        </MainContext.Provider>
    </div>
  )
}
