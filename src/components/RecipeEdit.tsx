import * as React from 'react';
import { MouseEvent, FormEvent, ReactSVGElement } from 'react';
import styled from 'styled-components';
import { RouterChildContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageWrapper from './PageWrapper';
import { Recipe as RecipeType } from '../types';
import COLOR from '../utils/colors';
import IngredientsList from './IngredientsList';
import ScrollWrapper from './ScrollWrapper';
import TopBar from './TopBar';
import Label from './Label';
import TextArea from './TextArea';
import TextInput from './TextInput';
import AcceptButton from './AcceptButton'
import Modal from './Modal';
import { boxShadow } from '../utils/metrics';

interface RouterParams { }

export interface Props {
  recipe: RecipeType;
  updateRecipe: Function;
}

export interface State extends RecipeType {
  showImageModal: boolean;
  showIngredientsModal: boolean;
}

const Hero = styled.div`
  background: ${COLOR.PRIMARY};
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 0 auto;
  padding-bottom: 25px;
  padding-top: 5px;
`;

const Image = styled.img`
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

const Body = styled.div`
  flex: 1 1 auto;
  padding: 25px;
  background: ${COLOR.WHITE};
`;

const TextInputWithMargin = TextInput.extend`
  margin-bottom: 25px;
`;

const TextAreaWithMargin = TextArea.extend`
  margin-bottom: 25px;
`;

class RecipeEdit extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const { recipe } = props;
    this.state = {
      ...recipe,
      showImageModal: false,
      showIngredientsModal: false,
    };
  }

  context: RouterChildContext<RouterParams>;
  static contextTypes = {
    router: PropTypes.object,
  }

  private ingredientsTextArea: HTMLTextAreaElement;
  private imageInputRef: HTMLInputElement;

  private handleOnTitleChange = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, name }));
  }

  private handleOnImageUrlChange = (e: FormEvent<HTMLInputElement>) => {
    const image = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, image }));
  }

  private handleOnImageCancel = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showImageModal: false }));
  }

  private handleOnImageComplete = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const image = this.imageInputRef.value;
    this.setState((prevState) => ({ ...prevState, showImageModal: false, hasImage: true, image }));
  }
  
  private handleAddImage = (e: MouseEvent<HTMLDivElement | HTMLImageElement>) => {
    this.setState((prevState) => ({ ...prevState, showImageModal: true }));
  }

  private onDescriptionChangeHandler = (e: FormEvent<HTMLTextAreaElement>) => {
    const description = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, description }));
  }

  private handleAddIngredients = (e: MouseEvent<HTMLParagraphElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showIngredientsModal: true }), () => {
      this.ingredientsTextArea.value = this.state.ingredients
        .reduce((IngredientsStr, ingredient) => IngredientsStr += `${ingredient}, `, '')
        .trim();
    });
  }

  private handleOnIngredientsCancel = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showIngredientsModal: false }));
  }

  private handleOnIngredientsComplete = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const ingredients =
      this.ingredientsTextArea.value
        .trim()
        .split(/,|\s/)
        .filter(str => str.trim().length);
    
    this.setState((prevState) => ({ ...prevState, showIngredientsModal: false, ingredients }));
  }

  private handleOnClick = (e: MouseEvent<ReactSVGElement>) => {
    e.preventDefault();
    this.props.updateRecipe({
      name: this.state.name,
      image: this.state.image,
      description: this.state.description,
      ingredients: this.state.ingredients,
      id: this.state.id,
    });

    this.context.router.history.replace(`/recipe/${this.state.id}`);
  }

  render() {
    const { name, image, description, ingredients } = this.state;
    return (
      <PageWrapper>
        <TopBar
          title={`Editing ${name}`}
          shadowOnScroll={true}
          backButton={true}
          rightAction={<AcceptButton onClick={this.handleOnClick} />}/>
        <ScrollWrapper>
          <Hero>
            <Image src={image} onClick={this.handleAddImage} />
          </Hero>
          <Body>
            <Label>Name</Label>
            <TextInputWithMargin type='text' placeholder='Recipe Name' value={name} onChange={this.handleOnTitleChange} />
            <Label>Description</Label>
            <TextAreaWithMargin value={description} onChange={this.onDescriptionChangeHandler} />
            <Label>Ingredients</Label>
            <IngredientsList ingredients={ingredients} onClick={this.handleAddIngredients} />
          </Body>
        </ScrollWrapper>
        {this.state.showImageModal && <Modal
          title="Recipe Image URL"
          onCancel={this.handleOnImageCancel}
          onComplete={this.handleOnImageComplete}
          showCancel={true}
          completeText='Submit'>
          <TextInput
            type="text"
            placeholder="Recipe URL"
            innerRef={(ref) => this.imageInputRef = ref}
            onChange={this.handleOnImageUrlChange} />
        </Modal>}
        {this.state.showIngredientsModal && <Modal
          title="Recipe Ingredients"
          onCancel={this.handleOnIngredientsCancel}
          onComplete={this.handleOnIngredientsComplete}
          showCancel={true}
          completeText='Submit'>
          <TextAreaWithMargin innerRef={(ref) => this.ingredientsTextArea = ref} />
        </Modal>}
      </PageWrapper>
    );
  }
}

export default RecipeEdit;
