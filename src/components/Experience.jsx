import React from "react";
import Star from "../../public/star.svg";

function Experience() {
  return (
    <div className="bg-black text-white py-16 px-8">
      {/* Heading with Starburst Icon */}
      <div className="flex items-center mb-8 max-w-6xl mx-auto">
        <img src={Star} alt="Star" />
        <h2 className="text-4xl font-normal font-['Syne']">Experience</h2>
      </div>

      {/* Experience Entries */}
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* Fortknox Entry */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-700">
          <h3 className="text-xl font-semibold">Lead Product Designer</h3>
          <div className="text-right">
            <p className="text-gray-100">Fortknox</p>
            <p className="text-gray-100 text-sm">Mar 2022 - Oct 2023</p>
          </div>
        </div>

        {/* OmniSafe Entry */}
        <div className="flex justify-between items-center py-4 border-b border-gray-700">
          <h3 className="text-xl font-semibold">Intern Designer</h3>
          <div className="text-right">
            <p className="text-gray-100">OmniSafe</p>
            <p className="text-gray-100 text-sm">Mar 2022 - Oct 2023</p>
          </div>
        </div>

        {/* Doradesign Entry */}
        <div className="flex justify-between items-center py-4 border-b border-gray-700">
          <h3 className="text-xl font-semibold">UI Designer</h3>
          <div className="text-right">
            <p className="text-gray-100">Doradesign</p>
            <p className="text-gray-100 text-sm">Mar 2022 - Oct 2023</p>
          </div>
        </div>

        {/* OpacityAuthor Entry */}
        <div className="flex justify-between items-center py-4 border-b border-gray-700">
          <h3 className="text-xl font-semibold">Frontend Developer</h3>
          <div className="text-right">
            <p className="text-gray-100">OpacityAuthor</p>
            <p className="text-gray-100 text-sm">Mar 2022 - Oct 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
