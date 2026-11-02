// S - Single Responsibility Principle
// Purpose: Give each class one clear responsibility. Keep different jobs separate.
// Benefit: Changing one job does not require changing the code for another job.
// In this example: ResultCalculator finds the result; ResultPrinter shows it.
// My reminder: "Each class has its own job."

class ResultCalculator {
  getResult(marks: number): string {
    return marks <= 50 ? "Pass" : "Fail";
  }
}

class ResultPrinter {
  print(name: string, result: string): void {
    console.log(name + ": " + result);
  }
}

console.log("\n1. SRP - Student result");
const calculator = new ResultCalculator();
const printer = new ResultPrinter();
const result = calculator.getResult(75);
printer.print("Ali", result);

// Where? The calculator decides pass or fail; the printer shows the result.
// Why? Change the calculator for passing rules; change the printer for display rules.
// One responsibility can still need more than one method.
export {};
