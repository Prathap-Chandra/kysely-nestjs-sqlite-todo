export interface FruitsModel {
  id: number;
  name: string;
  price: string;
}

export class Fruits {
  id: number;
  name: string;
  price: string;

  constructor(fruits: FruitsModel) {
    this.id = fruits.id;
    this.name = fruits.name;
    this.price = fruits.price;
  }
}
