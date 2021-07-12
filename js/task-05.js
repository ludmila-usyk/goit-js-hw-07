
const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

    inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
      if (inputEl.value === '') {
        spanEl.innerHTML = 'незнакомец';
  } else {
    spanEl.innerHTML = inputEl.value;
  }
};
console.log(spanEl);

