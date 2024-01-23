// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
const strOne: string = 'hello';
const strTwo: string = 'owu';
const strThree: string = 'com';
const strFour: string = 'ua';
const numOne: number = 1;
const numTwo: number = 10;
const numThree: number = -999;
const numFour: number = 123;
const numPI: number = 3.14;
const numSix: number = 2.7;
const numSeven: number = 16;
const statusT: boolean = true;
const statusF: boolean = false;

console.log(strOne)
console.log(strTwo)
console.log(strThree)
console.log(strFour)
console.log(numOne)
console.log(numTwo)
console.log(numThree)
console.log(numFour)
console.log(numPI)
console.log(numSix)
console.log(numSeven)
console.log(statusT)
console.log(statusF)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName: string = 'Danylo';
let middleName: string = 'Borysovych';
let lastName: string = 'Glynjanyi';
console.log(`${firstName} ${middleName} ${lastName} `)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a: number = 99;
let b: string = '100';
let c: boolean = true;
console.log(typeof  a)
console.log(typeof  b)
console.log(typeof c)
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName1: string = prompt("Введіть, будь ласка ім'я :")
let middleName1: string = prompt("Введіть, будь ласка по-батькtcові :")
let age: number = +prompt("Введіть, будь ласка вік :")

console.log("Ім'я:",firstName1)
console.log("По-батькові :",middleName1)
console.log("Вік:",age)