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

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const prices = action.payload.map((element) => {
      return element.price;
    });

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        price: Math.max(...prices),
        min: Math.min(...prices),
        max: Math.max(...prices),
      },
    };
    // here why we are doing `all_products:[...action.payload]` instead of
    // `all_products:action.payload` cause as we know in js objects are save by reference.
    //  so let's say that you will do something like this `all_products:action.payload` and
    // `filtered_products:action.payload` so filtered_products and all_products will point to
    // the same object so whenever you modify one of them they both will change and you don't
    // want that. so best thing to do is just get a copy of the obejct instead of its reference
    // and by doing `{...arrayName}` you are just doing that.
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const products = [...state.filtered_products];
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

    return { ...state, filtered_products: products };
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
    const filters = state.filters;

    let filtered_products = state.all_products.filter((element) => {
      if (element.category === filters.category || filters.category === "all") {
        if (element.company === filters.company || filters.company === "all") {
          if (element.name.includes(filters.text)) {
            if (element.colors.includes(filters.color) || filters.color === "all") {
              if (element.price <= +filters.price) {
                if (filters.shipping) {
                  if (element.shipping) {
                    return true;
                  }
                } else {
                  return true;
                }
              }
            }
          }
        }
      }
      return false;
    });

    if (filters.shipping) {
      filtered_products = filtered_products.filter((element) => {
        return element.shipping;
      });
    }

    return { ...state, filtered_products: filtered_products };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;

/*

 */
