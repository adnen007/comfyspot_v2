import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/productsContext";
import { links } from "../utils/constants";
import logo from "../assets/logo.png";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  return (
    <NavBarWrapper>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menu" onClick={openSidebar}>
          <FaBars />
        </div>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>

        <CartButtons />
      </div>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  .container {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo > a {
    outline: none;
  }
  .logo img {
    max-width: 180px;
    display: block;
  }
  .menu {
    cursor: pointer;
  }
  @media (width>=992px) {
    .menu {
      display: none;
    }
  }
  .menu svg {
    font-size: 28px;
    color: var(--clr-primary-5);
  }
  ul {
    list-style: none;
    display: none;
    gap: 30px;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  ul li {
  }

  ul > li > a {
    text-decoration: none;
    color: var(--clr-grey-1);
    padding: 2px;
    &:hover {
      border-bottom: 2px solid var(--clr-primary-5);
    }
  }
  @media (width >= 992px) {
    ul {
      display: flex;
    }
  }
`;

export default Nav;
