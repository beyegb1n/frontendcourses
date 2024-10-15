/* eslint-disable react/prop-types */
import './ProductGallery.css';

const ProductGallery = ({ products }) => {
  return (
    <div className="product-gallery">
      {products.map((product, index) => (
        <figure key={index} className="product-item">
          <img src={product.imageSrc} alt={product.altText} />
          <figcaption>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
            <button>Add to your shopping bag</button>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default ProductGallery;
