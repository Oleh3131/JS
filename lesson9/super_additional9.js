// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//


// let users = [
//     {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }
// ];


// for (let user of users) {
//     let element = [];
//     let main = user.address;
//     element.push(main);
//     console.log(element);
// }


// for (let user of users) {
//     let divOne = document.createElement('div');
//     divOne.innerHTML=`name: ${user.name} <br>age: ${user.age}<br> status: ${user.status}<br> address: ${user.address.city}, ${user.address.country}, ${user.address.street} ${user.address.houseNumber}`
//     document.body.appendChild(divOne);
// }


// for (let user of users) {
//     let divOne = document.createElement('div');
//     let divTwo = document.createElement('div');
//     let divThee = document.createElement('div');
//     let divFour = document.createElement('div');
//     let divFive = document.createElement('div');
//
//     divOne.append(divTwo, divThee, divFour, divFive);
//
//     divTwo.innerHTML = `name: ${user.name} <br>`;
//     divThee.innerHTML = `age: ${user.age}<br>`;
//     divFour.innerHTML = `status: ${user.status}<br>`;
//
//     divFive.innerHTML=`address: ${user.address.city}, ${user.address.country}, ${user.address.street} ${user.address.houseNumber}`
//     document.body.appendChild(divOne);
// }


// for (let user of users) {
//     let divOne = document.createElement('div');
//     let divTwo = document.createElement('div');
//     let divThee = document.createElement('div');
//     let divFour = document.createElement('div');
//     let divFive = document.createElement('div');
//
//     divOne.append(divTwo, divThee, divFour, divFive);
//
//     divTwo.innerHTML = `name: ${user.name} <br>`;
//     divThee.innerHTML = `age: ${user.age}<br>`;
//     divFour.innerHTML = `status: ${user.status}<br>`;
//
//     for (let secondUser in user.address) {
//         let divSix = document.createElement('div');
//         divSix.innerHTML =`${secondUser,user.address[secondUser]}`;
//         divFive.append(divSix);
//     }
//     document.body.appendChild(divOne);
// }


// --------------------------------------------------------------------------------------------------------------------------


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


// let elementH2 = document.getElementsByTagName('h2');
// for (let newElements of elementH2) {
//     let id = document.getElementById('content');
//
//
//     let ul = document.createElement('ul');
//     let li = document.createElement('li');
//
//
//     li.appendChild(newElements);
//     ul.appendChild(li);
//     id.appendChild(ul);
//
// }


// ----------------------------------------------------------------------------------------------------------------------------


// ----Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];

//
// let divThree = document.createElement('div');
// let divTwo = document.createElement('div');
//
// divTwo.setAttribute('id', 'wrap');
// divThree.setAttribute('id', 'content');
// let h1 = document.createElement(`h1`);
//
// for (let law of rules) {
//     let divOne = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p')
//
//     divOne.classList.add("rules","rule"+1);
//     h2.innerText = `${law.title}`
//     p.innerText = `${law.body}`
//     divOne.appendChild(h2,);
//     divOne.appendChild(p);
//     divTwo.appendChild(divOne);
//
// }
// h1.innerHTML = `Правила бойцовского клуба`;
// document.body.append(divThree,h1,divTwo);




// --------------------------------------------------------------------------------------------------------------------------