import React from "react";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { totalAmount } = useCartContext();
  const { closeSidebar } = useProductsContext();
  const { myUser, loginWithRedirect, logout } = useUserContext();

  return (
    <Wrapper className="cart_buttons" onClick={closeSidebar}>
      <Link to="/cart" className="cart">
        <p>Cart</p>
        <FaShoppingCart />
        <span>{totalAmount}</span>
      </Link>
      {myUser ? (
        <div
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="logout"
        >
          <p>Logout</p>
          <FaUserMinus />
        </div>
      ) : (
        <div onClick={loginWithRedirect} className="login">
          <p>Login</p>
          <FaUserPlus />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  gap: 20px;
  > a,
  .login,
  .logout {
    display: block;
    gap: 8px;
    background-color: transparent;
    text-decoration: none;
    color: #102a42;
    display: flex;
    font-size: 26px;
    cursor: pointer;
  }
  .cart {
    font-size: 26px;
    position: relative;
    width: fit-content;
  }
  .cart p {
  }
  .cart svg {
  }
  .cart span {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    background-color: var(--clr-primary-5);
    color: var(--clr-white);
    top: -11px;
    right: -11px;
    font-size: 14px;
    width: 20px;
    height: 20px;
  }
  @media (width>= 992px) {
    display: flex;
  }
`;

export default CartButtons;
