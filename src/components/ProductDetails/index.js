import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import Loading from "../Loading";

function ProductDetails() {
    const { loading, productDetails, handleAddToCart } = useContext(ShoppingCartContext);


    
    if (loading || !productDetails) return <Loading />;
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
            <div className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow-lg p-8 w-full min-h-screen">
                <div className="flex-1 bg-gray-100 rounded-xl flex items-center justify-center p-6">
                    <img src={productDetails.thumbnail} alt={productDetails.title} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 flex flex-col gap-4 justify-center">
                    <span className="text-xs uppercase tracking-widest text-gray-400">{productDetails.category}</span>
                    <h1 className="text-3xl font-bold">{productDetails.title}</h1>
                    <p className="text-gray-500 text-sm leading-relaxed">{productDetails.description}</p>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-lg">⭐</span>
                        <span className="font-semibold">{productDetails.rating}</span>
                        <span className="text-gray-400 text-sm">/ 5</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-3xl font-bold text-green-600">${productDetails.price}</p>
                        <span className="text-sm text-gray-400 line-through">${(productDetails.price * 1.2).toFixed(2)}</span>
                    </div>
                    <button 
                    onClick={()=>handleAddToCart(productDetails)}
                    className="mt-4 bg-black text-white py-3 rounded-2xl font-bold hover:bg-gray-800 transition">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
