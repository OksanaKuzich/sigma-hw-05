import styled from 'styled-components';
import { device } from 'utiles/devices';

export const HeaderSection = styled.header`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.fs20};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    padding: 50px 40px;
    max-width: 1200px;
  }

  @media ${device.desktop} {
    padding: 69px 162px;
    max-width: 1596px;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: flex;
    gap: 20px;
  }

  @media ${device.desktop} {
    gap: 50px;
  }
`;

export const Search = styled.input`
  background: ${props => props.theme.colors.search};
  border-radius: 36px;
  border: none;
  font-size: ${props => props.theme.fontSizes.fs18};
  color: ${props => props.theme.colors.main};
  padding-left: 20px;
  display: none;

  @media ${device.desktop} {
    width: 376px;
    height: 66px;
    display: block;
  }
`;

export const Label = styled.label`
  position: relative;
  opacity: 0;

  @media ${device.desktop} {
    opacity: 1;
  }
`;

export const SearchBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 6px;
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  @media ${device.desktop} {
    opacity: 1;
  }
`;

export const BasketBtn = styled.button`
  width: 159px;
  height: 66px;
  border: 1px solid #e0e0e0;
  border-radius: 33px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 6px;
  font-size: ${props => props.theme.fontSizes.fs18};
  font-weight: ${props => props.theme.fontWeights.fw600};
  color: ${props => props.theme.colors.main};
`;

export const BasketWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${props => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const BntWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
