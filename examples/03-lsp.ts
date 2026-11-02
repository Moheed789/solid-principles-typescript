// L - Liskov Substitution Principle
// Purpose: A child can replace its parent without breaking the expected behavior.
// Benefit: The calling code does not need a special fix for each child.
// In this example: makeSound() works with Animal, Cat, and Dog.
// My reminder: "The child must keep the parent's promise."
// Promise: sound() returns a sound as a non-empty string.

class Animal {
  sound(): string {
    return "Animal sound";
  }
}

class Cat extends Animal {
  sound(): string {
    return "Meow";
  }
}

class Dog extends Animal {
  sound(): string {
    return "Woof";
  }
}

class Cow extends Animal {
  sound(): string {
    return "Moo";
  }
}

function makeSound(animal: Animal): void {
  console.log(animal.sound());
}

console.log("\n3. LSP - Animal sounds");
makeSound(new Animal());
makeSound(new Cat());
makeSound(new Dog());
makeSound(new Cow());

// Where? Passing Cat or Dog instead of Animal still gives us a sound.
// Why? Each child keeps the parent's promise, so the caller needs no special fix.
// If Cat.sound() always throws a "Not supported" error, it breaks this promise.
// The sounds can differ, but each class must keep the expected behavior.
export {};
