import React from "react";
import "tailwindcss/tailwind.css";

export default function CustomTooltip({ data }) {
  return (
    <div className="custom-tooltip border-4 border-slate-600 bg-slate-300 px-4 shadow-lg w-60 font-medium text-slate-600 z-50">
      <p className=" text-base">{data.info}</p>
      {/* Add more information as needed */}
    </div>
  );
}
