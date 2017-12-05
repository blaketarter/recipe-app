import { Recipe } from '../types';
import { nicecolors } from './colors';

const recipes: Recipe[] = [];

const ingredients = [
  'bread',
  'water',
  'sugar',
  'flour',
  'butter',
  'chocolate',
  'pasta',
  'chicken',
  'tuna',
  'fish',
  'salt',
  'pepper',
  'oil'
];

function getRandomXFrom(list: any[], number: number) {
  const newList = [];

  for (let i = 0; i < number; i++) {
    newList.push(list[Math.floor(Math.random() * list.length)]);
  }

  return newList;
}

for (let i = 1, ii = 12; i <= ii; i++) {
  recipes.push({
    id: `r${i}`,
    name: 'Test Recipe ' + i,
    image: `//via.placeholder.com/400x400`,
    description: 'Irure anim adipisicing incididunt commodo cillum eiusmod id ad irure ex anim. Dolor aliqua amet minim id aliqua Lorem. Aute labore laborum dolor irure deserunt occaecat dolore commodo mollit ad. Occaecat amet nisi ad amet velit cupidatat tempor laboris labore ut sit consequat do sint.',
    color: nicecolors[Object.keys(nicecolors)[Math.floor(Math.random() * Object.keys(nicecolors).length)]],
    ingredients: getRandomXFrom(ingredients, Math.max(10, Math.floor(Math.random() * 15))),
  });
}

export { recipes };
