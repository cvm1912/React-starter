// create the context
// provide the state to context
// wrap context in root component
// consume the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({children}){
    const [loading,setLoading] = useState(true)
    const [listOfProducts, setListOfProduct] = useState([])
    const [productDetails, setProductDetails] = useState(null)
    const [cartItem, setCartItem] = useState([])

    const navigate = useNavigate()

    async function fetchProductList(){
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setListOfProduct(result.products);
        setLoading(false);
    }

    

    function handleRemoveFromCart(productId){
        const updatedCart = cartItem.filter(item => item.id !== productId);
        setCartItem(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    }

    function handleAddToCart(productDetals){
        console.log("productDetails", productDetals)
        let copyExistingItems  = [...cartItem];
        const findIndexofCorrentItem = copyExistingItems.findIndex(cartItem=>cartItem.id === productDetals.id);
        console.log(findIndexofCorrentItem)

       if(findIndexofCorrentItem === -1){
        copyExistingItems.push({
            ...productDetals,
            quantity:1,
            totalPrice : productDetals.price
        })
       }else{
         console.log('comming soon')

       }
       console.log(copyExistingItems,"cpyExistingCartItems");
       setCartItem(copyExistingItems);
       localStorage.setItem('cartItems', JSON.stringify(copyExistingItems));
       navigate('/cart')

    }

    useEffect(()=>{
        fetchProductList()
    },[])

    console.log(cartItem);

    return <ShoppingCartContext.Provider value={{listOfProducts, loading, setLoading, productDetails, setProductDetails, handleAddToCart, cartItem, handleRemoveFromCart}}>{children}</ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;