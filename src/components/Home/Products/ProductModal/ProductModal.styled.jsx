import styled from 'styled-components';
import { device } from 'utiles/devices';

export const Wrapper = styled.div`
  position: fixed;
  background: rgba(244, 244, 244, 0.82);
  z-index: 1000;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;


  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.modal};

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;
