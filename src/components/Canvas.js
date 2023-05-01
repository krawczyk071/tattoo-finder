import React, { useState } from "react";
import CardSm from "./CardSm";
import Modal from "./Modal";

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
  return (
    <>
      <Modal modal={modal} closer={closer} />
      <div className="canvas layout-lg">{tatCards}</div>
    </>
  );
};

export default Canvas;
