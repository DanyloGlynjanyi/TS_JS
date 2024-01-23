// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
var strOne = 'hello';
var strTwo = 'owu';
var strThree = 'com';
var strFour = 'ua';
var numOne = 1;
var numTwo = 10;
var numThree = -999;
var numFour = 123;
var numPI = 3.14;
var numSix = 2.7;
var numSeven = 16;
var statusT = true;
var statusF = false;
console.log(strOne);
console.log(strTwo);
console.log(strThree);
console.log(strFour);
console.log(numOne);
console.log(numTwo);
console.log(numThree);
console.log(numFour);
console.log(numPI);
console.log(numSix);
console.log(numSeven);
console.log(statusT);
console.log(statusF);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
var firstName = 'Danylo';
var middleName = 'Borysovych';
var lastName = 'Glynjanyi';
console.log("".concat(firstName, " ").concat(middleName, " ").concat(lastName, " "));
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
var a = 99;
var b = '100';
var c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var firstName1 = prompt("Введіть, будь ласка ім'я :");
var middleName1 = prompt("Введіть, будь ласка по-батькtcові :");
var age = +prompt("Введіть, будь ласка вік :");
console.log("Ім'я:", firstName1);
console.log("По-батькові :", middleName1);
console.log("Вік:", age);
