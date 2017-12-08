import styled from 'styled-components';
import COLOR from '../utils/colors';
import { boxShadow } from '../utils/metrics';

const RecipeImage = styled.img`
  object-fit: cover;
  width: 80vw;
  height: 80vw;
  max-height: 250px;
  max-width: 250px;
  border-radius: 50%;
  position: relative;
  border: 5px solid ${COLOR.WHITE};
  box-shadow: ${boxShadow};
`;

export default RecipeImage;
