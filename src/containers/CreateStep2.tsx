import CreateStep2 from '../components/CreateStep2';
import { StoreState, Recipe } from '../types/index';
import { AddRecipe, ClearNewRecipe } from '../actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

export function mapStateToProps(state: StoreState) {
  return {
    newRecipe: state.newRecipe,
    numberOfRecipes: state.recipes.length,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>) {
  return {
    addRecipe: (newRecipe: Recipe) => dispatch(AddRecipe(newRecipe)),
    clearNewRecipe: () => dispatch(ClearNewRecipe()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStep2 as any);
