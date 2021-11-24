
//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
//

// ---------ПОВНИЙ ЗАПИЗ (ПИШУ ДЛЯ СЕБЕ)-------

// let square = function (a, h) {
//     let result;
//     result = a * h;
//     return result;
// };
//
// console.log(square(8, 10));


// ---------ЗАПИС СТРІЛОЧНИМ ТИПОМ-----------

// let square = (a, h) => a * h;
// console.log(square(8, 10));




// ----------------------------------------------------------------------------------------------------------------------





// - створити функцію яка обчислює та повертає площу кола
// S = π *r**2

// ---------ПОВНИЙ ЗАПИЗ (ПИШУ ДЛЯ СЕБЕ)----

// let squareRound = function (pi, r) {
//     let result;
//     result = pi * (r ** 2);
//     return result;
// };
// console.log(square(3.14, 6));

// ---------ЗАПИС СТРІЛОЧНИМ ТИПОМ-----


// let squareRound = (pi, r) => pi * (r ** 2);
// console.log(squareRound(3.14, 6));



// --------------------------------------------------------------------------------------------------------------------



// - створити функцію яка обчислює та повертає площу циліндру
//     2πr*(r + h)

// ---------ПОВНИЙ ЗАПИЗ-------

//
// let squareCylinder = function (pi, r, h) {
//     let result;
//     result = 2 * pi * r * (r + h);
//     return result;
// };
// console.log(squareCylinder(3.14, 8, 12));


// ---------ЗАПИС СТРІЛОЧНИМ ТИПОМ---------


// let squareCylinder = (pi, r, h) => 2 * pi * r * (r + h);
// console.log(squareCylinder(3.14, 8, 12));



// ---------------------------------------------------------------------------------------------------------------------------




// - створити функцію яка приймає масив та виводить кожен його елемент



// let array = (mainArray)=> {
//     for (let i = 0; i < mainArray.length;i++) {
//         console.log(mainArray[i]);
//     }
// };
//
// array([2, 5, 3, 4, 7, 9]);



// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент



//
// let paragraf = (p)=>  {document.write(`<p>${p}</p>`);document.write(`<p>${p}</p>`);document.write(`<p>${p}</p>`);};
// paragraf('New world');



// ------------------------------------------------------------------------------------------------------------------------




// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий



// let newElement = (text)=> {
//     document.write(`<ul>`);
//     for (let i = 1; i < 4; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// };
// newElement('Okten sсhool');
//




// ---------------------------------------------------------------------------------------------------------------------------



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// let newElement = (text,number)=> {
//     document.write(`<ul>`);
//     for (let i = 1; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// };
// newElement('Okten sсhool',4);
//
//


// ---------------------------------------------------------------------------------------------------------------------------



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let premitiveValues = [5,`Valencia`,8,false,3,6,`New York`,12,true];
//
// let newValues = (premitiveValues)=> {
//     document.write(`<ol>`);
//     for (let k = 0; k < premitiveValues.length; k++) {
//         document.write(`<li>${premitiveValues[k]}</li>`)
//     }
//     document.write(`</ol>`);
// }
// newValues(premitiveValues);



// ---------------------------------------------------------------------------------------------------------------------------



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//
// let object = [
//     {
//         id: 1,
//         name: 'Olejo',
//         age:24
//     },
//     {
//         id: 2,
//         name: 'Andrew',
//         age:30
//     },
//     {
//         id: 3,
//         name: 'Vita',
//         age:18
//     },
//     {
//         id: 99,
//         name: 'Daria',
//         age:45
//     },
//     {
//         id: 100,
//         name: 'Mike',
//         age:28
//     }
// ];
//
// let mainObject = (object)=> {
//     for (let newOject of object) {
//         document.write(`<div>${newOject.id} - ${newOject.name} - ${newOject.age}</div><br>`)
//     }
// }
// mainObject(object);



// --------------------------------------------------------------------------------------------------------------------------