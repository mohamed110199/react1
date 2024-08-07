import React from "react";
import StarUnderTitle from "./StarUnderTitle";
import HomeImage from "../assets/images/avataaars.svg";

const Home = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 96px)" }}
      className="bg-teal-500 text-white w-full flex items-center justify-center pt-24"
    >
      <div className="flex gap-4 items-center justify-center flex-col w-3/4 py-4">
        <img className="w-1/4 h-auto" src={HomeImage} alt="HomeImage" />
        <h1 className="uppercase text-4xl font-bold text-center">
          Start Framework
        </h1>
        <StarUnderTitle />
        <div className="flex items-start justify-center text-center">
          Graphic Artist - Web Designer - Illustrator
        </div>
      </div>
    </div>
  );
};

export default Home;
