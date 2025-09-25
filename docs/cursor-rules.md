## Cursor Engineering Rules (Enforced)

- File length: max 500 lines; break up at ~400.
- Functions: under 30–40 lines.
- One class per file; split >200 lines into helpers.
- OOP-first: use classes/structs, favor composition.
- Single responsibility: one concern per file/class/function.
- Modular design: low coupling, testable, DI-friendly.
- Manager/Coordinator patterns for separation of concerns.
- Naming: descriptive and intention-revealing.
- Scalability mindset; avoid god classes.

These are enforced via ESLint rules in `.eslintrc.cjs` and project structure.


