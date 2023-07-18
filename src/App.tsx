import StarIcon from './components/StarIcon/StarIcon';

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
  width: 25%;
  background: radial-gradient(
    circle at top,
    hsl(213, 19%, 18%),
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
        <h1>How did we do?</h1>
      </StyledCard>
    </StyledWrapper>
  );
}
