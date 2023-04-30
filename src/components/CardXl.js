import React, { useEffect, useState } from "react";
import { cld } from "../utils/cloudinary";

import { AdvancedImage, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

const CardXl = ({ tat, dispatch, yours }) => {
  const [yoursUp, yoursDown] = yours;
  // console.log(tat);
  const myImage = cld.image(tat.cid);
  myImage.resize(fill().width(100).height(100));

  return (
    <div className="card-xl">
      <div className="card-xl__img">
        <AdvancedImage
          cldImg={myImage}
          plugins={[placeholder({ mode: "predominant-color" })]}
        />
        {/* <AdvancedImage cldImg={myImage} /> */}
        {/* <img src={`./img/${tat.img}.jpg`} alt="" /> */}
      </div>
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
      {/* <h1>{tat.votes}</h1> */}
    </div>
  );
};

export default CardXl;
