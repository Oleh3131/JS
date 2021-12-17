

// Зробити свій розпорядок дня.
// У вас має бути більше 8 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою callback, promises та async await (Код має бути написаний окремо)
// Затримка має бути не в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.



// -------------------------------------------------CALLBACK----------------------------------------------------------------------


// let daytime = 15;
//
// function wakeUp(isDone, callback) {
//     setTimeout(() => {
//         if (isDone) {
//             daytime -= 0.5;
//             console.log('Good morning');
//             callback();
//         } else {
//             console.log('You need to wake up');
//         }
//     }, 2000);
// }
//
// function brushmyTeeth(isBrushed, callbacktwo) {
//     setTimeout(() => {
//         console.log(daytime + 'h')
//         if (isBrushed) {
//             daytime -= 0.2;
//             console.log('My teeth are very clean');
//             callbacktwo();
//         } else {
//             console.log('Day is not start good')
//         }
//     }, 500);
// }
//
// function haveBreakfast(breakfast, callbackthree) {
//     setTimeout(() => {
//         console.log(daytime + 'h')
//         if (breakfast) {
//             daytime -= 1;
//             callbackthree(null,'I am not hungry');
//         } else {
//             callbackthree('I hate this day',null);
//         }
//     }, 1500);
// }
//
// function waitforBus(bus, callbackfour) {
//     setTimeout(() => {
//         console.log(daytime + 'h')
//         if (bus) {
//             daytime -= 0.5;
//             console.log('Bus arrived');
//             callbackfour();
//         } else {
//             console.log('Bus does not arrive');
//         }
//     }, 800);
// }
//
// function atWork(doingwork, callbackfive) {
//     setTimeout(() => {
//         console.log(daytime + 'h')
//         if (doingwork) {
//             daytime -= 8.0;
//             console.log('Day will be very productive');
//             callbackfive();
//         } else {
//             console.log('It was very bizzy day');
//         }
//     }, 3000);
// }
//
// function gofordinner(dinner, callbacksix) {
//     setTimeout(() => {
//         console.log(daytime + 'h')
//         if (dinner) {
//             daytime -= 0.5;
//             callbacksix(null, 'I can relax');
//         } else {
//             callbacksix('I do not have relax', null);
//         }
//     }, 800);
// }
//
// function gohome(way, callbackseven) {
//     setTimeout(() => {
//         console.log(daytime + 'h')
//         if (way) {
//             daytime -= 1;
//             console.log('huuuuuh');
//             callbackseven();
//         } else {
//             console.log('i need to work more');
//         }
//     }, 1000);
// }
//
// function gotobed(sleep) {
//     setTimeout(() => {
//         console.log(daytime + 'h')
//         if (sleep && daytime > 2) {
//             daytime -= 0.2;
//             console.log('Good night');
//             console.log(`${daytime}----Remaining time`);
//         } else {
//             console.log('zzzzzzzz');
//         }
//     }, 200);
// }
//
//
// wakeUp(true, () => {
//     brushmyTeeth(daytime, () => {
//         haveBreakfast(false, (err, date) => {
//             if (err) {
//                 console.log(err);
//                 waitforBus(true, () => {
//                     atWork(true, () => {
//                         gofordinner(false, (err2, data2) => {
//                             if (err2) {
//                                 console.log(err2);
//                                 gohome(true, () => {
//                                     gotobed(true);
//                                 });
//                             } else {
//                                 console.log(data2);
//                             }
//                         });
//                     });
//                 });
//             } else {
//                 console.log(date);
//             }
//         });
//     });
// });


// --------------------------------------------------PROMISE------------------------------------------------------------------------


// let daytime = 15;
//
// function wakeUp(isDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDone) {
//                 daytime -= 0.5;
//                 console.log('Good morning');
//                 resolve(daytime);
//             } else {
//                 console.log('You need to wake up');
//                 reject('I do not want to wake up');
//             }
//         }, 2000)
//     })
// }
//
// function brushmyTeeth(isBrushed) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(daytime + 'h')
//             if (isBrushed) {
//                 daytime -= 0.2;
//                 console.log('My teeth are very clean');
//                 resolve('I did it');
//             } else {
//                 console.log('Day is not start good')
//                 reject('Woow');
//             }
//         }, 500);
//     })
// }
//
// function haveBreakfast(breakfast) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(daytime + 'h')
//             if (breakfast) {
//                 daytime -= 1;
//                 console.log('I am not hungry');
//                 resolve('It is very tasty');
//             } else {
//                 console.log('I hate this day');
//                 reject('I am very hungry');
//             }
//         }, 1500);
//     })
// }
//
// function waitforBus(bus) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(daytime + 'h')
//             if (bus) {
//                 daytime -= 0.5;
//                 console.log('Bus arrived');
//                 resolve(`I waited`);
//             } else {
//                 console.log('Bus does not arrive');
//                 reject(`It is cold outside`);
//             }
//         }, 800);
//     })
// }
//
// function atWork(doingwork) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(daytime + 'h')
//             if (doingwork) {
//                 daytime -= 8.0;
//                 console.log('Day will be very productive');
//                 resolve('It is very interesting');
//             } else {
//                 console.log('It was very bizzy day');
//                 reject('I am tired');
//             }
//         }, 3000);
//     })
// }
//
// function gofordinner(dinner) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(daytime + 'h')
//             if (dinner) {
//                 daytime -= 0.5;
//                 console.log('I can relax');
//                 resolve('That is great');
//             } else {
//                 console.log('I do not have relax');
//                 reject('I want go home');
//             }
//         }, 800);
//     })
// }
//
// function gohome(way) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(daytime + 'h')
//             if (way) {
//                 daytime -= 1;
//                 console.log('huuuuuh');
//                 resolve('I am at home');
//             } else {
//                 console.log('i need to work more');
//                 reject('It is too long');
//             }
//         }, 1000);
//     })
// }
//
// function gotobed(sleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(daytime + 'h')
//             if (sleep && daytime>2) {
//                 daytime -= 0.2;
//                 console.log('Good night');
//                 resolve('zzzzzzzz');
//                 console.log(`${daytime}----Remaining time`);
//             } else {
//                 console.log('I want sleeeeeeep');
//                 reject('Where is my bed???');
//             }
//         }, 200);
//     })
// }

// wakeUp(true)
//     .then(hour=>{
//         return  brushmyTeeth(hour)
//     })
//     .then(result=>{
//         console.log(result);
//
//         return  haveBreakfast(true);
//     })
//     .then(result=>{
//         console.log(result);
//
//         return   waitforBus(true);
//     })
//     .then(result=>{
//         console.log(result);
//
//         return   atWork(true);
//     })
//     .then(result=>{
//         console.log(result);
//
//         return gofordinner(true);
//     })
//     .then(result=>{
//         console.log(result);
//
//         return gohome(true);
//     })
//     .then(result=>{
//         console.log(result);
//
//         return gotobed(true);
//     })
//     .then(result=>{
//         console.log(result);
//     })


// -------------------------------------------------------ASYNC/AWAIT------------------------------------------------------------------


// async function myWeekday() {
//     const result = await wakeUp(true);
//     const result2 = await brushmyTeeth(true);
//     const result3 = await haveBreakfast(true);
//     const result4 = await waitforBus(true);
//     const result5 = await atWork(true);
//     const result6 = await gofordinner(true);
//     const result7 = await gohome(true);
//     const result8 = await gotobed(true);
//
//
//     console.log(result, 'result');
//     console.log(result2, 'result');
//     console.log(result3, 'result');
//     console.log(result4, 'result');
//     console.log(result5, 'result');
//     console.log(result6, 'result');
//     console.log(result7, 'result');
//     console.log(result8, 'result');
// }
//
// myWeekday();


// -------------------------------------------------------ASYNC/AWAIT------------------------------------------------------------------