import { RatingType } from '../../types';
import * as S from './SubmitRating.styled';

interface SubmitRatingProps {
  ratings: RatingType[];
  selectedRating: RatingType | null;
}

export default function SubmitRating({
  ratings,
  selectedRating,
}: SubmitRatingProps) {
  return (
    <S.Paragraph>
      You selected {selectedRating?.rating} out of {ratings.length}
    </S.Paragraph>
  );
}
