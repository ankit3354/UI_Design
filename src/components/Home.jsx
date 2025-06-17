import React from "react";
import logo_1 from "../../public/logo-1.jpg";
import logo_2 from "../../public/logo_2.png";
import wave from "../../public/wavefun.svg";
import flash from "../../public/flash.svg";
import susila from "../../public/susila.svg";

function Home() {
  return (
    <div className="min-h-[90vh] bg-black text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Syne'] font-extrabold text-center leading-tight">
        I AM A{" "}
        <span>
          <img
            src={logo_1}
            alt="logo-1"
            className="w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 inline rounded-full object-cover"
          />
        </span>
        <span>FREELANCE</span>
        <br />
        DESIGNER
        <span>
          <img
            src={logo_2}
            alt="logo_2"
            className="w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 inline rounded-full object-fill"
          />
        </span>
        FROM
        <br />
        <span>SAN FRANCISCO</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full max-w-4xl mt-8 md:mt-16 text-sm space-y-6 md:space-y-0">
        <div className="flex justify-center items-center gap-2 md:gap-6 space-x-4 md:space-x-8">
          <div className="flex items-center">
            <img src={flash} alt="flash" className="w-6 h-6 md:w-8 md:h-8" />
            <span className="font-medium text-base md:text-xl ml-2">
              doradesign
            </span>
          </div>
          <div>
            <img src={wave} alt="wave" className="w-16 md:w-24" />
          </div>
          <div>
            <img src={susila} alt="susila" className="w-16 md:w-24" />
          </div>
        </div>
        <p className="max-w-sm text-center md:text-left text-balance text-gray-400 text-xs md:text-sm">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </p>
      </div>
    </div>
  );
}

export default Home;
