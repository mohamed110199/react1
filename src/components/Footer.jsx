import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-10 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full bg-cyan-900 text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <b>LOCATION</b>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <b>AROUND THE WEB</b>
        <div className="flex items-center justify-center gap-4">
          <span className="border border-white border-solid p-2 rounded-full">
            <FaFacebook />
          </span>
          <span className="border border-white border-solid p-2 rounded-full">
            <FaTwitter />
          </span>
          <span className="border border-white border-solid p-2 rounded-full">
            <FaLinkedinIn />
          </span>
          <span className="border border-white border-solid p-2 rounded-full">
            <FaGlobe />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <b>ABOUT FREELANCER</b>
        <p className="text-center">
          Freelance is a free to use, licensed Bootstrap theme created by Route
        </p>
      </div>
    </footer>
  );
};

export default Footer;
