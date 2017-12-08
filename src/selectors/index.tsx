import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';
import { StoreState, Recipe } from '../types/index';

export function getRecipes(state: StoreState) {
  return state.recipes;
}

export const getRecipe = createSelector(
  getRecipes,
  (recipes: Recipe[]) => memoize(
    (recipeId: string) => recipes.filter(recipe => recipe.id === recipeId)[0]
  )
);
