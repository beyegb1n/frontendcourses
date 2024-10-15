import Header from './components/header';
import Footer from './components/footer';
import ProductGallery from './components/productGallery';

const App = () => {
  const products = [
    {
      name: 'RANDOM ACCESS MEMORIES DIGITAL ALBUM',
      price: '€18.99',
      description:
        '2023 marks the 10th anniversary of Daft Punk multi Grammy winning hit record Random Access Memories...',
      imageSrc: './src/images/ram.jpg',
      altText: 'Random Access Memories Album Cover Art',
    },
    {
      name: 'DISCOVERY DIGITAL ALBUM',
      price: '€15.99',
      description: 'Discovery by Daft Punk, featuring hits like "One More Time"...',
      imageSrc: './src/images/discovery.jpg',
      altText: 'Discovery Album Cover Art',
    },
    {
    name: 'HUMAN AFTER ALL DIGITAL ALBUM',
      price: '€12.99',
      description: 'Human After All, another Daft Punk classic...',
      imageSrc: './src/images/human-after-all.jpg',
      altText: 'Human After All Album Cover Art',
    },
  ];

  return (
    <>
      <Header />
      <ProductGallery products={products} />
      <Footer />
    </>
  );
};

export default App;
