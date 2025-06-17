import React, { useState, useEffect } from "react";
import Star from "../../public/Star.svg";
import quote from "../../public/quote.svg";
import logo6 from "../../public/logo6.png";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function Reviews() {
  const reviews = [
    {
      name: "Floyd Miles",
      company: "eBay",
      quote:
        "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
    {
      name: "Jane Doe",
      company: "Google",
      quote:
        "Working with Synergy was a game-changer. Their design expertise brought our project to life in ways we never imagined.",
    },
    {
      name: "John Smith",
      company: "Amazon",
      quote:
        "The team at Synergy delivered a seamless user experience. Their attention to detail and creativity are unmatched.",
    },
  ];

  // State to track the current review index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Function to handle previous review
  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Current review based on index
  const currentReview = reviews[currentIndex];

  return (
    <div className="bg-black text-white border-2 border-blue-400 py-16 px-8">
      {/* Heading with Starburst Icon */}
      <div className="flex items-center mb-8 max-w-5xl mx-auto">
        <img src={Star} alt="Star" />
        <h2 className="text-4xl font-normal font-['Syne']">What They Say</h2>
      </div>

      {/* Review Content */}
      <div className="max-w-5xl mx-auto">
        <div className="flex relative w-full justify-between items-center">
          <div className="flex items-center gap-4 mb-4">
            <img src={logo6} alt="logo6" className="w-16 h-16 rounded-full" />
            <div>
              <p className="text-white font-semibold">{currentReview.name}</p>
              <p className="text-gray-400 text-sm">{currentReview.company}</p>
            </div>
          </div>
          <p className="text-lg w-[500px] text-white leading-relaxed  pl-8">
            <span className="absolute left-100 bottom-14 text-4xl">
              {" "}
              <img src={quote} alt="quote" className="" />
            </span>
            {currentReview.quote}
          </p>
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevReview}
            className="w-10 h-10 bg-white text-white rounded-full flex items-center justify-center hover:bg-gray-500 shadow-[0px_0px_20px_rgba(100,100,100,0.90)]"
          >
            <span className="text-black">
              <BsArrowLeft />
            </span>
          </button>
          <button
            onClick={nextReview}
            className="w-10 h-10 bg-white text-white rounded-full flex items-center justify-center hover:bg-gray-500 shadow-[0px_0px_20px_rgba(100,100,100,0.90)]"
          >
            <span className="text-black">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
