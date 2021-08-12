import React from "react";
import { chakra, Flex } from "@chakra-ui/react";

const Title = (props) => {
  return (
    <Flex display="col" justify="center">
      <chakra.h1 padding="5" fontSize="3xl" color="white" fontWeight="thin">
        {props.children}
      </chakra.h1>
    </Flex>
  );
};
export default Title;
