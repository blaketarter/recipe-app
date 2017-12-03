import * as React from 'react';
import styled from 'styled-components';
import { Recipe } from '../types';

import RecipeTile from './RecipeTile';

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 10px;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export interface Props {
  recipes: Recipe[];
  limit?: number;
}

function RecipeList({ recipes, limit }: Props) {
  return (
    <ListWrapper>
      {recipes.slice(0, (limit) ? limit : recipes.length).map((recipe: Recipe) => {
        return (<RecipeTile {...recipe} key={recipe.id} />);
      })} 
   </ListWrapper>
  );
}

export default RecipeList;
