import styled from 'styled-components';

import Container from '../components/Container';
import Grid from '../components/Grid';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';

const AboutContainer = styled.section`
  padding: 9.6rem 0;
`;

const TextNumber = styled.p`
  font-size: 8.6rem;
  font-weight: 600;
  color: #ddd;
  margin-bottom: 1.2rem;

  @media (max-width: 944px) {
    font-size: 7.4rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
`;

const ImgBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media (max-width: 544px) {
    transform: translateY(2.4rem);

    &:nth-child(2) {
      grid-row: 1;
    }

    &:nth-child(6) {
      grid-row: 5;
    }
  }
`;

export default function About() {
  return (
    <AboutContainer id='About'>
      <Container>
        <SubHeading>About</SubHeading>
        <Heading variant='secondary'>
          Go and plan your reports in 3 simple steps
        </Heading>
      </Container>

      <Grid column={2} center>
        <div>
          <TextNumber>01</TextNumber>
          <Heading variant='tertiary'>
            Powerful data analysis tools at your fingertips!
          </Heading>

          <Description>
            Our ERP reporting service provides real-time insights into your
            business operations, enabling you to monitor key metrics and make
            data-driven decisions.
          </Description>
        </div>

        <ImgBox>
          <img src='/illustrations/realtime.svg' alt='Realtime' />
        </ImgBox>

        <ImgBox>
          <img src='/illustrations/custom.svg' alt='Realtime' />
        </ImgBox>

        <div>
          <TextNumber>02</TextNumber>
          <Heading variant='tertiary'>
            Customized reports tailored to your business needs!
          </Heading>

          <Description>
            Whether you're looking for a high-level overview of your business or
            detailed insights into specific areas, our service has you covered
          </Description>
        </div>

        <div>
          <TextNumber>03</TextNumber>
          <Heading variant='tertiary'>
            Unmatched expertise and support for your ERP reporting!
          </Heading>

          <Description>
            Start exploring the power of data-driven decision making with our
            ERP reporting service. With our platform, you'll be able to make
            better, more informed decisions to drive the success of your
            business.
          </Description>
        </div>

        <ImgBox>
          <img src='/illustrations/collab.svg' alt='Collab' />
        </ImgBox>
      </Grid>
    </AboutContainer>
  );
}
