import styled from 'styled-components';

import Container from './Container';

interface IGrid {
  column?: number;
  center?: boolean;
}

const Grid = styled(Container)<IGrid>`
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;

  @media (max-width: 1200px) {
    column-gap: 4.8rem;
    row-gap: 6.4rem;
  }

  @media (max-width: 544px) {
    row-gap: 4.8rem;
  }

  &:not(:last-child) {
    margin-bottom: 9.6rem;
  }

  ${({ center }) => center && `align-items: center;`}

  ${({ column }) =>
    column &&
    `
    grid-template-columns: repeat(${column}, 1fr);

    @media (max-width: 704px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 544px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export default Grid;
