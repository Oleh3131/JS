// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let mainArray = [
//     new User(31, 'Oleh', 'Olshevskyi', 'olshevskyi@ukr.net', '+3806778145'),
//     new User(20, 'Peter', 'Kolotun', 'kolotun@gmail.com', '+3809834521'),
//     new User(15, 'Kolya', 'Kolotun', 'kolotun@gmail.com', '+3809834521'),
//     new User(28, 'Bill', 'Kolotun', 'kolotun@gmail.com', '+3809834521'),
//     new User(65, 'Roman', 'Kolotun', 'kolotun@gmail.com', '+3809834521'),
//     new User(45, 'Mike', 'Kolotun', 'kolotun@gmail.com', '+3809834521'),
//     new User(31, 'Joi', 'Kolotun', 'kolotun@gmail.com', '+3809834521'),
//     new User(98, 'Linda', 'Kolotun', 'kolotun@gmail.com', '+3809834521'),
//     new User(105, 'Pol', 'Kolotun', 'kolotun@gmail.com', '+3809834521'),
//     new User(34, 'Rob', 'Kolotun', 'kolotun@gmail.com', '+3809834521')
// ];
//
// console.log(mainArray);



// ---------------------------------------------------------------------------------------------------------------------------


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

// let filter = mainArray.filter(value => {
//     if (value.id % 2 === 0) {
//         return mainArray;
//     }
// })
// console.log(filter);



// ---------------------------------------------------------------------------------------------------------------------------


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

// let newFilter = mainArray.sort((first, second) => {
//     return first.id - second.id;
// });
// console.log(newFilter);



// --------------------------------------------------------------------------------------------------------------------------




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, other) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.other = other;
//     }
// }
//
// let mainClient = [
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['tomato','potato','onion','cabage','carrot','milk','pasta']),
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['tomato','potato','onion','pasta']) ,
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['tomato','potato','onion','cabage','carrot']) ,
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['milk','pasta']) ,
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['tomato','potato','onion','cabage','carrot','milk']) ,
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['tomato','potato','carrot','milk','pasta']) ,
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['tomato','potato','onion','cabage','carrot','milk','pasta']) ,
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['tomato']) ,
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['tomato','carrot','milk','pasta']) ,
//     new Client('18','Rob','Robertson','robertson@gmail.com','+380987256514',['tomato','potato','onion'])
// ];
//
// console.log(mainClient);
//
//


// ------------------------------------------------------------------------------------------------------------------------------



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// let newClient = mainClient.sort((first, second) => {
//     return first.other.length - second.other.length;
// });
// console.log(newClient);



// ------------------------------------------------------------------------------------------------------------------------------