import React from "react";

export default function useCarProps(props) {
  const [name, setName] = React.useState(props.car?.name ?? "");
  const id = props.car?.id;
  const [color, setColor] = React.useState(props.car?.color);
  const [plate, setPlate] = React.useState(props.car?.plate);
  return {
    id,
    name,
    setName,
    color,
    setColor,
    plate,
    setPlate,
  };
}
