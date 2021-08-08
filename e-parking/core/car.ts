export default class Car {
  #name: string;
  #color: string;
  #plate: string;
  #id: string;
  
  constructor(name: string, color: string, plate: string, id: string = null) {
    this.#name = name;
    this.#color = color;
    this.#plate = plate;
    this.#id = id;
  }
  static emptyCar() {
    return new Car('', '', '');
  }
  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get color() {
    return this.#color;
  }
  get plate() {
    return this.#plate;
  }
}
