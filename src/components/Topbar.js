import React from "react";
import { useView } from "../context/viewContext";

export default function Topbar() {
  const { alignment, setAlignment } = useView();

  const toggleAlignment = () => {
    setAlignment(alignment === "horizontal" ? "vertical" : "horizontal");
  };

  return (
    <div className="fixed top-0 w-full z-10 bg-blue-500 p-4 flex justify-center items-center">
      <div className={`w-10/12 flex justify-between items-center`}>
        <div className="text-white font-bold text-xl">MindMap</div>
        <div
          className="text-white font-bold text-md cursor-pointer"
          onClick={toggleAlignment}
        >
          {alignment === "horizontal" ? "Horizontal" : "Vertical"}
        </div>
      </div>
    </div>
  );
}
