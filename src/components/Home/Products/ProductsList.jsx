import product from '../../../images/cards/card.jpg';
import { Rate } from './Rate';
import {
  ProductsListStyle,
  ProductCard,
  ProductCategory,
  ImageWrapper,
  ProductName,
  DecoreEl,
  PriceWrapper,
  Price,
  PricePromo,
  Info,
} from './ProductsList.styled';
import { RateWrapper } from './Rate.styled';

export const ProductsList = () => {
  return (
    <ProductsListStyle>
      <ProductCard>
        <ProductCategory>Vegetable</ProductCategory>
        <ImageWrapper>
          <img src={product} alt="product" />
        </ImageWrapper>
        <ProductName>Calabrese Broccoli</ProductName>
        <DecoreEl />
        <Info>
          <PriceWrapper>
            <Price>$20.00</Price>
            <PricePromo>$13.00</PricePromo>
          </PriceWrapper>
          <RateWrapper>
            <Rate rate="3" />
          </RateWrapper>
        </Info>
      </ProductCard>
    </ProductsListStyle>
  );
};
