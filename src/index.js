import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
import AuthWrapper from "./pages/AuthWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-wovv2r1ycycrxesr.us.auth0.com"
    clientId="j12fYt1VRBteue4FprX66n8AKYxBmcGQ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <FilterProvider>
            <AuthWrapper>
              <App />
            </AuthWrapper>
          </FilterProvider>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
