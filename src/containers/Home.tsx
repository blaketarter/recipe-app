import Home from '../components/Home';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';

export function mapStateToProps({ recipes }: StoreState) {
  return {
    recipes,
  }
}

export default connect(mapStateToProps, null)(Home);
