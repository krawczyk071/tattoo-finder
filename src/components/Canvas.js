import React, { useState } from "react";
import CardSm from "./CardSm";
import Modal from "./Modal";

const Canvas = ({ tats }) => {
  const modalInit = { url: "", open: false };
  const [modal, setModal] = useState(modalInit);

  function close() {
    setModal(modalInit);
  }

  function showModal(url) {
    setModal({ url, open: true });
  }

  const tatCards = tats.map((tat) => (
    <CardSm key={tat} imgurl={tat} showModal={() => showModal(tat)} />
  ));
  return (
    <>
      <Modal modal={modal} close={close} />
      <div className="canvas">{tatCards}</div>
    </>
  );
};

export default Canvas;
