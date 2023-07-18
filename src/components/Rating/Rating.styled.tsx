import { styled } from 'styled-components';

export const List = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const ListItem = styled.li`
  display: block;
  background-color: hsl(216, 12%, 21%);
  color: hsl(216, 12%, 54%);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: hsl(217, 12%, 63%);
    color: hsl(0, 0%, 100%);
    cursor: pointer;
  }
`;
