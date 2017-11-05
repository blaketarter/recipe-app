import * as React from 'react';
import PageWrapper from './PageWrapper';
import { Recipe as RecipeType } from '../types';

export interface Props {
  recipe: RecipeType;
}

function Recipe({ recipe }: Props) {
  return (
    <PageWrapper>
      <h1>Recipe Page</h1>
      <pre><code>{ JSON.stringify(recipe, null, 2) }</code></pre>
    </PageWrapper>
  );
}

export default Recipe;
