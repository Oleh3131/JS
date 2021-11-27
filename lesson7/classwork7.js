// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car




// function Car(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year_of_manufacture = year_of_manufacture;
//     this.maximum_speed = maximum_speed;
//     this.engine_capacity = engine_capacity;
//     this.speedDrive = function (drive) {
//         return `Їдемо зі швидкістю ${this.maximum_speed} на годину`;
//     };
//     this.mainInfo = function (info) {
//         return ` model-${this.model}, manufacturer- ${this.manufacturer}, year_of_manufacture- ${this.year_of_manufacture}, maximum_speed- ${this.maximum_speed}, engine_capacity- ${this.engine_capacity}`
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maximum_speed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         return this.year_of_manufacture = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         driver = {
//             name: 'OLya',
//             age: 23
//         }
//          this.driver = driver;
//     }
// }
//
// let mainCar = new Car('BMW F34', 'Germany', 2013, 250, 2);
// console.log(mainCar);
// console.log(mainCar.speedDrive());
// console.log(mainCar.mainInfo());
// console.log(mainCar.increaseMaxSpeed(50));
// console.log(mainCar.changeYear(2015));
// mainCar.addDriver();




// --------------------------------------------------------------------------------------------------------------------------


// - (Те саме, тільки через клас)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



//
// class Car {
//     constructor(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year_of_manufacture = year_of_manufacture;
//         this.maximum_speed = maximum_speed;
//         this.engine_capacity = engine_capacity;
//     }
//     drive() {
//         return `Їдемо зі швидкістю ${this.maximum_speed} на годину`;
//     };
//     info() {
//         return ` model-${this.model}, manufacturer- ${this.manufacturer}, year_of_manufacture- ${this.year_of_manufacture}, maximum_speed- ${this.maximum_speed}, engine_capacity- ${this.engine_capacity}`
//     };
//     increaseMaxSpeed (newSpeed) {
//         return this.maximum_speed + newSpeed;
//     };
//     changeYear(newValue) {
//         return this.year_of_manufacture = newValue;
//     }
//
//     addDriver(driver) {
//         driver = {
//             name: 'OLya',
//             age: 23
//         }
//          this.driver = driver;
//     }
// }
// let mainCar = new Car('BMW F34', 'Germany', 2013, 250, 2);
// console.log(mainCar);
// console.log(mainCar.drive());
// console.log(mainCar.info());
// console.log(mainCar.increaseMaxSpeed(50));
// console.log(mainCar.changeYear(2015));
// mainCar.addDriver();





// ---------------------------------------------------------------------------------------------------------------------------





// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// function Popelushka (username,age,foot_size){
//     this.username = username;
//     this.age = age;
//     this.foot_size = foot_size;
// }
//
// let Girls = [
//     new Popelushka(`Agata`,56,45),
//     new Popelushka(`Makaka`,48,42),
//     new Popelushka(`Poputa`,44,50),
//     new Popelushka(`Korona`,88,37),
//     new Popelushka(`Lanta`,106,50),
//     new Popelushka(`Olisia`,75,50),
//     new Popelushka(`Loma`,60,66),
//     new Popelushka(`Usya`,67,29),
//     new Popelushka(`Kate`,25,36),
//     new Popelushka(`Mate`,47,97)
// ];
// console.log(Girls);



// -------------------------------------------------------------------------------------------------------------------------


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince {
//     constructor(newname,age, shoe_found) {
//         this.newname = newname;
//         this.age = age;
//         this.shoe_found = shoe_found;
//     }
// }
// let Result = new Prince('Robert',36,36)
// console.log(Result);

// -------------------------------------------------------------------------------------------------------------------------


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let mainResult = (Girls,Result) => {
//     for (let resultSize of Girls) {
//         if (resultSize.foot_size===Result.shoe_found){
//             return resultSize;
//         }
//     }
// };
// console.log(mainResult(Girls,Result));


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let find = Girls.find(value => value.foot_size === 36);
// console.log(find);


// --------------------------------------------------------------------------------------------------------------------------