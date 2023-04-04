import { useEffect, useState } from 'react';
import { ProductsListItem } from './ProductListItem';
import { ProductsListStyle } from './ProductsList.styled';
import { getAllProducts, getPopularProducts } from '../../../service/api';
import { ProductModal } from './ProductModal/ProductModal';

export const ProductsList = ({
  products,
  isBtnClick,
  setIsBtnClick,
  getProducts,
  setIsNewData,
  isNewData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState('');

  useEffect(() => {
    if (isNewData) {
      if (isBtnClick) {
        getProducts(getAllProducts);
        setIsNewData(false);
      } else {
        getProducts(getPopularProducts);
        setIsBtnClick(false);
        setIsNewData(false);
      }
    }
  }, [getProducts, isBtnClick, setIsBtnClick, isNewData, setIsNewData]);

  const handleClickBtn = e => {
    setIdProduct(e.currentTarget.dataset.id);
    setIsModalOpen(true);
  };

  return (
    <>
      <ProductsListStyle>
        {products.map(
          ({ name, category, price, image, rate, promoPrice, _id }) => (
            <ProductsListItem
              key={name + rate}
              name={name}
              category={category}
              price={price}
              image={image}
              rate={rate}
              promoPrice={promoPrice}
              funcClick={handleClickBtn}
              id={_id}
            />
          )
        )}
      </ProductsListStyle>
      {isModalOpen && (
        <ProductModal setIsModalOpen={setIsModalOpen} idProduct={idProduct} />
      )}
    </>
  );
};
