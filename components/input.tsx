import { background, chakra, Flex } from "@chakra-ui/react";
import React from "react";

interface InputProps {
  text: string;
  type?: "text" | "number";
  value?: any;
  readonly?: boolean;
  onChangeValue?: (value: any) => void;
}
//className={`mb-1 text-lg font-light`}
const Input = (props: InputProps) => {
  return (
    <Flex display="grid">
      <chakra.label marginBottom="1" color="gray.100" fontSize="2xl">
        {props.text}
      </chakra.label>
      <chakra.input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readonly}
        onChange={(event) => props.onChangeValue?.(event.target.value)}
        color="blue.900"
        fontWeight="light"
        rounded="md"
        border="1px"
        borderColor="blue.100"
        outline="none"
        paddingX="4"
        paddingY="2"
        marginBottom="5"
        _focus={{
          backgroundColor: `${props.readonly ? "blue.900" : "blue.100"}`,
          color: `${props.readonly ? "white" : "gray.900"}`,
          borderColor: `${props.readonly ? "red" : "blue.900"}`,
        }}
      ></chakra.input>
    </Flex>
  );
};
export default Input;
