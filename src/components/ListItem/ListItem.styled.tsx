import { styled } from 'styled-components';

interface ListItemProps {
  $isSelectedRating: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  display: block;
  background-color: ${({ $isSelectedRating }) =>
    $isSelectedRating ? 'hsl(25, 97%, 53%)' : 'hsl(216, 12%, 21%)'};
  color: ${({ $isSelectedRating }) =>
    $isSelectedRating ? 'hsl(0, 0%, 100%)' : 'hsl(216, 12%, 54%)'};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 45px;
    width: 45px;
  }

  &:hover {
    background-color: ${({ $isSelectedRating }) =>
      $isSelectedRating ? 'hsl(25, 97%, 53%)' : 'hsl(217, 12%, 63%)'};
    color: hsl(0, 0%, 100%);
    cursor: pointer;
  }
`;
