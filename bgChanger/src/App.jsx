import React, { useState } from "react";

export const App = () => {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 p-2 inset-x-0">
        <div
          onClick={(event) => setColor(event.target.innerHTML)}
          className="flex flex-wrap justify-center gap-3 shadow-lg rounded-lg bg-white px-4 py-2"
        >
          <button
            className="outline-none px-8 py-3 rounded-full text-white shadow-lg
          "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-white shadow-lg
          "
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-white shadow-lg
          "
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-white shadow-lg
          "
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-white shadow-lg
          "
            style={{ backgroundColor: "Gray" }}
          >
            Gray
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-black shadow-lg
          "
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-black shadow-lg
          "
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-white shadow-lg
          "
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-white shadow-lg
          "
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-white shadow-lg
          "
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>
          <button
            className="outline-none px-8 py-3 rounded-full text-white shadow-lg
          "
            style={{ backgroundColor: "Gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
