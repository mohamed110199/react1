import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Portfolio } from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";

const App = () => {
  const [activeItem, setActiveItem] = useState(null);

  const navItems = ["about", "portfolio", "contact"];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        navItems={navItems}
      />
      <main className="flex-1">
        {activeItem === "about" ? (
          <About />
        ) : activeItem === "portfolio" ? (
          <Portfolio />
        ) : activeItem === "contact" ? (
          <Contact />
        ) : (
          <Home />
        )}
      </main>
      <Footer />
      <SubFooter />
    </div>
  );
};

export default App;
