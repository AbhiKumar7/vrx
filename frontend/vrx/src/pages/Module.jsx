import React from "react";
import { useNavigate } from "react-router-dom";

function Module() {
  const navigate = useNavigate();

  const handleSelect = (module) => {
    navigate(`/${module}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 gap-6">
        
        <div
          onClick={() => handleSelect("a")}
          className="w-40 h-40 bg-black text-white rounded-xl flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-800 transition"
        >
          A
        </div>

        <div
          onClick={() => handleSelect("b")}
          className="w-40 h-40 bg-blue-500 text-white rounded-xl flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-600 transition"
        >
          B
        </div>

        <div
          onClick={() => handleSelect("c")}
          className="w-40 h-40 bg-green-500 text-white rounded-xl flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-green-600 transition"
        >
          C
        </div>

        <div
          onClick={() => handleSelect("d")}
          className="w-40 h-40 bg-red-500 text-white rounded-xl flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-red-600 transition"
        >
          D
        </div>
      </div>
    </div>
  );
}

export default Module;