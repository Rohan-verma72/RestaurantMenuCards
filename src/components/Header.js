import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://static.vecteezy.com/system/resources/previews/010/377/416/large_2x/close-up-of-hot-latte-coffee-in-the-cafe-banner-for-website-header-design-with-copy-space-for-text-free-photo.jpg",
    "https://th.bing.com/th/id/OIP.eJNtPXFAwMxvMnCb7qN4-gFNC7?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.0bd584e40b0f27e9fea7d3a96d875401?rik=J7o5PtctJ1581Q&riu=http%3a%2f%2ffmcaffe.com%2fwp-content%2fuploads%2f2017%2f07%2fcoffee-header-1024x575.jpg&ehk=dYzYJXKpHm67%2bnbAAAQ%2fgt3kOgT6l00XzYxbsBBaLfA%3d&risl=&pid=ImgRaw&r=0",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>

      <div className="bg-gray-900 text-white p-6 flex flex-col md:flex-row justify-between items-center relative overflow-hidden h-72 lg:h-96">
        {/* Background Rotating Images with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            src={images[currentImage]}
            alt="background-scene"
            style={{ filter: "brightness(0.3) blur(2px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 w-full max-w-7xl mx-auto px-4 justify-center">
          <div className="flex-shrink-0 animate-fade-in-down">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="T-Talk Cafe Logo"
              className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-amber-500/50 shadow-2xl hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold font-serif text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wider">
              T-Talk Cafe
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light mt-2 italic">
              "Every cup has a story, every bite feels like home."
            </p>
            <div className="mt-4 flex gap-2 justify-center md:justify-start">
              <span className="bg-amber-600/80 text-white text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm">Premium Quality</span>
              <span className="bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm">Open 24/7</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-rose-900 sticky top-0 z-50 text-white shadow-lg backdrop-blur-md bg-opacity-95">
        <ul className="flex space-x-4">
          <li className="rounded">
            <NavLink
              to="/Chai"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Chai
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bites"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Bites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Pizza"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Pizza
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Burger"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Burger
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ColdCoffee"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              ColdCoffee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/HotCoffee"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              HotCoffee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Milkshakes"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Milkshakes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Maggie"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Maggie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SandWich"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              SandWich
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Pasta"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Pasta
            </NavLink>
          </li>
          {/* Add more NavLink items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
