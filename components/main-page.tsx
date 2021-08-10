import React from "react";
import Button from "./button";
import Form from "./form";
import Layout from "./layout";
import Table from "./table";
import useCars from "../hooks/use-cars";
import Select from "./select";
import { Flex } from "@chakra-ui/react";
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
    <Flex
      display="flex"
      height="100vh"
      alignItems="center"
      justify="center"
      bgGradient="linear(to-l, #4E67C0, #0093E9)"
      color="#303030"
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
            <Flex>
              <Select cars={cars} text="Select a car"></Select>
              <Flex display="grid" justify="end" width="full" maxHeight="14">
                <Button onClick={() => newCar()} color="blue">
                  New Car
                </Button>
              </Flex>
            </Flex>
            <Table cars={cars} selectCar={selectCar} deleteCar={deleteCar} />
          </>
        ) : (
          <>
            <Flex justify="center">
              <Form
                onChangeCar={saveCar}
                cancel={() => setVisible("table")}
                car={car}
              />
            </Flex>
          </>
        )}
      </Layout>
    </Flex>
  );
}
