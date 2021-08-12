import { chakra } from "@chakra-ui/react";
import React from "react";
interface ButtonProps {
  color?: "green" | "blue" | "gray" | "red";
  children?: any;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const color = props.color ?? "blue";
  return (
    <chakra.button
      onClick={props.onClick}
      bgColor={`${color}.600`}
      textColor="white"
      rounded="md"
      paddingX="5"
      paddingY="2"
      margin="1"
      _hover={{
        background: `${color}.900`,
      }}
      _active={{
        background: `${color}.700`,
      }}
    >
      {props.children}
    </chakra.button>
  );
};
// card, label, input button, table, 
export default Button;
