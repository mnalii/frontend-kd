import styled from 'styled-components';

import Container from '../components/Container';

const SectionFeatured = styled.section`
  padding: 4.8rem 0 3.2rem 0;
`;

const FeaturedHeading = styled.h2`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.4rem;
  color: #888;
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    height: 3.2rem;
    filter: brightness(0);
    opacity: 50%;

    @media (max-width: 944px) {
      height: 2.4rem;
    }

    @media (max-width: 544px) {
      height: 1.2rem;
    }
  }
`;

export default function AsFeatured() {
  return (
    <SectionFeatured>
      <Container>
        <FeaturedHeading>As featured in</FeaturedHeading>

        <Logos>
          <img src='/img/logos/techcrunch.png' alt='Techcrunch logo' />
          <img
            src='/img/logos/business-insider.png'
            alt='Business Insider logo'
          />
          <img
            src='/img/logos/the-new-york-times.png'
            alt='The New York Times logo'
          />
          <img src='/img/logos/forbes.png' alt='Forbes logo' />
          <img src='/img/logos/usa-today.png' alt='USA Today logo' />
        </Logos>
      </Container>
    </SectionFeatured>
  );
}
