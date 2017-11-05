import * as React from 'react';
import styled from 'styled-components';
import COLOR from '../utils/colors';

export interface Props {
  children?: any;
}

const Wrapper = styled.div`
  display: block;
  flex: 1 0 auto;
  background: ${COLOR.BLUE};
  padding: 0 25px;
  width: 100%;
  height: 60px;
  position: relative;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
`;

const InnerWrapper = styled.div`
  position: absolute;
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
`;

function PageHeader({ children }: Props) {
  return (
    <Wrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
}

export default PageHeader;
