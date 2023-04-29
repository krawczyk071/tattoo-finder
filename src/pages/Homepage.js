import React, { useContext, useEffect, useState } from "react";

import Canvas from "../components/Canvas";

// import { tatData } from "../utils/data";
import { ArrShuffle } from "../utils/helpers";
import { TatContext } from "../context/TatContext";
import Loader from "../components/Loader";
const Homepage = () => {
  // const [tats, setTats] = useState(tatData);
  const [tats, dispatch] = useContext(TatContext);
  // useEffect(() => {
  //   loadTattoos();
  // }, []);
  return (
    <section className="layout-lg">
      {tats.loading ? <Loader /> : <Canvas tats={ArrShuffle(tats.data)} />}
    </section>
  );
};

export default Homepage;
