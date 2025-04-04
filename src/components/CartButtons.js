import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { useProductsContext } from "../context/productsContext";
import { useUserContext } from "../context/userContext";

const CartButtons = () => {
  const { totalAmount } = useCartContext();
  const { closeSidebar } = useProductsContext();
  const { authenticated, logout } = useUserContext();
  const navigate = useNavigate();

  return (
    <Wrapper className="cart_buttons" onClick={closeSidebar}>
      <Link to="/cart" className="cart">
        <p>Cart</p>
        <FaShoppingCart />
        <span>{totalAmount}</span>
      </Link>
      {authenticated ? (
        <div onClick={() => logout(navigate)} className="logout">
          <p>Logout</p>
          <FaUserMinus />
        </div>
      ) : (
        <div className="login">
          <p>
            <Link to="/login">Login</Link>
          </p>
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
