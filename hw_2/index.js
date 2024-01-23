// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
var arrOfcars = [
    "bmw",
    "mersdes-benz",
    "audi",
    "subaru",
    "porche",
    "Infinity",
    "lexus",
    "opel",
    "shkoda",
    "huindai"
];
console.log(arrOfcars[0]);
console.log(arrOfcars[1]);
console.log(arrOfcars[2]);
console.log(arrOfcars[3]);
console.log(arrOfcars[4]);
console.log(arrOfcars[5]);
console.log(arrOfcars[6]);
console.log(arrOfcars[7]);
console.log(arrOfcars[8]);
console.log(arrOfcars[9]);
var objOfOBookOne = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy"
};
var objOfOBookTwo = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy"
};
var objOfOBookThree = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy"
};
console.log(objOfOBookOne);
console.log(objOfOBookTwo);
console.log(objOfOBookThree);
var arrOfOBookOne = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy",
    authors: [
        { name: 'Ivan', age: 13 },
    ]
};
var arrOfOBookTwo = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy",
    authors: [
        { name: 'Ivan', age: 13 },
    ]
};
var arrOfOBookThree = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy",
    authors: [
        { name: 'Ivan', age: 13 },
    ]
};
console.log(arrOfOBookOne);
console.log(arrOfOBookTwo);
console.log(arrOfOBookThree);
var arrOfUsers = [
    { name: "petya", username: "as4d654654as", password: "asd444asd5" },
    { name: "petya", username: "as5das", password: "asda123sd5" },
    { name: "petya", username: "as4d654654as6543das", password: "asdasd335" },
    { name: "petya", username: "as2das", password: "asd1asd52" },
    { name: "petya", username: "as61das", password: "asd444441asd5" },
    { name: "petya", username: "asd7as", password: "asdasd55555" },
    { name: "petya", username: "as6da2s", password: "asdasd5awsedawq" },
    { name: "petya", username: "asd35as", password: "asdasd5eawde" },
    { name: "petya", username: "a55sdas", password: "asdasd523" },
    { name: "petya", username: "as44das", password: "asdasd5a1" }
];
console.log("Password :", arrOfUsers[0].password);
console.log("Password :", arrOfUsers[1].password);
console.log("Password :", arrOfUsers[2].password);
console.log("Password :", arrOfUsers[3].password);
console.log("Password :", arrOfUsers[4].password);
console.log("Password :", arrOfUsers[5].password);
console.log("Password :", arrOfUsers[6].password);
console.log("Password :", arrOfUsers[7].password);
console.log("Password :", arrOfUsers[8].password);
console.log("Password :", arrOfUsers[9].password);
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
var x = 0;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
console.log(x);
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
var time = 25;
if (time > 45 && time <= 59) {
    console.log('time:4/4');
}
else if (time > 30 && time <= 45) {
    console.log('time:3/4');
}
else if (time > 15 && time <= 30) {
    console.log('time:2/4');
}
else if (time > 0 && time <= 15) {
    console.log('time:1/4');
}
console.log(time);
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
var day = 11;
if (day > 0 && day <= 10) {
    console.log('1 decade');
}
else if (day > 10 && day <= 20) {
    console.log('2 decade');
}
else if (day > 20 && day <= 31) {
    console.log('3 decade');
}
else {
    console.log('?????');
}
console.log(day);
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
var aDay = prompt('Enter day ?');
switch (aDay) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.error('Invalid aDay');
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
var y = 30;
var z = 30;
if (y > z) {
    console.log('y: ', y);
}
else if (z > y) {
    console.log('z: ', z);
}
else if (z === y) {
    console.log('Рівні');
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
var x1 = "";
x1 = x1 || 'default';
console.log(x1);
var coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
