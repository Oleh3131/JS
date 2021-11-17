
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [5, 10, 15, 20, 52];
// console.log(number);
// let stringa = ['mouse', 'keyboaurd', 'screen', 'CPU', 'loudspeakers'];
// console.log(stringa);
// let kit = ['December', 31, 'day', 2021, true];
// console.log(kit);



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let value = [];
//
// value[0] = 106;
// value[1] = 'Rone';
// value[2] = 'Peter';
// value[3] = false;
// value[4] = '20000';
// value[5] = 48;
// value[6] = true;
// value[7] = 96;
// value[8] = 'Nick';
// value[9] = 'Jane';
// console.log(value);



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>loremloremlorem</br></div>`)
// }
//
//
// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>london is the capital of great britain ${i}</br></div>`)
// }
//
// let k = 1;
// while (k <= 20) {
//     document.write(`<h1>New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States. </h1></br>`)
//     k++;
// }
//
// let d = 67;
// while (d <= 86) {
//     document.write(`<h1>The territory of modern Ukraine has been inhabited since 32,000 BC. ${d}</h1></br>`);
//     d++;
// }






// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let code = [222, 333, 88, 99, 55, 111, 555, 999, 1010, 45];
// for (let j = 0; j <= 9; j++) {
//     console.log(code[j]);
// }
//
//
// let elements = ['Denmark','England','Finland','Iceland','Ireland','Belgium','France','Italy','Portugal','Ukraine'];
// for (let m = 0; m < elements.length; m++) {
//     console.log(elements[m]);
// }
//
// let different = [23,'Wales',44,'Netherlands',true,75,'Greece',66,'Canada',false];
// for (let o = 0; o < different.length; o++) {
//     console.log(different[o]);
// }


// let set = [23,'Wales',44,'Netherlands',true,75,'Greece',66,'Canada',false];
// for (let l = 0; l < 10; l++)
//     if (typeof set[4] !== 'string') {
//         console.log(set[4]);
//     } else (typeof set[9] !== "number");{
//     console.log(set[9]);
// }

// let set = [23,'Wales',44,'Netherlands',true,75,'Greece',66,'Canada',false];
// for (let l = 0; l < 10; l++)
//     if (typeof set[0] !== "string") {
//         console.log(set[0]);
//         } if (typeof set[5] === "number") {
//             console.log(set[5]);
//         }else (typeof set[7] !== "boolean"); {
//             console.log(set[7]);
//         }



//
//
// let set = [23,'Wales',44,'Netherlands',true,75,'Greece',66,'Canada',false];
// for (let l = 0; l < 10; l++)
//     if (typeof set[1] === "string") {
//         console.log(set[1]);
//     } if (typeof set[8] !== 'number') {
//         console.log(set[8]);
//     }else  (typeof set[3] !== "boolean");
// {
//         console.log(set[3]);
//     }




// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let mainBlock = [];
// mainBlock[0] = 31;
// mainBlock[1] = 'Lviv';
// mainBlock[2] = 32;
// mainBlock[3] = 'Vinnytsia';
// mainBlock[4] = 33;
// mainBlock[5] = 'Odesa';
// mainBlock[6] = true;
// mainBlock[7] = 'Dnipro';
// mainBlock[8] = false;
// mainBlock[9] = 34;
// for (let k = 0; k < mainBlock.length; k++) {
//     console.log(mainBlock[k]);
// }






// for (let you = 1; you <= 10; you++) {
//     console.log(you);
//     document.write(`<div>${you}</div>`);
// }

//
// for (let h = 1; h <= 100; h++) {
//     console.log(h);
//     document.write(`<div>${h}</div>`)
// }

// for (let t = 1; t <= 100; t += 2) {
//     console.log(t);
//     document.write(`<div>${t}</div>`);
// }

// for (let i = 1; i <=100; i++)
//     if (i%2 === 0) {
//         console.log(i);
//         document.write(`${i}</br>`)
//     }
//
//
// for (let y = 1; y <= 100; y++)
//     if (y % 2 === 1) {
//         console.log(y);
//         document.write(`${y}</br>`)
//     }
