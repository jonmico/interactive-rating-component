import * as S from './Rating.styled';

interface RatingProps {
  children: React.ReactNode;
}

export default function Rating({ children }: RatingProps) {
  return (
    <div>
      <S.List>{children}</S.List>
    </div>
  );
}
