import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "./title";

interface LayoutProps {
  title?: string;
  children?: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <div
      className={`
            flex
            flex-col
            w-2/3 
            m-5
            bg-gray-300
            text-white
            bg-opacity-10
            rounded-3xl 
            rounded-tl-sm
            rounded-br-sm
        `}
    >
      <div
        className={`
        flex
        flex-row
        rounded-xl 
        m-5
        bg-gradient-to-r
        from-indigo-800
        via-indigo-700
        to-indigo-600
      `}
      >
        <Title>{props.title}</Title>
      </div>
      <div className={`
      pb-5
      ml-5
      mr-5
      rounded-sm
      rounded-bl-xl
      `}>
        {props.children}
      </div>
    </div>
  );
};
export default Layout;
