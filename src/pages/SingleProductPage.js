import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/productsContext";
import { Loading, Error, ProductImages, AddToCart, PageHero } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();

  const { fetchSingleProduct, singleProduct, singleProductLoading, singleProductError } =
    useProductsContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [fetchSingleProduct, id]);
  useEffect(() => {
    if (singleProductError) {
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
  }, [singleProductError, navigate]);

  if (singleProductLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  if (singleProductError) {
    return <Error />;
  }
  return (
    <Wrapper>
      <PageHero title="Products" product={singleProduct.name} />
      <div className="container">
        <Link className="btn" to="/products">
          back to products
        </Link>
        <div className="content">
          <div className="image_section">
            <ProductImages images={singleProduct.images} />
          </div>
          <div className="info_section">
            <h2 className="name">{singleProduct.name}</h2>
            {/* <div className="rate">
              <Stars stars={singleProduct.stars} reviews={singleProduct.reviews} />
            </div> */}
            <div className="price">${singleProduct.price / 100}</div>
            <div className="description"> {singleProduct.description} </div>
            <div className="state">
              <p>
                <span>Available:</span>
                {singleProduct.stock > 0 ? "In Stock" : "Out Of Stock"}
              </p>
              <p>
                <span>SKU:</span> {singleProduct.id}
              </p>
              <p>
                <span>Band:</span> {singleProduct.company}
              </p>
            </div>
            <hr />
            {singleProduct.stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  & > .container {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .content {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .content > div {
    flex: 1;
  }

  .info_section {
  }

  .name {
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-size: 32px;
  }

  .price {
    color: var(--clr-primary-5);
    font-weight: bold;
    margin-top: 20px;
  }
  .rate {
    margin-top: 10px;
  }
  .description {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-3);
    font-size: 14px;
    margin-top: 10px;
  }
  .state {
  }
  .state > p {
    color: var(--clr-grey-3);
    display: flex;
    gap: 100px;
    font-size: 14px;
    margin-top: 15px;
  }
  .state > p > span {
    font-weight: bold;
    width: 50px;
  }
  hr {
    margin-top: 26px;
  }

  @media (min-width: 992px) {
    .content {
      flex-direction: row;
    }
    .name {
      font-size: 42px;
    }
  }
`;

export default SingleProductPage;
