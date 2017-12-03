import * as React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import COLOR from '../utils/colors';
import Home from '../containers/Home';
import Search from './Search';
import Tags from './Tags';
import Profile from './Profile';
import Create from './Create';
import Recipe from '../containers/Recipe';
import Navbar from './Navbar';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Wrapper>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/tags" component={Tags} />
              <Route path="/profile" component={Profile} />
              <Route path="/create" component={Create} />
              <Route path="/recipe/:id" component={Recipe} />
            </Switch>
            <Navbar />
          </Wrapper>
        </Router>
      </ Provider>
    );
  }
}

const Wrapper = styled.div`
  overflow: hidden;
  background: ${COLOR.LIGHTGREY};
  color: ${COLOR.BLACK};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default App;
