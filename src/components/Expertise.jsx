import React from "react";
import Star from "../../public/star.svg";

function Expertise() {
  return (
    <div className="bg-black text-white py-16 px-8">
      {/* Heading with Starburst Icon */}
      <div className="flex items-center mb-8 max-w-6xl mx-auto">
        <img src={Star} alt="flash" />
        <h2 className="text-4xl font-normal font-['Syne']">Expertise</h2>
      </div>

      {/* 2x2 Grid of Expertise Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Branding */}
        <div>
          <h3 className="text-lg font-bold flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Branding
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            I create efficient, adaptable, and engaging websites. No predefined
            patterns. No sluggish, complex code. Webflow forms the foundation of
            my web development approach. I employ it to provide safe, top-notch
            bespoke websites.
          </p>
        </div>

        {/* UI Design */}
        <div>
          <h3 className="text-lg font-bold flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            UI Design
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            I create efficient, adaptable, and engaging websites. No predefined
            patterns. No sluggish, complex code. Webflow forms the foundation of
            my web development approach. I employ it to provide safe, top-notch
            bespoke websites.
          </p>
        </div>

        {/* UX Design */}
        <div>
          <h3 className="text-lg font-bold flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            UX Design
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            I comprehend and resolve digital product issues using a user-focused
            methodology. Investigation, compression and visual conveyance are a
            few techniques I apply to captivate and involve your users while
            fulfilling your business requirements.
          </p>
        </div>

        {/* Development */}
        <div>
          <h3 className="text-lg font-bold flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Development
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            I create user-friendly, adaptive, engaging websites. No
            cookie-cutters. No cumbersome, complex coding. Webflow forms the
            foundation of my web development approach. I employ it to produce
            safe, top-notch personalized websites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
