import React from "react";

const CardXl = ({ tat, dispatch, yours }) => {
  const [yoursUp, yoursDown] = yours;
  return (
    <div className="card-xl">
      <img src={`./img/${tat.img}.jpg`} alt="" />
      <div className="card-xl__yesno">
        <div
          className="card-xl__no"
          onClick={() => {
            yoursDown(tat.id);
            dispatch({ type: "VOTE_DOWN", payload: { id: tat.id } });
            // nextCard();
          }}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
        <div
          className="card-xl__yes"
          onClick={() => {
            yoursUp(tat.id);
            dispatch({ type: "VOTE_UP", payload: { id: tat.id } });
          }}
        >
          <i className="fa-regular fa-circle-check"></i>
        </div>
      </div>
      <h1>{tat.votes}</h1>
    </div>
  );
};

export default CardXl;
