import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
// import { formatPrice } from "../utils/helpers";
import { Loading, Error, ProductImages, AddToCart, Stars, PageHero } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();

  const {
    fetchSingleProduct,
    single_product,
    single_product_loading,
    single_product_error,
  } = useProductsContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(url + id);
  }, []);

  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [single_product_error, navigate]);

  if (single_product_loading) {
    return <Loading />;
  }
  if (single_product_error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <PageHero title="Products" product={single_product.name} />
      <div className="container">
        <Link className="btn" to="/products">
          back to products
        </Link>
        <div className="content">
          <div className="image_section">
            <ProductImages images={single_product.images} />
          </div>
          <div className="info_section">
            <h2 className="name">{single_product.name}</h2>
            <div className="rate">
              <Stars stars={single_product.stars} reviews={single_product.reviews} />
            </div>
            <div className="price">${single_product.price / 100}</div>
            <div className="description"> {single_product.description} </div>
            <div className="state">
              <p>
                <span>Available:</span>
                {single_product.stock > 0 ? "In Stock" : "Out Of Stock"}
              </p>
              <p>
                <span>SKU:</span> {single_product.id}
              </p>
              <p>
                <span>Band:</span> {single_product.company}
              </p>
            </div>
            <hr />
            {single_product.stock > 0 && <AddToCart product={single_product} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
