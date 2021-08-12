import { chakra } from "@chakra-ui/react";
import React, { Component } from "react";
import Car from "../../core/car";
import { editIcon, trashIcon } from "../particle/icons";

interface TableProps {
  cars?: Car[];
  selectCar?: (car: Car) => void;
  deleteCar?: (car: Car) => void;
}
const Table = (props: TableProps) => {
  const renderHeader = () => {
    return (
      <chakra.tr>
        <chakra.th textAlign="left" padding="4">
          ID
        </chakra.th>
        <chakra.th textAlign="left" padding="4">
          Plate
        </chakra.th>
        <chakra.th textAlign="left" padding="4">
          Name
        </chakra.th>
        <chakra.th textAlign="left" padding="4">
          Color
        </chakra.th>
        <chakra.th textAlign="center" padding="4">
          Actions
        </chakra.th>
      </chakra.tr>
    );
  };
  const showActions = props.deleteCar || props.selectCar;
  const renderActions = (car: Car) => {
    return (
      <chakra.td diaplay="flex" padding="4" textAlign="center">
        <chakra.button
          onClick={() => props.selectCar?.(car)}
          justifyItems="center"
          alignItems="center"
          marginLeft="3"
          padding="2"
          rounded="full"
          color="blue.700"
          _hover={{
            bgColor: `blue.400`,
            color: "blue.100",
          }}
        >
          {editIcon}
        </chakra.button>
        <chakra.button
          onClick={() => props.deleteCar?.(car)}
          justifyItems="center"
          alignItems="center"
          marginLeft="3"
          padding="2"
          rounded="full"
          color="red.600"
          _hover={{
            bgColor: `red.400`,
            color: "red.100",
          }}
        >
          {trashIcon}
        </chakra.button>
      </chakra.td>
    );
  };
  const renderData = () => {
    return props.cars?.map((car, index) => {
      return (
        <chakra.tr
          key={car.id}
          bgColor={index % 2 === 0 ? "blue.200": "blue.100"}
          textColor="gray.800"
          fontWeight="light"
        >
          <chakra.td textAlign="left" padding="4">
            {car.id}
          </chakra.td>
          <chakra.td textAlign="left" padding="4">
            {car.plate}
          </chakra.td>
          <chakra.td textAlign="left" padding="4">
            {car.name}
          </chakra.td>
          <chakra.td textAlign="left" padding="4">
            {car.color}
          </chakra.td>
          {showActions ? renderActions(car) : false}
        </chakra.tr>
      );
    });
  };

  return (
    <chakra.table width="full" rounded="xl" overflow="hidden">
      <chakra.thead backgroundColor="blue.700">{renderHeader()}</chakra.thead>
      <chakra.tbody>{renderData()}</chakra.tbody>
    </chakra.table>
  );
};
export default Table;
