# SOLID Principles - My Learning Notes

I made this project to learn SOLID with easy examples. Each file explains one idea.

SOLID is a set of five rules for writing code that is easier to understand and change.

## The main idea

| Rule | Easy meaning | Example |
| --- | --- | --- |
| SRP | Give each class one main job | One class finds the result. Another shows it. |
| OCP | Add a new type without changing the shared code | Add a circle and use the same area printer. |
| LSP | A child class must keep its parent's promise | A cat or dog can be used where an animal is needed. |
| ISP | Use interfaces with only the methods needed | A simple printer does not need a scan method. |
| DIP | Let the main code use an interface, not one fixed class | A reminder can use an email sender or an SMS sender. |

## How to run the code

I need **Node.js 24 or newer**. I do not need to install extra packages.

Run all examples:

```sh
npm start
```

Run one example:

| Command | Example |
| --- | --- |
| `npm run srp` | Student result |
| `npm run ocp` | Shape areas |
| `npm run lsp` | Animal sounds |
| `npm run isp` | Printer and scanner |
| `npm run dip` | Homework reminder |

I can also run a file directly:

```sh
node examples/01-srp.ts
```

## What the files do

- `main.ts` loads all five example files. Each file then runs its demo.
- `package.json` stores the run commands. Its `"type": "module"` setting allows this module style.
- `examples/` contains the five examples.

Node removes the TypeScript types before it runs these files. **It does not check the types.** A successful run does not mean that all types are correct.

## Words used in the code

| Word | Easy meaning |
| --- | --- |
| Class | A plan for making objects |
| Object | One item made from a class, such as `new Cat()` |
| Method | A function inside a class |
| Constructor | Code that runs when I create an object |
| `this` | The current object |
| Interface | A list of fields or methods an object must have |
| Contract | A promise about what code must provide and how it should work |
| `implements` | The class provides what an interface asks for |
| `extends` | A child class is based on a parent class |
| Parent class | The class that a child is based on |
| Child class | A class that takes features from a parent and can add or change them |
| Dependency | Something a class needs to do its work |
| Implementation | The actual code that does a job |
| Abstraction | A shared description of a job, such as an interface |
| Client or caller | Code that uses another class or function |

Some other useful syntax:

- `: number` means a number.
- `: string` means text.
- `: void` means the method does not return a useful value.
- `console.log()` shows a message in the terminal.
- `export {}` makes the file a module. Its names stay inside that file unless exported.

An interface does not do the work itself. I write the working code in a class. Matching an interface does not automatically mean the code works correctly.

## 1. SRP - One main job for each class

File: [01-srp.ts](examples/01-srp.ts)

**Full name:** Single Responsibility Principle.

**Purpose:** Keep different jobs in different classes. A class should have one main reason to change.

### My example

I want to find a student's result and show it.

| Class | Job |
| --- | --- |
| `ResultCalculator` | Decide Pass or Fail |
| `ResultPrinter` | Show the name and result |

The calculator uses this line:

```ts
return marks >= 50 ? "Pass" : "Fail";
```

It means:

- If marks are 50 or more, return `"Pass"`.
- Otherwise, return `"Fail"`.

The demo uses 75 marks:

```ts
const result = calculator.getResult(75);
printer.print("Ali", result);
```

First, the calculator returns `"Pass"`. Then the printer shows it.

Output:

```text
Ali: Pass
```

### Why this helps

If the passing mark changes to 60, I change the calculator.

If I want a different message style, I change the printer.

**My short note: Each class has its own job.**

One job can need more than one method. SRP does not mean only one method per class.

## 2. OCP - Add new types without changing shared code

File: [02-ocp.ts](examples/02-ocp.ts)

**Full name:** Open/Closed Principle.

**Purpose:** Allow new behavior without changing the existing code that handles all types.

### My example

I want to print the area of different shapes.

The `Shape` interface says each shape must have an `area()` method.

| Class | Formula |
| --- | --- |
| `Square` | `side * side` |
| `Circle` | `Math.PI * radius * radius` |

`new Square(4)` sets the side to 4. Its area is `4 * 4 = 16`.

`new Circle(1)` sets the radius to 1. `Math.PI` is about 3.14159.

This function prints the area:

```ts
function printArea(shape: Shape): void {
  console.log("Area: " + shape.area());
}
```

It asks the shape for its area. It does not need to know the formula.

```ts
printArea(new Square(4));
printArea(new Circle(1));
```

Output:

```text
Area: 16
Area: 3.141592653589793
```

### Why this helps

I can add a `Triangle` class with its own formula. I can still use the same `printArea()` function.

**My short note: Add a new shape; keep the area printer the same.**

I still add code to create the new shape. OCP does not mean that I can never edit old code.

## 3. LSP - Keep the parent's promise

File: [03-lsp.ts](examples/03-lsp.ts)

**Full name:** Liskov Substitution Principle.

**Purpose:** A child class should work wherever its parent is expected, while keeping the parent's rules.

### My example

`Animal` is the parent. `Cat` and `Dog` are its children.

All three have a `sound()` method.

The promise in this example is simple: **return some text that describes a sound. Do not return empty text.**

```ts
function makeSound(animal: Animal): void {
  console.log(animal.sound());
}
```

I can pass any of these objects:

```ts
makeSound(new Animal());
makeSound(new Cat());
makeSound(new Dog());
```

Output:

```text
Animal sound
Meow
Woof
```

Cat and Dog each write their own version of `sound()`. This is called **overriding**.

### Why this helps

The function works with the parent and both children. It does not need extra code to handle Cat or Dog.

If `Cat.sound()` always throws a `"Not supported"` error, it breaks this example's promise to return a sound.

**My short note: A child can give a different sound, but it must still give a sound.**

Using `extends` alone does not prove that LSP is followed. The child's code must also keep the promise. TypeScript's `string` type does not check whether text is empty.

Not every error breaks LSP. It depends on what the parent's rules allow.

## 4. ISP - Only ask for the methods needed

File: [04-isp.ts](examples/04-isp.ts)

**Full name:** Interface Segregation Principle.

**Purpose:** Do not make code depend on methods it does not need.

### My example

A simple printer can print. An all-in-one printer can print and scan.

I use two interfaces:

```ts
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}
```

| Class | What it can do |
| --- | --- |
| `SimplePrinter` | Print |
| `AllInOnePrinter` | Print and scan |

`SimplePrinter` implements only `Printer`.

`AllInOnePrinter` implements both `Printer` and `Scanner`.

The `printPage()` function only needs `Printer`. Both printer classes can be passed to it.

The demo prints with both objects, then calls `scan()` on the all-in-one object.

Output:

```text
Simple printer: page printed.
All-in-one: page printed.
All-in-one: page scanned.
```

### Why this helps

The simple printer does not have to add a fake `scan()` method. Code that only prints does not need to know about scanning.

**My short note: Do not force a class to have methods it does not need.**

An interface can have several related methods. It does not have to contain only one.

These messages are only a demo. No real page is printed or scanned.

## 5. DIP - Use a common interface

File: [05-dip.ts](examples/05-dip.ts)

**Full name:** Dependency Inversion Principle.

**Purpose:** Make the main code and the classes doing the detailed work use a shared interface.

### My example

I want to send a homework reminder. The sender may be email or SMS.

`MessageSender` says that a sender must have this method:

```ts
send(message: string): void;
```

| Class | Job |
| --- | --- |
| `HomeworkReminder` | Choose the reminder text and ask the sender to send it |
| `EmailSender` | Show the message with `Email:` |
| `SmsSender` | Show the message with `SMS:` |

The reminder receives a sender in its constructor:

```ts
constructor(sender: MessageSender) {
  this.sender = sender;
}
```

It stores that sender in `this.sender`.

When I call `remind()`, it uses the saved sender:

```ts
remind(): void {
  this.sender.send("Please finish your homework.");
}
```

For email:

```ts
const emailReminder = new HomeworkReminder(new EmailSender());
emailReminder.remind();
```

For SMS:

```ts
const smsReminder = new HomeworkReminder(new SmsSender());
smsReminder.remind();
```

Output:

```text
Email: Please finish your homework.
SMS: Please finish your homework.
```

### Why this helps

The reminder does not create an email sender inside itself. It uses the `MessageSender` interface.

I choose the sender outside the reminder class. Switching to SMS does not require changing `HomeworkReminder`.

**My short note: The reminder needs a sender, but it does not need one fixed sender class.**

### DI and DIP

- **DI - Dependency Injection:** I give the reminder its sender from outside.
- **DIP - Dependency Inversion:** The reminder uses the shared interface, and the sender classes follow that interface.

Giving an object from outside is not enough by itself to show DIP. The main code should depend on the shared interface, not one fixed sender class.

This example only prints messages. It does not send real email or SMS.

## Quick revision

| Rule | The question I ask |
| --- | --- |
| SRP | Does this class mix different jobs? |
| OCP | Can I add a new type without editing the shared function? |
| LSP | Will the child still do what the parent promised? |
| ISP | Am I asking for methods that this code does not need? |
| DIP | Does my main code use an interface or one fixed class? |

SRP is about a class's job. ISP is about the methods a client needs.

OCP is about adding behavior. LSP is about keeping promises when one type replaces another.

DIP is about what the main code depends on. One design can follow more than one SOLID rule.

## My practice tasks

1. **SRP:** Use 35 marks. The result should be `Fail`. Then change only the result message style.
2. **OCP:** Add a Triangle. Use `0.5 * base * height`. A base of 4 and height of 3 should give 6.
3. **LSP:** Add a Cow that returns `"Moo"`. Use the same `makeSound()` function.
4. **ISP:** Add a class that only scans. It should not need a print method.
5. **DIP:** Add another demo sender. Use it without changing the reminder class.

## My final notes

I do not need extra classes for every small task. I use SOLID when it makes the code easier to change and understand.

These are small learning examples. They do not check for invalid marks or shape sizes.
