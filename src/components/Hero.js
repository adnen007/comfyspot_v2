import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-image2.jpeg";
import { text } from "../utils/constants";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <Wrapper>
      <div className="container section_header">
        <article>
          <h3>
            From Our <span className="colored">Home</span> to Yours
          </h3>
          <p>
            {text.split(" ").map((e, i) => {
              return <span key={i}> {e}</span>;
            })}
          </p>
          <Link className="btn" to="/products">
            shop now <FaArrowRight />
          </Link>
        </article>
        <div className="images">
          <div className="image_1">
            <img src={heroBcg} alt="" />
          </div>
          <div className="image_2">
            <img src={heroBcg2} alt="" />
          </div>
        </div>
        <a className="scroll-down" href="#featured-prodcuts">
          <div className="arrow"></div>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }
  @media (min-width: 992px) {
    .container {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media (min-width: 1200px) {
    .container {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  article {
    width: 100%;
    margin-top: -3rem;
  }
  article h3 {
    font-size: 48px;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.3;
  }
  @media (min-width: 768px) {
    article h3 {
      font-size: 42px;
    }
  }
  article h3 .colored {
    color: var(--clr-primary-5);
  }
  article p {
    color: var(--clr-grey-3);
    margin-top: 24px;
    line-height: var(--line-height);
    font-size: 16px;
  }
  article p > span {
    opacity: 0;
    filter: blur(4px);
  }
  article p > span:nth-child(1) {
    animation: frog 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(2) {
    animation: frog 0.7s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(3) {
    animation: frog 0.7s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(4) {
    animation: frog 0.7s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(5) {
    animation: frog 0.7s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(6) {
    animation: frog 0.7s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(7) {
    animation: frog 0.7s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(8) {
    animation: frog 0.7s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(9) {
    animation: frog 0.7s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(10) {
    animation: frog 0.7s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(11) {
    animation: frog 0.7s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(12) {
    animation: frog 0.7s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(13) {
    animation: frog 0.7s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(14) {
    animation: frog 0.7s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(15) {
    animation: frog 0.7s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(16) {
    animation: frog 0.7s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(17) {
    animation: frog 0.7s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(18) {
    animation: frog 0.7s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(19) {
    animation: frog 0.7s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(20) {
    animation: frog 0.7s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(21) {
    animation: frog 0.7s 2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(22) {
    animation: frog 0.7s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(23) {
    animation: frog 0.7s 2.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(24) {
    animation: frog 0.7s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(25) {
    animation: frog 0.7s 2.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(26) {
    animation: frog 0.7s 2.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  article > a {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
    width: fit-content;
    padding: 9px 13px;
    font-size: 15px;
  }
  article > a svg {
    display: block;
    margin-left: 5px;
    animation: moveRight 1s infinite ease-in-out;
  }
  .images {
    width: 100%;
    min-width: 500px;
    position: relative;
    height: fit-content;
    display: none;
    justify-content: flex-end;
  }

  @media (min-width: 992px) {
    .images {
      display: flex;
    }
  }
  .images::before {
    content: "";
    display: block;
    height: 80%;
    position: absolute;
    width: 420px;
    bottom: 0px;
    right: 0px;
    background-color: var(--clr-primary-5);
    border-radius: var(--radius);
    border: solid;
  }
  .images .image_1 {
    background-color: #e3d6b3;
    width: 375px;
    height: 468.75px;
    border-radius: var(--radius);
    z-index: 0;
    overflow: hidden;
    border: solid;
  }

  .images .image_2 {
    background-color: #bdad84;
    width: 207px;
    height: 253.25px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    transform: translateX(calc(-375px + (250px / 2)));
    border-radius: var(--radius);
    overflow: hidden;
    border: solid;
  }
  .images .image_1 img,
  .images .image_2 img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes frog {
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }

  .scroll-down {
    position: absolute;
    left: 50%;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    text-decoration: none;
    height: 30px;
    width: 20px;
  }

  .arrow {
    width: 13px;
    height: 13px;
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    text-shadow: 0;
    -webkit-transform: translate(-50%, 0%) rotate(45deg);
    -moz-transform: translate(-50%, 0%) rotate(45deg);
    transform: translate(-50%, 0%) rotate(45deg);
    -webkit-animation: fade_move_down 2s ease-in-out infinite;
    -moz-animation: fade_move_down 2s ease-in-out infinite;
    animation: fade_move_down 2s ease-in-out infinite;
  }
  /* shop now arrow animation */
  @keyframes moveRight {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  /*animated scroll arrow animation*/
  @-webkit-keyframes fade_move_down {
    0% {
      -webkit-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @-moz-keyframes fade_move_down {
    0% {
      -moz-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @keyframes fade_move_down {
    0% {
      transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
`;

export default Hero;
