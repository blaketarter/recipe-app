import CreateStep1 from '../components/CreateStep1';
import { StoreState, Recipe } from '../types/index';
import { AddNewRecipe } from '../actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

export function mapStateToProps(state: StoreState) {
  return {
    newRecipe: state.newRecipe,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>) {
  return {
    addNewRecipe: (newRecipe: Partial<Recipe>) => dispatch(AddNewRecipe(newRecipe))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStep1 as any);
