import React from "react";
import { useProductsContext } from "../context/productsContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const { featuredProducts, productsLoading: loading, productsError: error } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <div className="title" id="featured-prodcuts">
        <h2>featured products</h2>
      </div>
      <div className="container">
        {featuredProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <div className="all_products btn">
        <Link to="/products">all products</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-primary-7);
  padding: 80px 0;
  .title {
    h2 {
      text-transform: capitalize;
      margin: auto auto 80px;
      width: fit-content;
      font-size: 33px;
      letter-spacing: 1px;
      position: relative;
      &:after {
        content: "";
        height: 4px;
        width: 30%;
        background-color: var(--clr-primary-5);
        position: absolute;
        bottom: -18px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
  .all_products {
    margin: auto;
    display: block;
    width: fit-content;
    margin-top: 50px;
    padding: 9px 13px;
  }
  .all_products a {
    color: var(--clr-white);
  }
  .all_products:hover a {
    color: black;
  }
`;

export default FeaturedProducts;
