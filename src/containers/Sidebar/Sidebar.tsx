import React from "react";
import { Routes, Route } from "react-router-dom";

import CustomLink from "../../Misc/CustomLink/CustomLink";
import routes from "../../route.config";
import DataService from "../../services/Data";

interface category {
  id: string;
  name: string;
  svg: string;
}

interface state {
  data: any;
  categories: category[];
}

class Sidebar extends React.Component<any, state> {
  state: state = {
    data: {},
    categories: [],
  };

  componentDidMount = () => {
    DataService.getAll("category").then((snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val();
        this.setState({
          data: { ...value },
          categories: Object.keys(value).map((item) => {
            return {
              id: item,
              name: value[item].name,
              svg: value[item].svg,
            };
          }),
        });
      }
    });
  };

  render() {
    return (
      <div className="flex flex-no-wrap">
        <div
          style={{ backgroundColor: "#B63D46" }}
          className="sm:relative shadow min-h-screen flex-col justify-between flex"
        >
          <div className="px-8">
            <div className="h-16 mt-10 w-full flex items-center">
              <img src="/woodsman-logo.png" alt="WOODSMAN" />
            </div>
            <ul className="mt-12">
              {routes.map((listItem, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full justify-between text-gray-300 hover:text-white cursor-pointer mb-6"
                >
                  <li>
                    <CustomLink to={listItem.path}>
                      <div className="flex items-center font-normal text-2xl">
                        {/* {svgs[index]} */}
                        <span className="ml-2">{listItem.name}</span>
                      </div>
                    </CustomLink>
                  </li>
                  {listItem.sidebar && (
                    <ul>
                      <Routes>
                        <Route
                          key={index}
                          path={`${listItem.path}/*`}
                          element={
                            <listItem.sidebar
                              list={[...this.state.categories]}
                            />
                          }
                        />
                      </Routes>
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="px-8 border-t border-white">
            <div className="flex justify-center my-4 w-full">
              <div className="relative ">
                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                </div>
                <input
                  className=" bg-white focus:outline-none rounded w-full text-sm text-gray-500 bg-white pl-10 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <ul className="w-full flex items-center justify-between">
              <li className="cursor-pointer text-white pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bell"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </li>
              <li className="cursor-pointer text-white pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-messages"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>
              </li>
              <li className="cursor-pointer text-white pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </li>
              <li className="cursor-pointer text-white pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-archive"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={4} rx={2} />
                  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                  <line x1={10} y1={12} x2={14} y2={12} />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
