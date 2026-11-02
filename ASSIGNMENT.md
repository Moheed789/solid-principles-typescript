# Assignment 1: Build a Library Lending System Using SOLID

**Submit your TypeScript code and run results. No theory-only answers or code examples are provided.**

1. Create a library system that manages members, books, magazines, and reference items. Support borrowing and returns; reference items must not be borrowable.
2. Enforce item availability, a maximum of five active loans per member, category-specific loan periods, and clear rejection of invalid operations.
3. Calculate overdue fines using member-specific policies. Send checkout and fine notices through at least two interchangeable notification channels.
4. Produce catalog, member-loan, and overdue reports. Demonstrate that adding a borrowable item type and a notification channel does not require changing the central loan workflow.
5. Demonstrate successful and rejected operations, on-time and overdue returns for two member categories, and a notification failure that does not undo a completed loan operation.

**Hints:** Keep domain rules separate from console output. Give each component one clear responsibility, use focused contracts, and ensure implementations honor their contracts. Explain any assumptions about dates and overdue-day calculations in a short design note.

**Deliverables:** Runnable TypeScript application, sample run output covering all required scenarios, and a brief `DESIGN.md` identifying how the design applies SRP, OCP, LSP, ISP, and DIP.
