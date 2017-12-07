import * as constants from '../constants'
import { Recipe } from '../types';

export interface AddRecipe {
    type: constants.ADD_RECIPE;
    payload: Recipe,
}

export function AddRecipe(payload: Recipe): AddRecipe {
    return {
        type: constants.ADD_RECIPE,
        payload,
    }
}

export interface UpdateRecipe {
    type: constants.UPDATE_RECIPE;
    payload: Recipe,
}

export function UpdateRecipe(payload: Recipe): UpdateRecipe {
    return {
        type: constants.UPDATE_RECIPE,
        payload,
    }
}

export interface DeleteRecipe {
    type: constants.DELETE_RECIPE;
    payload: Recipe,
}

export function DeleteRecipe(payload: Recipe): DeleteRecipe {
    return {
        type: constants.DELETE_RECIPE,
        payload,
    }
}

export type RecipeActions = AddRecipe | UpdateRecipe | DeleteRecipe;

export interface AddNewRecipe {
    type: constants.ADD_NEW_RECIPE;
    payload: Partial<Recipe>;
}

export function AddNewRecipe(payload: Partial<Recipe>): AddNewRecipe {
    return {
        type: constants.ADD_NEW_RECIPE,
        payload,
    }
}

export interface ClearNewRecipe {
    type: constants.CLEAR_NEW_RECIPE;
}

export function ClearNewRecipe(): ClearNewRecipe {
    return {
        type: constants.CLEAR_NEW_RECIPE,
    }
}

export type NewRecipeActions = AddNewRecipe | ClearNewRecipe;
