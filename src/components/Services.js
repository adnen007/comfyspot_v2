import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>Why Choose Us</h2>

        <div className="services">
          {services.map(({ icon, id, title, text }) => {
            return (
              <div className="box" key={id}>
                <div className="first-row">
                  <div className="icon">{icon}</div>
                  <div className="title">{title}</div>
                </div>

                <div className="text">{text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-primary-10);
  padding: 60px 0;
  h2 {
    text-transform: capitalize;
    margin: auto auto 80px;
    width: fit-content;
    font-size: 33px;
    letter-spacing: 1px;
    position: relative;
    &:after {
      content: "";
      height: 4px;
      width: 30%;
      background-color: var(--clr-primary-5);
      position: absolute;
      bottom: -18px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .services {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 50px;
  }
  .services .box {
    background-color: var(--clr-primary-7);

    padding: 20px;
    border-radius: var(--radius);

    .first-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }

    .icon {
      background-color: var(--clr-primary-10);
      width: fit-content;
      padding: 12px;
      border-radius: var(--radius);
      svg {
        display: block;
        font-size: 25px;
      }
    }
    .title {
      width: fit-content;
      font-weight: 700;
      text-transform: capitalize;
      font-size: 18px;
      letter-spacing: 1px;
    }
    .text {
      margin-top: 12px;
      font-size: 14px;
      text-align: center;
      color: var(--clr-primary-1);
      line-height: 26px;
      text-align: center;
    }
  }
`;

export default Services;
