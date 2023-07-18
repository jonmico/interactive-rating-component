import StarIcon from './components/StarIcon/StarIcon';
import CardText from './components/CardText/CardText';

import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled.div`
  width: 20%;
  min-width: 385px;
  max-width: 400px;
  background: radial-gradient(
    circle at top,
    hsl(213, 19%, 15%),
    hsl(213, 19%, 11%)
  );
  border-radius: 20px;
  padding: 2rem;
`;

export default function App() {
  return (
    <StyledWrapper>
      <StyledCard>
        <StarIcon />
        <CardText />
      </StyledCard>
    </StyledWrapper>
  );
}
