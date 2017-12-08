import { match as matchProps } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import Recipe from '../components/Recipe';
import { StoreState, Recipe as RecipeType } from '../types';
import { getRecipe } from '../selectors';
import { DeleteRecipe } from '../actions';

interface Params {
  id: string,
}

interface Route {
  match: matchProps<Params>,
}

export function mapStateToProps(state: StoreState, { match }: Route) {
  return {
    recipe: getRecipe(state)(match.params.id),
  };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>) {
  return {
    deleteRecipe: (recipe: RecipeType) => dispatch(DeleteRecipe(recipe)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe as any);
