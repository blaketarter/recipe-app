import * as React from 'react';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';
import MdDelete from 'react-icons/lib/md/delete';
import { Recipe as RecipeType, StoreState } from '../types';
import COLOR from '../utils/colors';
import IngredientsList from './IngredientsList';
import EditButton from './EditButton';
import ScrollWrapper from './ScrollWrapper';
import TopBar from './TopBar';
import Label from './Label';
import { boxShadow } from '../utils/metrics';
import { MouseEvent } from 'react';
import { Dispatch } from 'react-redux';
import { RouterChildContext } from 'react-router';
import Modal from './Modal';
import PropTypes from 'prop-types';

export interface Props {
  recipe: RecipeType;
  deleteRecipe: (recipe: RecipeType) => Dispatch<StoreState>;
}

interface State {
  showModal: boolean;
}

interface RouterParams {}

const Hero = styled.div`
  background: ${COLOR.PRIMARY};
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 0 auto;
  padding-bottom: 25px;
  padding-top: 5px;
  position: relative;  
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
            <Image src={image} />
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

export default Recipe;
