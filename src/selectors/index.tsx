import { StoreState } from '../types/index';

export function getRecipe(state: StoreState, recipeId: string) {
  return state.recipes.filter(recipe => recipe.id === recipeId)[0];
}
