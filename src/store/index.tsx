import { createStore } from 'redux';
import { recipes } from '../reducers/index';
import { StoreState } from '../types/index';

import { recipes as defaultRecipes } from '../utils/initfakeData';

const store = createStore<StoreState>(recipes, {
  recipes: defaultRecipes,
},  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&  (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;
