import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { toggleCheckout, submitOrder } = useCartContext();
  const [formState, setFormState] = useState({ address: "", number: "", name: "" });
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitOrder(formState.name, formState.address, formState.number, navigate);
    toggleCheckout();
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="close" onClick={toggleCheckout}>
          <FaTimes />
        </div>
        <h2>Checkout</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={onInputChange}
              type="text"
              id="name"
              name="name"
              value={formState.name}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              onChange={onInputChange}
              type="text"
              id="address"
              name="address"
              value={formState.address}
              required
            />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <input
              onChange={onInputChange}
              type="tel"
              id="number"
              name="number"
              value={formState.number}
              required
            />
          </div>

          <button onClick={onSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .content {
    max-width: 600px;
    background-color: white;
    margin: auto;
    padding: 30px 15px;
    flex-grow: 1;
    border-radius: 15px;
    position: relative;
    box-shadow: var(--dark-shadow);
    border-top: var(--clr-primary-5) 7px solid;
  }
  form {
    display: grid;
    gap: 30px;
    margin-top: 30px;
  }
  form > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  form input {
    height: 50px;
    padding-left: 10px;
    border-radius: 6px;
  }
  form label {
    text-transform: capitalize;
    font-weight: 500;
  }
  form button {
    height: 50px;
    margin-top: 15px;
    border-radius: 6px;
    font-size: 18px;
    background-color: var(--clr-primary-5);
    color: white;
    font-weight: 500;
  }
  .close {
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 28px;
  }
`;

export default CheckoutPage;
