import React from "react";

import Canvas from "../components/Canvas";

import { ArrShuffle } from "../utils/helpers";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
const Homepage = () => {
  const tats = useSelector((state) => state.tats);

  // const favs = useSelector((state) => state.favorites);
  // const favList = favs.reduce((acc, itm) => {
  //   return itm.favorited ? [...acc, itm.id] : acc;
  // }, []);

  // const withFav = tats.data.map((t) => {
  //   const isFav = favList.some((f) => f.id === t.id);
  //   return { ...t, fav: isFav };
  // });

  return (
    <>{tats.loading ? <Loader /> : <Canvas tats={ArrShuffle(tats.data)} />}</>
  );
};

export default Homepage;
