export interface Recipe {
  id: string,
  name: string,
  image?: string,
  description?: string,
  color: string,
  ingredients: string[],
};

export interface StoreState {
  recipes: Recipe[],
}
