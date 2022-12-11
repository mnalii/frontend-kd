import styled from 'styled-components';

interface INav {
  open: boolean;
}

const MainNav = styled.nav<INav>`
  @media (max-width: 944px) {
    background-color: rgba(255, 255, 255, 0.9);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(100%);

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in;

    opacity: 0;

    pointer-events: none;

    visibility: hidden;

    ${({ open }) =>
      open &&
      `
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
        transform: translateX(0);
        overflow: hidden;
        position: fixed;
  `}
  }
`;

export default MainNav;
