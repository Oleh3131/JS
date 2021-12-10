// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


// let div1 = document.createElement('div');
// div1.classList.add('main_div');
// document.body.appendChild(div1);
//
// let form1 = document.createElement('form');
// form1.setAttribute('id', 'form1');
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name', 'inputOne');
// form1.appendChild(inputOne);
//
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name', 'inputTwo');
// form1.appendChild(inputTwo);
//
// let main_button = document.createElement('button');
// main_button.innerText = 'click me';
//
// form1.appendChild(main_button);
// div1.appendChild(form1);
//
// main_button.onclick = function () {
//     localStorage.setItem('name', document.forms.form1.inputOne.value);
//     localStorage.setItem('age', document.forms.form1.inputTwo.value);
// };


// -------------------------------------------------------------------------------------------------------------------------


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// let div1 = document.createElement('div');
// div1.classList.add('main_div');
// document.body.appendChild(div1);
//
// let form1 = document.createElement('form');
// form1.setAttribute('name', 'form1');
//
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name', 'inputOne');
// form1.appendChild(inputOne);
//
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name', 'inputTwo');
// form1.appendChild(inputTwo);
//
// let inputThree = document.createElement('input');
// inputThree.setAttribute('name', 'inputThree');
// form1.appendChild(inputThree);
//
//
// let main_button = document.createElement('button');
// main_button.innerText = 'click me';
// form1.appendChild(main_button);
// div1.appendChild(form1);
//
//
// let formOne = document.forms.form1;
//
//
//
//
// formOne.onsubmit = function (e) {
//     e.preventDefault()
//     let model = this.inputOne.value;
//     let type = this.inputTwo.value;
//     let volume = this.inputThree.value;
//     let car = {model, type, volume};
//     let cars = JSON.parse(localStorage.getItem('cars'));
//     if (!cars) {
//         cars = [];
//         cars.push(car);
//     }else {
//         cars.push(car);
//     }
//     localStorage.setItem('cars', JSON.stringify(cars));
//
// };