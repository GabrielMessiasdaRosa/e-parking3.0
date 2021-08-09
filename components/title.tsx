import React, { Component } from "react";
import PropTypes from "prop-types";

const Title = (props) => {
  return (
    <div className={` flex flex-col justify-center`}>
      <h1 className={`p-5 text-3 text-3xl`}>{props.children}</h1>
    </div>
  );
};
export default Title;
