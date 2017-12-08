import styled from 'styled-components';
import COLOR from '../utils/colors';

const HeroColor = styled.div`
  background: ${COLOR.PRIMARY};
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 0 auto;
  padding-bottom: 25px;
  padding-top: 5px;
  position: relative;  
`;

export default HeroColor;
