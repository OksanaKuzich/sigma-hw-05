import { ReactComponent as Logo } from 'images/icon/logo.svg';
import { ReactComponent as SearchIcon } from 'images/icon/search.svg';
import { ReactComponent as BasketIcon } from 'images/icon/basket.svg';
import { useCart } from 'hooks/useCart';
import {
  HeaderSection,
  NavList,
  Search,
  SearchBtn,
  BasketBtn,
  BasketWrapper,
  BntWrapper,
  Label,
  AccentAmount,
} from './Header.styled';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { amount } = useCart();

  return (
    <HeaderSection>
      <Link to="/">
        <Logo />
      </Link>
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
        <BasketBtn to="/cart">
          <BasketWrapper>
            <BasketIcon />
          </BasketWrapper>
          <div>
            Cart (
            {amount === 0 ? amount : <AccentAmount>{amount}</AccentAmount>})
          </div>
        </BasketBtn>
      </BntWrapper>
    </HeaderSection>
  );
};
