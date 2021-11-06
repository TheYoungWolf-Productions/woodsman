import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
      <div className="  px-1 w-1/2 overflow-hidden sm:px-1 sm:w-full md:px-1 md:w-1/2 lg:px-1 lg:w-1/2 xl:px-1 xl:w-1/2">
        <Sidebar />
      </div>

      <div className="bg-gray-300 px-1 w-1/2 overflow-hidden sm:px-1 sm:w-full md:px-1 md:w-1/2 lg:px-1 lg:w-1/2 xl:px-1 xl:w-1/2">
        Container
      </div>
    </div>
  );
};

export default Layout;
