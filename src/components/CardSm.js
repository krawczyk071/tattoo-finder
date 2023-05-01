import React from "react";

import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../utils/cloudinary";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/features/favortiesSlice";

const CardSm = ({ tat, showModal, bg }) => {
  // Instantiate a CloudinaryImage object for the image
  const myImage = cld.image(tat.cid);
  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(300).height(300));

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="card-sm" style={{ background: bg }}>
      <div className="card-sm__wrap">
        <AdvancedImage
          cldImg={myImage}
          plugins={[lazyload(), placeholder({ mode: "predominant-color" })]}
        />
        {showModal && (
          <div className="card-sm__more" onClick={showModal}>
            <i className="fa-solid fa-magnifying-glass-plus"></i>
          </div>
        )}
      </div>
      <div className="card-sm__info">
        <h1>{tat.name}</h1>
        <h2>Votes: {tat.votes}</h2>
        <div className="card-sm__fav" onClick={() => dispatch(toggle(tat.id))}>
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
