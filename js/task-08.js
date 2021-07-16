// Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const inputEl = document.querySelector('#controls');
const input = document.querySelector('input');
const createButtonEl = document.querySelector('button[data-action="render"]');
const deleteButtonEl = document.querySelector('button[data-action="destroy"]');
const AddBoxes = document.querySelector('#boxes');

let start_size = 30;


function createBoxes(amount) {
    amount = Number(input.value);
console.log(amount);
    for (let i = 0; i < amount; i ++) {

        const r = Math.floor(Math.random() * (256));
        const g = Math.floor(Math.random() * (256));
        const b = Math.floor(Math.random() * (256));
        const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    let newBox = document.createElement('div');
        newBox.style.marginBottom = "10px";
        newBox.style.borderWidth = "3px";
        newBox.style.borderColor = 'black';
        newBox.style.borderStyle = "dashed";
    newBox.style.width = `${start_size + 10*i}px`;
    newBox.style.height = `${start_size + 10*i}px`;
    newBox.style.backgroundColor = color;

    console.log(newBox.style);

    newBox.classList.add('new');
    AddBoxes.appendChild(newBox);
    }
inputEl.value = "";
}



function destroyBoxes() {
    AddBoxes.innerHTML = "";
    };

createButtonEl.addEventListener('click', createBoxes);
deleteButtonEl.addEventListener('click', destroyBoxes);