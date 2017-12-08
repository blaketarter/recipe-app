import styled from 'styled-components';
// import TextareaAutosize from 'react-autosize-textarea/src';
import COLOR from '../utils/colors';
import { boxShadow, boxShadowDark } from '../utils/metrics';

const TextArea = styled.textarea`
  height: 150px;
  width: 100%;
  background: ${COLOR.WHITE};
  padding: 5px;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: ${boxShadow};
  border-radius: 2px;
  transition: box-shadow .2s ease;
  resize: none;

  &::placeholder {
    color: ${COLOR.LIGHTGREY};
  }

  &:focus {
    box-shadow: ${boxShadowDark};
  }
`;

export default TextArea;
