// Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const inputEl = document.querySelector('#controls');
const createButtonEl = document.querySelector('button[data-action="render"]');
const deleteButtonEl = document.querySelector('button[data-action="destroy"]');
const AddBoxes = document.querySelector('#boxes');


createButtonEl.addEventListener('click', () => createBoxes(inputEl.value));
deleteButtonEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    let start_size = 30;
    let boxesArray = [];
    for(let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('newBox');
    newBox.style.width = start_size + '30px';
    newBox.style.height = start_size + '30px';
    newBox.style.backgroundColor = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;

    boxesArray.push(newBox);
    }}

    const random = () => {
        return Math.floor(Math.random() * 256);
    };

function destroyBoxes() {
        boxes.innerHTML = '';
    }

