import React from "react";
import CardLg from "./CardLg";

const Modal = ({ modal, closer }) => {
  return modal.open ? (
    <div className="modal" onClick={closer}>
      <CardLg tat={modal.tat} />
    </div>
  ) : (
    ""
  );
};

export default Modal;
