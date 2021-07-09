const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const items = document.querySelector('#ingredients');


const makeItemsList = ingredients => {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;
  });
};

const result = makeItemsList(ingredients);
items.append(...result);