import React from "react";
import { useFilterContext } from "../context/filterContext";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
const Sort = () => {
  const {
    gridView: grid,
    setGridView,
    setListView,
    updateSort,
    filteredProducts: products,
    sort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="icons">
        <div onClick={setGridView} className={`grid ${grid ? "active" : ""}`}>
          <BsFillGridFill />
        </div>
        <div onClick={setListView} className={`list ${grid ? "" : "active"}`}>
          <BsList />
        </div>
      </div>
      <p>{products.length} Products Found</p>
      <hr />
      <div className="sort_by">
        <label htmlFor="sort_by">sort by</label>
        <select value={sort} onChange={(e) => updateSort(e.currentTarget.value)} id="sort_by">
          <option value="lowest"> {"Price (Lowest)"} </option>
          <option value="highest">{"Price (Highest)"}</option>
          <option value="a-z">{"Name (A - Z)"}</option>
          <option value="z-a">{"Name (Z - A)"}</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 15px;
  .icons {
    display: flex;
    gap: 10px;
  }
  .icons .grid,
  .icons .list {
    border: 1px solid var(--clr-black);
    border-radius: var(--radius);
    padding: 3px;
    color: var(--clr-black);
    cursor: pointer;
  }
  .icons .grid.active,
  .icons .list.active {
    color: var(--clr-white);
    background-color: var(--clr-black);
  }

  .icons svg {
    display: block;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    color: var(--clr-grey-3);
  }
  hr {
    border-top: 1px solid var(--clr-grey-8);
    flex-grow: 1;
  }
  .sort_by {
  }
  .sort_by label {
    text-transform: capitalize;
    margin-right: 10px;
  }
  .sort_by select {
    padding: 4px 8px;
    border-color: transparent;
    font-size: 17px;
    color: var(--clr-black);
    cursor: pointer;
  }
  @media (width >= 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default Sort;
