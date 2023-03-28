import { ReactComponent as Logo } from 'images/icon/logo.svg';
import { ReactComponent as SearchIcon } from 'images/icon/search.svg';
import { ReactComponent as BasketIcon } from 'images/icon/basket.svg';
import {
  HeaderSection,
  NavList,
  Search,
  SearchBtn,
  BasketBtn,
  BasketWrapper,
  BntWrapper,
  Label,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderSection>
      <Logo />
      <nav>
        <NavList>
          <li>Home</li>
          <li>About</li>
          <li>Pages</li>
          <li>Shop</li>
          <li>Projects</li>
          <li>News</li>
        </NavList>
      </nav>
      <BntWrapper>
        <Label>
          <Search />
          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
        </Label>
        <BasketBtn>
          <BasketWrapper>
            <BasketIcon />
          </BasketWrapper>
          Cart (0)
        </BasketBtn>
      </BntWrapper>
    </HeaderSection>
  );
};
