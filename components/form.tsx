import { Flex } from "@chakra-ui/react";
import React from "react";
import Car from "../core/car";
import useCarProps from "../hooks/use-car-props";
import Button from "./button";
import Input from "./input";
interface FormProps {
  car: Car;
  cancel?: () => void;
  onChangeCar?: (car: Car) => void;
}

const Form = (props: FormProps) => {
  const { id, name, setName, color, setColor, plate, setPlate } =
    useCarProps(props);

  return (
    <Flex display="row" color="#303030">
      {id ? <Input text="Id" readonly={true} value={id} /> : false}
      <Input text="Name" value={name} onChangeValue={setName} />
      <Input text="Color" value={color} onChangeValue={setColor} />
      <Input text="Lisence Plate" value={plate} onChangeValue={setPlate} />
      <Flex>
        <Button
          onClick={() => props.onChangeCar?.(new Car(name, color, plate, id))}
          color="green"
        >
          {id ? "Edit" : "Save"}
        </Button>
        <Button onClick={props.cancel} color="red">
          Cancel
        </Button>
      </Flex>
    </Flex>
  );
};
export default Form;
