import { Button } from 'components/Button/Button';
import { Container } from 'components/Container/Container.styled';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { ProductsSection } from './Products.styled';
import { ProductsList } from './ProductsList';

export const Products = () => {
  return (
    <ProductsSection>
      <Container>
        <Subtitle text={'Categories'} />
        <Title text={'Our Products'} />
        <ProductsList />
        <Button text={'Load More'} stl={'blue'} />
      </Container>
    </ProductsSection>
  );
};
