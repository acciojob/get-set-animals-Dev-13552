
class Animal {
  constructor(species) {
    this._species = species; // store species in a private-like property
  }

  // getter for species
  get species() {
    return this._species;
  }

  // method to make sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species); // call Animal's constructor
  }

  // specific Cat behavior
  purr() {
    console.log("purr");
  }
}

// Dog class extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species); // call Animal's constructor
  }

  // specific Dog behavior
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
