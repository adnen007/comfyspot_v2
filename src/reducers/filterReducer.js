import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const prices = action.payload.map((element) => {
      return element.price;
    });

    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: {
        ...state.filters,
        price: Math.max(...prices),
        min: Math.min(...prices),
        max: Math.max(...prices),
      },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const products = [...state.filteredProducts];
    const sort = state.sort;
    if (sort === "a-z") {
      products.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    if (sort === "z-a") {
      products.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    if (sort === "lowest") {
      products.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    if (sort === "highest") {
      products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return { ...state, filteredProducts: products };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filters.max,
        min: state.filters.min,
        max: state.filters.max,
        shipping: false,
      },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { filters, allProducts } = state;
    const { category, company, text, color, price, shipping } = filters;

    const filteredProducts = allProducts
      .filter((product) => category === "all" || product.category === category)
      .filter((product) => company === "all" || product.company === company)
      .filter((product) => product.name.toLowerCase().includes(text.toLowerCase()))
      .filter((product) => color === "all" || product.colors.includes(color))
      .filter((product) => product.price <= +price)
      .filter((product) => !shipping || product.shipping);

    return { ...state, filteredProducts };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filterReducer;
