import React, { useEffect, useState } from "react";
import CardSm from "../components/CardSm";
import CardXl from "../components/CardXl";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { saveIdx } from "../redux/features/voteSlice";
import styled from "styled-components";

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
    <VoteMain>
      <VoteCard>
        <TransitionGroup className="trans-group">
          <CSSTransition classNames="slide" timeout={300} key={cardIdx}>
            <CardXl tat={tats.data[cardIdx]} nextCard={nextCard} />
          </CSSTransition>
        </TransitionGroup>
      </VoteCard>
      <Last5>
        <h1>Last 5 votes</h1>
        <Last5Cards>
          {vote.cards
            .slice(-5)
            .reverse()
            .map((y) => {
              return (
                <Last5Card key={y.id}>
                  <SmallerCard
                    tat={tats.data.find((t) => t.id === y.id)}
                    bg={
                      y.votes > 0
                        ? "linear-gradient(to top, #fff 0%, #388e3c 80%)"
                        : "linear-gradient(to top, #fff 0%, #c9182b 80%)"
                    }
                  />
                </Last5Card>
              );
            })}
        </Last5Cards>
      </Last5>
    </VoteMain>
  );
};

export default Vote;

const VoteMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const VoteCard = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

// const VoteTop = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
const SmallerCard = styled(CardSm)`
  transform: scale(0.7);
`;

const Last5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    font-size: 1.7rem;
    font-weight: bold;
    text-decoration: underline;
    color: var(--accent);
    text-decoration-color: var(--primary);
    text-decoration-thickness: 5px;
  }
`;

const Last5Cards = styled.div`
  display: flex;
`;

const Last5Card = styled.div`
  transform: scale(0.7);
  margin: -30px;
`;
// const VoteCards = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   width: 80%;
// `;
