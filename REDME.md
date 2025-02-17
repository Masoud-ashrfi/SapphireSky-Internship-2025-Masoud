# Prgramming Basic(Fist two weeks)

## **JavaScript Fundamentals**

1.What is the difference between var, let, and const in JavaScript?

**Answer:** **var** has function scope, **let** has block scope, and **const** is used to
declare constants whose value cannot be reassigned. In term of updating and re-declaration **var** Can be
updated and re-declared within thescope, **let** Can be updated but cannot be re declared within the scope, and **const** Cannot be updated or re declared within the scope.

---

2.Explain the difference between == and === in JavaScript.

**Answer:** `==` is used for loose equality comparison, whereas `===` is used for strict equality comparison, which checks both **value** and **type**.

---

3.What are JavaScript closures? Provide an example.

**Answer:** Closures are functions that have access to their outer function's scope, even after the outer function has finished executing.A closure allows a function to remember and access variables from the environment in which it was created, even if the function is executed in a different scope.

```
function outerFunction() {
    let outerVariable = 10;
    function innerFunction() {
      let innerVariable = 5;
      console.log("Inner Variable:", innerVariable);
      console.log("Outer Variable:", outerVariable);
    }
    return innerFunction;
 }
 let closureFunction = outerFunction();
 closureFunction();
```

outerFunction defines an outer variable (outerVariable) and an inner function (innerFunction).

innerFunction has access to the variables of its outer function (outerVariable).

outerFunction returns innerFunction, creating a closuer. The returned closureFunction retains access to the outerVariable even after outerFunction has finished executing. Calling closureFunction() logs both the inner and outer vairable to the console.

---

4.How does this keyword work in JavaScript? Provide an example.

**Answer:** In JavaScript, the keyword is a special variable that is automatically defined in the scope of every function. Its value
depends on how the function is invoked. The keyword is used to refer to the object that is the current context of the function or, more
simply, the object that the function is a method of.

Here are some common scenarios that affect the value of this :
**Global Context:**
When is used outside of any function or method, it refers to the global object (in a browser environment, it usually refers to ).

```
console.log(this);  // refers to the global object
(e.g., window in a browser)
```

**Method Invocation:**
When a function is a method of an object, this refers to that object.

```
 const myObject = {
  myMethod: function() {
    console.log(this); // refers to myObject
  }
};

myObject.myMethod();
```

**Constructor Function:**
When a function is used as a constructor with the new keyword, this refers to the newly created instance of the object.

```
function MyClass() {
  this.property = 'some value';
}

const myInstance = new MyClass();
console.log(myInstance.property); // 'some value'
```

---

**5.** Explain the concept of hoisting in JavaScript.

**Answer:** In JavaScript, hoisting is a phenomenon where variable and function declarations are conceptually moved to the top of their respective scopes, even if they're written later in the code. This behaviour applies to both global and local scopes.

---

**6.** What are arrow functions in JavaScript, and how are they different from regular functions?

**Answer:** Arrow functions are a concise way to write anonymous function expressions in JavaScript. They were introduced in ECMAScript 6
(ES6) and are especially useful for short, single-expression functions.
Here's the basic syntax for an arrow function:

```
const add = (a, b) => {
  return a + b;
};
```

In this example, the arrow function takes two parameters (a and b) and returns their sum. The => syntax is used to define the function,
and the body of the function is enclosed in curly braces . If there's only one expression in the function body, you can omit the curly
braces and the keyword.

**Differences Between Arrow Functions and Regular Functions:**

1. **Shorter Syntax**

   - Arrow functions eliminate the need for the `function` keyword.
   - If the function has only one expression, `{}` and `return` can be omitted.

2. **No `this` Binding**

   - In regular functions, `this` depends on how the function is called.
   - In arrow functions, `this` is inherited from the surrounding lexical scope.

     ```
     function regularFunction() {
         console.log(this); // Depends on how it's called
     }

     const arrowFunction = () => {
         console.log(this); // Inherits from parent scope
     };

     ```
