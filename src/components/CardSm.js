import React from "react";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../utils/cloudinary";
import styled from "styled-components";
import Like from "./Like";

const CardSm = ({ tat, showModal, bg }) => {
  // Instantiate a CloudinaryImage object for the image
  const myImage = cld.image(tat.cid);
  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(300).height(300));

  // console.log("mcardsm");

  return (
    <CardSmMain style={{ background: bg }}>
      {/* {console.log("rcardsm")} */}
      <CardSmWrap>
        <CardSmImg
          cldImg={myImage}
          plugins={[lazyload(), placeholder({ mode: "predominant-color" })]}
        />
        {showModal && (
          <CardSmMore onClick={showModal}>
            <i className="fa-solid fa-magnifying-glass-plus"></i>
          </CardSmMore>
        )}
      </CardSmWrap>
      <CardSmInfo>
        <h1>{tat.name}</h1>
        {!bg && <h2>Votes: {tat.votes}</h2>}
        <CardSmFav>
          <Like tatId={tat.id} />
        </CardSmFav>
      </CardSmInfo>
    </CardSmMain>
  );
};

export default CardSm;

const CardSmInfo = styled.div`
  height: 4.5rem;
  display: grid;
  align-content: space-between;
  margin-top: 0.3rem;
  grid-template-columns: 90% 1fr;
  grid-template-rows: auto auto;
`;
const CardSmMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 300px;
  background: var(--secondary);
  padding: 1rem;
  border-radius: var(--radius1);
  box-shadow: 0 4px 0.5rem -0.125rem rgba(0, 0, 0, 0.1),
    0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.06);
  margin-inline: 0.5rem;
`;
const CardSmWrap = styled.div`
  flex: 1 0 268px;
  display: grid;
  grid-template: 1fr/1fr;
`;
const CardSmMore = styled.div`
  opacity: 0;
  grid-area: 1/1;
  background: #000000;
  color: var(--text2);
  font-size: 5rem;
  &:hover {
    opacity: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CardSmImg = styled(AdvancedImage)`
  width: 100%;
  display: block;
  grid-area: 1/1;
`;
const CardSmFav = styled.div`
  grid-area: 1/2 / span 2/2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
