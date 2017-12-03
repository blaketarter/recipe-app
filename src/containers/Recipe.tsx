import Recipe from '../components/Recipe';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { match as matchProps } from 'react-router-dom';
import { getRecipe } from '../selectors';

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

export default connect(mapStateToProps, null)(Recipe);
