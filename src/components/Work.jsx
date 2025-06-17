import React from "react";
import Star from "../../public/star.svg";
import logo3 from "../../public/logo_3.png";
import logo4 from "../../public/logo-4.png";
import logo5 from "../../public/logo-5.png";

function Works() {
  return (
    <div className="bg-black text-white py-16 px-8">
      {/* Heading with Starburst Icon and View All Link */}
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <div className="flex justify-center items-center">
          <img src={Star} alt="flash" />
          <h2 className="text-4xl font-normal font-['Syne']">Works</h2>
        </div>
        <a
          href="#"
          className="text-gray-400 text-sm hover:text-gray-300 underline underline-offset-2"
        >
          view all
        </a>
      </div>

      {/* Project Cards */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* Analysis Application Card */}
        <div className="flex flex-col p-8 md:flex-row bg-[#CBCBCB7A] rounded-xl overflow-hidden">
          <div className="md:w-1/2">
            <img src={logo3} alt="logo3" className="rounded-xl" />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Analysis Application</h3>
              <p className="text-white text-sm mt-2">
                With user-centered approach, the goals was to create an
                intuitive interface for enhanced financial intelligence.
              </p>
              <div className="flex space-x-2 mt-4">
                <span className="px-3 py-1 border-[1px] border-white text-white text-xs rounded-full">
                  MOBILE
                </span>
                <span className="px-3 py-1 border-[1px] border-white text-white text-xs rounded-full">
                  UI/UX
                </span>
                <span className="px-3 py-1 border-[1px] border-white text-white text-xs rounded-full">
                  WEB
                </span>
              </div>
            </div>
            <a
              href="#"
              className="mt-4 w-fit px-4 py-2 bg-white text-black rounded-full text-sm font-semibold inline-block"
            >
              View Case Study
            </a>
          </div>
        </div>

        {/* Fortknox Application Card */}
        <div className="flex flex-col p-8 md:flex-row bg-[#CBCBCB7A] rounded-xl overflow-hidden">
          <div className="md:w-1/2">
            <img src={logo4} alt="logo3" className="rounded-xl" />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Fortknox Application</h3>
              <p className="text-white  text-sm mt-2">
                With user-centered approach, the goals was to create an
                intuitive interface for enhanced financial intelligence.
              </p>
              <div className="flex space-x-2 mt-4">
                <span className="px-3 py-1 border-[1px] border-white text-white text-xs rounded-full">
                  MOBILE
                </span>
                <span className="px-3 py-1 border-[1px] border-white text-white text-xs rounded-full">
                  WEB
                </span>
              </div>
            </div>
            <a
              href="#"
              className="mt-4 w-fit px-4 py-2 bg-white text-black rounded-full text-sm font-semibold inline-block"
            >
              View Case Study
            </a>
          </div>
        </div>

        {/* Zencode Application Card */}
        <div className="flex flex-col p-8 md:flex-row bg-[#CBCBCB7A] rounded-xl overflow-hidden">
          <div className="md:w-1/2">
            <img src={logo5} alt="logo3" className="rounded-xl" />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Zencode Application</h3>
              <p className="text-white text-sm mt-2">
                With user-centered approach, the goals was to create an
                intuitive interface for enhanced financial intelligence.
              </p>
              <div className="flex space-x-2 mt-4">
                <span className="px-3 py-1 border-[1px] border-white text-white text-xs rounded-full">
                  APP
                </span>
                <span className="px-3 py-1 border-[1px] border-white text-white text-xs rounded-full">
                  WEB
                </span>
              </div>
            </div>
            <a
              href="#"
              className="mt-4 w-fit px-4 py-2 bg-white text-black rounded-full text-sm font-semibold inline-block"
            >
              View Case Study
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
