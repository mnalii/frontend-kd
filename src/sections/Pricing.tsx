import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { addCircleOutline, checkmarkOutline } from 'ionicons/icons';

import Container from '../components/Container';
import Grid from '../components/Grid';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Button from '../components/Button';

const SectionPricing = styled.div`
  padding: 9.6rem 0;
`;

interface IPricingPlan {
  plan?: 'starter' | 'complete';
}

const PricingPlan = styled.div<IPricingPlan>`
  border-radius: 11px;
  /* width: 100%; */

  @media (max-width: 704px) {
    width: 100%;
  }

  ${({ plan }) =>
    plan === 'starter' &&
    `
    border: 2px solid #91eae4;
    padding: 4.6rem;
  `}

  ${({ plan }) =>
    plan === 'complete' &&
    `
    background-color: #91eae4;
    padding: 4.8rem;
    position: relative;
    overflow: hidden;

    &::after {
      content: 'Best value';
      position: absolute;
      top: 6%;
      right: -22%;

      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      color: #333;
      background-color: #7f7fd5;
      padding: 0.8rem 8rem;
      transform: rotate(45deg);

      @media (max-width: 975px) {
        right: -15%;
      }

      @media (max-width: 759px) {
        right: -20%;
      }

      @media (max-width: 703px) {
        right: -8%;
        top: 9%;
      }

      @media (max-width: 703px) {
        right: -7%;
        top: 7%;
      }

      @media (max-width: 634px) {
        right: -8%;
        top: 8%;
      }

      @media (max-width: 562px) {
        right: -9%;
        top: 8%;
      }

      @media (max-width: 500px) {
        right: -22%;
        padding: 0.8rem 12rem;
      }

      @media (max-width: 417px) {
        right: -20%;
        top:4%;
        padding: 0.8rem 8rem;
      }

      @media (max-width: 375px) {
        right: -22%;
        top:4%;
      }

      @media (max-width: 280px) {
        right: -34%;
        top: 3%;
      }
    }
  `}
`;

const PlanHeader = styled.header`
  text-align: center;
  margin-bottom: 4.8rem;

  .plan-name {
    color: #7f7fd5;
    font-weight: 600;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.75;
    margin-bottom: 3.2rem;

    @media (max-width: 1055px) {
      font-size: 1.4rem;
    }
  }

  .plan-price {
    font-size: 6.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1.6rem;
  }

  .plan-price span {
    font-size: 3rem;
    font-weight: 500;
    margin-right: 0.8rem;
  }

  .plan-text {
    font-size: 1.6rem;
    line-height: 1.6;
    color: #6f6f6f;
  }
`;

const PricingList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;

  @media (max-width: 703px) {
    width: 50%;
    margin: auto;
  }

  @media (max-width: 703px) {
    width: 75%;
    margin: auto;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

const PricingListItem = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  line-height: 1.2;

  ion-icon {
    width: 3rem;
    height: 3rem;
    color: green;
    flex-shrink: 0;
  }

  span {
    flex-grow: 1;
  }

  .plus {
    width: 3rem;
    height: 3rem;
    color: #7f7fd5;
  }
`;

const PlanDetails = styled.aside`
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
`;

const PlanSignUp = styled.div`
  text-align: center;
  margin-top: 4.8rem;
  align-self: center;
`;

const PricingGrid = styled(Grid)`
  @media (max-width: 975px) {
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 703px) {
      grid-template-columns: 1fr;
    }

    /* & > *:last-child {
      justify-self: center;
      width: calc(975px - 56px);
      grid-column-start: span 2;
    } */
  }
`;

export default function Pricing() {
  return (
    <SectionPricing id='Pricing'>
      <Container>
        <SubHeading>Pricing</SubHeading>
        <Heading variant='secondary'>
          Affordable pricing plans without breaking bank
        </Heading>
      </Container>

      <PricingGrid column={3} style={{ marginBottom: '4.8rem' }}>
        <PricingPlan plan='starter'>
          <PlanHeader>
            <p className='plan-name'>Basic</p>
            <p className='plan-price'>
              <span>$</span>123
            </p>
          </PlanHeader>

          <PricingList>
            <PricingListItem>
              <IonIcon icon={checkmarkOutline} size='large' />
              <span>Record items out</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon icon={checkmarkOutline} size='large' />
              <span>Record incoming items</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon icon={checkmarkOutline} size='large' />
              <span>Record profits</span>
            </PricingListItem>

            <PlanSignUp>
              <Button fullWidth>Choose Plan</Button>
            </PlanSignUp>
          </PricingList>
        </PricingPlan>
        <PricingPlan plan='starter'>
          <PlanHeader>
            <p className='plan-name'>Business</p>
            <p className='plan-price'>
              <span>$</span>456
            </p>
            <p className='plan-text'>per month</p>
          </PlanHeader>

          <PricingList>
            <PricingListItem>
              <IonIcon icon={checkmarkOutline} size='large' />
              <span>Record items out</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon icon={checkmarkOutline} size='large' />
              <span>Record incoming items</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon icon={checkmarkOutline} size='large' />
              <span>Record profits</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon className='plus' icon={addCircleOutline} size='large' />
              <span>Analyze sales results with chart</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon className='plus' icon={addCircleOutline} size='large' />
              <span>24/7 supports</span>
            </PricingListItem>

            <PlanSignUp>
              <Button fullWidth>Choose Plan</Button>
            </PlanSignUp>
          </PricingList>
        </PricingPlan>

        <PricingPlan plan='complete'>
          <PlanHeader>
            <p className='plan-name'>Entrepreneur</p>
            <p className='plan-price'>
              <span>$</span>789
            </p>
            <p className='plan-text'>per month.</p>
          </PlanHeader>

          <PricingList>
            <PricingListItem>
              <IonIcon icon={checkmarkOutline} size='large' />
              <span>Record items out</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon icon={checkmarkOutline} size='large' />
              <span>Record incoming items</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon icon={checkmarkOutline} size='large' />
              <span>Record profits</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon className='plus' icon={addCircleOutline} size='large' />
              <span>Analyze sales results with chart</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon className='plus' icon={addCircleOutline} size='large' />
              <span>24/7 supports</span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon className='plus' icon={addCircleOutline} size='large' />
              <span>Excell exporting </span>
            </PricingListItem>
            <PricingListItem>
              <IonIcon className='plus' icon={addCircleOutline} size='large' />
              <span>AI profit prediction</span>
            </PricingListItem>

            <PlanSignUp>
              <Button fullWidth>Choose Plan</Button>
            </PlanSignUp>
          </PricingList>
        </PricingPlan>
      </PricingGrid>
    </SectionPricing>
  );
}
