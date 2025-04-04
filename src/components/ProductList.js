import React from "react";
import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";
import Error from "./Error";
import { useProductsContext } from "../context/productsContext";

const ProductList = () => {
  const { filteredProducts, gridView } = useFilterContext();
  const { productsLoading, productsError, products } = useProductsContext();

  if (productsError) {
    return <Error />;
  }

  if (productsLoading) {
    return <h2>Just a moment, loading...</h2>;
  }

  if (products.length < 1 || filteredProducts.length < 1) {
    return <h2>there isn't any products to display</h2>;
  }
  if (gridView) {
    return <GridView filteredProducts={filteredProducts} />;
  }
  return <ListView filteredProducts={filteredProducts} />;
};

export default ProductList;
