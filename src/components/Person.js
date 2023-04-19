import React from "react";

const Person = () => {
  return (
    <div className="person">
      <div className="person__cal">
        <img
          src="https://user-images.githubusercontent.com/12091479/189707811-b1461c9a-2d20-4389-bd25-2e84321b9442.png"
          alt=""
        />{" "}
      </div>
      <div className="person__choice">
        <h2>Select artist:</h2>
        <div className="person__card">
          <div className="person__photo">
            <img src="./img/man.jpg" alt="" />
          </div>
          <div className="person__name">Jan Pawlak</div>
        </div>
      </div>
    </div>
  );
};

export default Person;
