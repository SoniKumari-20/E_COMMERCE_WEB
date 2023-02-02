import './App.css';
import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HttpClient } from './components/api/HttpClient';
import { MainContext } from './components/Context/MainProvider';
import { Home } from './components/Home';
import { About } from './components/About';
import { Header } from './components/Header';
import '../src/components/style.css'
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
        <Route path='/About' element={<About />}></Route>
        <Route path='home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
