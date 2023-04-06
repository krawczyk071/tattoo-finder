import React from "react";

const Person = () => {
  return (
    <div className="person">
      <div className="person__cal">CAL</div>
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
