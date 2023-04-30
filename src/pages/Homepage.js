import React, { useContext, useEffect, useState } from "react";

import Canvas from "../components/Canvas";

// import { tatData } from "../utils/data";
import { ArrShuffle } from "../utils/helpers";
import { TatContext } from "../context/TatContext";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTats } from "../redux/features/tatsSlice";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { colRef, db } from "../utils/firebase";
const Homepage = () => {
  // const [tats, setTats] = useState(tatData);
  // const [tats, dispatch] = useContext(TatContext);
  const tats = useSelector((state) => state.tats);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, "tats"), () =>
  //     console.log("change")
  //   );
  // }, []);

  return (
    <section className="layout-lg">
      {tats.loading ? <Loader /> : <Canvas tats={ArrShuffle(tats.data)} />}
      {/* <button onClick={() => dispatch(fetchAllTats())}>DAWAJ</button> */}
    </section>
  );
};

export default Homepage;
