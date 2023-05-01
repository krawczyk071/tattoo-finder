import { cld } from "../utils/cloudinary";

import { AdvancedImage, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useDispatch } from "react-redux";

import { down, up } from "../redux/features/voteSlice";
import { editTat, fetchAllTats } from "../redux/features/tatsSlice";

const CardXl = ({ tat, nextCard }) => {
  const dispatch = useDispatch();

  const myImage = cld.image(tat?.cid);
  myImage.resize(fill().width(300).height(300));

  return (
    <div className="card-xl">
      <div className="card-xl__img">
        <AdvancedImage
          cldImg={myImage}
          plugins={[placeholder({ mode: "predominant-color" })]}
        />
      </div>
      <div className="card-xl__yesno">
        <div
          className="card-xl__no"
          onClick={() => {
            dispatch(down(tat.id));
            dispatch(editTat({ editedTat: tat, vote: -1 }));
            dispatch(fetchAllTats());
            nextCard();
          }}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
        <div
          className="card-xl__yes"
          onClick={() => {
            dispatch(up(tat.id));
            dispatch(editTat({ editedTat: tat, vote: 1 }));
            nextCard();
          }}
        >
          <i className="fa-regular fa-circle-check"></i>
        </div>
      </div>
    </div>
  );
};

export default CardXl;
