import * as React from 'react';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';
import MdDelete from 'react-icons/lib/md/delete';
import { MouseEvent } from 'react';
import { Dispatch } from 'react-redux';
import { RouterChildContext } from 'react-router';
import PropTypes from 'prop-types';
import { Recipe as RecipeType, StoreState } from '../types';
import COLOR from '../utils/colors';
import IngredientsList from './IngredientsList';
import EditButton from './EditButton';
import ScrollWrapper from './ScrollWrapper';
import TopBar from './TopBar';
import Label from './Label';
import Modal from './Modal';
import Hero from './HeroColor';
import RecipeImage from './RecipeImage';

class Recipe extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  context: RouterChildContext<RouterParams>;
  
  static contextTypes = {
    router: PropTypes.object,
  }

  private handleOnCancel = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: false }));
  }

  private handleOnComplete = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: false, }));
    this.props.deleteRecipe(this.props.recipe);
    this.context.router.history.replace('/');
  }

  private handleOnDeleteClick = (e: MouseEvent<HTMLDivElement>) => {
    this.setState((prevState) => ({ ...prevState, showModal: true, }));
  }

  private renderDeleteIcon = () => (
    <DeleteWrapper onClick={this.handleOnDeleteClick}>
      <MdDelete size={24} />
    </DeleteWrapper>
  )

  render() {
    const { recipe } = this.props;
    const { name, image, description, ingredients, id } = recipe;

    return (
      <PageWrapper>
        <TopBar
          title={name}
          shadowOnScroll={true}
          backButton={true}
          rightAction={<EditButton recipeId={id} />} />
        <ScrollWrapper>
          <Hero>
            <RecipeImage src={image} />
            { this.renderDeleteIcon() }
          </Hero>
          <Body>
            <Label>Description</Label>
            <DescriptionText>{description}</DescriptionText>
            <Label>Ingredients</Label>
            <IngredientsList ingredients={ingredients} />
          </Body>
        </ScrollWrapper>
        { this.state.showModal && <Modal
          key="Recipe/Delete"
          title="Delete Recipe"
          onCancel={this.handleOnCancel}
          onComplete={this.handleOnComplete}
          showCancel={true}
          completeText='Delete'>
          <DeleteText>{`Are you sure you want to delete ${recipe.name}?`}</DeleteText>
        </Modal> }
      </PageWrapper>
    );
  }
}

export interface Props {
  recipe: RecipeType;
  deleteRecipe: (recipe: RecipeType) => Dispatch<StoreState>;
}

interface State {
  showModal: boolean;
}

interface RouterParams {}

const Body = styled.div`
  flex: 1 1 auto;
  padding: 25px;
  background: ${COLOR.WHITE};
`;

const DescriptionText = styled.p`
  margin: 0 0 25px 0;
`;

const DeleteWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${COLOR.BLACK};
`;

const DeleteText = styled.p`
  margin: 0;
`;

export default Recipe;
