import React from "react";
import { FaStar } from "react-icons/fa";

const StarUnderTitle = ({ isDark }) => {
  return (
    <div className="flex items-center gap-4">
      <div className={`${isDark ? "bg-cyan-900" : "bg-white"} w-24 h-1 `}></div>
      <span className={`${isDark ? "text-cyan-950" : "text-white"}`}>
        <FaStar />
      </span>
      <div className={`${isDark ? "bg-cyan-900" : "bg-white"} w-24 h-1 `}></div>
    </div>
  );
};

export default StarUnderTitle;
