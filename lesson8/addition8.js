// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function recall(startEvent) {
    let arrayNew = [];
    if (startEvent.children.length) {
        for (let element of startEvent.children) {
            if (element.getAttribute('class')) {
                arrayNew=element.getAttribute('class');
                console.log(arrayNew);
            }
            recall(element);
        }
    }
}

recall(document.body);


