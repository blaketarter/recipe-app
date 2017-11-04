import * as React from 'react';
import styled from 'styled-components';
import COLOR from '../utils/colors';

const Wrapper = styled.div`
  overflow: hidden;
  background: ${COLOR.WHITE};
  color: ${COLOR.BLACK};
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>Hello World</h1>
      </Wrapper>
    );
  }
}

export default App;
