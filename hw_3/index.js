// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (var i = 1; i < 10; i++) {
    document.write('<div>Some div</div>');
    document.write('<hr/>');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (var y = 0; y < 10; y++) {
    document.write("<div>Some div ".concat(y, "</div>"));
    document.write('<hr/>');
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
var x = 0;
while (x < 20) {
    document.write("<h1>Some text </h1>");
    document.write('<hr/>');
    x++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
var a = 0;
while (a < 20) {
    document.write("<h1>".concat(a, " Some text</h1>"));
    document.write('<hr/>');
    a++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
// <!--
//     і тд інші об'єкти масиву
//      ...
//      ...
//      ...
// -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
var listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
for (var i = 0; i < listOfItems.length; i++) {
    document.write("<li>".concat(listOfItems[i], "</li>"));
}
document.write('</ul>');
var products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
// ШАБЛОН
// <div class="product-card">
// <h3 class="product-title">TITLE. Price - PRICE</h3>
//     <img src="IMAGE" alt="" class="product-image">
//     </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
for (var i = 0; i < products.length; i++) {
    document.write("\n        <div class=\"product-card\">\n           <h3 class=\"product-title\">Product: ".concat(products[i].title, "</br> Price - ").concat(products[i].price, "</h3>\n           <img src=\"").concat(products[i].image, "\" alt=\"").concat(products[i].title, "\" class=\"product-image\">\n        </div>\n        \n    "));
}
var users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user.status) {
        document.write("<hr/>");
        document.write("<div>Name: ".concat(user.name, " <br/> Age: ").concat(user.age, " Status: ").concat(user.status, "</div>"));
    }
}
// - користувачів зі статусом false
for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
    var user = users_2[_a];
    if (!user.status) {
        document.write("<hr/>");
        document.write("<div>Name: ".concat(user.name, " <br/> Age: ").concat(user.age, " Status: ").concat(user.status, "</div>"));
    }
}
// - користувачів які старші за 30 років
for (var _b = 0, users_3 = users; _b < users_3.length; _b++) {
    var user = users_3[_b];
    if (user.age > 30) {
        document.write("<hr/>");
        document.write("<div>Name: ".concat(user.name, " <br/> Age: ").concat(user.age, " Status: ").concat(user.status, "</div>"));
    }
}
