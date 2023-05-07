import React, { useState } from "react";
import CardSm from "./CardSm";
import Modal from "./Modal";
import styled from "styled-components";

const Canvas = ({ tats }) => {
  const modalInit = { tat: {}, open: false };
  const [modal, setModal] = useState(modalInit);

  function closer() {
    setModal(modalInit);
  }

  function showModal(tat) {
    setModal({ tat, open: true });
  }

  const tatCards = tats.map((tat) => (
    <CardSm key={tat.id} tat={tat} showModal={() => showModal(tat)} />
  ));
  // console.log("mCanvas");
  return (
    <>
      {/* {console.log("rCanvas")} */}
      <Modal modal={modal} closer={closer} />
      <CanvasMain>{tatCards}</CanvasMain>
    </>
  );
};

export default Canvas;

const CanvasMain = styled.div`
  margin: 1.5rem auto;
  max-width: 960px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
