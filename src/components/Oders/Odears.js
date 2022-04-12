import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Reviewitem from "../Reviewitem/Reviewitem";
import "./Orders.css";
const Odears = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const hendelRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <Reviewitem
            key={product.id}
            product={product}
            hendelRemoveProduct={hendelRemoveProduct}
          ></Reviewitem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={() => navigate("/shipment")}>
            Proceed Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Odears;
