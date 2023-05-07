import React from "react";
import styled from "styled-components";

const Alert = () => {
  return (
    <AlertMain>
      <h1>Sorry. DB is offline.</h1>
    </AlertMain>
  );
};

const AlertMain = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export default Alert;
