import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const summ = cart.reduce(
      (acc, product) => acc + Number(product.quantity),
      0
    );
    setAmount(summ);
    console.log(summ);
    console.log(cart);
  }, [cart]);

  const changeAmount = items => {
    setAmount(items);
  };

  const addToCart = (idProduct, product, quantity) => {
    if (cart.some(i => i._id === idProduct)) {
      setCart(
        cart.map(item => {
          if (item._id === product._id) {
            return {
              ...item,
              quantity: Number(item.quantity) + Number(quantity),
            };
          }
          return item;
        })
      );
      return;
    }
    setCart([...cart, { ...product, quantity }]);
  };

  return (
    <CartContext.Provider value={{ amount, changeAmount, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
