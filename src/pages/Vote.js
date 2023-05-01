import React, { useEffect, useState } from "react";
import CardSm from "../components/CardSm";
import CardXl from "../components/CardXl";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { saveIdx } from "../redux/features/voteSlice";

const Vote = () => {
  const tats = useSelector((state) => state.tats);
  const vote = useSelector((state) => state.vote);
  const dispatch = useDispatch();

  const [cardIdx, setCardIdx] = useState(vote.idx);

  function nextCard() {
    setCardIdx((prev) => {
      return prev === tats.data.length - 1 ? 0 : prev + 1;
    });
  }
  useEffect(() => {
    dispatch(saveIdx(cardIdx));
  }, [dispatch, cardIdx]);

  return (
    <div className="vote">
      <div className="vote__card">
        <TransitionGroup className="trans-group">
          <CSSTransition classNames="slide" timeout={300} key={cardIdx}>
            <CardXl tat={tats.data[cardIdx]} nextCard={nextCard} />
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="last5">
        <h1>Last 5 votes</h1>
        <div className="last5__cards">
          {vote.cards
            .slice(-5)
            .reverse()
            .map((y) => {
              return (
                <div className="last5__card">
                  <CardSm
                    tat={tats.data.find((t) => t.id === y.id)}
                    bg={
                      y.votes > 0
                        ? "linear-gradient(to top, #fff 0%, #388e3c 80%)"
                        : "linear-gradient(to top, #fff 0%, #c9182b 80%)"
                    }
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
