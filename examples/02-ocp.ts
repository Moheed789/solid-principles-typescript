// O - Open/Closed Principle
// Purpose: Add new behavior without changing existing code that should stay stable.
// Benefit: A new type does not need another if/else in the existing function.
// In this example: I added Circle, but kept printArea() the same.
// My reminder: "Add new behavior; keep the shared logic stable."

interface Shape {
  area(): number;
}

class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

function printArea(shape: Shape): void {
  console.log("Area: " + shape.area());
}

// I added a new shape without changing printArea().
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

console.log("\n2. OCP - Shape areas");
printArea(new Square(4));
printArea(new Circle(1));

// Where? printArea() uses the Shape interface.
// Why? A new shape does not need a new if/else inside this function.
// The code that creates the new shape changes, but the function stays the same.
export {};
