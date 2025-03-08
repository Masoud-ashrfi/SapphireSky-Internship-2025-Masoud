# Debugging in JavaScript

## 1. Types of Errors in JavaScript

JavaScript has three main types of errors:

- **Syntax Errors** : Mistakes in code structure (e.g., missing brackets).
- **Reference Errors** : Using an undefined variable.
- **Type Errors** : Performing an operation on the wrong data type.

---

## 2. Debugging JavaScript in the Browser

You can debug JavaScript using browser developer tools:

- Open **Developer Tools** (`F12` or `Ctrl+Shift+I` in Chrome).
- Use the **Console** to check for errors.
- Utilize the **Sources** tab to set breakpoints and step through code.

---

## 3. Using `console.log()` for Debugging

`console.log()` helps track variable values and execution flow:

```javascript
let num = 10;
console.log("The value of num is:", num);
```

---

## 4. Purpose of `try...catch` in JavaScript

`try...catch` handles runtime errors gracefully:

```javascript
try {
  let result = someUndefinedFunction();
} catch (error) {
  console.log("An error occurred:", error.message);
}
```

---

## 5. Using Breakpoints for Debugging

Breakpoints pause script execution, allowing you to inspect values:

- Open **Developer Tools** > **Sources** .
- Click on the line number to set a breakpoint.
- Step through the code to analyze behavior.

---

## 6. `throw` vs. `console.error()`

- **`throw`** : Manually generates an error that must be handled.
- **`console.error()`** : Logs an error but does not stop execution.

```javascript
throw new Error("Something went wrong!");
console.error("This is an error message.");
```

---

## 7. Example: Throwing and Catching an Error

```javascript
try {
  throw new Error("Intentional Error");
} catch (error) {
  console.log("Caught error:", error.message);
}
```

---

## 8. Using `debugger` in JavaScript

The `debugger` statement pauses script execution in DevTools:

```javascript
let x = 5;
debugger; // Execution will pause here
console.log(x);
```

---

## 9. Understanding Stack Trace

A stack trace shows the sequence of function calls leading to an error.
Example error:

```
ReferenceError: myFunction is not defined
    at script.js:10:5
    at script.js:15:3
```

It helps trace where an issue originates in the code.

---

## 10. Best Practices for Bug-Free JavaScript Code

- Use **strict mode** (`'use strict';`).
- Write **descriptive error messages** .
- Use **meaningful variable names** .
- Avoid global variables.
- Write **unit tests** .
- Always handle potential errors with `try...catch`.
