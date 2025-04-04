import React, { useEffect } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const PrivateRoute = ({ children }) => {
  const { authenticated } = useUserContext();

  useEffect(() => {
    if (authenticated === false) {
      toast.warn("login first");
    }
  }, [authenticated]);

  if (authenticated === "loading") {
    return (
      <Wrapper>
        <h1>...Loading</h1>
      </Wrapper>
    );
  }

  if (authenticated === false) {
    return (
      <Wrapper>
        <Navigate to="/login" />;
      </Wrapper>
    );
  }
  return children;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default PrivateRoute;
