

// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


//
// let threeNumber = (a,b,c)=>{
//     if (a < b && a < c) {
//         console.log(a);
//     }  else if (b < a && b < c) {
//         console.log(b);
//     }else if (c < a && c < b) {
//         console.log(c);
//     }
//     else (console.log(0));
// }
// threeNumber(6, 8, 7);




// -----------------------------------------------------------------------------------------------------------------------------------------



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let threeNumbers = (l, n, k) => {
//     if (l > n && l > k) {
//         console.log(l);
//         document.write(`${l}`)
//     }  else if (n > k && n > l) {
//         console.log(n);
//         document.write(`${n}`)
//     }else if (k > n && k > l) {
//         console.log(k);
//         document.write(`${k}`)
//     }
//     else (console.log(0));
// }
// threeNumbers(15, 20, 18);



// ----------------------------------------------------------------------------------------------------------------------------------



// - створити функцію яка повертає найбільше число з масиву



// let moreNumber = (array) => {
//     let max = array[0];
//     for (let number of array) {
//         if (number>max) {
//             max=number;
//         }
//     }
//     return max;
// }
// console.log(moreNumber([25, 88, 64, 15, 31, 7, 14, 98]));



// -------------------------------------------------------------------------------------------------------------------------




// - створити функцію яка повертає найменьше число з масиву


// let smallNumber = (arrayNew) => {
//     let mini = arrayNew[0];
//     for (let number of arrayNew) {
//         if (number<mini) {
//             mini = number;
//         }
//     }
//     return mini;
// };
// console.log(smallNumber([256, 79, 81, 546, 20]));
// document.write(smallNumber([256, 79, 81, 546, 20]));




// -------------------------------------------------------------------------------------------------------------------------




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let arrayNumbers = (array) => {
//     let sum=0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// console.log(arrayNumbers([2, 3, 4, 6, 8]));



// --------------------------------------------------------------------------------------------------------------------------


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let avarageNumber = (array) => {
//     let sum=0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i] / array.length;
//     }
//     return sum;
// }
// console.log(avarageNumber([2, 3, 4, 8,10]));




// -----------------------------------------------------------------------------------------------------------------------------



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// let someNumbers = (numbers) => {
//     let max = numbers[0];
//     let min = numbers[0];
//     for (let number of numbers) {
//         if (number > max) {
//             max = number;
//         } else if (number < min) {
//             min = number;
//         }
//     }
//     console.log(max);
//     return min;
// };
// document.write(someNumbers([2, 5, 6, 8, 10]));





// --------------------------------------------------------------------------------------------------------------------------------




// - створити функцію яка заповнює масив рандомними числами
//  (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let random = () => {
//     let n= [];
//     for (let i=0;i<10;i++) {
//         n[i] = Math.round(Math.random() * 100);
//     }
//     return n;
// };
// console.log(random());
//
//


// ----------------------------------------------------------------------------------------------------------------------------



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

//
// let random = (limit) => {
//     for (let i=0;i<10;i++) {
//         let arguments = Math.round(Math.random() * limit)
//         console.log(arguments);
//     }
// };
// random(25);




// ---------------------------------------------------------------------------------------------------------------------------------


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let newArray = (arguments) => {
//     let argument = [];
//     for (let i = arguments.length - 1,t = 0;  i >= 0; t++,i--) {
//        argument[t] = arguments[i];
//     }
//     return argument;
// };
// console.log(newArray([2, 4, 8, 10, 12]));





