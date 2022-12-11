import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import Heading from '../components/Heading';
import Button from '../components/Button';
import ScrollLink from '../components/ScrollLink';

interface IHero {
  inView?: boolean | undefined;
}
const HeroContainer = styled.section<IHero>`
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

  padding: 4.8rem 0 9.6rem 0;

  ${({ inView }) =>
    inView === false &&
    `
    margin-top: 9.6rem;
  `}

  @media (max-width: 544px) {
    padding: 2.4rem 0 6.4rem 0;
  }
`;

const Hero = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9.6rem;
  align-items: center;

  @media (max-width: 1344px) {
    max-width: 120rem;
  }

  @media (max-width: 1200px) {
    gap: 4.8rem;
  }

  @media (max-width: 944px) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
    gap: 6.4rem;
  }

  @media (max-width: 544px) {
    padding: 0 3.2rem;
  }
`;

const HeroTextBox = styled.div`
  @media (max-width: 944px) {
    text-align: center;
  }
`;

const HeroDescription = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

const DeliveredMeals = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 8rem;

  @media (max-width: 944px) {
    justify-content: center;
    margin-top: 3.2rem;
  }
`;

const DeliveredImgs = styled.div`
  display: flex;

  img {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    margin-right: -1.6rem;
    border: 3px solid #fdf2e9;
  }

  img:last-child {
    margin: 0;
  }
`;

const DeliveredText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;

  span {
    color: #2980b9;
    font-weight: 700;
  }
`;

const HeroImgBox = styled.div`
  img {
    width: 100%;
  }

  @media (max-width: 944px) {
    text-align: center;

    img {
      width: 60%;
    }
  }

  @media (max-width: 544px) {
    img {
      width: 80%;
    }
  }
`;

export default function HeroSection() {
  const heroContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(true);

  // // Use useMemo to only create the observer when props or state change
  const observer = useMemo(() => {
    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelector('.header')?.classList.remove('sticky');
          setIsInView(true);
          console.log('intersecting');
        } else {
          document.querySelector('.header')?.classList.add('sticky');
          setIsInView(false);
          console.log('not intersecting');
        }

        if (!entry.isIntersecting) {
          console.log('started not intersecting');
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
      }
    );

    return observer;
  }, []);

  useEffect(() => {
    // Observe the element that we have a reference to

    if (heroContainerRef.current) {
      observer.observe(heroContainerRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, [observer, heroContainerRef.current]);

  return (
    <HeroContainer id='Home' inView={isInView} ref={heroContainerRef}>
      <Hero>
        <HeroTextBox>
          <Heading variant='primary'>
            Empower your decision-making with ERP reports.
          </Heading>
          <HeroDescription>
            Our intuitive, user-friendly platform makes it easy to access,
            analyze, and share data from your ERP system.
          </HeroDescription>

          <Button
            style={{ marginRight: '1.6rem' }}
            as={ScrollLink}
            to='About'
            smooth={true}
            offset={-20}
            duration={500}
          >
            Learn More
          </Button>

          <DeliveredMeals>
            <DeliveredImgs>
              <img src='/img/customers/customer-1.jpg' alt='Customer photo' />
              <img src='/img/customers/customer-2.jpg' alt='Customer photo' />
              <img src='/img/customers/customer-3.jpg' alt='Customer photo' />
              <img src='/img/customers/customer-4.jpg' alt='Customer photo' />
              <img src='/img/customers/customer-5.jpg' alt='Customer photo' />
              <img src='/img/customers/customer-6.jpg' alt='Customer photo' />
            </DeliveredImgs>

            <DeliveredText>
              <span>500+ businesses</span> transformed with our service.
            </DeliveredText>
          </DeliveredMeals>
        </HeroTextBox>

        <HeroImgBox>
          <picture>
            <source
              srcSet='/illustrations/hero_section.svg'
              type='image/webp'
            />
            <source srcSet='/illustrations/hero_section.svg' type='image/png' />

            <img
              src='/illustrations/hero_section.svg'
              className='hero-img'
              alt='Team work'
            />
          </picture>
        </HeroImgBox>
      </Hero>
    </HeroContainer>
  );
}
