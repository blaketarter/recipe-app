import * as React from 'react';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';
import { Recipe as RecipeType } from '../types';
import COLOR from '../utils/colors';
import IngredientsList from './IngredientsList';
import EditButton from './EditButton';
import ScrollWrapper from './ScrollWrapper';
import TopBar from './TopBar';
import Label from './Label';
import { boxShadow } from '../utils/metrics';

export interface Props {
  recipe: RecipeType;
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

const DescriptionText = styled.p`
  margin: 0 0 25px 0;
`;

function Recipe({ recipe }: Props) {
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
        </Hero>
        <Body>
          <Label>Description</Label>
          <DescriptionText>{description}</DescriptionText>
          <Label>Ingredients</Label>
          <IngredientsList ingredients={ingredients} />
        </Body>
      </ScrollWrapper>
    </PageWrapper>
  );
}

export default Recipe;
