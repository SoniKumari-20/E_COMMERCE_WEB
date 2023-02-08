import './App.css';
import { useEffect, useContext } from 'react';
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
HttpClient.setDefaultAxios()
function App() {
  const { getProducts } = useContext(MainContext);



  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/About/:id' element={<About />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/'  element={<Login />}></Route>
        <Route path='/cartItems'  element={<CartItems />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/singleuser/:id' element={<SingleUsers />}></Route>
        
      </Routes>
      
    
    </div>
  );
}

export default App;
