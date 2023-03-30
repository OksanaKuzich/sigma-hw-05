import { Container } from 'components/Container/Container.styled';
import styled from 'styled-components';
import { device } from 'utiles/devices';
import imageBg from '../../../images/eco.jpg';

export const EcoSection = styled.section`
  ${Container} {
    display: flex;
    padding: 0;
  }
  @media ${device.tablet} {
  }
`;

export const Image = styled.div`
  /* position: relative;
  left: -270px; */
  background-image: url(${imageBg});
  background-repeat: no-repeat;
  width: 952px;
  height: 931px;
  @media ${device.tablet} {
  }
`;

export const EcoInfo = styled.div`
  @media ${device.tablet} {
  }
`;
