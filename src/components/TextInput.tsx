import styled from 'styled-components';
import COLOR from '../utils/colors';
import { boxShadow, boxShadowDark } from '../utils/metrics';

const TextInput = styled.input`
  height: 40px;
  width: 100%;
  background: ${COLOR.WHITE};
  padding: 0 5px;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: ${boxShadow};
  border-radius: 2px;
  transition: box-shadow .2s ease;

  &::placeholder {
    color: ${COLOR.LIGHTGREY};
  }

  &:focus {
    box-shadow: ${boxShadowDark};
  }
`;

export default TextInput;
