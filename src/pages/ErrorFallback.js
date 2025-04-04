import styled from "styled-components";

const ErrorFallback = () => (
  <Wrapper>
    <h2>Oops! Something went wrong. 😞</h2>
    <p>Try refreshing the page or come back later.</p>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export default ErrorFallback;
