// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function arg() {
//     if (arguments.length === 1) {
//         console.log(arguments);
//     } else if (arguments.length === 3) {
//         return arguments[0] + arguments[1]+arguments[2];
//     }
// }
//
// arg(2);
// console.log(arg(8, 3, 4));
//
//



// ---------------------------------------------------------------------------------------------------------------------------



//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//

// -------------------------------------------------ПІДКАЖІТЬ ЯК ЗРОБИТИ ПРОСТІШЕ----------------------------------------------------------

// let arrayOne = [2,3,4,6,5];
// let arrayTwo = [5,9,7,1,3];
// let arrayFive = [];
// // function mainArray(arrayThree,arrayFour,action) {
// //     if (action === '+') {
// //         arrayFive.push(arrayThree[0] + arrayFour[0], arrayThree[1] + arrayFour[1], arrayThree[2] + arrayFour[2], arrayThree[3] + arrayFour[3], arrayThree[4] + arrayFour[4]);
// //         return arrayFive;
// //     }
// // }
// //
//     console.log(mainArray(arrayOne, arrayTwo, `+`));
//




// let arrayOne = [2,3,4,6,5];
// let arrayTwo = [5,9,7,1,3];
// let arrayFive = [];
//
// function mainArray(arrayThree,arrayFour,action) {
//     for (let i = 0,m=0 ; i < arrayThree.length; m++,i++) {
//         if (action==='+') {
//             arrayFive.push(arrayThree[i]+arrayFour[m]);
//         }
//     }
//     return arrayFive;
// }
//
// let mainArray1 = mainArray(arrayOne, arrayTwo, '+');
// console.log(mainArray1);





// ------------------------------------------------------------------------------------------------------------------------------------



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//

//
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let arrayTwo = [];
// function object(first) {
//     for (let objectOne of first) {
//         for (let objectTwo in objectOne) {
//             arrayTwo.push(objectTwo);
//         }
//     }
//     return arrayTwo;
// }
// let object1 = object(array);
// console.log(object1);




// ------------------------------------------------------------------------------------------------------------------------------------




//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]



// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let arrayTwo = [];
// function object(first) {
//     for (let objectOne of first) {
//         for (let objectTwo in objectOne) {
//             arrayTwo.push(objectOne[objectTwo]);
//         }
//     }
//     return arrayTwo;
// }
// let object1 = object(array);
// console.log(object1);




// -----------------------------------------------------------------------------------------------------------------------------




