import styled from 'styled-components';
import COLOR from '../utils/colors';
import withProps from '../utils/withProps';
import { boxShadowSmall } from '../utils/metrics';

const IngredientTag = withProps<IngredientTagProps>()(styled.p)`
  color: ${COLOR.BLACK};
  font-size: 12px;
  ${props => props.compact ? 'margin: 0 0 10px 10px' : 'margin: 0 5px 5px 0' };
  ${props => props.compact ? 'padding: 2px 7px' : 'padding: 4px 14px'};
  background: ${COLOR.BROWN};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  box-shadow: ${boxShadowSmall};
`;

interface IngredientTagProps {
  compact?: boolean,
}

export default IngredientTag;
