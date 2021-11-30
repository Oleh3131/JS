// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// let newElement = document.getElementById('content');
// console.log(newElement);
//
//
// // -------------------------------------------------------------------------------------------------------------------------------
//
// // -- отримує текст з блоку з id "rules"
//
// let elementsByClassName = document.getElementsByClassName('fc bp');
// console.log(elementsByClassName);
// console.log(elementsByClassName[0]);
//
// ------------------------------------------------------------------------------------------------------------------------------------
// -- замініть текст параграфа з id 'content' на будь-який інший
//
//
// let elementsByTagName = document.getElementsByTagName('p');
// console.log(elementsByTagName);
// elementsByTagName[0].innerText = 'JavaScript JavaScript JavaScript JavaScript JavaScriptJavaScript';
// console.log(elementsByTagName[0]);
// //
//
// -----------------------------------------------------------------------------------------------------------------------------------
//
// -- замініть текст параграфа з id 'rules' на будь-який інший

// let idElement = document.getElementsByTagName('div');
// console.log(idElement);
// idElement[0].innerText = 'My world my world my world my world my world my world my world my world my world';
// console.log(idElement[0]);
//

// --------------------------------------------------------------------------------------------------------------------------

// -- змініть кожному елементу колір фону на червоний

// let elementsByTagName = document.getElementsByTagName('p');
// console.log(elementsByTagName);
// for (let k of elementsByTagName) {
//     k.classList.add('newclass');
// }
// let elementsByTagName2 = document.getElementsByTagName('div');
// console.log(elementsByTagName2);
// for (let s of elementsByTagName2) {
//     s.classList.add('newclass');
// }
// let elementsByTagName3 = document.getElementsByTagName('ul');
// console.log(elementsByTagName3);
// for (let l of elementsByTagName3) {
//     l.classList.add('newclass');
// }



// -------------------------------------------------------------------------------------------------------------------------


// -- змініть кожному елементу колір тексту на синій

// let elementsByTagName = document.getElementsByTagName('p');
// console.log(elementsByTagName);
// for (let k of elementsByTagName) {
//     k.style.color = 'blue';
// }
//
// let elementsByTagName2 = document.getElementsByTagName('div');
// console.log(elementsByTagName2);
// for (let s of elementsByTagName2) {
//     s.style.color = 'blue';
// }
// let elementsByTagName3 = document.getElementsByTagName('ul');
// console.log(elementsByTagName3);
// for (let l of elementsByTagName3) {
//     l.style.color = 'blue';
// }



// ----------------------------------------------------------------------------------------------------------------------------

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log


// let elementById = document.getElementById('rules');
// console.log(elementById);
// let attribute = elementById.getAttribute('class');
// console.log(attribute);




// -------------------------------------------------------------------------------------------------------------------------------------


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let elementsByClassName = document.getElementsByClassName('fc_rules');
// console.log(elementsByClassName);
// for (let color of elementsByClassName) {
//     color.style.color = 'red';
// }



// -------------------------------------------------------------------------------------------------------------------------