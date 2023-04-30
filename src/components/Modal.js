import React from "react";
import CardLg from "./CardLg";

const Modal = ({ modal, closer }) => {
  return modal.open ? (
    <div className="modal" onClick={closer}>
      <div className="aspect-ratio-box">
        <CardLg tat={modal.tat} />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
