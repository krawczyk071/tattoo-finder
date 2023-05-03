import React from "react";
import { Spinner } from "./styles/Loader.styled";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderMain>
      <Spinner />
    </LoaderMain>
  );
};

const LoaderMain = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export default Loader;
