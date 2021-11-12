import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: NavLinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <NavLink className={match ? "text-white" : ""} to={to} {...props}>
      {children}
    </NavLink>
  );
};

export default CustomLink;
