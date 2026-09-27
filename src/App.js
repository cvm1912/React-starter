import React from "react";

function App() {
  return (  
    <div className="grid grid-cols-12 gap-4 m-3 h-12">
      <h1 className="col-span-3 border bg-red-200 rounded-xl p-5 shadow">Grid A</h1>
      <h2 className="col-span-9 border bg-blue-200 min-h-full">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold tracking-tighter">Shivam Singh</h1>
        </div>
      </h2>
    </div>
  );
}

export default App;