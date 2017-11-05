import * as React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { Recipe } from '../types';
import COLOR from '../utils/colors';
import withProps from '../utils/withProps';

interface ImageInterface {
  url?: string;
  color: string;
}

interface WrapperInterface {
  color: string;
}

const Wrapper = withProps<WrapperInterface>()(styled.li) `
  display: flex;
  flex-direction: column;
  height: 175px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  // background: ${p => p.color};
  background: ${COLOR.WHITE};
  border-radius: 2px;
`;

const Polygon = styled.div`
  height: 100%;
  width: 100%;
  /* position: absolute;
  top: 0;
  right: 0; */
  overflow: hidden;

  /* -webkit-clip-path: polygon(49% 0, 100% 0, 100% 100%, 74% 100%);
  clip-path: polygon(49% 0, 100% 0, 100% 100%, 74% 100%); */

  /* -webkit-clip-path: ellipse(35% 100% at 87% 91%);
  clip-path: ellipse(35% 100% at 87% 91%); */
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

  // &:after {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   height: 100%;
  //   width: 100%;
  //   background: ${p => p.color};
  //   opacity: 0.1;
  // }
`;

const TopBar = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  overflow: hidden;
  position: relative;
  /* padding-left: 15px;   */
`;

const BottomBar = styled.div`
  height: 35px;
  width: 100%;
  /* padding: 0 10px 10px 10px; */
  /* background: ${COLOR.LIGHTGREY}; */
  display: flex;
  /* flex-wrap: wrap; */
  flex: 1 1 auto;
  overflow-x: scroll;
`;

const Ingredient = styled.p`
  color: ${COLOR.BLACK};
  font-size: 12px;
  /* margin: 5px 5px 0 0; */
  margin: 0 0 10px 10px;
  padding: 2px 7px;
  background: ${COLOR.BROWN};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

interface Context {
  router: {
    history: {
      push: Function;
    }
  }
}

function RecipeTile({
  id,
  name,
  image,
  color,
  ingredients,
}: Recipe, context: Context) {
  return (
    <Wrapper color={color} onClick={() => context.router.history.push(`/recipe/${id}`)}>
      <TopBar>
        <Polygon>
          <Image url={image} color={color} />
        </Polygon>
        <Title>{name}</Title>
      </TopBar>
      <BottomBar>
        {ingredients.map((ingredient: string, index: number) => {
          return (<Ingredient key={index}>{ingredient}</Ingredient>);
        })}
      </BottomBar>
    </Wrapper>
  );
}

(RecipeTile as any).contextTypes = {
  router: PropTypes.object,
};

export default RecipeTile;
