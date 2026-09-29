import React from "react";
import Product from "./components/Product";
import products from "./products.json";
import ContextTextComponent from "./components/Context-Components/Text";
import ContextButtonComponent from "./components/Context-Components/Button";

function App() {
  return (  
    <div className="App">
       {/* <Product products={products}/> */}
       <ContextTextComponent/>
       <ContextButtonComponent/>
    </div>
  );
}

export default App;