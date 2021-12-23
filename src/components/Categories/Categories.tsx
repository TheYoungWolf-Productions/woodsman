import React from "react";
import ReactHtmlParser from "react-html-parser";
import CustomLink from "../../Misc/CustomLink/CustomLink";

interface category {
  id: string;
  name: string;
  svg: string;
}

interface props {
  list: category[];
}
const Categories = (props: props) => {
  return props.list.map((item) => {
    return (
      <li
        key={item.id}
        className="flex pl-5 w-full text-gray-300 hover:text-white cursor-pointer items-center"
      >
        {ReactHtmlParser(item.svg)}
        <CustomLink end to={item.name}>
          <div className="flex justify-center items-center">
            <span className="text-lg ml-2">{`${item.name}`}</span>
          </div>
        </CustomLink>
      </li>
    );
  });
};

export default Categories;
