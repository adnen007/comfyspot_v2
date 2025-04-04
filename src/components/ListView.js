import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListView = ({ filteredProducts: products }) => {
  return (
    <Wrapper>
      {products.map(({ price, name, image, id, description }) => {
        return (
          <div className="product" key={id}>
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="info">
              <div className="name"> {name} </div>
              <div className="price"> ${price / 100} </div>
              <div className="description"> {description.substring(150)}... </div>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  .product {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .image {
    height: 200px;
    width: 250px;
    overflow: hidden;
    border-radius: var(--radius);
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .info {
    display: block;
  }
  .info .name {
    color: var(--clr-grey-1);
    font-size: 21px;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    font-size: 21px;
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: var(--spacing);
    /* margin-top: 15px; */
  }

  .info .price {
    color: var(--clr-primary-6);
    font-weight: 700;
    font-size: 13px;
    margin-top: 8px;
  }
  .description {
    color: var(--clr-grey-3);
    font-size: 14px;
    margin-top: 6px;
    line-height: 17px;
    max-width: 600px;
  }
  .info > a {
    margin-top: 17px;
    font-size: 10px;
    padding: 4px 8px;
  }
  @media (width >= 992px) {
    .product {
      flex-direction: row;
    }
    .image {
      width: 300px;
    }
  }
`;

export default ListView;
