import React from "react";
import StarUnderTitle from "./StarUnderTitle";

const About = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 96px)" }}
      className="bg-teal-500 text-white w-full flex items-center justify-center pt-24"
    >
      <div className="flex flex-col gap-6 items-center justify-center w-4/5 md:w-3/4 lg:w-2/3 py-4 px-4">
        <h1 className="uppercase text-4xl font-bold text-center">
          About Component
        </h1>
        <StarUnderTitle />
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <p className="md:w-1/2">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="md:w-1/2">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
