// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length, str2.length, str3.length);


// ---------------------------------------------------------------------------------------------------------------------



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let newCase = str1.toUpperCase();
// console.log(newCase);
// let str2 = 'lorem ipsum';
// let newCase2 = str2.toUpperCase();
// console.log(newCase2);
// let str3 = 'javascript is cool';
// let newCase3 = str3.toUpperCase();
// console.log(newCase3);



// ---------------------------------------------------------------------------------------------------------------------


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'



// let str1 = 'HELLO WORLD';
// let newCase = str1.toLowerCase();
// console.log(newCase);
// let str2 = 'LOREM IPSUM';
// let newCase2 = str2.toLowerCase();
// console.log(newCase2);
// let str3 = 'JAVASCRIPT IS COOL';
// let newCase3 = str3.toLowerCase();
// console.log(newCase3);



// ---------------------------------------------------------------------------------------------------------------------

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let clearnString = str.trim();
// console.log(clearnString);



// ------------------------------------------------------------------------------------------------------------------------



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']



// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let arr = stringToarray(str);
// console.log(arr);
// document.write(arr);




// ------------------------------------------------------------------------------------------------------------------------





// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый



// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//     return str.substring(0,length);
// };
// let arr = delete_characters(str,7)
// console.log(arr);
// document.write(arr);




// -------------------------------------------------------------------------------------------------------------------------



//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'



// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     return str.replaceAll(' ', '-').toUpperCase();
// };
// console.log(insert_dash(str));
// document.writeln(insert_dash(str));




// -----------------------------------------------------------------------------------------------------------------------------




// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let expression =`programming is our everything`;
// let line = (newLine) => {
//         return newLine[0].toUpperCase()+newLine.substring(1);
// };
// console.log(line(`programming is our everything`));
// document.write(line(`programming is our everything`));
//




// -------------------------------------------------------------------------------------------------------------------------

