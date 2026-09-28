import React from "react";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  return (  
    <div className="App">
       <Product products={products}/>
    </div>
  );
}

export default App;