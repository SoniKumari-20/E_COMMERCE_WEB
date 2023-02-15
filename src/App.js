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
import { Todos } from './components/Todos';
import { Comments } from './components/Comments';
import { Posts } from './components/Posts';
import { Quotes } from './components/Quotes';
HttpClient.setDefaultAxios()
function App() {
  const { getProducts, getCategory} = useContext(MainContext);



  useEffect(() => {
    getProducts()
    getCategory()
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
        <Route path='/todos' element={<Todos />}></Route>
        <Route path='/comments' element={<Comments />}></Route>
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='/quotes' element={<Quotes />}></Route>

        
      </Routes>
      
    
    </div>
  );
}

export default App;
