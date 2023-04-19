import React, { useContext, useState } from "react";
// import { tatData } from "../utils/data";
import Canvas from "../components/Canvas";
import { FavContext } from "../context/FavContext";
import { TatContext } from "../context/TatContext";

const Favorites = () => {
  const [favorites, dispatchF] = useContext(FavContext);
  const [tats, dispatchT] = useContext(TatContext);

  // const [tats, setTats] = useState(
  //   tats.filter((t) => {
  //     return favorites.find((f) => f.id === t.id)?.favorited;
  //   })
  // );
  const [favTats, setFavTats] = useState(
    favorites
      .filter((f) => f.favorited)
      .map((f) => tats.find((t) => t.id === f.id))
  );
  return (
    <section className="layout-lg">
      <Canvas tats={favTats} />
    </section>
  );
};

export default Favorites;
