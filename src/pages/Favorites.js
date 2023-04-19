import React, { useContext, useState } from "react";
import { tatData } from "../utils/data";
import Canvas from "../components/Canvas";
import { FavContext } from "../context/FavContext";

const Favorites = () => {
  const [favorites, dispatch] = useContext(FavContext);

  const [tats, setTats] = useState(
    tatData.filter((t) => {
      return favorites.find((f) => f.id === t.id)?.favorited;
    })
  );
  return (
    <section className="layout-lg">
      <Canvas tats={tats} />
    </section>
  );
};

export default Favorites;
