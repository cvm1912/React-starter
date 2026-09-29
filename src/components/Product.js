import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Loader from "./Loader";


const initialState = true;

function Product({products}) {

    const [productList, setProductList] = useState([])
    const { id, title, image, price } = productList[0] || {}
    console.log(id, title, "product list")

    async function fetchProducts(){
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            if(data?.length) setProductList(data)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    
    const [flag,setFlag]=useState(initialState);

    useEffect(()=>{
        setFlag(!flag)
        console.log("runs only once")
    },[])


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
               {
                productList.length > 0 ?
                productList.map(({id, title, price, image}) => (
                    <ProductItem key={id} title={title} price={price} image={image}/>
                )) :
                Array.from({length: 8}).map((_, i) => <Loader key={i} />)
                }
            </div>
        </div>
     );
}

export default Product;
