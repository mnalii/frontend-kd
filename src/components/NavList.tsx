import styled from 'styled-components';

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;

  @media (max-width: 1200px) {
    gap: 3.2rem;
  }

  @media (max-width: 944px) {
    flex-direction: column;
    gap: 4.8rem;

    /* & li:not(:last-child) {
      margin-right: 4.8rem;
    } */
  }
`;

export default NavList;
