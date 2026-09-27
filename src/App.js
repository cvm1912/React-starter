import React from "react";

function App() {
  return (  
    <div className="min-h-screen flex items-center bg-gray-50 justify-center p-20">
      <form className="p-8 bg-white rounded-xl shadow-2xl w-[40%]">
        <h1 className="text-xl font-bold tracking-tighter text-center mb-5">Contact us</h1>
        <div className="grid grid-cols-12 gap-4 p-2">
          <div className="col-span-8">
            <input type="text" placeholder="First Name" className="w-full p-2 border border-blue-800 rounded-md"/>
          </div>
          <div className="col-span-4">
            <input type="text" placeholder="Last Name" className="w-full p-2 border border-blue-800 rounded-md"/>
          </div>
        </div>
        
        <div className="p-2">
          <input type="email" placeholder="Email" className="w-full p-2 border border-blue-800 rounded-md"/>
        </div>

        <div className="p-2">
          <textarea placeholder="Message" className="w-full p-2 border border-blue-800 rounded-md h-32"></textarea>
        </div>

        <div className="p-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-gray-200"/>
            I agree to the terms and conditions
          </label>
        </div>

        <div className="p-2">
          <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 font-medium">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
