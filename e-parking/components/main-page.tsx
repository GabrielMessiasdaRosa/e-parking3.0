import React from "react";
import Button from "./button";
import Form from "./form";
import Layout from "./layout";
import Table from "./table";
import useCars from "../hooks/use-cars";
export default function MainPage() {
  const {
    selectCar,
    deleteCar,
    saveCar,
    newCar,
    visible,
    setVisible,
    car,
    cars,
  } = useCars();

  return (
    <div
      className={`
    flex h-screen justify-center items-center 
    bg-gradient-to-l from-blue-800 via-blue-700 to-blue-500
    text-white
    `}
    >
      <Layout
        title={
          visible === "table"
            ? "e-parking 3.0"
            : visible === "form"
            ? "Car form"
            : null
        }
      >
        {visible === "table" ? (
          <>
            <div className={`flex justify-end mb-6 mt-1`}>
              <Button onClick={() => newCar()} color="blue">
                New Car
              </Button>
            </div>
            <Table
              cars={cars}
              selectCar={selectCar}
              deleteCar={deleteCar}
            />
          </>
        ) : (
          <>
            <div className={`flex justify-center px-5`}>
              <Form
                onChangeCar={saveCar}
                cancel={() => setVisible("table")}
                car={car}
              />
            </div>
          </>
        )}
      </Layout>
    </div>
  );
}
