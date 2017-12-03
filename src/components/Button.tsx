import styled from 'styled-components';
import COLOR from '../utils/colors';
import { boxShadow } from '../utils/metrics';

const Button = styled.button`
  width: 100%;
  height: 40px;
  box-shadow: ${boxShadow};
  text-align: center;
  background: ${COLOR.LIGHTGREY};
  border: none;
  border-radius: 2px;
  outline: none;
`;

export default Button;
