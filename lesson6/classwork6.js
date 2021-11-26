// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let names = (mainName) => {
//     let num = mainName.replaceAll(`..`, ` `).replaceAll(`---`, ` `).replaceAll(`__`, ` `);
//     return  num;
// };
// console.log(names(n1));
// console.log(names(n2));
// console.log(names(n3));
//




// --------------------------------------------------------------------------------------------------------------------------







//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let array =() => {
//     let elements = [];
//     for (let i = 0; i < 20; i++) {
//         elements[i] = Math.round(Math.random() * 100);
//     }
//     return elements;
// };
// console.log(array());



// let array =() => {
//     let elements = [];
//     for (let i = 0; i < 20; i++) {
// elements.push(Math.round(Math.random() * 100)) ;
// }
// return elements;
// };
// console.log(array());




// ---------------------------------------------------------------------------------------------------------------------------



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// let elements = [];
// let array = () => {
//     for (let i = 0; i < 20; i++) {
//         elements[i]=Math.round(Math.random()*100);
//     }
//     return elements.sort((number1,number2) => number1-number2);
// };
// console.log(array());



// --------------------------------------------------------------------------------------------------------------------------


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа


//
// let array = () => {
//     let elements = [];
//     for (let i = 0; i < 20; i++) {
//         elements[i]=Math.round(Math.random()*100);
//     }
//     return elements.filter(value => value % 2 === 0);
// };
// console.log(array());




// ------------------------------------------------------------------------------------------------------------------------------



// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let elements = [];
// let array = () => {
//     for (let i = 0; i < 20; i++) {
//         elements[i] = Math.round(Math.random() * 100);
//     }
//     return elements.map((number)=> number+``)
// };
// console.log(array());




// ---------------------------------------------------------------------------------------------------------------------------



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//

// let nums = [11,21,3,2,35,75,66];
// let sortNums = (direction,meaning) => {
//         if (meaning === 'ascending'){
//             return direction.sort((a1, b2) => a1 - b2);
//     }
//     if (meaning === 'descending') {
//         return direction.sort((a1, b2) => b2 - a1);
//     }
//
// };
// console.log(sortNums(nums,'ascending'));
//
//



// ---------------------------------------------------------------------------------------------------------------------------


//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let array = coursesAndDurationArray.sort((u1,u2)=>{
//     return u2.monthDuration - u1.monthDuration;
// })
// console.log(array);



// ------------------------------------------------------------------------------------------------------------------------




// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let array = coursesAndDurationArray.filter(value => {
//     if (value.monthDuration > 5) {
//         return value;
//     }
// });
// console.log(array);