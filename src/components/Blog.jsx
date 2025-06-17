import React from "react";
import Star from "../../public/star.svg";
import logo3 from "../../public/logo_3.png";
import logo4 from "../../public/logo-4.png";
import logo5 from "../../public/logo-5.png";

function Blog() {
  return (
    <div className="bg-black text-white py-16 px-8">
      {/* Heading with Starburst Icon and View All Link */}
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img src={Star} alt="Star" />
          <h2 className="text-4xl font-normal font-['Syne']">Blog</h2>
        </div>
        <a href="#" className="text-gray-400 text-sm hover:text-gray-300 underline-offset-2 underline">
          view all
        </a>
      </div>

      {/* Blog Post Cards */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* First Blog Post */}
        <div className="flex items-center">
          <div className="w-1/4">
            <img src={logo3} alt="logo3" className="rounded-xl" />
          </div>
          <div className="w-3/4 pl-6 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Nov 9, 2023</p>
              <h3 className="text-xl font-semibold mt-1">How UX works in web</h3>
              <div className="flex space-x-2 mt-2">
                <span className="px-3 py-1 bg-transparent border border-white text-white text-xs rounded-full">
                  UI
                </span>
                <span className="px-3 py-1 bg-transparent border border-white text-white text-xs rounded-full">
                  UX
                </span>
              </div>
            </div>
            <a
              href="#"
              className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold"
            >
              Read
            </a>
          </div>
        </div>

        {/* Second Blog Post */}
        <div className="flex items-center">
          <div className="w-1/4">
             <img src={logo4} alt="logo4" className="rounded-xl" />
          </div>
          <div className="w-3/4 pl-6 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Aug 18, 2023</p>
              <h3 className="text-xl font-semibold mt-1">
                Case study - Analysis Application.
              </h3>
              <div className="flex space-x-2 mt-2">
                <span className="px-3 py-1 bg-transparent border border-white text-white text-xs rounded-full">
                  DESIGN
                </span>
                <span className="px-3 py-1 bg-transparent border border-white text-white text-xs rounded-full">
                  PRINT
                </span>
              </div>
            </div>
            <a
              href="#"
              className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold"
            >
              Read
            </a>
          </div>
        </div>

        {/* Third Blog Post */}
        <div className="flex items-center">
          <div className="w-1/4">
           <img src={logo5} alt="logo5" className="rounded-xl" />
          </div>
          <div className="w-3/4 pl-6 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Feb 16, 2023</p>
              <h3 className="text-xl font-semibold mt-1">
                3 ways to develop your skill
              </h3>
              <div className="flex space-x-2 mt-2">
                <span className="px-3 py-1 bg-transparent border border-white text-white text-xs rounded-full">
                  FIGMA
                </span>
                <span className="px-3 py-1 bg-transparent border border-white text-white text-xs rounded-full">
                  WEB
                </span>
              </div>
            </div>
            <a
              href="#"
              className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold"
            >
              Read
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
