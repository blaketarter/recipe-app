export interface Recipe {
  id: string;
  name: string;
  image?: string;
  description?: string;
  color: string;
  ingredients: string[];
};

export type RecipesState = Recipe[];
export type NewRecipeState = Partial<Recipe>;

export interface StoreState {
  readonly recipes: RecipesState;
  readonly newRecipe: NewRecipeState;
}
