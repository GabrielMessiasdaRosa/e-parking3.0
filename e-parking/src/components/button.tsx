import React, { Component } from "react";
import PropTypes from "prop-types";
import Car from "../core/car";

interface ButtonProps {
  color?: "green" | "blue" | "gray" | "red";
  className?: string;
  children?: any;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const color = props.color ?? "blue";
  return (
    <button
      onClick={props.onClick}
      className={`
        bg-${color}-600
        text-white rounded-md px-5 py-2 ${props.className}
        hover:bg-${color}-700
        active:bg-${color}-600
        `}
    >
      {props.children}
    </button>
  );
};
export default Button;
