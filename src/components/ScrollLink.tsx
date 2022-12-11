import { Link } from 'react-scroll';

import styled from 'styled-components';

const ScrollLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: 1.8rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover,
  &:active {
    /* color: #cf711f; */
    color: #05040a;
  }

  @media (max-width: 944px) {
    font-size: 3rem;
  }
`;

export default ScrollLink;
