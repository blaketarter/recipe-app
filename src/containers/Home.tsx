import { connect } from 'react-redux';
import Home from '../components/Home';
import { StoreState } from '../types/index';

export function mapStateToProps({ recipes }: StoreState) {
  return {
    recipes,
  };
}

export default connect(mapStateToProps, null)(Home);
