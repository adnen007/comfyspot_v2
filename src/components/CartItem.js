import React from "react";
import styled from "styled-components";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";
const CartItem = ({ product: { id, name, image, price, color, amount, stock } }) => {
  const { toggleAmount, removeItem } = useCartContext();
  return (
    <Wrapper>
      <div className="item">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="detail">
          <div className="name">{name}</div>
          <div className="color">
            color: <span style={{ backgroundColor: color }}></span>
          </div>
          <p>${price / 100}</p>
        </div>
      </div>
      <div className="price">${price / 100}</div>
      <div className="quantity">
        <AmountButtons amount={amount} toggleAmount={toggleAmount} id={id} stock={stock} />
      </div>
      <div className="subtotal">${(price * amount) / 100}</div>
      <div className="delete">
        <div onClick={() => removeItem(id)}>
          <FaTrash />
        </div>
      </div>
    </Wrapper>
  );
};

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 170px 80px 80px;
  justify-content: space-between;

  > div:not(:first-child) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item {
    display: flex;
    gap: 20px;
  }
  .item > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item .image {
    width: 75px;
    height: 75px;
    overflow: hidden;

    border-radius: var(--radius);
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }
  .item .detail > .name {
    font-weight: 500;
    text-transform: capitalize;
  }
  .item .detail > p {
    color: var(--clr-primary-5);
    font-weight: 500;
    font-size: 12px;
  }
  .item .detail .color {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .item .detail .color > span {
    display: block;
    height: 14px;
    width: 14px;
    border-radius: var(--radius);
  }
  > .price:not(:first-child),
  > .subtotal:not(:first-child) {
    font-size: 1rem;
    color: var(--clr-primary-5);
    font-weight: 400;
    display: none;
  }
  .delete > div {
    color: var(--clr-white);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: var(--radius);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .delete > div svg {
    font-size: 0.75rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 300px 80px 80px 80px 80px;
    .item .image {
      width: 100px;
      height: 75px;
    }
    .item .detail > p {
      display: none;
    }
    > .price:not(:first-child),
    > .subtotal:not(:first-child) {
      display: flex;
    }
  }
`;

export default CartItem;
