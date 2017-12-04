import * as React from 'react';
import { SFC, MouseEvent } from 'react';
import styled from 'styled-components';
import IngredientTag from './IngredientTag';

const ingredientsListOnClick = (onClickMethod: Function) => (e: MouseEvent<HTMLDivElement>) => onClickMethod(e);

const IngredientsList: SFC<Props> = ({ ingredients = [], onClick = () => {} }: Props) => (
  <IngredientsListWrapper onClick={ingredientsListOnClick(onClick)}>
    {ingredients.map((ingredient: string, index: number) => {
      return (<IngredientTag key={index}>{ingredient}</IngredientTag>);
    })}
  </IngredientsListWrapper>
);

interface Props {
  ingredients: string[];
  onClick?: Function;
};

const IngredientsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default IngredientsList;
