import * as React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import COLOR from '../utils/colors';
import Home from './Home';
import Search from './Search';
import Tags from './Tags';
import Profile from './Profile';
import Create from './Create';
import Recipe from './Recipe';

const Wrapper = styled.div`
  overflow: hidden;
  background: ${COLOR.WHITE};
  color: ${COLOR.BLACK};
  height: 100vh;
  width: 100vw;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Link to="/">Home</Link>
          <Link to="search">Search</Link>
          <Link to="tags">Tags</Link>
          <Link to="profile">Profile</Link>
          <Link to="create">Create</Link>
          <Link to="recipe">Recipe</Link>

          <Route exact={true} path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/tags" component={Tags} />
          <Route path="/profile" component={Profile} />
          <Route path="/create" component={Create} />
          <Route path="/recipe" component={Recipe} />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
