import React from "react";
import Car from "../core/car";
import CarRepository from "../core/car-repository";
import CarCollection from "../firebase/db/car-colection";

export default function useCars() {
  const repository: CarRepository = new CarCollection();

  const [visible, setVisible] = React.useState("table");
  const [car, setCar] = React.useState<Car>(Car.emptyCar());
  const [cars, setCars] = React.useState<Car[]>([]);

  const getAllCars = () => {
    repository.getAllCars().then((cars) => {
      setCars(cars), setVisible("table");
    });
  };
  React.useEffect(getAllCars, []);

  const selectCar = (car: Car) => {
    setCar(car);
    setVisible("form");
  };

  const deleteCar = async (car: Car) => {
    await repository.deleteCar(car);
    getAllCars();
  };

  const saveCar = async (car: Car) => {
    await repository.saveCar(car);
    getAllCars();
  };

  const newCar = () => {
    setCar(Car.emptyCar());
    setVisible("form");
  };
  return {
    saveCar,
    deleteCar,
    selectCar,
    newCar,
    getAllCars,
    visible,
    setVisible,
    car,
    setCar,
    cars,
    setCars,
  };
}
