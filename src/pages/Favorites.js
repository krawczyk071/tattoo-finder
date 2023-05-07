import React, { useEffect, useState } from "react";
import Canvas from "../components/Canvas";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const tats = useSelector((state) => state.tats);

  const [favTats, setFavTats] = useState([]);

  useEffect(() => {
    !tats.loading &&
      setFavTats(
        favorites
          .filter((f) => f.favorited)
          .map((f) => tats.data.find((t) => t.id === f.id))
      );
  }, [tats, favorites]);

  return <>{tats.loading ? <Loader /> : <Canvas tats={favTats} />}</>;
};

export default Favorites;
