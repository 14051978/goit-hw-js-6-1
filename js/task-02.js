const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector(`#ingredients`);
const itemsIngredientsEl = [];
 function createItemEl(arr) {
  arr
  .map ((item ) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = item;
  itemsIngredientsEl.push(li);

})
.join ("");
ul.append(...itemsIngredientsEl)}

createItemEl(ingredients);