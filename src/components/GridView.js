import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ filteredProducts }) => {
  return (
    <Wrapper>
      {filteredProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  .product > .image > img {
    height: 170px;
  }
`;

export default GridView;
