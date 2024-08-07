import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ activeItem, setActiveItem, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const handleTitleClick = () => {
    setActiveItem(null);
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-cyan-900 text-white h-24 flex justify-between items-center fixed z-50 top-0 left-0 right-0 shadow-lg">
      <div className="w-full flex items-center justify-between px-10">
        <h3
          className="sm:text-2xl text-lg font-bold uppercase cursor-pointer"
          onClick={handleTitleClick}
        >
          Start Framework
        </h3>
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => (
              <li
                key={item}
                className={`uppercase font-bold cursor-pointer p-2 rounded-lg ${
                  activeItem === item ? "bg-teal-500" : ""
                }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 right-0 bg-cyan-900 text-white ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ height: "calc(100vh - 20rem)" }}
      >
        <div className="flex justify-end p-4">
          <button className="text-3xl" onClick={() => setIsMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-center p-4">
          {navItems.map((item) => (
            <li
              key={item}
              className={`uppercase font-bold cursor-pointer p-2 rounded-lg ${
                activeItem === item ? "bg-teal-500" : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
