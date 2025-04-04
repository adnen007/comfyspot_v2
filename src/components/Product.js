import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product: { price, name, image, id } }) => {
  return (
    <Wrapper className="product">
      <div className="image">
        <div className="cover">
          <Link to={`/products/${id}`}>
            <FaSearch />
          </Link>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">${price / 100}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .image {
    overflow: hidden;
    border-radius: var(--radius);
    position: relative;
    img {
      width: 100%;
      display: block;
      height: 220px;
      object-fit: cover;
    }
    .cover {
      background-color: rgba(0, 0, 0, 0.403);
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: var(--transition);
      a {
        display: block;
        width: fit-content;
        padding: 11px;
        border-radius: 50%;
        background-color: var(--clr-primary-5);
        color: var(--clr-white);
        svg {
          display: block;
          font-size: 20px;
        }
      }
    }
    &:hover .cover {
      opacity: 1;
    }
  }
  .info {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    .name {
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-size: 15px;
    }
    .price {
      color: var(--clr-primary-5);
    }
  }
`;

export default Product;
