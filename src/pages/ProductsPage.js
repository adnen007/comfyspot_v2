import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  // This prevents the page from scrolling down to where it was previously.
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
  window.scrollTo(0, 0);
  return (
    <main>
      <PageHero title="Products" />
      <Wrapper className="products_page">
        <div className="container">
          <Filters />
          <div className="right">
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  > .container {
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .right {
    flex-grow: 1;
  }
  @media (width >= 768px) {
    .container {
      flex-direction: row;
    }
  }
`;

export default ProductsPage;
