export {}

let message = 'Welcome to TypeScript'
console.log(message)

let x = 10
let y = 20

let sum
const title = 'Codevolution'
let isBeginner: boolean = true
let total: number = 0;
let name: string = 'Igor'
let sentence: string = `My name is ${name}
I am a beginner with TypeScript`

console.log(sentence)

let n: null = null
let u: undefined = undefined

// let isNew: boolean = null
// let myName: string = undefined

// Array Type
let list: number[] = [1, 2, 3, 4, 5]
let list2: Array<number> = [1, 2, 3]

// Mixed items in an ARRAY

// Tuple array has fixed length(1 string value, 1 number value)
let person1: [string, number] = ['Chris', 22]

enum Color {Red = 5, Green, Blue}

let c: Color = Color.Green
console.log(c)

// any type accept every type and you can access all method from your variable e.g. string methods(toUpperCase)
let randomValue: any = 10
randomValue = true
randomValue = 'J.Luc'

let myVariable: any = 10
console.log(myVariable.name)
// myVariable()
// myVariable.toUpperCase()

// unkown type accept every type but you cannot access all method from your variable e.g. string methods(toUpperCase)
let myVariable2: unknown = 10;

function hasName(obj: any): obj is {name: string} {
  return !!obj &&
    typeof obj == "object" &&
    "name" in obj
}

if(hasName(myVariable2)) {
  console.log(myVariable2.name)
}
// type assertion i.e. type casting
// (myVariable2 as string).toUpperCase();
// console.log(myVariable2)

// Type inference

// it doesn't work when you declare a variable
// without assigning it
let a
a= 10
a = true
// it ony work when you declare a variable
// and assigning it a value
let b =20
// b = false // Error of type inference

// Union of types at the same variable
// benefit union type restrict to specific types
// we have intellisense support
let multiType: number | boolean
multiType = 20
multiType = true
// while any type does accept all types
// no intellisense support
let anyType: any
anyType = 20
anyType = true
anyType = 'Text'

// Function
function add(num1: number, num2: number): number {
  return num1 + num2
}

add(5, 10)

// Option type parameter num2 with (num2)
// Optinal parameters come after required parameters
function minus(num1: number, num2?: number): number {
  return num2 ? num1 - num2 : num1
}
// Default parameters
function divide(num1: number, num2: number = 10): number {
  return num2 ? num1 / num2 : num1
}

console.log(add(5, 10))
console.log(minus(5))
console.log(divide(2))

// Interfaces
interface Person {
  firstName: string
  // Optional property
  lastName?: string
}
function fullName(person: Person): void {
  console.log(`${person.firstName} ${person.lastName}`)
}
// function fullName(person: {firstName: string, lastName: string}) {
//   console.log(`${person.firstName} ${person.lastName}`)
// }
let p = {
  firstName: 'Bruce',
  // lastName: 'Wayne'
}
fullName(p)

// Classes with typeScript
class Employee {
  // Access modifiers: public|private|protected
  // private option: you can't access the attribute outside its class even in inheritance (extended)
  // protected option: you can't access the attribute outside its class but you can access it in inheritance (extended)
  protected employeeName: string;

  constructor(name: string) {
    this.employeeName = name
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`)
  }
}

let emp1 = new Employee("Igor")
// console.log(emp1.employeeName) // Access modifier (protected)
emp1.greet()

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName)
  }

  delegateWork() {
    console.log(`Manager delegating tasks`)
  }
}

let m1 = new Manager('Bruce')
m1.delegateWork()
m1.greet()
// console.log(m1.employeeName) // Access modifier (protected)