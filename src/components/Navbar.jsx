import React, { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex justify-between items-center h-20 px-4 sm:px-6 md:px-8 bg-black text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <rect x="8" y="4" width="6" height="28" fill="white" />
          <rect x="24" y="4" width="6" height="28" fill="white" />
          <circle cx="19" cy="8" r="4" fill="white" />
          <circle cx="36" cy="28" r="4" fill="white" />
        </svg>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Navigation Links - Hidden on Mobile, Visible on Larger Screens */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent px-4 md:px-0 py-4 md:py-0 space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 z-10`}
      >
        <a
          href="#"
          className="px-3 py-2 rounded-full bg-white text-black font-semibold text-sm md:text-base"
        >
          Home
        </a>
        <a
          href="#"
          className="px-3 py-2 font-semibold hover:text-gray-300 text-sm md:text-base"
        >
          About
        </a>
        <a
          href="#"
          className="px-3 py-2 font-semibold hover:text-gray-300 text-sm md:text-base"
        >
          Projects
        </a>
        <a
          href="#"
          className="px-3 py-2 font-semibold hover:text-gray-300 text-sm md:text-base"
        >
          Contact
        </a>
        {/* Hire Me Button - Inside Menu on Mobile */}
        <button className="px-3 py-2 border-[1px] border-white text-white rounded-full font-semibold text-sm md:text-base md:hidden">
          Hire Me
        </button>
      </div>

      {/* Hire Me Button - Visible on Larger Screens */}
      <button className="hidden md:block px-3 py-2 border-[1px] border-white text-white rounded-full font-semibold text-sm md:text-base">
        Hire Me
      </button>
    </nav>
  );
}

export default Navbar;
