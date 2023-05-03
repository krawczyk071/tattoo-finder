import React from "react";
import CardLg from "./CardLg";
import styled from "styled-components";

const Modal = ({ modal, closer }) => {
  return modal.open ? (
    <ModalMain onClick={closer}>
      <AspectRatio>
        <CardLg tat={modal.tat} />
      </AspectRatio>
    </ModalMain>
  ) : (
    ""
  );
};

export default Modal;

const ModalMain = styled.div`
  background: #00000080;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
`;
const AspectRatio = styled.div`
  position: relative;
  height: 80%;
  padding-left: 55%;
  width: 0;
`;
