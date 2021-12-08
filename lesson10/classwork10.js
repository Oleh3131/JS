//
// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//


// let div = document.createElement('div');
// div.classList.add('main_block');
// document.body.appendChild(div);
//
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// div.appendChild(formOne);
//
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// div.appendChild(formTwo);
//
// let inputeOne = document.createElement('input');
// inputeOne.type = 'text';
// inputeOne.setAttribute('name', 'inputeOne');
//
// let inputeTwo = document.createElement('input');
// inputeTwo.type = 'number';
// inputeTwo.setAttribute('name', 'inputeTwo');
//
// let inputeThree = document.createElement('input');
// inputeThree.type = 'email';
// inputeThree.setAttribute('name', 'inputeThree');
//
// let inputeFour = document.createElement('input');
// inputeFour.type = 'year';
// inputeFour.setAttribute('name', 'inputeFour');
//
// let buTTon = document.createElement("button");
// buTTon.classList.add('choise')
// buTTon.innerText = `click on me`;
//
// div.appendChild(buTTon);
//
// formOne.append(inputeOne,inputeTwo);
// formTwo.append(inputeThree, inputeFour);
//
//
// buTTon.addEventListener('click', function () {
//     console.log(document.forms.formOne.inputeOne.value);
//     console.log(document.forms.formOne.inputeTwo.value);
//     console.log(document.forms.formTwo.inputeThree.value);
//     console.log(document.forms.formTwo.inputeFour.value);
//
// })




// ------------------------------------------------------------------------------------------------------------------------------



//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

// let inputOne= document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'Відкрий таблицю';
// document.body.append(inputOne,inputTwo,inputThree,buttonElement);
//
// buttonElement.addEventListener('click', function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let textContent = inputThree.value;
//     let table = document.createElement('table');
//     document.body.appendChild(table);
//     for (let i = 0; i < tr; i++) {
//         let tr = document.createElement('tr');
//         for (let k = 0; k < td; k++) {
//             let td = document.createElement('td');
//             td.innerText = textContent;
//             table.appendChild(tr);
//             tr.appendChild(td);
//         }
//     }
// });




// ----------------------------------------------------------------------------------------------------------------------------


//
// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badArray = ['Муфлон','Редиска','Копченый','Баклан'];
// let newDiv = document.createElement('div');
// newDiv.classList.add('text_words');
// let mainInput = document.createElement('input');
// mainInput.setAttribute('type', 'text');
// let newButton = document.createElement('button');
// newButton.innerText = 'Перевірка';
// newDiv.append(mainInput, newButton);
// document.body.appendChild(newDiv);
// newButton.onclick = function () {
//     let value = mainInput.value;
//     for (let badarray of badArray) {
//         if (badarray === value) {
//             alert('Ваші дані містять слова блотного жаргону!!!');
//         }
//     }
// };




// -------------------------------------------------------------------------------------------------------------------------


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку



// let badArray = ['Муфлон','Редиска','Копченый','Баклан'];
// let newDiv = document.createElement('div');
// newDiv.classList.add('text_words');
// let mainInput = document.createElement('input');
// mainInput.setAttribute('type', 'text');
// let newButton = document.createElement('button');
// newButton.innerText = 'Перевірка';
// newDiv.append(mainInput, newButton);
// document.body.appendChild(newDiv);
// newButton.onclick = function () {
//     let sentence = mainInput.value;
//     for (let badarray of badArray) {
//         if (sentence.includes(badarray)) {
//             alert('Ваші дані містять слова блотного жаргону!!!');
//         }
//     }
// };



// ---------------------------------------------------------------------------------------------------------------------------