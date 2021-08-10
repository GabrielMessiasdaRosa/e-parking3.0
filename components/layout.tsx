import React, { Component } from "react";
import Title from "./title";
import { Flex } from "@chakra-ui/react";

interface LayoutProps {
  title?: string;
  children?: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <Flex
      display="column"
      width="65%"
      bg="#b4b4b43f"
      textColor="white"
      rounded="sm"
      roundedTopEnd="3xl"
      roundedBottomLeft="3xl"
    >
      <Flex rounded="xl" bgGradient="linear(to-l, #4E67C0, #0093E9)" margin="5">
        <Title>{props.title}</Title>
      </Flex>
      <Flex display="row" pb={5} ml={5} mr={5}>
        {props.children}
      </Flex>
    </Flex>
  );
};
export default Layout;
