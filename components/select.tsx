import React from "react";
import Car from "../core/car";
import useCars from "../hooks/use-cars";

interface selectProps {
  text: string;
  cars?: Car[];
  value?: any;
  className?: string;
  option?: string | number;
  onChangeValue?: (value: any) => void;
}

const Select = (props: selectProps) => {
  const renderData = () => {
    return props.cars?.map((car, index) => {
        console.log(index)
      return (
          <option key={car.id} value={car.color}>{car.name}</option>
      
      
            // parei aqui // 
      
      
      
      
      
          );
    });
  };

  return (
    <div className={`flex flex-col p-3 ${props.className}`}>
      <label className={`mb-1 text-lg font-light text-black`}>
        {props.text}
      </label>
      <select
        value={props.value}
        onChange={(event) => props.onChangeValue?.(event.target.value)}
        className={`
        flex flex-col
        text-gray-900
        font-light
        border
        border-blue-900
         rounded-t-lg 
         outline-none 
         px-4 py-2
         focus:border-indigo-700  
         focus:bg-blue-100

        `}
      >
        {renderData()}
      </select>
    </div>
  );
};
export default Select;
