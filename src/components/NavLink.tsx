import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: 1.8rem;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #0c0906;
  }

  @media (max-width: 944px) {
    font-size: 3rem;
  }
`;

export default NavLink;
