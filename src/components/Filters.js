import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { useRef } from "react";

const Filters = () => {
  const {
    filters: { text, category, company, color, price, min, max },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const colorForm = useRef();

  const categories = getUniqueValues("category", all_products);
  const companies = getUniqueValues("company", all_products);
  const colors = getUniqueValues("colors", all_products);

  return (
    <Wrapper>
      <div className="search">
        <input
          placeholder="Search"
          name="text"
          type="text"
          onChange={updateFilters}
          value={text}
        />
      </div>
      <h4>category</h4>
      <form
        onChange={updateFilters}
        value={category}
        name="category"
        className="category"
      >
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
  }
  .shipping {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    max-width: 200px;
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
  }

  @media (min-width: 768px) {
    width: 200px;
  }
`;

/*
const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`*/

export default Filters;

/*

let's say we have 

const obj1 = {pr:"red",obj2:{ch:"blue"}};
const obj3 = {...obj1};

console.log(obj1.obj2 === obj3.obj2)

*/
