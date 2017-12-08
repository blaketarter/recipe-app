import * as React from 'react';
import { SFC } from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { Recipe } from '../types';
import COLOR from '../utils/colors';
import withProps from '../utils/withProps';
import IngredientTag from './IngredientTag';
import { boxShadowSmall } from '../utils/metrics';

interface ImageInterface {
  url?: string;
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  height: 175px;
  position: relative;
  overflow: hidden;
  box-shadow: ${boxShadowSmall};
  background: ${COLOR.WHITE};
  border-radius: 2px;
`;

const Polygon = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Title = styled.p`
  text-align: left;
  width: 100%;
  padding-left: 10px;
  position: relative;
  font-weight: bolder;
  margin: 10px 0;
`;

const Image = withProps<ImageInterface>()(styled.div) `
  background-image: url(${p => (p.url) ? p.url : ''});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100%;
  width: 100%;
  position: relative;
`;

const TopBar = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const BottomBar = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  overflow-x: scroll;
`;

interface Context {
  router: {
    history: {
      push: Function;
    }
  }
}

const RecipeTile: SFC<Recipe> = ({
  id,
  name,
  image,
  ingredients,
}: Recipe, context: Context) => {
  return (
    <Wrapper onClick={() => context.router.history.push(`/recipe/${id}`)}>
      <TopBar>
        <Polygon>
          <Image url={image} />
        </Polygon>
        <Title>{name}</Title>
      </TopBar>
      <BottomBar>
        {ingredients.map((ingredient: string, index: number) => {
          return (<IngredientTag key={index} compact={true}>{ingredient}</IngredientTag>);
        })}
      </BottomBar>
    </Wrapper>
  );
}

RecipeTile.contextTypes = {
  router: PropTypes.object,
};

export default RecipeTile;
