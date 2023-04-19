import React, { useContext, useState } from "react";

import Canvas from "../components/Canvas";

// import { tatData } from "../utils/data";
import { ArrShuffle } from "../utils/helpers";
import { TatContext } from "../context/TatContext";
const Homepage = () => {
  // const [tats, setTats] = useState(tatData);
  const [tats, dispatch] = useContext(TatContext);
  return (
    <section className="layout-lg">
      <Canvas tats={ArrShuffle(tats)} />
    </section>
  );
};

export default Homepage;
