# Object-Oriented Programming (OOP) in JavaScript

## 1. Four Pillars of OOP

The four main principles of Object-Oriented Programming (OOP) are:

1. **Encapsulation** – Bundling data and methods together while restricting direct access.
2. **Abstraction** – Hiding complex implementation details and exposing only necessary functionality.
3. **Inheritance** – Enabling a class to acquire properties and methods from another class.
4. **Polymorphism** – Allowing objects to be treated as instances of their parent class while using overridden methods.

---

## 2. Encapsulation in JavaScript

Encapsulation ensures that an object's internal details are hidden, exposing only necessary parts.

```javascript
class Person {
  #name; // Private property (Encapsulation)

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const person = new Person("Masoud");
console.log(person.getName()); // Output: Masoud
console.log(person.#name); // Error: Private field cannot be accessed directly
```

---

## 3. JavaScript Classes vs. Traditional Classes

| Feature            | JavaScript             | Java/C++                       |
| ------------------ | ---------------------- | ------------------------------ |
| Inheritance        | Prototype-based        | Class-based                    |
| Typing             | Dynamic                | Static                         |
| Access Modifiers   | `#`for private fields  | `public`,`private`,`protected` |
| Method Overloading | Not supported natively | Supported                      |

---

## 4. Class `Car` with `displayInfo()`

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    return `${this.brand} ${this.model}`;
  }
}

const car = new Car("Toyota", "Corolla");
console.log(car.displayInfo()); // Output: Toyota Corolla
```

---

## 5. Prototype-Based Inheritance

```javascript
const animal = {
  makeSound() {
    return "Some sound";
  },
};

const dog = Object.create(animal);
console.log(dog.makeSound()); // Output: Some sound
```

---

## 6. Creating Private Properties

```javascript
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
console.log(account.#balance); // Error: Private field cannot be accessed directly
```

---

## 7. Method Overriding

```javascript
class Animal {
  makeSound() {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  makeSound() {
    return "Bark!";
  }
}

const dog = new Dog();
console.log(dog.makeSound()); // Output: Bark!
```

---

## 8. Polymorphism in JavaScript

```javascript
class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => console.log(shape.getArea()));
```

---

## 9. Purpose of `super()`

```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Calls Parent's constructor
    this.age = age;
  }
}

const child = new Child("Masoud", 21);
console.log(child.name, child.age); // Output: Masoud 21
```

---

## 10. Composition vs. Inheritance

| Feature          | Inheritance                    | Composition                    |
| ---------------- | ------------------------------ | ------------------------------ |
| Relationship     | "Is-a"                         | "Has-a"                        |
| Flexibility      | Less flexible (tight coupling) | More flexible (loose coupling) |
| Code Reusability | Uses `extends`                 | Uses object references         |

**Example of Composition:**

```javascript
class Engine {
  start() {
    return "Engine started";
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }

  startCar() {
    return this.engine.start();
  }
}

const car = new Car();
console.log(car.startCar()); // Output: Engine started
```

Here, `Car` **has an** `Engine`, instead of inheriting from it.
