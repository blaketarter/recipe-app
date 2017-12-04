import { createStore, combineReducers } from 'redux';
import { recipes, newRecipe } from '../reducers/index';
import { StoreState } from '../types/index';

import { recipes as defaultRecipes } from '../utils/initfakeData';

interface ReduxDevtoolsWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

const combinedReducers = combineReducers<StoreState>({
  recipes,
  newRecipe,
});

const preloadedState = {
  recipes: defaultRecipes,
  newRecipe: {
    name: '',
    image: '',
  },
};

const store = createStore<StoreState>(
  combinedReducers,
  preloadedState,
  (window as ReduxDevtoolsWindow).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as ReduxDevtoolsWindow).__REDUX_DEVTOOLS_EXTENSION__()
);  

export default store;
