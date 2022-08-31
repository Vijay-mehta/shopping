import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import React  from 'react';

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Header/>
      <Routes>
    
      <Route path='/' exact element={ <Home/>}/>
      <Route path='/cart' exact element={ <Cart/>}/>

      </Routes>

      </BrowserRouter>
    
 
    </div>
  );
}

export default App;
