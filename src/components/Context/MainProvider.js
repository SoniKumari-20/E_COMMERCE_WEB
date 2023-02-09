import React from 'react'
import {createContext, useState } from 'react'
import { getAllProductsData, 
    getAllUsers,  
    getAllposts,
    getAllComments,
    getAllQuotes,
    getAllTodos } from '../api'

export const MainContext = createContext({})

export const MainProvider = ({children}) => {
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [users, setUsers] =useState([]);
    const [productLoading, setProductLoading] = useState(false)
    const [AllPosts, setAllPosts] = useState([]);
    const [AllComments, setAllComments] = useState([])
    const [AllTodos, setAllTodos] = useState([])
    const [AllQuotes, setAllQuotes] = useState({})
    



const getProducts = async (PageNo = 1) => {
    let skip = 20*PageNo - 20
    setProductLoading(true)
    getAllProductsData({skip}).then((res) => {
        setAllItems(res.data);  
        setProductLoading(false)}
    ).catch((err) => err)
}



const getAllUser = async ( ) => {
    setLoading(true)
    getAllUsers().then((res) => {setUsers(res.data); setLoading(false); }).catch((err) => err)
}

const getAllpost = async ( ) => {
    setLoading(true)
    getAllposts().then((res) => {setAllPosts(res.data); setLoading(false); }).catch((err) => err)
}

const getAllComment = async ( ) => {
    setLoading(true)
    getAllComments().then((res) => {setAllComments(res.data); setLoading(false); }).catch((err) => err)
}
const getAllTodo = async ( ) => {
    setLoading(true)
    getAllTodos().then((res) => {setAllTodos(res.data); setLoading(false); }).catch((err) => err)
}
const getAllQuote= async ( ) => {
    setLoading(true)
    getAllQuotes().then(({res}) => {console.log(res.data); setLoading(false); }).catch((err) => err)
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
           setAllItems,
           loading,
           handleAddDataIntoCart,
           cartItems,
           getAllUser,
           users,
           productLoading,
           getAllComment,
           AllComments,
           getAllpost,
           AllPosts,
           getAllQuote,
           AllQuotes,
           getAllTodo,
           AllTodos,
           

           
        }}
        >
            {children}
        </MainContext.Provider>
    </div>
  )
}
