
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//


// let elementsById = document.getElementById('main_header');
// console.log(elementsById);
// elementsById.classList.add('september-2021');
//
//
//

// --------------------------------------------------------------------------------------------------------------------------

// b) робить шириниу елементу ul 400px

// let elementByTagName = document.getElementsByTagName('ul');
// console.log(elementByTagName);
// for (let newelement of elementByTagName) {
//     newelement.classList.add('main');
// }
//



// -------------------------------------------------------------------------------------------------------------------------
//
// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassName = document.getElementsByClassName(`linkList`);
// console.log(elementsByClassName);
// for (let l of elementsByClassName) {
//     l.style.height='50%';
// }

// ----------------------------------------------------------------------------------------------------------------------------

// d) отримує текст який зберігається в елементі з класом listElement2


// let elementsByClassName1 = document.getElementsByClassName('listElement2');
// console.log(elementsByClassName1);
// elementsByClassName1[0].innerHTML = 'Hello world Hello world Hello world Hello world';



// ----------------------------------------------------------------------------------------------------------------------------


// e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsByTagName = document.getElementsByTagName('li');
// console.log(elementsByTagName);
// for (let l of elementsByTagName) {
//     l.style.background='gray';
// }


// --------------------------------------------------------------------------------------------------------------------------


// f) отримує всі елементи 'a' та додає їм клас anchor

// let elementsByTagName = document.getElementsByTagName('a');
// console.log(elementsByTagName);
// for (let newclass of elementsByTagName) {
//     newclass.classList.add('anchor');
// }



// ----------------------------------------------------------------------------------------------------------------------------


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elementsByTagName = document.getElementsByTagName('a');
// console.log(elementsByTagName);
// for (let newclass of elementsByTagName) {
//     if (newclass.innerText.includes('link3')) {
//         newclass.style.fontSize = '40px';
//     }
// }



// --------------------------------------------------------------------------------------------------------------------------


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementsByTagName = document.getElementsByTagName('a');
// console.log(elementsByTagName);
// for (let newclass of elementsByTagName) {
//     newclass.classList.add('element_XXX');
//     newclass.innerText = 'XXX';
// }


// ----------------------------------------------------------------------------------------------------------------------------


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementsByClassName = document.getElementsByClassName('sub-header');
// console.log(elementsByClassName);
// for (let k of elementsByClassName) {
//     k.style.backgroundColor = prompt();
// }



// ---------------------------------------------------------------------------------------------------------------------------


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let elementsByClassName = document.getElementsByClassName('sub-header');
// console.log(elementsByClassName);
// for (let k of elementsByClassName) {
//     if (k.innerText.includes('content 2 segment')) {
//         k.style.backgroundColor = prompt();
//     }
// }




// -------------------------------------------------------------------------------------------------------------------------


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let elementsByClassName = document.getElementsByClassName('content_1');
// console.log(elementsByClassName);
// for (let y of elementsByClassName) {
//     y.innerText = prompt();
// }



// ---------------------------------------------------------------------------------------------------------------------------

// l) отримати елементи p та змінити їм padding на 20px

// let elementsByTagName = document.getElementsByTagName('p');
// console.log(elementsByTagName);
// for (let d of elementsByTagName) {
//     d.style.padding = '20px';
// }


// -----------------------------------------------------------------------------------------------------------------------------



// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementsByClassName = document.getElementsByClassName('text2');
// console.log(elementsByClassName);
// for (let p of elementsByClassName) {
//     p.innerText = 'sep-2021';
// }
//


// --------------------------------------------------------------------------------------------------------------------------