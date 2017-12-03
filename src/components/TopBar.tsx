import * as React from 'react';
import styled from 'styled-components';
import COLOR from '../utils/colors';
import withProps from '../utils/withProps';
import throttle from 'lodash/throttle';
import BackButton from './BackButton';
import { boxShadowSmall, boxShadowSmallTransparent } from '../utils/metrics';

export interface Props {
  title?: string;
  shadowOnScroll?: boolean;
  backButton?: boolean;
  children?: React.ReactChild;
  leftAction?: React.ReactChild;
  rightAction?: React.ReactChild;
}

interface WrapperProps {
  showShadow?: boolean;
}

const Wrapper = withProps<WrapperProps>()(styled.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  background: ${COLOR.PRIMARY};
  padding: 0;
  width: 100%;
  height: 50px;
  position: relative;
  
  ${props => props.showShadow ? `box-shadow: ${boxShadowSmall}` : `box-shadow: ${boxShadowSmallTransparent}`};
  transition: box-shadow 0.2s ease;
`;

const Title = styled.h2`
  text-align: center;
  flex: 1 0 auto;
  font-size: 20px;
`;

const LeftActionWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  display: flex;
  align-items: center;
`;

const RightActionWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  display: flex;
  align-items: center;
`;

interface State {
  showShadow: boolean;
}

class TopBar extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showShadow: !props.shadowOnScroll,
    };
  }

  private handleScroll = (e: UIEvent) => {
    const target = (e.target as HTMLElement);

    if (target.scrollTop > 0) {
      this.setState((state, props) => ({ showShadow: true }));
    } else {
      this.setState((state, props) => ({ showShadow: false }));
    }
  }

  private throttledScroll = throttle(this.handleScroll, 300)

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

  private renderTitle = () => {
    if (this.props.title && this.props.title.length) {
      return (<Title>{this.props.title}</Title>);
    } else if (React.Children.count(this.props.children)) {
      return (React.Children.only(this.props.children));
    }

    return null;
  }

  private renderLeftAction = () => {
    if (this.props.backButton) {
      return (<BackButton />);
    } else if (React.Children.count(this.props.leftAction)) {
      return (React.Children.only(this.props.leftAction));
    }

    return null;
  }

  private renderRightAction = () => {
    if (React.Children.count(this.props.rightAction)) {
      return (React.Children.only(this.props.rightAction));
    }

    return null;
  }

  render() {
    return (
      <Wrapper showShadow={this.state.showShadow}>
        {this.renderTitle()}
        <LeftActionWrapper>{ this.renderLeftAction() }</LeftActionWrapper>        
        <RightActionWrapper>{ this.renderRightAction() }</RightActionWrapper>
      </Wrapper>
    );
  }
}

export default TopBar;