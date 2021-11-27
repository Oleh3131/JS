// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

//
// function User(id, mainname, username, email, userStreet, userSuite, userCity, userZipcode, userLat, userLng, phone, website, companyName, catchPhrase, userBs) {
//     this.id = id;
//     this.mainname = mainname;
//     this.username = username;
//     this.email = email;
//     this.address = {
//         street: userStreet, suite: userSuite, city: userCity, zipcode: userZipcode,
//         geo: {
//             lat: userLat, lng: userLng
//         }
//     }
//     this.phone = phone;
//     this.website = website;
//     this.company = {
//         companyame: companyName, phrase: catchPhrase, bs: userBs
//     }
// }
//
// let newUser = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
// console.log(newUser);




// --------------------------------------------------------------------------------------------------------------------------




// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }







//
// function Tegs(titleOfTag, titleOfAttr, titleOfAttr2, action, actionOfATTr, actionOfATTr2) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = [{
//         titleofattr: titleOfAttr, actionofattr: actionOfATTr
//     },
//         {
//             titleofattr: titleOfAttr2, actionofattr: actionOfATTr2
//
//         }];
// }
//
// let mainTags = new Tegs(
//     `<a>`,
//     `charset`,
//     `coords`,
//     `Тег < a > является одним из важных элементов HTML и предназначен для создания ссылок.`,
//     `Используется для указания кодировки текста, на который ведет ссылка.`,
//     `Атрибут coords применяется к ссылкам, которые располагаются внутри контейнера object.`
// );
// console.log(mainTags);
//
// let mainTags2 = new Tegs(
//     `<div>`,
//     `align`,
//     `title`,
//     `Элемент < div > является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. `,
//     `Выравнивание содержимого контейнера < div > по краю.`,
//     `Добавляет поясняющий текст к контейнеру < div > в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом.`
// );
// console.log(mainTags2);
//
// let mainTags3 = new Tegs(
//     `<h1>`,
//     `align`,
//     `style`,
//     `Тег < h1 > представляет собой наиболее важный заголовок первого уровня.`,
//     `Выравнивание заголовка текста по краю.`,
//     `Применяется для определения стиля элемента с помощью правил CSS.`
// );
// console.log(mainTags3);
//
// let mainTags4 = new Tegs(
//     `<span>`,
//     `class`,
//     `hidden`,
//     `Тег < span > предназначен для определения строчных элементов документа.`,
//     `Определяет имя класса, которое позволяет связать тег со стилевым оформлением.`,
//     `Скрывает содержимое элемента от просмотра.`
// );
// console.log(mainTags4);
//
// let mainTags5 = new Tegs(
//     `<input>`,
//     `form`,
//     `pattern`,
//     `Тег < input > является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. `,
//     `Связывает поле с формой по её идентификатору.`,
//     `Указывает регулярное выражение, согласно которому требуется вводить и проверять данные в поле формы.`
// );
// console.log(mainTags5);
//
// let mainTags6 = new Tegs(
//     `<form>`,
//     `accept-charset`,
//     `novalidate`,
//     `Тег < form > устанавливает форму на веб-странице. `,
//     `Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные формы.`,
//     `Отменяет встроенную проверку данных введенных пользователем в форме на корректность.`
// );
// console.log(mainTags6);
//
// let mainTags7 = new Tegs(
//     `<option>`,
//     `disabled`,
//     `value`,
//     `Тег < option > определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. `,
//     `Блокирует элемент списка для его выбора.`,
//     `Определяет значение пункта списка, которое будет отправлено на сервер.`
// );
// console.log(mainTags7);
//
// let mainTags8 = new Tegs(
//     `<select>`,
//     `tabindex`,
//     `multiple`,
//     `Тег < select > позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, `,
//     `Атрибут tabindex определяет последовательность перехода между элементами при нажатии на клавишу Tab.`,
//     `Наличие атрибута multiple сообщает браузеру отображать содержимое элемента < select > как список множественного выбора.`
// );
// console.log(mainTags8);





// -------------------------------------------------------------------------------------------------------------------------