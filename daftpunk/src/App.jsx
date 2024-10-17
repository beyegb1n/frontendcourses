import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ProductGallery from './components/productGallery';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      name: 'RANDOM ACCESS MEMORIES DIGITAL ALBUM',
      price: 18.99,
      quantity: 1,
      description:
        '2023 marks the 10th anniversary of Daft Punk multi Grammy winning hit record Random Access Memories...',
      imageSrc: './src/images/ram.jpg',
      altText: 'Random Access Memories Album Cover Art',
    },
    {
      name: 'DISCOVERY DIGITAL ALBUM',
      price: 15.99,
      quantity: 1,
      description: 'Discovery by Daft Punk, featuring hits like "One More Time"...',
      imageSrc: './src/images/discovery.jpg',
      altText: 'Discovery Album Cover Art',
    },
    {
      name: 'HUMAN AFTER ALL DIGITAL ALBUM',
      price: 12.99,
      quantity: 1,
      description: 'Human After All, another Daft Punk classic...',
      imageSrc: './src/images/human-after-all.jpg',
      altText: 'Human After All Album Cover Art',
    },
    {
      name: 'HOMEWORK DIGITAL ALBUM',
      price: 9.99,
      quantity: 1,
      description: 'Homework, the first Daft Punk\'s Project',
      imageSrc: './src/images/homework.jpg',
      altText: 'Homework Album Cover Art',
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.name === product.name);
      if (itemExists) {
        return prevItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };


  const removeItemFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== product.name)
    );
  };

  const increaseQuantity = (product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === product.name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <>
      <Header
        cartItems={cartItems}
        onRemoveItem={removeItemFromCart}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
      />
      <ProductGallery products={products} addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default App;
