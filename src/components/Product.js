import React from "react";
import ProductItem from "./ProductItem";

function Product() {
    return ( 
        <div className="text-start">
            <h1 className="text-2xl font-bold tracking-tight p-5">Product lists</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
     );
}

export default Product;
