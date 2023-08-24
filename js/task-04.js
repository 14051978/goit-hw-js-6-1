const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let currentValue = 0;

function updateValue(newValue) {
    counterValue.textContent = newValue;
}

decrementButton.addEventListener('click', () => {
    currentValue -= 1;
    updateValue(currentValue);
});

incrementButton.addEventListener('click', () => {
    currentValue += 1;
    updateValue(currentValue);
});

updateValue(currentValue);