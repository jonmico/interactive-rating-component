import { styled } from 'styled-components';
import { useState } from 'react';

import { RatingType } from './types';

import StarIcon from './components/StarIcon/StarIcon';
import CardText from './components/CardText/CardText';
import Rating from './components/Rating/Rating';
import SubmitButton from './components/SubmitButton/SubmitButton';
import ListItem from './components/ListItem/ListItem';
import SubmitIcon from './components/SubmitIcon/SubmitIcon';
import SubmitRating from './components/SubmitRating/SubmitRating';
import SubmitText from './components/SubmitText/SubmitText';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled.div`
  width: 15%;
  min-width: 350px;
  max-width: 400px;
  background: radial-gradient(
    circle at top,
    hsl(213, 19%, 15%),
    hsl(213, 19%, 11%)
  );
  border-radius: 20px;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    min-width: 290px;
  }
`;

const StyledCardCenter = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ratingList: RatingType[] = [
  { id: crypto.randomUUID(), rating: 1 },
  { id: crypto.randomUUID(), rating: 2 },
  { id: crypto.randomUUID(), rating: 3 },
  { id: crypto.randomUUID(), rating: 4 },
  { id: crypto.randomUUID(), rating: 5 },
];

export default function App() {
  const [ratings, setRatings] = useState<RatingType[]>(ratingList);
  const [selectedRating, setSelectedRating] = useState<RatingType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleClickRating(rating: RatingType) {
    selectedRating === rating
      ? setSelectedRating(null)
      : setSelectedRating(rating);
  }

  return (
    <StyledWrapper>
      {!isSubmitted ? (
        <StyledCard>
          <StarIcon />
          <CardText />
          <Rating>
            {ratings.map((rating) => (
              <ListItem
                key={rating.id}
                rating={rating}
                selectedRating={selectedRating}
                handleClick={() => handleClickRating(rating)}
              />
            ))}
          </Rating>
          <SubmitButton setIsSubmitted={setIsSubmitted} />
        </StyledCard>
      ) : (
        <StyledCardCenter>
          <SubmitIcon />
          <SubmitRating selectedRating={selectedRating} ratings={ratings} />
          <SubmitText />
        </StyledCardCenter>
      )}
    </StyledWrapper>
  );
}
