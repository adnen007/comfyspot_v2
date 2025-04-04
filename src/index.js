import ReactDOM from "react-dom/client";

import { ProductsProvider } from "./context/productsContext";
import { CartProvider } from "./context/cartContext";
import { FilterProvider } from "./context/filterContext";
import { UserProvider } from "./context/userContext";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ErrorBoundary } from "./components";
import ErrorFallback from "./pages/ErrorFallback";

import "./normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary fallback={<ErrorFallback />}>
    <ProductsProvider>
      <CartProvider>
        <UserProvider>
          <FilterProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </FilterProvider>
        </UserProvider>
      </CartProvider>
    </ProductsProvider>
  </ErrorBoundary>
);
