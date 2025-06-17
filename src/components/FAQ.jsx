import React from "react";
import Star from "../../public/star.svg";

function FAQ() {
  return (
    <div className="bg-black text-white py-16 px-8">
      {/* Heading with Starburst Icon */}
      <div className="flex items-center mb-8 max-w-6xl mx-auto">
        <img src={Star} alt="Star" />
        <h2 className="text-4xl font-normal font-['Syne']">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Entries */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* FAQ 1 */}
        <div>
          <h3 className="text-xl font-semibold uppercase">
            What is your design process?
          </h3>
          <p className="text-gray-400 text-base mt-2">
            My design process typically involves four key phases: research,
            design, prototype, and test. In the research phase, I gather
            insights about the user and their needs. In the design phase, I
            create wireframes and visual designs that meet those needs. In the
            prototype phase, I create interactive models of the design for
            testing. In the test phase, I collect feedback from users to refine
            the design.
          </p>
        </div>

        {/* FAQ 2 */}
        <div>
          <h3 className="text-xl font-semibold uppercase">
            What tools and software do you use for UX design?
          </h3>
        </div>

        {/* FAQ 3 */}
        <div>
          <h3 className="text-xl font-semibold uppercase">
            How do you measure the success of your UX designs?
          </h3>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
