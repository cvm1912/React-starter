import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trending from "./pages/Home/Trending";

function App() {
  return (  
    <div className="w-screen h-screen bg-black flex">
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
      </Routes>
    </div>
  );
}

export default App;