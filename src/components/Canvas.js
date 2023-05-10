import React from "react";
import CardSm from "./CardSm";
import styled from "styled-components";

const CardSmMemo = React.memo(CardSm);
const Canvas = ({ tats }) => {
  const tatCards = tats.map((tat) => <CardSmMemo key={tat.id} tat={tat} />);
  // console.log("mCanvas");
  return (
    <>
      {/* {console.log("rCanvas")} */}
      <CanvasMain>{tatCards}</CanvasMain>
    </>
  );
};

export default Canvas;

const CanvasMain = styled.div`
  margin: 1.5rem auto;
  max-width: 960px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
