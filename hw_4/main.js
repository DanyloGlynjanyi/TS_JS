// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}
console.log(square(2, 10));
console.log(square(6, 12));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius(r) {
    return Math.PI * r * r;
}
console.log(radius(6));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder_area(h, r) {
    return 2 * Math.PI * r * (r + h);
}
console.log(cylinder_area(1, 5));
console.log(cylinder_area(1, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayLogger(myArray) {
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var item = myArray_1[_i];
        console.log('Item: ', item);
    }
}
arrayLogger([true, 'dasd', 'assdasdd', 5555]);
arrayLogger([true, false]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function creatorP(text) {
    document.write("<p>".concat(text, "</p>"));
}
creatorP('hello');
creatorP('mentor');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator(text) {
    document.write("<ul>");
    document.write("<li>".concat(text, "</li>"));
    document.write("<li>".concat(text, "</li>"));
    document.write("<li>".concat(text, "</li>"));
    document.write("</ul>");
}
ulCreator("Some text");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreator2(text, count) {
    document.write("<ul>");
    for (var i = 0; i < count; i++) {
        document.write("<li>".concat(text, "</li>"));
    }
    document.write("</ul>");
}
ulCreator2('Some text', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function ulCreator3(arr) {
    document.write("<ul>");
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        document.write("<li>".concat(item, "</li>"));
    }
    document.write("</ul>");
}
ulCreator3([123, 'hello', 'from', 'Ts', true, false]);
var users = [
    { id: 1, name: 'serhiy', age: 77 },
    { id: 2, name: 'alex', age: 35 },
    { id: 3, name: 'kolya', age: 27 },
    { id: 4, name: 'max', age: 789 },
];
function user(arr) {
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var user_1 = arr_2[_i];
        document.write("\n    <div>\n    <hr/>\n    <p>id: ".concat(user_1.id, " </p>\n    <p>Name: ").concat(user_1.name, " </p>\n    <p>Age: ").concat(user_1.age, " </p>\n    <hr/>\n    </div>\n    "));
    }
}
user(users);
// - створити функцію яка повертає найменьше число з масиву
function minNumber(arrOfNums) {
    var min = arrOfNums[0];
    for (var i = 1; i < arrOfNums.length; i++) {
        if (arrOfNums[i] < min) {
            min = arrOfNums[i];
        }
    }
    return min;
}
console.log('minNumber:', minNumber([32, -1, 2, 31, -32, 555, 1212, 345]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arrOfNums) {
    var result = 0;
    for (var i = 0; i < arrOfNums.length; i++) {
        result += arrOfNums[i];
    }
    return result;
}
console.log('sum : ', sum([1, 2, 10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    var numIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = numIndex1;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));
function exchange(sum, currencies, resultCurrency) {
    for (var _i = 0, currencies_1 = currencies; _i < currencies_1.length; _i++) {
        var cur = currencies_1[_i];
        if (cur.currency === resultCurrency) {
            return "".concat(sum / cur.value, " ").concat(resultCurrency);
        }
    }
    return 'Wrong currency!!!';
}
var currencies = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 39.99 }
];
var result = exchange(10000, currencies, 'USD');
var result2 = exchange(20000, currencies, 'EUR');
console.log('result : ', result);
console.log('result : ', result2);
