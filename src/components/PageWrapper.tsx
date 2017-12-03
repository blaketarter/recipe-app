import styled from 'styled-components';
import withProps from '../utils/withProps';

interface PageWrapperProps {
  scrollable?: boolean;
}

export default withProps<PageWrapperProps>()(styled.div)`
  display: flex;
  flex: 1 1 auto;
  ${props => props.scrollable ? 'overflow-y: scroll; overflow-x: hidden;' : 'overflow: hidden;'}
  flex-direction: column;
`;
