

// - Імітуємо наповнення інтернет магазину товарами :
//    Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсторадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


let form = document.getElementById('mainForm');
let button = document.getElementById('mainButton');


let mainArray = [];
form.onsubmit = function (e) {
    e.preventDefault();

    let productName = `${form.productName.value}`;
    let productNumber = `${form.productNumber.value}`;
    let productPrice = `${form.productPrice.value}`;
    let pictureURL = `${form.pictureURL.value}`;
    let mainValue = `Product name: ${productName},Amount number: ${productNumber},Product price ${productPrice},Picture: ${pictureURL}`;
    mainArray.push(mainValue);
    localStorage.setItem('time', JSON.stringify(mainArray));
    let data = localStorage.getItem('time');
    let newArray = JSON.parse(data);
    for (let newObject=0;newObject>=newArray.length;newObject++) {
        newArray.push(newObject);
        localStorage.setItem('time', JSON.stringify(newArray));
    }
};


