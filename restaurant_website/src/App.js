import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Home, About, Navbar, Products, Contact, Footer} from './components';


function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route exact path='/about' element={ <About/>} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contact' element={ <Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;