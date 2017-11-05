import * as constants from '../constants'
import { Recipe } from '../types';

export interface AddRecipe {
    type: constants.ADD_RECIPE;
    payload: Recipe,
}

export type RecipeActions = AddRecipe;

export function AddRecipe(payload: Recipe): AddRecipe {
    return {
        type: constants.ADD_RECIPE,
        payload,
    }
}
