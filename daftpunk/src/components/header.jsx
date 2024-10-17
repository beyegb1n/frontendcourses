/* eslint-disable react/prop-types */
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import "./header.css";

const Header = ({
  cartItems,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <header>
        <a href="#">
          <img src="./src/images/daft-punk-logo.png" alt="Logo Daft Punk" />
        </a>

        <div
          className="cart-icon"
          onMouseEnter={openCart}
          onMouseLeave={closeCart}
        >
          <HiOutlineShoppingCart size={24} />
          <span>{cartItems.length}</span>
        </div>

        {isCartOpen && (
          <div
            className="cart-dropdown"
            onMouseEnter={openCart}
            onMouseLeave={closeCart}
          >
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      <img src={item.imageSrc} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>
                          Price: {item.price} x {item.quantity}
                        </p>

                        <div className="quantity-container">
                          <button onClick={() => onDecreaseQuantity(item)}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => onIncreaseQuantity(item)}>
                            +
                          </button>
                        </div>

                        <button onClick={() => onRemoveItem(item)}>
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <p>Total: €{totalPrice.toFixed(2)}</p>

                <button className="checkout-button">Proceed to Checkout</button>
              </>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
