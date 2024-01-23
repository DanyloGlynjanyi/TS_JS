// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a: number, b: number): number {
    return a * b
}

console.log(square(2, 10))
console.log(square(6, 12))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius(r: number): number {
    return Math.PI * r * r
}

console.log(radius(6))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder_area(h: number, r: number): number {
    return 2 * Math.PI * r * (r + h)
}

console.log(cylinder_area(1, 5))
console.log(cylinder_area(1, 10))


// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayLogger(myArray: (string | boolean | number)[]): void {
    for (const item of myArray) {
        console.log('Item: ', item);
    }
}

arrayLogger([true, 'dasd', 'assdasdd', 5555]);
arrayLogger([true, false]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function creatorP(text: string): void {
    document.write(`<p>${text}</p>`)
}

creatorP('hello')
creatorP('mentor')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator(text: string): void {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

ulCreator(`Some text`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreator2(text: string, count: number): void {
    document.write(`<ul>`);
    for (let i: number = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

ulCreator2('Some text', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function ulCreator3(arr: (string | boolean | number)[]) {

    document.write(`<ul>`);

    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}

ulCreator3([123, 'hello', 'from', 'Ts', true, false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
interface IUsers {
    id: number,
    name: string,
    age: number
}

let users: IUsers[] = [
    {id: 1, name: 'serhiy', age: 77},
    {id: 2, name: 'alex', age: 35},
    {id: 3, name: 'kolya', age: 27},
    {id: 4, name: 'max', age: 789},
];

function user(arr: IUsers[]): void {
    for (let user of arr) {
        document.write(`
    <div>
    <hr/>
    <p>id: ${user.id} </p>
    <p>Name: ${user.name} </p>
    <p>Age: ${user.age} </p>
    <hr/>
    </div>
    `)
    }
}

user(users)

// - створити функцію яка повертає найменьше число з масиву
function minNumber(arrOfNums: number[]): number {
    let min: number = arrOfNums[0];
    for (let i: number = 1; i < arrOfNums.length; i++) {
        if (arrOfNums[i] < min) {
            min = arrOfNums[i];
        }
    }
    return min;
}

console.log('minNumber:', minNumber([32, -1, 2, 31, -32, 555, 1212, 345]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arrOfNums: number[]): number {
    let result: number = 0;
    for (let i: number = 0; i < arrOfNums.length; i++) {
        result += arrOfNums[i];
    }
    return result;
}

console.log('sum : ', sum([1, 2, 10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr: number[], index1: number, index2: number): number[] {
    const numIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = numIndex1;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
interface ICur {
    currency: string;
    value: number;
}

function exchange(sum: number, currencies: ICur[], resultCurrency: string): number | string {
    for (let cur of currencies) {
        if (cur.currency === resultCurrency) {
            return `${sum / cur.value} ${resultCurrency}`;
        }
    }
    return 'Wrong currency!!!';
}

const currencies: ICur[] = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 39.99}
];

const result: string | number = exchange(10000, currencies, 'USD');
const result2: string | number = exchange(20000, currencies, 'EUR');
console.log('result : ', result);
console.log('result : ', result2);
