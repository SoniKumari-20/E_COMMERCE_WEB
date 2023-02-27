import './App.css';
import { useEffect, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HttpClient } from './components/api/HttpClient';
import { MainContext } from './components/Context/MainProvider';
import { Home } from './components/Home';
import { About } from './components/About';
import { Header } from './components/Header';
import '../src/components/style.css'
import { CartItems } from './components/CartItems';
import Login from './components/Login';
import { Users } from './components/Users';
import { SingleUsers } from './components/SingleUsers';
import { Todos } from './components/Todos';
import { Comments } from './components/Comments';
import { Posts } from './components/Posts';
import { Quotes } from './components/Quotes';
import { Protected, Public } from './components/utils';
import { AddProducts } from './components/productsOperation/AddProducts';
import { UpdateProducts } from './components/productsOperation/UpdateProducts';
HttpClient.setDefaultAxios()
function App() {
  const { getProducts, getCategory,getCartProducts} = useContext(MainContext);
 



  useEffect(() => {
    getProducts()
    getCategory()
    getCartProducts()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/About/:id' element={<Protected><About /></Protected>}></Route>
        <Route path='/home' element={<Protected><Home /></Protected>}></Route>
        <Route path='/'  element={<Public> <Login /></Public>}></Route>
        <Route path='/cartItems'  element={<Protected> <CartItems /></Protected>}></Route>
        <Route path='/users' element={<Protected><Users /></Protected> }></Route>
        <Route path='/singleuser/:id' element={<Protected> <SingleUsers /></Protected>}></Route>
        <Route path='/todos' element={<Protected><Todos /></Protected> }></Route>
        <Route path='/comments' element={<Protected><Comments /></Protected> }></Route>
        <Route path='/posts' element={<Protected><Posts /></Protected> }></Route>
        <Route path='/quotes' element={<Protected> <Quotes /></Protected>}></Route>
        <Route path='/addProducts' element={<Protected> <AddProducts></AddProducts> </Protected>} ></Route>
        <Route path='/updateProducts/:id'  element={<Protected><UpdateProducts /> </Protected>}></Route>

        
      </Routes>
      
    
    </div>
  );
}

export default App;
