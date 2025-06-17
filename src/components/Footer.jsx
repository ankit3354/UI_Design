import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Star from "../../public/Star.svg";
import FIGMA from "../../public/FIGMA.svg";
import DESIGNER from "../../public/DESIGNER.svg";

function Footer() {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);

  // Measure the width of the first set of content
  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, []);

  // Single set of content to measure width
  const singleSet = (
    <div className="inline-block" ref={contentRef}>
      <img src={Star} alt="Star" className="inline-block w-12 h-12 mb-4 mr-2" />
      <img src={FIGMA} alt="FIGMA" className="inline-block w-90 h-90 mb-4" />
      <img src={Star} alt="Star" className="inline-block w-12 h-12 mb-4 mr-2" />
      <img
        src={DESIGNER}
        alt="DESIGNER"
        className="inline-block w-90 h-90 mb-4 mr-2"
      />
      <img src={Star} alt="Star" className="inline-block w-12 h-12 mb-4 mr-2" />
    </div>
  );

  return (
    <div className="bg-black font-['Syne'] text-white py-16 px-8">
      <div className="overflow-hidden mb-8 flex justify-center items-center">
        <motion.div
          className="inline-block whitespace-nowrap"
          animate={{ x: [0, -contentWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {/* First set of content */}
          {singleSet}
          {singleSet}
          {singleSet}
          {/* Duplicate for infinite scroll effect */}
          <div className="inline-block">
            <img
              src={Star}
              alt="Star"
              className="inline-block w-12 h-12 mb-4 mr-2"
            />
            <img
              src={FIGMA}
              alt="FIGMA"
              className="inline-block w-90 h-90 mb-4"
            />
            <img
              src={Star}
              alt="Star"
              className="inline-block w-12 h-12 mb-4 mr-2"
            />
            <img
              src={DESIGNER}
              alt="DESIGNER"
              className="inline-block w-90 h-90 mb-4 mr-2"
            />
            <img
              src={Star}
              alt="Star"
              className="inline-block w-12 h-12 mb-4 mr-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Let's Talk and Email */}
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-6xl mb-4 font-['Syne'] font-extrabold">LET'S TALK!</h2>
        <a
          href="mailto:rehanurraihan@gmail.com"
          className="text-gray-200 text-lg hover:underline"
        >
          rehanurraihan@gmail.com
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center mt-8 max-w-7xl mx-auto">
        <p className="text-gray-400 text-sm">© ankit vishwakarma - 2023</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-200 text-sm hover:underline">
            Dribbble
          </a>
          <a href="#" className="text-gray-200 text-sm hover:underline">
            Behance
          </a>
          <a href="#" className="text-gray-200 text-sm hover:underline">
            Twitter
          </a>
          <a href="#" className="text-gray-200 text-sm hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
