import React from "react";
import StarUnderTitle from "./StarUnderTitle";

const Contact = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 96px)" }}
      className="bg-white w-full flex items-center justify-center pt-24"
    >
      <div className="flex gap-4 items-center justify-center flex-col w-3/4 py-4">
        <h1 className="uppercase text-4xl font-bold text-cyan-950">
          contact section
        </h1>
        <StarUnderTitle isDark />
        <div className="flex items-start justify-center w-full">
          <form className="flex flex-col gap-10 w-1/2 relative">
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="outline-none border-solid border-b-2 border-gray-300 w-full p-2 pt-4 peer focus:border-teal-500"
              />
              <label className="absolute left-2 top-2.5 text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-sm peer-focus:text-teal-500 transition-all duration-200 ease-in-out">
                User Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="outline-none border-solid border-b-2 border-gray-300 w-full p-2 pt-4 peer focus:border-teal-500"
              />
              <label className="absolute left-2 top-2.5 text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-sm peer-focus:text-teal-500 transition-all duration-200 ease-in-out">
                Age
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder=" "
                className="outline-none border-solid border-b-2 border-gray-300 w-full p-2 pt-4 peer focus:border-teal-500"
              />
              <label className="absolute left-2 top-2.5 text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-sm peer-focus:text-teal-500 transition-all duration-200 ease-in-out">
                E-mail
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder=" "
                className="outline-none border-solid border-b-2 border-gray-300 w-full p-2 pt-4 peer focus:border-teal-500"
              />
              <label className="absolute left-2 top-2.5 text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-sm peer-focus:text-teal-500 transition-all duration-200 ease-in-out">
                Password
              </label>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="text-white bg-teal-500 rounded-lg p-2 w-fit mt-4 cursor-pointer hover:bg-teal-600 transition-all duration-200"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
