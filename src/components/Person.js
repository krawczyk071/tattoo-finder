import React from "react";

const Person = () => {
  return (
    <div class="person">
      <div class="person__cal">CAL</div>
      <div class="person__choice">
        <h2>Select artist:</h2>
        <div class="person__card">
          <div class="person__photo">
            <img src="./img/man.jpg" alt="" />
          </div>
          <div class="person__name">Jan Pawlak</div>
        </div>
      </div>
    </div>
  );
};

export default Person;
