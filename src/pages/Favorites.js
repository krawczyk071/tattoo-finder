import React, { useEffect, useState } from "react";
import Canvas from "../components/Canvas";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const tats = useSelector((state) => state.tats);

  const [favTats, setFavTats] = useState([]);
  useEffect(() => {
    setFavTats(
      favorites
        .filter((f) => f.favorited)
        .map((f) => tats.data.find((t) => t.id === f.id))
    );
  }, [tats, favorites]);

  return (
    <section className="layout-lg">
      <Canvas tats={favTats} />
    </section>
  );
};

export default Favorites;
