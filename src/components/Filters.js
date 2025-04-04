import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { getUniqueValues } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { useRef } from "react";

const Filters = () => {
  const {
    filters: { text, category, company, color, price, min, max },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const colorForm = useRef();

  const categories = getUniqueValues("category", allProducts);
  const companies = getUniqueValues("company", allProducts);
  const colors = getUniqueValues("colors", allProducts);

  return (
    <Wrapper>
      <div className="search">
        <input placeholder="Search" name="text" type="text" onChange={updateFilters} value={text} />
      </div>
      <h4>category</h4>
      <form onChange={updateFilters} value={category} name="category" className="category">
        <div>
          <input value="all" id="all" name="category" type="radio" />
          <label htmlFor="all"> All </label>
        </div>

        {categories.map((element, i) => {
          return (
            <div key={i}>
              <input value={element} id={element} name="category" type="radio" />
              <label htmlFor={element}> {element} </label>
            </div>
          );
        })}
      </form>
      <h4>company</h4>
      <select name="company" value={company} onChange={updateFilters}>
        <option value="all">all</option>

        {companies.map((element, i) => {
          return (
            <option key={i} value={element}>
              {element}
            </option>
          );
        })}
      </select>
      <h4>colors</h4>
      <form value={color} onChange={updateFilters} className="colors">
        <div>
          <input ref={colorForm} value="all" id="all_colors" name="color" type="radio" />
          <label htmlFor="all_colors"> All </label>
        </div>
        {colors.map((item, i) => {
          return (
            <div key={i}>
              <input value={item} id={i} name="color" type="radio" />
              <label style={{ background: item }} htmlFor={i}>
                <FaCheck />
              </label>
            </div>
          );
        })}
      </form>
      <h4>price</h4>
      <div className="price">
        <p>${price / 100}</p>
        <input
          onChange={updateFilters}
          type="range"
          min={min}
          max={max}
          value={price}
          name="price"
        ></input>
      </div>
      <div className="shipping">
        <label htmlFor="shipping">Free Shipping</label>
        <input onClick={updateFilters} type="checkbox" name="shipping" id="shipping" />
      </div>
      <button
        onClick={() => {
          clearFilters();
          colorForm.current.checked = true;
        }}
        className="clear"
      >
        clear filter
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .search input {
    color: #222222;
    background-color: #f1f5f8;
    border: none;
    border-radius: 5px;
    padding: 8px 6px;
  }
  h4 {
    font-size: 15px;
    text-transform: capitalize;
    margin-top: 20px;
    letter-spacing: 1.6px;
    font-weight: 600;
  }
  .category {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  form label {
    color: #617d98;
    text-transform: capitalize;
    font-size: 14.5px;
    letter-spacing: 1.2px;
    cursor: pointer;
  }
  .category input[type="radio"] {
    display: none;
  }
  .category input[type="radio"]:checked + label {
    border-bottom: solid 1px #617d98;
  }
  select {
    margin-top: 8px;
    background-color: #f1f5f8;
    cursor: pointer;
  }
  .colors {
    margin-top: 10px;
    display: flex;
    gap: 10px;
  }
  .colors > div {
  }

  .colors > div:not(:first-child) label {
    opacity: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
  .colors > div:not(:first-child) input:checked + label {
    opacity: 1;
  }
  .colors > div:not(:first-child) label svg {
    font-size: 10px;
    color: white;
    display: none;
  }
  .colors > div:not(:first-child) input:checked + label svg {
    display: block;
  }
  .colors > div:first-child input:checked + label {
    border-bottom: solid 1px #617d98;
  }

  .colors > div input {
    display: none;
  }
  .price {
  }
  .price > p {
    margin-top: 10px;
  }
  .price > input {
    display: block;
    margin-top: 7px;
    cursor: pointer;
  }
  .shipping {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    max-width: 200px;
  }
  .shipping input {
    cursor: pointer;
  }
  .clear {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 3px 7px;
    letter-spacing: 1.2px;
    border-radius: var(--radius);
    margin-top: 20px;
    font-size: 14px;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 200px;
  }
`;

export default Filters;
