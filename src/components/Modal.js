import React from "react";
import CardLg from "./CardLg";

const Modal = ({ modal, close }) => {
  return modal.open ? (
    <div className="modal" onClick={close}>
      <CardLg tatObj={modal} />
    </div>
  ) : (
    ""
  );
};

export default Modal;
