import React, { useState } from "react";

import Canvas from "../components/Canvas";

import { tatData } from "../utils/data";
import { ArrShuffle } from "../utils/helpers";
const Homepage = () => {
  const [tats, setTats] = useState(ArrShuffle(tatData));
  return (
    <section className="layout-lg">
      <Canvas tats={tats} />
    </section>
  );
};

export default Homepage;
