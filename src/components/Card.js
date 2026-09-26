import React from "react";

function Card() {
    return ( 
        <div className="p-8 bg-white shadow-lg rounded-2xl max-w-sm text-center">
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide">Pro Plan</h2>
            <p className="tracking-tight text-gray-600 leading-relaxed mb-4">Idea for developer's and startup's who want power and performance</p>
            <div className="text-4xl font-bold text-blue-900 mb-4"> ₹999<span className="text-sm  text-gray-500">/mo</span></div>

            <ul className="text-left text-gray-700 space-y-2 mb-6">
                <li>✅ Unlimited Projects</li>
                <li>✅ 100 GB Storage</li>
                <li>✅ Priority Support</li>
            </ul>

            <button className="p-4 bg-blue-600 text-white font-bold px-6 rounded-xl hover:text-green-200 hover:shadow-xl hover:bg-blue-700 transition:duration:300">Get Started</button>
        </div>
     );
}

export default Card;