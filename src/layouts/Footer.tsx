import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { logoInstagram, logoFacebook, logoTwitter } from 'ionicons/icons';

import Grid from '../components/Grid';
import ScrollLink from '../components/ScrollLink';

const FooterContainer = styled.footer`
  padding: 12.8rem 0;
  border-top: 1px solid #eee;
`;

const FooterGrid = styled(Grid)`
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;

  @media (max-width: 704px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const LogoCol = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 704px) {
    grid-column: span 3;
  }
`;

const FooterLogo = styled(ScrollLink)`
  display: block;
  margin-bottom: 3.2rem;

  img {
    height: 2.2rem;
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.4rem;
`;

const FooterLink = styled('a')`
  text-decoration: none;
  font-size: 1.6rem;
  color: #767676;
  transition: all 0.3s;

  ion-icon {
    height: 2.4rem;
    width: 2.4rem;
  }

  &:hover {
    color: #555;
  }
`;

const CopyRight = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #767676;
  margin-top: auto;
`;

const AddressCol = styled.div`
  @media (max-width: 704px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const FooterHeading = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

const Contacts = styled.address`
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.6;
`;

const Address = styled.p`
  margin-bottom: 2.4rem;
`;

const NavCol = styled.nav`
  @media (max-width: 704px) {
    grid-row: 1;
    grid-column: span 2;
    margin-bottom: 3.2rem;
  }
`;

const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <LogoCol>
          <FooterLogo to='Home' smooth={true} offset={-20} duration={500}>
            Home
          </FooterLogo>

          <SocialLinks>
            <li>
              <FooterLink href='www.instagram.com'>
                <IonIcon icon={logoInstagram} />
              </FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>
                <IonIcon icon={logoFacebook} />
              </FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>
                <IonIcon icon={logoTwitter} />
              </FooterLink>
            </li>
          </SocialLinks>

          <CopyRight>
            Copyright &copy; 2022 by XYZ Company, Inc. All rights reserved.
          </CopyRight>
        </LogoCol>

        <AddressCol>
          <FooterHeading>Contact us</FooterHeading>
          <Contacts>
            <Address>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              dolor eum.
            </Address>
            <p>
              <FooterLink href='tel:415-201-6370'>415-201-6370</FooterLink>
              <br />
              <FooterLink href='mailto:hello@kedatech.com'>
                hello@kedatech.com
              </FooterLink>
            </p>
          </Contacts>
        </AddressCol>

        <NavCol>
          <FooterHeading>Account</FooterHeading>
          <FooterNav>
            <li>
              <FooterLink href='www.instagram.com'>Create account</FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>Sign in</FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>iOS app</FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>Android app</FooterLink>
            </li>
          </FooterNav>
        </NavCol>
        <NavCol>
          <FooterHeading>Company</FooterHeading>
          <FooterNav>
            <li>
              <FooterLink href='www.instagram.com'>About Keda Tech</FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>For Business</FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>Carrers</FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>Partners</FooterLink>
            </li>
          </FooterNav>
        </NavCol>
        <NavCol>
          <FooterHeading>Resources</FooterHeading>
          <FooterNav>
            <li>
              <FooterLink href='www.instagram.com'>FAQ</FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>Help Center</FooterLink>
            </li>
            <li>
              <FooterLink href='www.instagram.com'>Privacy & Terms</FooterLink>
            </li>
          </FooterNav>
        </NavCol>
      </FooterGrid>
    </FooterContainer>
  );
}
