import React, { useState } from "react";
import ProductItem from "./ProductItem";


const initialState = true;

function Product({products}) {

    const [flag,setFlag]=useState(initialState);


    function handleToggleText(){
        setFlag(!flag)
    }

    return ( 
        <div className="text-start">
            <div className="flex items-center justify-between px-10 py-8 border shadow-xl ">
                  <h1 className="text-2xl font-bold tracking-tight ">
                {
                    flag ? "mur mur mur murjhaye aye haye hayeee":"bhak teri maa ka bhoshra"
                }
            </h1>

             <button onClick={handleToggleText} className="bg-blue-500 text-white font-bold px-4 py-2 rounded-xl tracking-tight shadow-xl hover:bg-blue-400 hover:text-gray-200">Toggle</button>
            </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-10">
               {products.map(({id, title, price, image}) => (
                    <ProductItem key={id} title={title} price={price} image={image}/>
                ))}
            </div>
        </div>
     );
}

export default Product;
