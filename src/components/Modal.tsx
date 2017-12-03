import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';
import COLOR from '../utils/colors';
import withProps from '../utils/withProps';
import { boxShadow } from '../utils/metrics';
import Button from './Button';

export interface Props {
  title: string;
  onComplete?: Function;
  onCancel?: Function;
  showComplete?: boolean;
  showCancel?: boolean;
  completeText?: string;
  cancelText?: string;
}

interface WrapperProps {
}

interface CompleteProps {
  fullMargin: boolean;
}

const Wrapper = withProps<WrapperProps>()(styled.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9001;
`;

const ModalBackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.2);
`;

const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 0 auto;
  box-shadow: ${boxShadow};
  background: ${COLOR.WHITE};
  flex-direction: column;
  min-height: 150px;
  max-width: 100%;
`

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  align-self: center;
  word-break: break-all;
`;

const Body = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const CancelButton = Button.extend`
  margin: 10px 5px 10px 10px;
`;

const CompleteButton = withProps<CompleteProps>()(Button.extend)`
  margin: 10px 10px 10px ${(props) => props.fullMargin ? '10px' : '5px'};
`;

const ActionWrapper = styled.div`
  display: flex;
`;

interface State {
}

class Modal extends React.PureComponent<Props, State> {
  static defaultProps = {
    showComplete: true,
    showCancel: false,
    cancelText: 'Cancel',
    completeText: 'Complete',
  }

  constructor(props: Props) {
    super(props);

    this.state = {
    };
  }

  private onCompleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('complete');

    if (this.props.onComplete) {
      this.props.onComplete(e);
    }
  }

  private onCancelHandler = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    console.log('cancel');
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
  }

  render() {
    return (
      <Wrapper>
        <ModalBackDrop onClick={this.onCancelHandler} />
        <ModalWrapper>
          <Title>{this.props.title}</Title>
          <Body>{ this.props.children }</Body>
          <ActionWrapper>
            {this.props.showCancel && <CancelButton onClick={this.onCancelHandler}>{this.props.cancelText}</CancelButton>}
            {this.props.showComplete && <CompleteButton fullMargin={!this.props.showCancel} onClick={this.onCompleteHandler}>{ this.props.completeText }</CompleteButton>}
          </ActionWrapper>
        </ModalWrapper>
      </Wrapper>
    );
  }
}

export default Modal;
