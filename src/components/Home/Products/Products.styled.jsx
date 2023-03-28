import styled from 'styled-components';
import { device } from 'utiles/devices';
import { SubtitleStyle } from '../Subtitle/Subtitle.styled';

export const ProductsSection = styled.section`
  padding-top: 176px;
  padding-bottom: 200px;
  text-align: center;

  ${SubtitleStyle} {
    margin-bottom: 8px;
  }

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;
