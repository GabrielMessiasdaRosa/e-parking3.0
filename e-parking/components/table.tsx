import React, { Component } from "react";
import Car from "../core/car";
import { editIcon, trashIcon } from "./icons";

interface TableProps {
  cars?: Car[];
  selectCar?: (car: Car) => void;
  deleteCar?: (car: Car) => void;
}
const Table = (props: TableProps) => {
  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Plate</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Color</th>
        <th className="text-center p-4">Actions</th>
      </tr>
    );
  };
  const showActions = props.deleteCar || props.selectCar;
  const renderActions = (car: Car) => {
    return (
      <td className="flex p-4 justify-center ">
        <button
          onClick={() => props.selectCar?.(car)}
          className={` 
            justify-center 
            items-center 
            ml-2
            p-2
            rounded-full
            hover:bg-blue-400
            hover:text-blue-200
            text-blue-600
          `}
        >
          {editIcon}
        </button> 
        <button
          onClick={() => props.deleteCar?.(car)}
          className={` 
           justify-center
           items-center
           ml-2
           p-2
           rounded-full
           text-red-500
           hover:bg-red-300
           hover:text-red-800
          
          `}
        >
          {trashIcon}
        </button>
      </td>
    );
  };
  const renderData = () => {
    return props.cars?.map((car, index) => {
      return (
        <tr
          key={car.id}
          className={`${
            index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
          } text-gray-800 font-light`}
        >
          <td className="text-left p-4">{car.id}</td>
          <td className="text-left p-4">{car.plate}</td>
          <td className="text-left p-4">{car.name}</td>
          <td className="text-left p-4">{car.color}</td>
          {showActions ? renderActions(car) : false}
        </tr>
      );
    });
  };

  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      <thead className={`text-gray-200 bg-blue-500`}>{renderHeader()}</thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
};
export default Table;
