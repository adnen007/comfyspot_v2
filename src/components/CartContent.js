import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper>
      <div className="container">
        <CartColumns />
        <div className="items">
          <hr />
          {cart.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
          <hr />
        </div>
        <div className="buttons">
          <Link to="/products" className="continue_shopping">
            continue shopping
          </Link>
          <button onClick={clearCart} className="clear_cart">
            clear shopping cart
          </button>
        </div>
        <div className="total">
          <CartTotals />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
  }
  .items > hr:first-child {
    margin-bottom: 20px;
    display: none;
  }
  .items > hr:last-child {
    margin-top: 20px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    gap: 20px;
  }
  .buttons .continue_shopping,
  .buttons .clear_cart {
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .buttons .clear_cart {
    background-color: var(--clr-primary-5);
  }
  .total {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .items > hr:first-child {
      margin-bottom: 20px;
      display: block;
    }
    .total {
      justify-content: right;
    }
  }
`;

export default CartContent;
