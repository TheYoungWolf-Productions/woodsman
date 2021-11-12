import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import routes from "../../route.config";

const Layout = () => {
  return (
    <div className="flex flex-start flex-wrap overflow-hidden">
      <div className="h-screen w-1/5 overflow-y-auto flex-none sm:w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
        <Sidebar />
      </div>

      <div className="h-screen overflow-y-auto bg-gradient-to-l from-gray-400 via-gray-300 to-gray-200 w-4/5 flex-1 flex-grow">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.main />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
