import * as React from 'react';
import styled from 'styled-components';
import PageWrapper from './PageWrapper';
import TopBar from './TopBar';
import RecipeList from './RecipeList';
import { Recipe } from '../types';
import * as LogoImage from '../assets/logo.png';
import SettingsButton from './SettingsButton';

function Home({ recipes }: Props) {
  return (
    <PageWrapper>
      <TopBar rightAction={<SettingsButton />}>
        <Logo src={LogoImage} alt="Logo" />
      </TopBar>

      <RecipeList recipes={recipes} limit={20} />
    </PageWrapper>
  );
}

interface Props {
  recipes: Recipe[],
}

const Logo = styled.img`
  object-fit: contain;
  height: 32px;
  margin: auto;
  margin-top: 12px;
`;

export default Home;
