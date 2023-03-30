import { useEffect, useState } from 'react';
import { Button } from 'components/Button/Button';
import { Container } from 'components/Container/Container.styled';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { ProductsSection } from './Products.styled';
import { ProductsList } from './ProductsList';
import { getPopularProducts } from '../../../service/api';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isBtnClick, setIsBtnClick] = useState(false);
  const [isNewData, setIsNewData] = useState(false);

  const allProducts = () => {
    setIsBtnClick(!isBtnClick);
    setIsNewData(true);
  };

  const getProducts = async func => {
    const newProducts = await func();
    setProducts(newProducts);
  };

  useEffect(() => {
    getProducts(getPopularProducts);
  }, []);

  return (
    <ProductsSection>
      <Container>
        <Subtitle text={'Categories'} />
        <Title text={'Our Products'} />
        <ProductsList
          products={products}
          setProducts={setProducts}
          isBtnClick={isBtnClick}
          setIsBtnClick={setIsBtnClick}
          getProducts={getProducts}
          isNewData={isNewData}
          setIsNewData={setIsNewData}
        />
        <Button
          text={isBtnClick ? 'Hide All' : 'Load More'}
          stl={'blue'}
          func={allProducts}
        />
      </Container>
    </ProductsSection>
  );
};
