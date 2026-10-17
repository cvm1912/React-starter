import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (  
    <div className="w-screen h-screen bg-black flex">
      <Routes>
        <Route path="" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;