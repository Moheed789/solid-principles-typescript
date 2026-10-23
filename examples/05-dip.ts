// D - Dependency Inversion Principle
// Purpose: Main logic and detailed implementations depend on a shared contract.
// Benefit: I can change the implementation without changing the main logic.
// In this example: HomeworkReminder uses MessageSender;
// EmailSender and SmsSender both follow that same contract.
// My reminder: "Depend on a shared contract, not one specific class."

interface MessageSender {
  send(message: string): void;
}

class EmailSender implements MessageSender {
  send(message: string): void {
    console.log("Email: " + message);
  }
}

class SmsSender implements MessageSender {
  send(message: string): void {
    console.log("SMS: " + message);
  }
}

class HomeworkReminder {
  sender: MessageSender;

  constructor(sender: MessageSender) {
    this.sender = sender;
  }

  remind(): void {
    this.sender.send("Please finish your homework.");
  }
}

console.log("\n5. DIP - Homework reminder");
const emailReminder = new HomeworkReminder(new EmailSender());
emailReminder.remind();
const smsReminder = new HomeworkReminder(new SmsSender());
smsReminder.remind();

// Where? HomeworkReminder depends on the MessageSender interface.
// Why? Switching from email to SMS does not change the reminder class.
// Passing the object through the constructor is DI; using the shared contract is DIP.
// This is a console demo. It does not send real email or SMS.
export {};
