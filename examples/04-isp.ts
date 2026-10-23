// I - Interface Segregation Principle
// Purpose: Let the calling code depend only on the methods it needs.
// Benefit: A class does not have to add methods it cannot use.
// In this example: SimplePrinter needs print(); it does not need scan().
// My reminder: "Use an interface that fits the job."

interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

class SimplePrinter implements Printer {
  print(): void {
    console.log("Simple printer: page printed.");
  }
}

class AllInOnePrinter implements Printer, Scanner {
  print(): void {
    console.log("All-in-one: page printed.");
  }

  scan(): void {
    console.log("All-in-one: page scanned.");
  }
}

// This function only needs printing, so it does not depend on Scanner.
function printPage(printer: Printer): void {
  printer.print();
}

console.log("\n4. ISP - Printer and scanner");
printPage(new SimplePrinter());
const machine = new AllInOnePrinter();
printPage(machine);
machine.scan();

// Where? Printer and Scanner are separate interfaces.
// Why? SimplePrinter does not need a useless scan() method.
// This is a console demo. It does not print or scan real pages.
export {};
