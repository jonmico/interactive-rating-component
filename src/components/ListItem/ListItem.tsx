import { RatingType } from '../../types';
import * as S from './ListItem.styled';

interface ListItemProps {
  rating: RatingType;
  handleClick: () => void;
  selectedRating: RatingType | null;
}

export default function ListItem({
  rating,
  handleClick,
  selectedRating,
}: ListItemProps) {
  const isSelectedRating = rating.id === selectedRating?.id;

  return (
    <S.ListItem onClick={handleClick} $isSelectedRating={isSelectedRating}>
      {rating.rating}
    </S.ListItem>
  );
}
