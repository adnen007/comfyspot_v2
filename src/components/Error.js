import React from "react";
import styled from "styled-components";
const Error = () => {
  return (
    <Wrapper>
      <div className="page-100">
        <h2>Something Went Wrong 😔 Try Reload</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default Error;
