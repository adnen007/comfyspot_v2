import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const CartTotals = () => {
  const { total, shippingFee, toggleCheckout } = useCartContext();
  const { authenticated } = useUserContext();
  return (
    <Wrapper>
      <div className="content">
        <div className="row">
          <span>subtotal:</span>
          <span>${total / 100}</span>
        </div>
        <div className="row">
          <span>shipping fee</span>
          <span>${shippingFee / 100}</span>
        </div>
        <hr />
        <div className="row">
          <span>order total</span>
          <span>${(total + shippingFee) / 100}</span>
        </div>
      </div>
      {authenticated ? (
        <button onClick={() => toggleCheckout()}>
          <span>PROCEED TO CHECKOUT</span>
        </button>
      ) : (
        <button>
          <Link to="/login">Login</Link>
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }

  .content .row {
    text-transform: capitalize;
    display: grid;
    grid-template-columns: 110px 1fr;
    font-size: 14px;
    font-weight: 300;
  }

  .content .row span {
    display: block;
    width: 100px;
  }
  .content .row:first-child {
    font-weight: 600;
    margin-bottom: 12px;
  }
  .content hr {
    border-top: 1px solid var(--clr-grey-8);
    margin-top: 12px;
  }
  .content .row:last-child {
    margin-top: 24px;
    font-size: 18px;
    font-weight: 600;
  }
  button {
    width: 100%;
    margin-top: 1rem;
    border-color: transparent;
  }
  button a,
  button span {
    padding: 5px;
    display: inline-block;
    border-radius: var(--radius);
    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: 700;
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
    cursor: pointer;
  }
  @media (min-width: 425px) {
    .content .row {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default CartTotals;
