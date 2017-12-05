import * as React from 'react';
import styled from 'styled-components';
import { MouseEvent, FormEvent } from 'react';
import { RouterChildContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NewRecipeState } from '../types';
import Modal from './Modal';
import Button from './Button';
import TextInput from './TextInput';
import MdAdd from 'react-icons/lib/md/add';
import COLOR from '../utils/colors';
import { boxShadow } from '../utils/metrics';

interface RouterParams {}

class CreateStep1 extends React.PureComponent<Props, State> {
  context: RouterChildContext<RouterParams>;

  static contextTypes = {
    router: PropTypes.object,
  }

  private textInputRef: HTMLInputElement;

  constructor(props: Props) {
    super(props);
    const { newRecipe } = props;

    this.state = {
      image: newRecipe.image || '',
      name: newRecipe.name || '',
      hasImage: newRecipe.image && newRecipe.image.length ? true : false,
      showModal: false,
    };
  }

  private handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.addNewRecipe({
      image: this.state.image,
      name: this.state.name,
    });

    this.context.router.history.push('/create/2');
  }

  private handleOnTitleChange = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, name }));
  }

  private handleOnImageUrlChange = (e: FormEvent<HTMLInputElement>) => {
    const image = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, image }));
  }

  private handleOnCancel = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: false }));
  }

  private handleOnComplete = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const image = this.textInputRef.value;
    this.setState((prevState) => ({ ...prevState, showModal: false, hasImage: true, image }));
  }
  
  private handleAddImage = (e: MouseEvent<HTMLDivElement | HTMLImageElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: true }));
  }

  private renderNoImageTile = () => (
    <NoImageTile onClick={this.handleAddImage}>
      <MdAdd size={64} color={COLOR.GREY}/>  
    </NoImageTile>
  )

  render() {
    return (
      [
        <Hero key="Create1/Hero">
          { this.state.hasImage ? <RecipeImage src={this.state.image} onClick={this.handleAddImage} /> : this.renderNoImageTile() }
        </Hero>,
        <Body key="Create1/Body">
          <TextInput type='text' placeholder='Recipe Name' value={this.state.name} onChange={this.handleOnTitleChange} />
          <NextButton onClick={this.handleOnClick}>Next</NextButton>
        </Body>,
        this.state.showModal && <Modal
          key="Create1/Modal"
          title="Recipe Image URL"
          onCancel={this.handleOnCancel}
          onComplete={this.handleOnComplete}
          showCancel={true}
          completeText='Submit'>
          <TextInput
            type="text"
            placeholder="Recipe URL"
            innerRef={(ref) => this.textInputRef = ref}
            onChange={this.handleOnImageUrlChange} />
        </Modal>,
      ]
    );
  }
}

interface Props {
  newRecipe: NewRecipeState;
  addNewRecipe: Function;
}

interface State {
  image: string;
  name: string;
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
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${boxShadow};
`;

const RecipeImage = styled.img`
  object-fit: cover;
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
