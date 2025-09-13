//complete this code
class Animal {
	constructor(species){
		this.species = species
	}
	set species(value){
		this._species = value
	}
	get species(){
		return this._species
	}
	makeSound(){
		console.log(`This ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	super(this, species)
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	super(this, species)
		purr(){
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
