import { Title } from 'components/Home/Hero/Hero.styled';
import styled from 'styled-components';
import { device } from 'utiles/devices';
import bgImage from '../../images/notFound-1.jpg';
import bgDerore from '../../images/notFound-2.png';

export const NotFoundSection = styled.section`
  margin-bottom: 130px;
  background: url(${bgDerore}), url(${bgImage});
  width: 1920px;
  height: 898px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const NotFoundInfo = styled.div`
  padding: 214px 260px 214px 1127px;

  ${Title} {
    margin: 0;
  }

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const NotFoundSubtitle = styled.p`
  margin-bottom: 37px;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.fw600};
  color: ${props => props.theme.colors.gray};

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;
