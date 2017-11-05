import * as React from 'react';
import styled from 'styled-components';
import PageWrapper from './PageWrapper';
import PageHeader from './PageHeader';
import RecipeList from './RecipeList';
import { Recipe } from '../types';

export interface Props {
  recipes: Recipe[];
}

const Title = styled.h2`
  margin: 0;
  font-size: 36px;
`;

function Home({ recipes }: Props) {
  return (
    <PageWrapper>
      <PageHeader>
        <Title>Recipe App</Title>
      </PageHeader>

      <RecipeList recipes={recipes} limit={20} />
    </PageWrapper>
  );
}

export default Home;
