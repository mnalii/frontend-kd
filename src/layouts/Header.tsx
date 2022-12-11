import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';

import MainNav from '../components/MainNav';
import NavList from '../components/NavList';
import NavLink from '../components/NavLink';
import Button from '../components/Button';
import ScrollLink from '../components/ScrollLink';
import MobileNavButton from '../components/MobileNavButton';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #7f7fd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;

  h3 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  img {
    height: 2.2rem;
  }

  &.sticky {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 8rem;
    padding-top: 0;
    padding-bottom: 0;
    background: rgba(255, 255, 255, 0.97);
    z-index: 999;
    box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
    transition: all 0.6s;
  }

  @media (max-width: 1200px) {
    padding: 0 3.2rem;
  }
`;

const LINKS = ['About', 'Pricing', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer className='header'>
      <NavLink to='/'>Home</NavLink>
      <MainNav open={open}>
        <NavList>
          {LINKS.map((l) => (
            <li key={l}>
              <ScrollLink to={l} smooth={true} offset={-20} duration={500}>
                {l}
              </ScrollLink>
            </li>
          ))}

          <li>
            <Button as={Link} to='/login' variant='outline'>
              Login
            </Button>
          </li>
        </NavList>
      </MainNav>

      <MobileNavButton onClick={() => setOpen((prevState) => !prevState)}>
        {!open && <IonIcon icon={menuOutline} size='large' />}
        {open && <IonIcon icon={closeOutline} size='large' />}
      </MobileNavButton>
    </HeaderContainer>
  );
}
