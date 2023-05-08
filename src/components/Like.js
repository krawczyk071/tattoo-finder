import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/features/favortiesSlice";

const Like = ({ tatId, size }) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(toggle(tatId));
      }}
    >
      {favorites.find((f) => f.id === tatId)?.favorited ? (
        <i className="fa-solid fa-heart"></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </div>
  );
};

export default Like;
