import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { recipes, newRecipe } from '../reducers/index';
import { StoreState } from '../types/index';

const config = {
  key: 'root',
  storage,
};

interface ReduxDevtoolsWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

const combinedReducers = persistCombineReducers<StoreState>(config, {
  recipes,
  newRecipe,
});

export const configureStore = () => {
  const store = createStore<StoreState>(
    combinedReducers,
    (window as ReduxDevtoolsWindow).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as ReduxDevtoolsWindow).__REDUX_DEVTOOLS_EXTENSION__()
  );

  const persistor = persistStore(store);

  return { store, persistor };
};
