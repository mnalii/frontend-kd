import styled from 'styled-components';

interface IButton {
  fullWidth?: boolean;
  variant?: 'outline' | undefined;
}

const Button = styled.button<IButton>`
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: 1.8rem;
  font-family: inherit;
  transition: all 0.3s;

  padding: 1.2rem 2.4rem;
  border-radius: 9px;
  color: #fff;
  background-color: #6dd5fa;

  border: none;

  &:hover {
    background-color: #2980b9;

    cursor: pointer;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    `
    display: block;
    background-color: #2980b9;

    &:hover {
      background-color: #6dd5fa;
    }

  `}

  ${({ variant }) =>
    variant === 'outline' &&
    `
    background-color: transparent;
    border: 2px solid #6dd5fa;
    color: inherit;

    &:hover {
      background-color: #2980b9;
      box-shadow: inset 0 0 0 3px #fff;
    }
  `}

  @media (max-width: 544px) {
    padding: 2.4rem 1.6rem;
  }
`;

export default Button;
