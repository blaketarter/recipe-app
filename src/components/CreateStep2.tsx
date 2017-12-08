import * as React from 'react';
import styled from 'styled-components';
import { RouterChildContext } from 'react-router-dom';
import { MouseEvent, FormEvent } from 'react';
import { NewRecipeState } from '../types';
import IngredientsList from './IngredientsList';
import PropTypes from 'prop-types';
import Button from './Button';
import TextArea from './TextArea';
import Label from './Label';
import Modal from './Modal';
import COLOR from '../utils/colors';

class CreateStep2 extends React.PureComponent<Props, State> {
  static contextTypes = {
    router: PropTypes.object,
  };

  context: RouterChildContext<RouterParams>;
  ingredientsTextArea: HTMLTextAreaElement;

  constructor(props: Props) {
    super(props);
    const { newRecipe } = props;
    
    this.state = {
      name: newRecipe.name || '',
      image: newRecipe.image || '',
      description: newRecipe.description || '',
      ingredients: newRecipe.ingredients || [],
      showModal: false,
    };
  }

  handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const now = new Date().getTime();

    this.props.addRecipe({
      name: this.state.name,
      image: this.state.image,
      description: this.state.description,
      ingredients: this.state.ingredients,
      id: `${now}`,
    });

    this.props.clearNewRecipe();
    this.context.router.history.push(`/recipe/${now}`);
  }

  onDescriptionChangeHandler = (e: FormEvent<HTMLTextAreaElement>) => {
    const description = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, description }));
  }

  renderNoIngredients = () => {
    return (
      <NoIngredients onClick={this.handleAddIngredients}>
        No ingredients to show yet, click to add some.
      </NoIngredients>
    );
  }

  handleAddIngredients = (e: MouseEvent<HTMLParagraphElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: true }), () => {
      this.ingredientsTextArea.value = this.state.ingredients
        .reduce((IngredientsStr, ingredient) => IngredientsStr += `${ingredient}, `, '')
        .trim();
    });
  }

  handleOnCancel = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: false }));
  }

  handleOnComplete = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const ingredients =
      this.ingredientsTextArea.value
        .trim()
        .split(/,|\s/)
        .filter(str => str.trim().length);
    
    this.setState((prevState) => ({ ...prevState, showModal: false, ingredients }));
  }

  render() {
    return (
      [
        (
          <Body key="Create2/Body">
            <Label>Description</Label>
            <TextAreaWithMargin value={this.state.description} onChange={this.onDescriptionChangeHandler} />
            <Label>Ingredients</Label>
            { this.state.ingredients.length ?
              <IngredientsList ingredients={this.state.ingredients} onClick={this.handleAddIngredients} /> :
              this.renderNoIngredients() }
            <NextButton onClick={this.handleOnClick}>Next</NextButton>
          </Body>
        ),
        this.state.showModal &&
        (
          <Modal
            key="Create2/Modal"
            title="Recipe Ingredients"
            onCancel={this.handleOnCancel}
            onComplete={this.handleOnComplete}
            showCancel={true}
            completeText="Submit"
          >
            <TextAreaWithMargin innerRef={(ref) => this.ingredientsTextArea = ref} />
          </Modal>
        )
      ]
    );
  }
}

interface Props {
  addRecipe: Function,
  clearNewRecipe: Function,
  newRecipe: NewRecipeState,
  numberOfRecipes: number,
}

interface State {
  name: string,
  image: string,
  description: string,
  ingredients: string[],
  showModal: boolean,
}

interface RouterParams {}

const Body = styled.div`
  flex: 1 0 auto;
  padding: 25px;
  background: ${COLOR.WHITE};
`;

const NextButton = Button.extend`
  margin: 25px 0;
`;

const TextAreaWithMargin = TextArea.extend`
  margin-bottom: 25px;
`;

const NoIngredients = styled.p``;

export default CreateStep2;
