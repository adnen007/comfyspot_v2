import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const LoginPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showRegister, setShowRegister] = useState(false);

  const { registerUser, authenticated, login, loading } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    if (showRegister) {
      registerUser(formState.name, formState.email, formState.password);
    } else {
      login(formState.email, formState.password);
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const navigate = useNavigate();
  const onCloseClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (authenticated === true) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  const name = (
    <>
      <label htmlFor="name">name</label>
      <input
        name="name"
        onChange={(e) => onInputChange(e)}
        type="text"
        value={formState.name}
        required
        id="name"
      />
    </>
  );
  return (
    <Wrapper className="page">
      <div className="content">
        <form onSubmit={(e) => onSubmit(e)}>
          <h2>{showRegister ? "Sign Up" : "Sign In"}</h2>
          {showRegister ? name : null}
          <label htmlFor="email">email</label>
          <input
            name="email"
            onChange={(e) => onInputChange(e)}
            type="email"
            value={formState.email}
            id="email"
            required
          />
          <label htmlFor="password">password</label>
          <input
            name="password"
            onChange={(e) => onInputChange(e)}
            type="password"
            value={formState.password}
            id="password"
            required
          />
          <button className="btn" type="submit">
            {loading ? "loading..." : showRegister ? "Sign Up" : "Sign In"}
          </button>

          <p onClick={() => setShowRegister(!showRegister)}>
            {showRegister ? "Already a member ?  " : "New around here ?  "}
            <span>{showRegister ? "  Sign In" : "  Sign Up"}</span>
          </p>
        </form>
        <div className="close" onClick={onCloseClick}>
          <FaTimes />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  height: 100vh;
  line-height: 28px;
  background-color: rgb(238, 238, 238);

  @media (max-width: 576px) {
    background-color: white;
    padding: 0px;
  }

  .content {
    background-color: white;
    padding: 35px 40px;
  }
  @media (min-width: 576px) {
    .content {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      position: relative;
    }
  }
  h2 {
    margin-bottom: 30px;
    font-size: 31px;
    line-height: 41px;
    font-weight: 400;
    text-align: center;
  }
  form {
    width: 260px;
  }
  @media (min-width: 768px) {
    form {
      width: 320px;
    }
  }

  form > input,
  form > label,
  form > button {
    display: block;
    text-transform: capitalize;
    width: 100%;
  }
  form > label {
    margin-bottom: 10px;
    color: #102a43;
    font-weight: 400;
  }
  form > input {
    border: none;
    background: #f1f4f9;
    height: 35px;
    border-radius: 0.25rem;
    padding-left: 15px;
    outline: solid 1px #ccd3db;
    margin-bottom: 20px;
  }
  form button:first-of-type {
    margin-top: 35px;
    padding: 0;
    height: 37px;
    font-weight: 400;
  }
  form button {
    margin-bottom: 20px;
    font-size: 17px;
  }

  form > p {
    text-align: center;
    font-weight: 500;
    span {
      display: inline-block;
      color: var(--clr-primary-5);
      font-weight: 400;
      padding-left: 3px;
      cursor: pointer;
    }
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 23px;
    cursor: pointer;
  }
`;

export default LoginPage;
