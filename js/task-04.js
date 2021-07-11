const counter = {
    value: 0,
    increment () {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement () {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.getElementById('counter').firstElementChild;
const incrementBtn = document.getElementById('counter').lastElementChild;
const valueEl = document.getElementById('value');
console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

decrementBtn.addEventListener('click', function () {
    console.log('кликнули на декремент');
    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', function () {
    console.log('кликнули на инкремент');
    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});