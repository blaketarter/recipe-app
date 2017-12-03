import * as React from 'react';
import styled from 'styled-components';
import COLOR from '../utils/colors';
import withProps from '../utils/withProps';
import throttle from 'lodash/throttle';
import { boxShadowSmall, boxShadowSmallTransparent } from '../utils/metrics';

export interface Props {
  shadowOnScroll?: boolean;
  children?: React.ReactChild;
}

interface WrapperProps {
  showShadow?: boolean;
}

const Wrapper = withProps<WrapperProps>()(styled.div)`
  display: block;
  flex: 0 0 auto;
  background: ${COLOR.PRIMARY};
  padding: 0;
  width: 100%;
  height: 50px;
  position: relative;
  
  ${props => props.showShadow ? `box-shadow: ${boxShadowSmall}` : `box-shadow: ${boxShadowSmallTransparent}`};
  transition: box-shadow 0.2s ease;
`;

const InnerWrapper = styled.div`
  position: absolute;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
`;

interface State {
  showShadow: boolean;
}

class PageHeader extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showShadow: !props.shadowOnScroll,
    };
  }

  handleScroll = (e: UIEvent) => {
    const target = (e.target as HTMLElement);

    if (target.scrollTop > 0) {
      this.setState((state, props) => ({ showShadow: true }));
    } else {
      this.setState((state, props) => ({ showShadow: false }));
    }
  }

  throttledScroll = throttle(this.handleScroll, 300)

  componentDidMount() {
    if (this.props.shadowOnScroll) {
      window.addEventListener('scroll', this.throttledScroll, true);
    }
  }

  componentWillUnmount() {
    if (this.props.shadowOnScroll) {
      window.removeEventListener('scroll', this.throttledScroll, true);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper showShadow={this.state.showShadow}>
        <InnerWrapper>{children}</InnerWrapper>
      </Wrapper>
    );
  }
}

export default PageHeader;
