import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartList() {
    const { cartItem, handleRemoveFromCart } = useContext(ShoppingCartContext);

    if (!cartItem.length) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-400 text-2xl">Your cart is empty 🛒</p>
        </div>
    );

    const subtotal = cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = subtotal * 0.1;
    const finalTotal = (subtotal - discount).toFixed(2);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* Cart Items */}
                <div className="flex-1 flex flex-col gap-4">
                    {cartItem.map((product, index) => (
                        <div key={index} className="bg-white rounded-2xl p-5 flex items-center gap-5 shadow-sm">
                            <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                                <img src={product.thumbnail} alt={product.title} className="w-full h-full object-contain rounded-xl" />
                            </div>
                            <div className="flex-1">
                                <h2 className="font-bold text-base">{product.title}</h2>
                                <p className="text-gray-400 text-sm capitalize">{product.category}</p>
                                <p className="text-gray-400 text-sm">Qty: {product.quantity}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                            <p className="text-green-600 font-bold text-lg">${product.price}</p>
                            <button onClick={() => handleRemoveFromCart(product.id)} className="text-red-400 text-sm hover:text-red-600 transition">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:w-96 w-full">
                    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 sticky top-6">
                        <h2 className="text-xl font-bold border-b pb-3">Order Summary</h2>

                        <div className="flex flex-col gap-3 text-sm text-gray-500">
                            <div className="flex justify-between">
                                <span>Subtotal ({cartItem.length} items)</span>
                                <span className="text-black font-medium">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount (10%)</span>
                                <span className="text-red-400 font-medium">- ${discount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="text-green-500 font-medium">Free</span>
                            </div>
                        </div>

                        <div className="border-t pt-4 flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${finalTotal}</span>
                        </div>

                        <button className="w-full bg-black text-white py-3 rounded-2xl font-bold hover:bg-gray-800 transition mt-2">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CartList;
