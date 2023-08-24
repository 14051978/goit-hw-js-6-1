const validationInput = document.getElementById('validation-input');
const validLength = parseInt(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', () => {
    const inputValue = validationInput.value;

    if (inputValue.length === validLength) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});