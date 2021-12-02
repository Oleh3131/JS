

// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let htmlDivElement = document.createElement('div');
// htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
// htmlDivElement.innerText = 'new balance';
// document.body.appendChild(htmlDivElement);
// let cloneNode = htmlDivElement.cloneNode(true);
// document.body.appendChild(cloneNode);


// -------------------------------------------------------------------------------------------------------------------------


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let mainArray = ['Main', 'Products', 'About us', 'Contacts'];
//
// for (let newArray of mainArray) {
//     let liElement = document.createElement('li');
//     liElement.innerText = `${newArray}`;
//     console.log(liElement);
//     let elementsByTagName = document.getElementsByTagName('ul')[0];
//     elementsByTagName.appendChild(liElement);
// }




// -------------------------------------------------------------------------------------------------------------------------


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.




// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let course of coursesAndDurationArray) {
//     let htmlDivElement = document.createElement('div');
//     document.body.appendChild(htmlDivElement);
//     htmlDivElement.innerText = `${course.title} ${course.monthDuration}`;
//     console.log(htmlDivElement);
// }




// --------------------------------------------------------------------------------------------------------------------------



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let course of coursesAndDurationArray) {
//     let htmlDivElement = document.createElement('div');
//     let htmlHeadingElement = document.createElement('h1');
//     let htmlParagraphElement = document.createElement('p');
//     document.body.appendChild(htmlDivElement);
//     htmlDivElement.appendChild(htmlHeadingElement);
//     htmlDivElement.appendChild(htmlParagraphElement);
//     htmlDivElement.classList.add('item');
//     htmlHeadingElement.classList.add('heading');
//     htmlParagraphElement.classList.add('description');
//     htmlHeadingElement.innerText = `${course.title}`;
//     htmlParagraphElement.innerText = `${course.monthDuration}`;
// }
//

// ---------------------------------------------------------------------------------------------------------------------------