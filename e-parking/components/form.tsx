import React from "react";
import Car from "../core/car";
import Button from "./button";
import Input from "./input";
interface FormProps {
  car: Car;
  cancel?: () => void;
  onChangeCar?: (car: Car) => void;
}

const Form = (props: FormProps) => {
  const [name, setName] = React.useState(props.car?.name ?? "");
  const id = props.car?.id;
  const [color, setColor] = React.useState(props.car?.color);
  const [plate, setPlate] = React.useState(props.car?.plate);

  return (
    <div className={`text-black`}>
      {id ? (
        <Input text="Id" readonly={true} value={id} className="mb-4" />
      ) : (
        false
      )}
      <Input
        text="Name"
        value={name}
        onChangeValue={setName}
        className="mb-4"
      />
      <Input
        text="Color"
        value={color}
        onChangeValue={setColor}
        className="mb-5"
      />
      <Input
        text="Lisence Plate"
        value={plate}
        onChangeValue={setPlate}
        className="mb-5"
      />
      <div className={`mt-7 flex justify-end`}>
        <Button
          onClick={() => props.onChangeCar?.(new Car(name, color, plate, id))}
          className={`m-2`}
          color="green"
        >
          {id ? "Edit" : "Save"}
        </Button>
        <Button onClick={props.cancel} className={`m-2`} color="red">
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default Form;
