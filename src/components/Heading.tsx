import styled from 'styled-components';

interface IHeading {
  variant?: 'primary' | 'secondary' | 'tertiary' | undefined;
}

const Heading = styled.h1<IHeading>`
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;

  /* Set margin bottom */
  ${({ variant }) =>
    variant === 'secondary'
      ? `margin-bottom: 9.6rem;`
      : `margin-bottom: 3.2rem;`}

  ${({ variant }) =>
    variant === 'primary' &&
    `
      font-size: 5.2rem;
      line-height: 1.05;

      @media (max-width: 1344px) {
        font-size: 4.4rem;
      }
  `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
      font-size: 4.4rem;
      line-height: 1.2;

      @media (max-width: 1200px){
        font-size: 3.6rem;
      }
    `}

  ${({ variant }) =>
    variant === 'tertiary' &&
    `
      font-size: 3rem;
      line-height: 1.2;

      @media (max-width: 1200px){
        font-size: 2.4rem;
      }
    `}
`;

export default Heading;
