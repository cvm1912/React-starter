import React, { useContext } from "react";

import { ShoppingCartContext } from "../../context";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
function ProductList() {

    const {listOfProducts, loading, setProductDetails} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    function handlenavtoProductDetails(product){
        setProductDetails(product);
        navigate(`/product/${product.id}`)
    }

    if(loading) return <Loading />;
    return ( 
        <>
          <div className="p-5 text-center">
            <h1 className="text-3xl font-bold tracking-tighter">Our Products</h1>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 m-5">
            {listOfProducts && listOfProducts.map(product => (
              <div key={product.id} className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col">
                <div className="h-52 bg-gray-100 rounded-t-lg flex items-center justify-center p-3">
                  <img src={product.thumbnail} alt={product.title} className="h-full object-contain" />
                </div>
                <div className="p-4  gap-1 bg-red-50">
                  <div className="flex justify-between mb-5">
                  <h2 className="font-bold text-sm">{product.title}</h2>
                  <p className="text-green-600 font-semibold">${product.price}</p>
                  </div>
                  <button 
                  onClick={() => handlenavtoProductDetails(product)}

                  className="bg-black  py-2 w-full rounded-2xl text-white font-bold">View Details</button>
                </div>

                
              </div>
            ))}
          </div>
        </>
       
     );
}

export default ProductList;