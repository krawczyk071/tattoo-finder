import React from "react";

import Canvas from "../components/Canvas";

import { ArrShuffle } from "../utils/helpers";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
const Homepage = () => {
  const tats = useSelector((state) => state.tats);

  return (
    <>{tats.loading ? <Loader /> : <Canvas tats={ArrShuffle(tats.data)} />}</>
  );
};

export default Homepage;
