import './App.css';
import AddProduct from './Components/AddProduct';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Prod from './Components/prod';
import Cart from './Components/Cart';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import About from './Components/About';
import Footer from './Components/Footer';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import Head from './Components/Head';
import SearchBar from './Components/SearchBar';
import Page404 from './Components/Page404';
function App() {
  let [showNav, setShowNav] = useState(true);
  return (


    <div className="App container-fluid">
      <Suspense fallback={<div className='text-center mt-5'><div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></div>}>
        <BrowserRouter>
          {showNav &&
            <nav>
              <Navbar />
            </nav>
          }
          <div>
            <Routes>
              <Route path="" element={<Login navShow={setShowNav} />} />
              <Route path="/reg" element={<Register navShow={setShowNav} />} />
              <Route path="home" element={[<Head />, <About />, <Footer />]} />
              <Route path="products" element={<Products />} />
              <Route path="product/:id" element={<Prod />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="addtocart" element={<Cart />} />
              <Route path='search' element={<SearchBar />} />
              <Route path="*" element={<Page404 navShow={setShowNav} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </div>


  );
}

export default App;