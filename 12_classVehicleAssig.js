console.log("");
class Vehicle {
  Name;
  modelNumber;
  price;
  fuelType;
  colour;

  constructor(Name, modelNumber, price, fuelType, colour) {
    this.Name = Name;
    this.modelNumber = modelNumber;
    this.price = price;
    this.fuelType = fuelType;
    this.colour = colour;
  }
  showDetails() {
    console.log(
      `All Details Of Vehicle--> "Name:->" ${this.Name},"Model Type:->" ${this.model}, "Price:->" ${this.price},"Fuel Type:->" ${this.fuelType},"Colour:->" ${this.colour} `
    );
  }
}
console.log(
  ".......................................Information About Vehicle:-->................................................................................."
);
console.log("");
const nexa = new Vehicle(
  "Nexa XL6",
  "SUV",
  "68.50 lakhs",
  "Petrol",
  "Sky Blue"
);
const bmw = new Vehicle(" BMW iX10", "Gran", "96.80 lakhs", "Hybrid", " White");
const scorpio = new Vehicle(
  "Scorpio",
  "Vitara",
  "90.54 lakhs",
  "Diesel",
  "Gray"
);
const swift = new Vehicle("Swift i10", "Coup", "85.45 lakhs", "Hybrid", "Red");
const brezza = new Vehicle(
  "Brezza x25",
  "Gran2",
  "68.67 lakhs",
  "Hybrid",
  "Maroon"
);

console.log(nexa);
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------"
);
console.log(bmw);
console.log(
  "------------------------------------------------------------------------------------------------------------------------------------"
);
console.log(scorpio);
console.log(
  "------------------------------------------------------------------------------------------------------------------------------------"
);
console.log(swift);
console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log(brezza);
console.log(
  "----------------------------------------------------------------------------------------------------------------------------------------"
);

// finding result in array method is as follow:-->
const array = [nexa, bmw, scorpio, swift, brezza];

for (const Vehicle of array) {
  Vehicle.showDetails();
}
