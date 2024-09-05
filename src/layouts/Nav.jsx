import React from "react";
import Navigation from "./Navigation";

const Nav = () => {
  return (
    <div className="pb-32">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href=""  className="flex items-center space-x-3 rtl:space-x-reverse" >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Tutorial </span>
          </a>
        <Navigation/>
        </div>
      </nav>
    </div>
    
  );
};

export default Nav;
