import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/productsContext";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <Wrapper className={isSidebarOpen ? "active" : "desactive"}>
      <div className="container">
        <header>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="close" onClick={closeSidebar}>
            <FaTimes />
          </div>
        </header>
        <nav>
          <ul>
            {links.map((link) => {
              return (
                <li onClick={closeSidebar} key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <CartButtons style={{ display: "flex" }} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 2;
  transform: translateX(-100%);
  transition: all 0.3s linear;
  &.active {
    transform: translateX(0%);
  }
  &.desactive {
    transform: translateX(-100%);
  }
  .container {
    display: block;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      img {
        width: 155px;
      }
      .close {
        svg {
          font-size: 28px;
          color: var(--clr-primary-5);
        }
      }
    }

    nav {
      margin-top: 15px;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 30px;
        li {
          padding: 2px 5px;
          font-size: 18px;
          a {
            text-transform: capitalize;
            letter-spacing: 1px;
            text-decoration: none;
            font-weight: 100;
            color: var(--clr-grey-1);
          }
        }
      }
    }
    .cart_buttons {
      display: flex;
      margin-top: 46px;
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
    }
  }
`;

export default Sidebar;
