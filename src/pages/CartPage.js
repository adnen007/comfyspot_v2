import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const { cart, checkout } = useCartContext();

  if (cart.length === 0) {
    return (
      <Wrapper className="page_10">
        <div className="empty">
          <h1>your cart is empty</h1>
          <Link to="/products">fill it</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <PageHero title="Cart" />
      <CartContent />
      <div className={checkout ? "checkout active" : "checkout"}>
        <CheckoutPage />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .checkout {
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: #eee;
    transform: translatex(-100%);
    transition: 0.6s;
    opacity: 0;
  }
  .checkout.active {
    transform: translatex(0%);
    opacity: 1;
  }

  h1 {
    font-size: 42px;
    text-transform: capitalize;
  }
  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 100px 5px 0 5px;
  }
  .empty a {
    background-color: var(--clr-primary-5);
    color: white;
    font-size: 20px;
    padding: 10px 18px;
    border-radius: 5px;
    text-transform: uppercase;
    display: block;
  }
`;

export default CartPage;
