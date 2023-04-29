import React, { useContext, useEffect, useState } from "react";

import { FavContext } from "../context/FavContext";

import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../utils/cloudinary";

const CardSm = ({ tat, showModal, bg }) => {
  // Instantiate a CloudinaryImage object for the image
  const myImage = cld.image(tat.cid);
  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));

  const [favorites, dispatch] = useContext(FavContext);

  return (
    <div className="card-sm" style={{ background: bg }}>
      <div className="card-sm__wrap">
        <AdvancedImage
          cldImg={myImage}
          plugins={[lazyload(), placeholder({ mode: "predominant-color" })]}
        />
        {/* <AdvancedImage cldImg={myImage} /> */}
        {/* <img src={`./img/${tat.img}.jpg`} alt="" /> */}
        <div className="card-sm__more" onClick={showModal}>
          <i className="fa-solid fa-magnifying-glass-plus"></i>
        </div>
      </div>
      <div className="card-sm__info">
        <h1>{tat.name}</h1>
        <h2>Votes: {tat.votes}</h2>
        <div
          className="card-sm__fav"
          onClick={() =>
            dispatch({
              type: "TOGG_FAVORITE",
              payload: { tat: tat.id },
            })
          }
        >
          {favorites.find((f) => f.id === tat.id)?.favorited ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSm;
