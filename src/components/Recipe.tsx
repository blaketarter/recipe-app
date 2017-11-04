import * as React from 'react';
import PageWrapper from './PageWrapper';

export interface Props {
  match?: any;
}

function Recipe({ match }: Props) {
  return (
    <PageWrapper>
      <h1>Recipe Page {match && match.params && match.params.id ? match.params.id : ''}</h1>
    </PageWrapper>
  );
}

export default Recipe;
