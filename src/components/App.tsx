import * as React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import COLOR from '../utils/colors';
import Home from '../containers/Home';
import Search from './Search';
import Tags from './Tags';
import Profile from './Profile';
import Create from './Create';
import Recipe from '../containers/Recipe';
import Navbar from './Navbar';
import { configureStore } from '../store';

const { persistor, store } = configureStore();

console.log(store);

class App extends React.Component {
  render() {
    console.log('here')
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
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
