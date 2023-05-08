import React from "react";
import CardModal from "./CardModal";
import styled from "styled-components";

const Modal = ({ modal, closer }) => {
  return modal.open ? (
    <ModalMain onClick={closer}>
      <AspectRatio>
        <CardModal tat={modal.tat} />
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
  /* height: 80%;
  padding-left: 55%;
  width: 0; */

  width: 60%;
  height: 0;
  padding-bottom: calc(60% * 3 / 4.3);

  @media (max-width: 1200px) {
    width: 40%;
    height: 0;
    padding-bottom: calc(40% * 4 / 2.5);
  }
  @media (max-width: 900px) {
    width: 60%;
    height: 0;
    padding-bottom: calc(60% * 4 / 2.5);
  }
  @media (max-width: 600px) {
    width: 80%;
    height: 0;
    padding-bottom: calc(80% * 4 / 2.5);
  }
`;
