import { styled } from 'styled-components';

export const Button = styled.button`
  width: 100%;
  padding: 1em;
  border-radius: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Overpass';
  background-color: hsl(25, 97%, 53%);
  color: hsl(0, 0%, 100%);
  border: none;

  &:hover {
    background-color: hsl(0, 0%, 100%);
    color: hsl(25, 97%, 53%);
    cursor: pointer;
  }
`;
