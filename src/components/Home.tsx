import * as React from 'react';
import styled from 'styled-components';
import PageWrapper from './PageWrapper';
import PageHeader from './PageHeader';
import RecipeList from './RecipeList';
import { Recipe } from '../types';
import { nicecolors } from '../utils/colors';

export interface Props {
}

const Title = styled.h2`
  margin: 0;
  font-size: 36px;
`;

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
    image: `//lorempixel.com/400/400/food/${Math.min(i, (i % 10) + 1)}`,
    description: 'this is a recipe',
    color: nicecolors[Object.keys(nicecolors)[Math.floor(Math.random() * Object.keys(nicecolors).length)]],
    ingredients: getRandomXFrom(ingredients, Math.max(10, Math.floor(Math.random() * 15))),
  });
}

console.log(recipes);

function Home({}: Props) {
  return (
    <PageWrapper>
      <PageHeader>
        <Title>Recipe App</Title>
      </PageHeader>

      <RecipeList recipes={recipes} limit={20} />
    </PageWrapper>
  );
}

export default Home;
