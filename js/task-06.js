const inputEl = document.getElementById('validation-input');

console.log(inputEl);

inputEl.addEventListener('change', (event) => {
    if (Number(inputEl.getAttribute('data-length')) == event.target.value.length) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    };});
    

