import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <Wrapper className="">
      <PageHero title={"about"} />
      <div className="container">
        <div className="content page">
          <div className="image">
            <img src={aboutImg} alt="about img " />
          </div>
          <div className="story">
            <h2>
              Our Story <span></span>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit culpa pariatur voluptas, at ratione
              consequatur eius hic eaque! Ab magni exercitationem temporibus consequatur rem amet assumenda, voluptas
              totam ipsum qui beatae ut laboriosam similique odio earum harum? Dolorem, quo voluptates. Non neque enim
              quisquam facilis iure ex ad architecto cumque. Recusandae, iusto amet. Incidunt blanditiis assumenda
              voluptates non explicabo praesentium? , at ratione consequatur eius hic eaque! Ab magni exercitationem
              temporibus.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 45px 0;
  }
  .content > div {
    width: 100%;
  }
  @media (min-width: 992px) {
    .content {
      flex-direction: row;
    }
  }
  .image {
    overflow: hidden;
    border-radius: var(--radius);
    img {
      width: 100%;
      height: 450px;
      display: block;
      object-fit: cover;
    }
  }

  .story h2 {
    position: relative;
    width: fit-content;
    font-size: 32px;
  }
  @media (min-width: 992px) {
    .story h2 {
      font-size: 38px;
    }
  }
  .story h2 span {
    position: absolute;

    bottom: -11px;
    left: 0px;
    width: 50%;
    height: 3px;
    background: var(--clr-primary-5);
  }
  .story p {
    color: var(--clr-grey-5);
    margin-top: 7px;
    line-height: 32px;
    font-size: 14px;
    padding: 15px 0;
  }
  @media (min-width: 992px) {
    .story p {
      font-size: 16px;
    }
  }
`;

export default AboutPage;
