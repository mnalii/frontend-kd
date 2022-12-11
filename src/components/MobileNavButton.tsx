import styled from 'styled-components';

const MobileNavButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: none;

  @media (max-width: 944px) {
    display: block;
    z-index: 9999;
  }
`;

export default MobileNavButton;
