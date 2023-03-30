import { createPortal } from 'react-dom';
import { Rate } from '../Rate';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect, useState } from 'react';
import { getOneProducts } from 'service/api';
import { Wrapper } from './ProductModal.styled';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const ProductModal = ({ setIsModalOpen }) => {
const [product, setProduct] = useState([]);
    
  useEffect(() => {
    console.log(product);
  }, [product]);
    
  useEffect(() => {
    const getProduct = async func => {
      const newProduct = await getOneProducts();
      setProduct(newProduct);
    };
    getProduct();
  }, []);

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
      <div>
        <img alt="product" />
        <div>
          <p>Cateroty</p>
          <p>Health Pistachios</p>
          <Rate />
          <p>Price</p>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
      <div>
        <button type="button">Product Description</button>
        <button type="button">Additional Info</button>
      </div>
      <p>
        Welcome to the world of natural and organic. Here you can discover the
        bounty of nature. We have grown on the principles of health, ecology,
        and care. We aim to give our customers a healthy chemical-free meal for
        perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as
        glucose and fructose — make up 70% and 80% of the carbs in raw.
      </p>
    </Wrapper>,
    modalRoot
  );
};
