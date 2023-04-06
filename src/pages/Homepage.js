import React, { useState } from "react";

import CardLg from "../components/CardLg";
import Canvas from "../components/Canvas";

import { pics } from "../utils/data";
const Homepage = () => {
  const [tats, setTats] = useState(pics);
  return (
    <section className="layout-lg">
      <Canvas tats={tats} />
    </section>
  );
};

export default Homepage;
