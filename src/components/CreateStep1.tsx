import * as React from 'react';
import styled from 'styled-components';
import { MouseEvent, FormEvent } from 'react';
import { RouterChildContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Button from './Button';
import TextInout from './TextInput';
import COLOR from '../utils/colors';
import { boxShadow } from '../utils/metrics';

interface RouterParams {

}


class CreateStep1 extends React.PureComponent<Props, State> {
  context: RouterChildContext<RouterParams>;

  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props: Props) {
    super();
    
    this.state = {
      imageUrl: '',
      title: '',
      hasImage: false,
      showModal: false,
    };
  }

  private handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('step 1 on click');
    console.log(this.state);
    this.context.router.history.push('/create/2');
  }

  private handleOnTitleChange = (e: FormEvent<HTMLInputElement>) => {
    const title = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, title }));
  }

  private handleOnImageUrlChange = (e: FormEvent<HTMLInputElement>) => {
    const imageUrl = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, imageUrl }));
  }

  private handleOnCancel = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: false }));
  }

  private handleOnComplete = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: false, hasImage: true }));
  }
  
  private handleAddImage = (e: MouseEvent<HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: true }));
  }

  render() {
    return (
      [
        <Hero key="Create1/Hero">
          { this.state.hasImage ? <RecipeImage src={this.state.imageUrl} /> : <NoImageTile onClick={this.handleAddImage} /> }
        </Hero>,
        <Body key="Create1/Body">
          <TextInout type='text' placeholder='Recipe Name' value={this.state.title} onChange={this.handleOnTitleChange} />          
          <NextButton onClick={this.handleOnClick}>Next</NextButton>
        </Body>,
        this.state.showModal && <Modal
          key="Create1/Modal"
          title="Recipe Image URL"
          onCancel={this.handleOnCancel}
          onComplete={this.handleOnComplete}
          showCancel={true}
          completeText='Submit'>
          <TextInout
            type="text"
            placeholder="Recipe URL"
            onChange={this.handleOnImageUrlChange}          
            value={this.state.imageUrl} />
        </Modal>,
      ]
    );
  }
}

interface Props {
};

interface State {
  imageUrl: string;
  title: string;
  hasImage: boolean;
  showModal: boolean;
}

// const Label = styled.label`
//   color: ${COLOR.LIGHTGREY};
//   display: block;
//   font-size: 10px;
//   text-transform: uppercase;
//   font-weight: bolder;
//   margin-bottom: 5px;
// `;

const Hero = styled.div`
  background: ${COLOR.PRIMARY};
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0 0 auto;
  padding-top: 5px;
  padding-bottom: 25px;
`;

const Body = styled.div`
  flex: 1 0 auto;
  padding: 25px;
  background: ${COLOR.WHITE};
`;

const NextButton = Button.extend`
  margin: 25px 0;
`;

const NoImageTile = styled.div`
  width: 80vw;
  height: 80vw;
  max-height: 250px;
  max-width: 250px;
  border-radius: 50%;
  position: relative;
  border: 5px solid ${COLOR.WHITE};
  background: ${COLOR.LIGHTGREY};
  box-shadow: ${boxShadow};
`;

const RecipeImage = styled.img`
  width: 80vw;
  height: 80vw;
  max-height: 250px;
  max-width: 250px;
  border-radius: 50%;
  position: relative;
  border: 5px solid ${COLOR.WHITE};
  box-shadow: ${boxShadow};
`;

export default CreateStep1;
