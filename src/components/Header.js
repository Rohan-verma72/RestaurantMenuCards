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
      <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
        <img
          className="relative w-50 h-56 rounded-lg"
          src={images[currentImage]}
          alt="img"
        />
        <h1 className="absolute font-serif text-red-300">
         
        </h1>
      </div>
      <nav className="bg-gray-600 text-white p-2 overflow-auto">
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
