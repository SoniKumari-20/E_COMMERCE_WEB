import React from 'react'
import {createContext, useState } from 'react'
import { getAllProductsData } from '../api'

export const MainContext = createContext({})

export const MainProvider = ({children}) => {
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(true);



const getProducts = async () => {
    getAllProductsData().then((res) => {setAllItems(res.data); setLoading(false)}
    ).catch((err) => err)
}

  return (
    <div>
        <MainContext.Provider
        value= {{
           getProducts,
           allItems,
           loading
        }}
        >
            {children}
        </MainContext.Provider>
    </div>
  )
}
