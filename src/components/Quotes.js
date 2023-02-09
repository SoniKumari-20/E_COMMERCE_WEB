import React, {useContext, useEffect} from 'react'
import { MainContext } from './Context/MainProvider'

export const Quotes = () => {
    const [ AllQuotes, getAllQuote ] = useContext(MainContext);
    console.log(AllQuotes)
useEffect(() => {
    getAllQuote()

}, [])


  return (
    <div>Quotes</div>
  )
}
