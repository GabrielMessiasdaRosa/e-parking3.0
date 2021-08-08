import React, { Component } from "react";

interface InputProps {
  text: string;
  type?: "text" | "number";
  value?: any;
  readonly?: boolean;
  className?: string;
  onChangeValue?: (value: any) => void;
}

const Input = (props: InputProps) => {
  return (
    <div className={`flex flex-col  ${props.className}`}>
      <label className={`mb-1 text-lg`}>{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readonly}
        onChange={(event) => props.onChangeValue?.(event.target.value)}
        className={`
        text-gray-900
        border
         rounded-lg 
         outline-none 
         px-4 py-2
         focus:border-indigo-700  
         focus:bg-blue-100
         ${props.readonly ? "focus:bg-indigo-800 focus:text-gray-100" : ""}
         
        `}
      ></input>
    </div>
  );
};
export default Input;
