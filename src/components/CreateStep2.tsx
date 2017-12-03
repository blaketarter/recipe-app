import * as React from 'react';
import styled from 'styled-components';
import { MouseEvent } from 'react';

class CreateStep2 extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super();
    
    this.state = {
      imageUrl: '',
      title: '',
      hasImage: false,
    };
  }

  private handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('step 2 on click');
    e.preventDefault();
  }

  render() {
    return (
      <div>
        { this.state.hasImage ? <RecipeImage src={this.state.imageUrl} /> : <NoImageTile /> }
        <Button onClick={this.handleOnClick}>Next</Button>
      </div>
    );
  }
}

interface Props {
};

interface State {
  imageUrl: string;
  title: string;
  hasImage: boolean;
}

const Button = styled.button``;
const NoImageTile = styled.div``;
const RecipeImage = styled.img``;

export default CreateStep2;
