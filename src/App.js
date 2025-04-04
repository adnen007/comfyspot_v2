import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  Cart,
  Error,
  SingleProduct,
  Products,
  PrivateRoute,
  Orders,
  LoginPage,
} from "./pages";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  const hideNavAndSidebar = location.pathname === "/login";
  return (
    <div className="app">
      {!hideNavAndSidebar && <Navbar />}
      {!hideNavAndSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      {!hideNavAndSidebar && <Footer />}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
