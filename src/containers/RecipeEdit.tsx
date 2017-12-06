import RecipeEdit from '../components/RecipeEdit';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import { match as matchProps } from 'react-router-dom';
import { getRecipe } from '../selectors';
import { UpdateRecipe } from '../actions';
import { Recipe } from '../types';

interface Params {
  id: string;
}

interface Route {
  match: matchProps<Params>;
}

export function mapStateToProps(state: StoreState, { match }: Route) {
  return {
    recipe: getRecipe(state)(match.params.id),
  }
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>) {
  return {
    updateRecipe: (recipe: Recipe) => dispatch(UpdateRecipe(recipe)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEdit as any);
