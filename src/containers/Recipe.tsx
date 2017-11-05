import Recipe from '../components/Recipe';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { getRecipe } from '../selectors';

export function mapStateToProps(state: StoreState, { match }: any) {
  return {
    recipe: getRecipe(state, match.params.id),
  }
}

export default connect(mapStateToProps, null)(Recipe);
