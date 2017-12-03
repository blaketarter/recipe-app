import { createStore } from 'redux';
import { recipes } from '../reducers/index';
import { StoreState } from '../types/index';

import { recipes as defaultRecipes } from '../utils/initfakeData';

interface ReduxDevtoolsWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

const store = createStore<StoreState>(recipes, {
  recipes: defaultRecipes,
}, (window as ReduxDevtoolsWindow).__REDUX_DEVTOOLS_EXTENSION__ &&
   (window as ReduxDevtoolsWindow).__REDUX_DEVTOOLS_EXTENSION__());  

export default store;
