import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from "./pages/ProductList/index";
import ProductDetails from "./components/ProductDetails/index";
import CartList from "./pages/CartList/index";


function App() {
  return (  
    <div className="App">
      <nav className="flex items-center justify-between bg-red-200 p-5 shadow-md">
         <h1 className="text-2xl font-bold tracking-tighter">Products</h1>
         <div className="flex gap-6 items-center text-xl">
           <Link to="/">Home</Link>
           <Link to="/product">Product</Link>
           <Link to="/product/:id">Product details</Link>
           <Link to="/cart">Cart</Link>

         </div>
      </nav>

      <Routes>
        <Route path="/product" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartList />} />

      </Routes>
    </div>
  );
}

export default App;