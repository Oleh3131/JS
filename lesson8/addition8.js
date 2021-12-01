// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function recall(startEvent) {
    let arrayNew = [];
    if (startEvent.children.length) {
        for (let element of startEvent.children) {
            if (element.getAttribute('class')){
                let splitNew = element.getAttribute('class').split(' ');
                let mainArray = arrayNew.concat(splitNew);
                arrayNew = mainArray;
                if (arrayNew.length >= 16) {
                    console.log(arrayNew)
                }
            }
            recall(element);
        }
    }
}

recall(document.body);


