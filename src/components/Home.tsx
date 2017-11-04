import * as React from 'react';
import PageWrapper from './PageWrapper';

export interface Props {
}

function Home({}: Props) {
  return (
    <PageWrapper>
      <h1>Home Page</h1>
    </PageWrapper>
  );
}

export default Home;
