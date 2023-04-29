import React, { useContext, useState } from "react";
import CardSm from "../components/CardSm";
import CardXl from "../components/CardXl";
import { TatContext } from "../context/TatContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Vote = () => {
  const [tats, dispatch] = useContext(TatContext);
  const [cardIdx, setCardIdx] = useState(0);
  function nextCard() {
    setCardIdx((prev) => {
      return prev === tats.data.length - 1 ? 0 : prev + 1;
    });
  }
  const [yours, setYours] = useState([]);
  function yoursUp(id) {
    setYours((prev) => {
      //voted before?
      return prev.some((y) => y.id === id)
        ? prev.map((p) => {
            return p.id === id ? { ...p, votes: p.votes + 1 } : p;
          })
        : [...prev, { id: id, votes: 1 }];
    });
  }
  function yoursDown(id) {
    setYours((prev) => {
      //voted before?
      return prev.some((y) => y.id === id)
        ? prev.map((p) => {
            return p.id === id ? { ...p, votes: p.votes - 1 } : p;
          })
        : [...prev, { id: id, votes: -1 }];
    });
  }

  console.log("idx", cardIdx);
  return (
    <div className="vote">
      <div className="vote__card" onClick={() => nextCard()}>
        <TransitionGroup className="trans-group">
          <CSSTransition classNames="slide" timeout={300} key={cardIdx}>
            <CardXl
              tat={tats.data[cardIdx]}
              dispatch={dispatch}
              yours={[yoursUp, yoursDown]}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
      {/* <div className="vote__top">
        <h1>Your top3:</h1>
        <div className="vote__cards">
          {yours.map((y) => (
            <CardSm tat={tats.find((t) => t.id === y.id)} />
          ))}
        </div>
      </div> */}
      <div className="last5">
        <h1>Last 5 votes</h1>
        <div className="last5__cards">
          {yours
            .slice(-5)
            .reverse()
            .map((y) => {
              return (
                <div className="last5__card">
                  <CardSm
                    tat={tats.data.find((t) => t.id === y.id)}
                    bg={y.votes > 0 ? "green" : "red"}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Vote;
