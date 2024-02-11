"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Welcome to TypeScript';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = 'Igor';
var sentence = "My name is ".concat(name, "\nI am a beginner with TypeScript");
console.log(sentence);
var n = null;
var u = undefined;
// let isNew: boolean = null
// let myName: string = undefined
// Array Type
var list = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3];
// Mixed items in an ARRAY
// Tuple array has fixed length(1 string value, 1 number value)
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// any type accept every type and you can access all method from your variable e.g. string methods(toUpperCase)
var randomValue = 10;
randomValue = true;
randomValue = 'J.Luc';
var myVariable = 10;
console.log(myVariable.name);
// myVariable()
// myVariable.toUpperCase()
// unkown type accept every type but you cannot access all method from your variable e.g. string methods(toUpperCase)
var myVariable2 = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj == "object" &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
// type assertion i.e. type casting
// (myVariable2 as string).toUpperCase();
// console.log(myVariable2)
// Type inference
// it doesn't work when you declare a variable
// without assigning it
var a;
a = 10;
a = true;
// it ony work when you declare a variable
// and assigning it a value
var b = 20;
// b = false // Error of type inference
// Union of types at the same variable
// benefit union type restrict to specific types
// we have intellisense support
var multiType;
multiType = 20;
multiType = true;
// while any type does accept all types
// no intellisense support
var anyType;
anyType = 20;
anyType = true;
anyType = 'Text';
// Function
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// Option type parameter num2 with (num2)
// Optinal parameters come after required parameters
function minus(num1, num2) {
    return num2 ? num1 - num2 : num1;
}
// Default parameters
function divide(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num2 ? num1 / num2 : num1;
}
console.log(add(5, 10));
console.log(minus(5));
console.log(divide(2));
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
// function fullName(person: {firstName: string, lastName: string}) {
//   console.log(`${person.firstName} ${person.lastName}`)
// }
var p = {
    firstName: 'Bruce',
    // lastName: 'Wayne'
};
fullName(p);
// Classes with typeScript
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Igor");
// console.log(emp1.employeeName) // Access modifier (protected)
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
// console.log(m1.employeeName) // Access modifier (protected)
