import React from 'react'
import { createContext, useState } from 'react'
import {
    getAllProductsData,
    getAllUsers,
    getAllposts,
    getAllComments,
    getAllQuotes,
    getAllTodos
} from '../api'

export const MainContext = createContext({})

export const MainProvider = ({ children }) => {
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [users, setUsers] = useState([]);
    const [productLoading, setProductLoading] = useState(false)
    const [AllPosts, setAllPosts] = useState([]);
    const [AllComments, setAllComments] = useState([])
    const [AllTodos, setAllTodos] = useState([])
    const [AllQuotes, setAllQuotes] = useState([])




    const getProducts = async (PageNo = 1) => {
        let skip = 20 * PageNo - 20
        setProductLoading(true)
        getAllProductsData({ skip }).then((res) => {
            setAllItems(res.data);
            setProductLoading(false)
        }
        ).catch((err) => err)
    }



    const getAllUser = async (PageNo = 1) => {
        let skip = 20 * PageNo - 20
        setLoading(true)
        getAllUsers({ skip }).then((res) => { setUsers(res.data); setLoading(false); }).catch((err) => err)
    }

    const getAllpost = async (PageNo = 1) => {
        let skip = Math.ceil(20 * PageNo - 20)
        setLoading(true)
        getAllposts({ skip }).then((res) => { setAllPosts(res.data); setLoading(false); }).catch((err) => err)
    }

    const getAllComment = async (PageNo = 1) => {
        let skip = Math.ceil(20 * PageNo - 20)
        setLoading(true)
        getAllComments({ skip }).then((res) => { setAllComments(res.data); setLoading(false); }).catch((err) => err)
    }
    const getAllTodo = async (PageNo = 1) => {
        let skip = Math.ceil(20 * PageNo - 20)
        setLoading(true)
        getAllTodos({ skip }).then((res) => { setAllTodos(res.data); setLoading(false); }).catch((err) => err)
    }
    const getAllQuote = async (PageNo = 1) => {
        let skip = Math.ceil(20 * PageNo - 20)
        setLoading(true)
        getAllQuotes({ skip }).then((res) => { setAllQuotes(res.data); setLoading(false); }).catch((err) => err)
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
                value={{
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
