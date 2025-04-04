import React from "react";
import styled from "styled-components";

import { FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="special-heading">Get in Touch</h2>
        <p className="contact-number">
          We're just a call away: <span>99656882</span>
        </p>

        <div className="contact-info">
          <p className="label">Drop us a line at:</p>
          <a href="mailto:leonagency@mail.com?subject=Contact" className="email-link">
            comfyspotsgency@mail.com
          </a>

          <div className="social">
            <span>Follow us:</span>
            <FaYoutube />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 80px 20px;
  background-color: white;
  text-align: center;

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  h2 {
    text-transform: capitalize;
    margin: auto auto 30px;
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
      bottom: -14px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .contact-number {
    font-size: 17px;
    font-weight: 500;
    color: #333;
    margin-bottom: 35px;
  }

  .contact-number span {
    font-size: 20px;
    font-weight: bold;
    color: #5d3fd3; /* Highlighted color */
    padding: 2px 5px;
    border-radius: 5px;
  }

  .contact-info .label {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
  }

  .email-link {
    display: inline-block;
    font-size: 24px;
    font-weight: bold;
    color: var(--clr-primary-5);
    text-decoration: none;
    margin-bottom: 30px;
  }

  .email-link:hover {
    text-decoration: underline;
  }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-size: 18px;
    color: #333;
  }

  .social svg {
    font-size: 22px;
    cursor: pointer;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .social svg:hover {
    color: var(--clr-primary-5);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .special-heading {
      font-size: 36px;
    }

    .email-link,
    .contact-info .label {
      font-size: 20px;
    }
  }
`;

export default Contact;
