import React from "react";
import StarUnderTitle from "./StarUnderTitle";
import Image1 from "../assets/images/poert1.png";
import Image2 from "../assets/images/port2.png";
import Image3 from "../assets/images/port3.png";
import { FaPlus } from "react-icons/fa";

export const Portfolio = () => {
  const images = [Image1, Image2, Image3];

  return (
    <div
      className="text-cyan-950 w-full flex items-center justify-center py-24 px-4"
    >
      <div className="flex flex-col items-center w-full max-w-6xl gap-8 py-4">
        <h1 className="uppercase text-4xl font-bold text-center text-cyan-950">
          Portfolio Component
        </h1>
        <StarUnderTitle isDark />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg group relative"
            >
              <img
                className="w-full h-auto object-cover"
                src={image}
                alt={`Portfolio item ${index + 1}`}
              />
              <div className="absolute inset-0 bg-teal-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 flex items-center justify-center">
                <FaPlus className="text-white text-6xl md:text-7xl" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg group relative"
            >
              <img
                className="w-full h-auto object-cover"
                src={image}
                alt={`Portfolio item ${index + 1}`}
              />
              <div className="absolute inset-0 bg-teal-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 flex items-center justify-center">
                <FaPlus className="text-white text-6xl md:text-7xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
