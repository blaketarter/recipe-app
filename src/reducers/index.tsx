import { RecipeActions } from '../actions';
import { StoreState } from '../types/index';
import { ADD_RECIPE } from '../constants/index';

export function recipes(state: StoreState, action: RecipeActions): StoreState {
  switch (action.type) {
    case ADD_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
  }
  return state;
}
