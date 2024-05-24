import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="container">
        <h3>
          <Link to="/">Home</Link> /
          {product ? (
            <>
              <Link to="/products">{title}</Link> / {product}
            </>
          ) : (
            ` ${title}`
          )}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  h3 {
    font-size: 1.8rem;
  }
  a {
    color: var(--clr-primary-1);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  @media (max-width: 576px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default PageHero;
