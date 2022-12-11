import styled from 'styled-components';
import Button from './Button';
import Container from './Container';
import Heading from './Heading';

const SectionContact = styled.section`
  padding: 4.8rem 0 12.8rem;
`;

const Cta = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  border-radius: 11px;

  /* background-image: linear-gradient(to right bottom, #91eae4, #86a8e7); */
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  overflow: hidden;

  @media (max-width: 944px) {
    grid-template-columns: 3fr 2fr;
  }

  @media (max-width: 544px) {
    grid-template-columns: 1fr;
  }
`;

const CtaTextBox = styled.div`
  padding: 4.8rem 6.4rem 6.4rem 6.4rem;
  color: #45260a;

  @media (max-width: 544px) {
    padding: 3.2rem;
  }
`;

const CtaText = styled.div`
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 4.8rem;
`;

const CtaForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 2.4rem;

  @media (max-width: 944px) {
    grid-template-columns: 1fr;
  }
`;

const CtaFormLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

const CtaInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit;
  color: inherit;
  border: none;
  background-color: #fdf2e9;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ButtonForm = styled(Button)`
  background-color: #7f7fd5;
  color: #fdf2e9;
  align-self: end;
  padding: 1.2rem;

  &:hover {
    background-color: #fff;
    color: #555;
  }

  @media (max-width: 944px) {
    margin-top: 1.2rem;
  }
`;

const CtaImgBox = styled.div`
  background-image: url('/illustrations/contact.svg');
  background-size: 80% 80%;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 544px) {
    height: 32rem;
    grid-row: 1;
  }
`;

export default function Contact() {
  return (
    <SectionContact id='Contact'>
      <Container>
        <Cta>
          <CtaTextBox>
            <Heading variant='secondary' style={{ marginBottom: '3.2rem' }}>
              Get your free trial
            </Heading>

            <CtaText>
              Get in touch to start your free trial and unlock the potential of
              your business.
            </CtaText>

            <CtaForm>
              <div>
                <CtaFormLabel>Full Name</CtaFormLabel>
                <CtaInput
                  name='full-name'
                  type='text'
                  placeholder='John Smith'
                />
              </div>

              <div>
                <CtaFormLabel>Email address</CtaFormLabel>
                <CtaInput
                  name='email-address'
                  type='email'
                  placeholder='me@example.com'
                />
              </div>

              <div>
                <CtaFormLabel>Where did you hear from us?</CtaFormLabel>
                <CtaInput name='select-where' as='select'>
                  <option value=''>Please choose one option:</option>
                  <option value='friends'>Friends and family</option>
                  <option value='youtube'>YouTube video</option>
                  <option value='podcast'>Podcast</option>
                  <option value='ad'>Facebook ad</option>
                  <option value='others'>Others</option>
                </CtaInput>
              </div>

              <ButtonForm>Try it for free</ButtonForm>
            </CtaForm>
          </CtaTextBox>

          <CtaImgBox />
        </Cta>
      </Container>
    </SectionContact>
  );
}
