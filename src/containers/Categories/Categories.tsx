import React from "react";
import CustomLink from "../../Misc/CustomLink/CustomLink";

interface state {
  list: string[];
}
class Catgories extends React.Component<any, state> {
  state: state = {
    list: ["Bows", "Accessories", "Arrows", "Crossbows", "Targets", "More"],
  };
  render() {
    return this.state.list.map((item) => {
      return (
        <li
          key={item}
          className="flex pl-5 w-full justify-between text-gray-300 hover:text-white cursor-pointer items-center"
        >
          <CustomLink end to={item}>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-grid"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={4} y={4} width={6} height={6} rx={1} />
                <rect x={14} y={4} width={6} height={6} rx={1} />
                <rect x={4} y={14} width={6} height={6} rx={1} />
                <rect x={14} y={14} width={6} height={6} rx={1} />
              </svg>
              <span className="text-lg ml-2">{`${item}`}</span>
            </div>
          </CustomLink>
        </li>
      );
    });
  }
}

export default Catgories;
