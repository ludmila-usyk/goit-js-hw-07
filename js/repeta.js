//01 const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenersBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click',() => {
//     console.log('Вешаю слушателя собітия на целевую кнопку');
//     targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenersBtn.addEventListener('click', () => {
//     console.log('снимаю слушателя собітия с целевой кнопки');
//     targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick() {
//     console.log('клик по целевой кнопке');
// };


//02 const form = document.querySelector('.js-register-form');
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
  
//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> value', value);
//         console.log('onFormSubmit -> name', name);
//     });
// };


//03
const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
}
// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);
refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
    console.log('инпут получил focus - собитие focus');
};
function onInputBlur() {
    console.log('инпут потерял focus - собитие blur');
};
function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
};
function onLicenseChange(event) {
    console.log(event.currentTarget.checked);
    console.log('refs.btn.disabled: ', refs.btn.disabled);

    refs.btn.disabled = !event.currentTarget.checked;
};
