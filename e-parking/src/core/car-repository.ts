import Car from "./car";

export default interface CarRepository {
    saveCar(car: Car): Promise<Car>
    deleteCar(car: Car): Promise<void>
    getAllCars(): Promise<Car[]>
}