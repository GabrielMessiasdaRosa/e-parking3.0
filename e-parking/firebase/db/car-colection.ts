import firebase from "../config";
import CarRepository from "../../core/car-repository";
import Car from "../../core/car";
export default class CarCollection implements CarRepository {
  #conversor = {
    toFirestore(car: Car) {
      return {
        name: car.name,
        color: car.color,
        plate: car.plate,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Car {
      const carData = snapshot.data(options);
      return new Car(carData.name, carData.color, carData.plate, snapshot.id);
    },
  };

  async saveCar(car: Car): Promise<Car> {
    if (car?.id) {
      await this.privateCarCollection().doc(car.id).set(car);
      return car;
    } else {
      const docRef = await this.privateCarCollection().add(car);
      const doc = await docRef.get();
      return doc.data();
    }
  }

  async deleteCar(car: Car): Promise<void> {
    return this.privateCarCollection().doc(car.id).delete();
  }

  async getAllCars(): Promise<Car[]> {
    const query = await this.privateCarCollection().get();
    return query.docs.map((doc) => doc.data()) ?? [];
  }

  private privateCarCollection() {
    return firebase
      .firestore()
      .collection("cars")
      .withConverter(this.#conversor);
  }
}
