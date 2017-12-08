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
import AcceptButton from './AcceptButton';
import Modal from './Modal';
import Hero from './HeroColor';
import RecipeImage from './RecipeImage';

class RecipeEdit extends React.PureComponent<Props, State> {
  static contextTypes = {
    router: PropTypes.object,
  };
  
  context: RouterChildContext<RouterParams>;
  ingredientsTextArea: HTMLTextAreaElement;
  imageInputRef: HTMLInputElement;

  constructor(props: Props) {
    super(props);

    const { recipe } = props;
    this.state = {
      ...recipe,
      showImageModal: false,
      showIngredientsModal: false,
    };
  }

  handleOnTitleChange = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, name }));
  }

  handleOnImageUrlChange = (e: FormEvent<HTMLInputElement>) => {
    const image = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, image }));
  }

  handleOnImageCancel = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showImageModal: false }));
  }

  handleOnImageComplete = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const image = this.imageInputRef.value;
    this.setState((prevState) => ({ ...prevState, showImageModal: false, hasImage: true, image }));
  }
  
  handleAddImage = (e: MouseEvent<HTMLDivElement | HTMLImageElement>) => {
    this.setState((prevState) => ({ ...prevState, showImageModal: true }));
  }

  onDescriptionChangeHandler = (e: FormEvent<HTMLTextAreaElement>) => {
    const description = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, description }));
  }

  handleAddIngredients = (e: MouseEvent<HTMLParagraphElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showIngredientsModal: true }), () => {
      this.ingredientsTextArea.value = this.state.ingredients
        .reduce((IngredientsStr, ingredient) => IngredientsStr += `${ingredient}, `, '')
        .trim();
    });
  }

  handleOnIngredientsCancel = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showIngredientsModal: false }));
  }

  handleOnIngredientsComplete = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const ingredients =
      this.ingredientsTextArea.value
        .trim()
        .split(/,|\s/)
        .filter(str => str.trim().length);
    
    this.setState((prevState) => ({ ...prevState, showIngredientsModal: false, ingredients }));
  }

  handleOnClick = (e: MouseEvent<ReactSVGElement>) => {
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
          rightAction={<AcceptButton onClick={this.handleOnClick} />}
        />
        <ScrollWrapper>
          <Hero>
            <RecipeImage src={image} onClick={this.handleAddImage} />
          </Hero>
          <Body>
            <Label>Name</Label>
            <TextInputWithMargin
              type="text"
              placeholder="Recipe Name"
              value={name}
              onChange={this.handleOnTitleChange}
            />
            <Label>Description</Label>
            <TextAreaWithMargin value={description} onChange={this.onDescriptionChangeHandler} />
            <Label>Ingredients</Label>
            <IngredientsList ingredients={ingredients} onClick={this.handleAddIngredients} />
          </Body>
        </ScrollWrapper>
        { this.state.showImageModal &&
          <Modal
            title="Recipe Image URL"
            onCancel={this.handleOnImageCancel}
            onComplete={this.handleOnImageComplete}
            showCancel={true}
            completeText="Submit"
          >
            <TextInput
              type="text"
              placeholder="Recipe URL"
              innerRef={(ref) => this.imageInputRef = ref}
              onChange={this.handleOnImageUrlChange}
            />
          </Modal> }
        { this.state.showIngredientsModal &&
          <Modal
            title="Recipe Ingredients"
            onCancel={this.handleOnIngredientsCancel}
            onComplete={this.handleOnIngredientsComplete}
            showCancel={true}
            completeText="Submit"
          >
            <TextAreaWithMargin innerRef={(ref) => this.ingredientsTextArea = ref} />
          </Modal>}
      </PageWrapper>
    );
  }
}

interface RouterParams { }

export interface Props {
  recipe: RecipeType,
  updateRecipe: Function,
}

export interface State extends RecipeType {
  showImageModal: boolean,
  showIngredientsModal: boolean,
}

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

export default RecipeEdit;
