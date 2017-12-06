import { RecipeActions, NewRecipeActions } from '../actions';
import { NewRecipeState, RecipesState } from '../types/index';
import { ADD_RECIPE, ADD_NEW_RECIPE, CLEAR_NEW_RECIPE, UPDATE_RECIPE } from '../constants/index';

export function recipes(state: RecipesState = [], action: RecipeActions): RecipesState {
  switch (action.type) {
    case ADD_RECIPE:
      return [...state, action.payload];
    case UPDATE_RECIPE:
      return state.map(recipe => {
        if (recipe.id !== action.payload.id) {
          return recipe;
        }
        return { ...recipe, ...action.payload };
      });
    default:
      return state;
  }
}

export function newRecipe(state: NewRecipeState = {}, action: NewRecipeActions): NewRecipeState {
  switch (action.type) {
    case ADD_NEW_RECIPE:
      return { ...state, ...action.payload };
    case CLEAR_NEW_RECIPE:
      return {};  
    default:
      return state;
  }
}
