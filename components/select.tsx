import { chakra, Flex } from "@chakra-ui/react";
import React from "react";
import Car from "../core/car";
interface selectProps {
  text: string;
  cars?: Car[];
  value?: any;
  option?: string | number;
  onChangeValue?: (value: any) => void;
}

const Option = (props: selectProps) => {
  const renderData = () => {
    return props.cars?.map((car, index) => {
      console.log(index);
      return (
        <option className="text-gray-900" key={car.id} value={car.color}>
          {" "}
          {car.name}
          {` | `}
          {car.plate}
        </option>

        // parei aqui //
      );
    });
  };

  return (
    <Flex className={`flex flex-col p-3`}>
      <label className={`mb-1 text-lg font-light text-gray-800y`}>
        {props.text}
      </label>
      <chakra.select
        value={props.value}
        onChange={(event) => props.onChangeValue?.(event.target.value)}
        display="col"
        textColor="#ececec"
        fontWeight="light"
        border="2px"
        bgColor="#4e5aff38"
        borderColor="white"
        outline="none"
        rounded="1"
        roundedTop="xl"
        width="fit-content"
        paddingX="4"
        paddingY="2"
        _focus={{
          borderColor: "#161c72e0",
          bgColor: "#4e5aff73",
        }}
      >
        {renderData()}
      </chakra.select>
    </Flex>
  );
};
export default Option;
