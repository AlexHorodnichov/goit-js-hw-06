const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
const array = ingredients.map(ingredient => {


  const li = document.createElement('li');

  const name = document.createElement('p');

  name.textContent = ingredient;
li.classList.toggle('item');
  li.appendChild(name);

  return li;
 });

 list.append(...array)