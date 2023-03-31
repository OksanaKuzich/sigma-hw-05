import { createPortal } from 'react-dom';
import { Rate } from '../Rate';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect, useState } from 'react';
import { getOneProducts } from 'service/api';
import { Wrapper, Modal } from './ProductModal.styled';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const ProductModal = ({ setIsModalOpen, idModal }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async func => {
      const newProduct = await getOneProducts(idModal);
      setProduct(newProduct);
    };
    getProduct();
  }, [idModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setIsModalOpen(false);
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    disableBodyScroll(body);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      enableBodyScroll(body);
    };
  });

  return createPortal(
    <Wrapper onClick={handleBackdropClick}>
      <Modal>
        <div>
          <img src={product.image} alt="product" />
          <div>
            <p>{product.category}</p>
            <p>{product.name}</p>
            <Rate rate={product.rate} />
            <p>{product.price}</p>
            <p>{product.promoPrice}</p>
            <p>{product.shortDescr}</p>
          </div>
        </div>
        <div>
          <button type="button">Product Description</button>
          <button type="button">Additional Info</button>
        </div>
        <p>{product.description}</p>
        <p>{product.additionalInfo}</p>
      </Modal>
    </Wrapper>,
    modalRoot
  );
};
