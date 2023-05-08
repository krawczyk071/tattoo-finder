import React from "react";
import { formatPrice } from "../utils/helpers";
import { cld } from "../utils/cloudinary";
import { AdvancedImage, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

import styled from "styled-components";
import Like from "./Like";
import ModalOrder from "./ModalOrder";

const CardModal = ({ tat }) => {
  const myImage = cld.image(tat.cid);
  myImage.resize(fill().width(750).height(750));

  return (
    <CardModalMain>
      <CardModalPhoto>
        <AdvancedImage
          cldImg={myImage}
          plugins={[placeholder({ mode: "vectorize" })]}
        />
      </CardModalPhoto>
      <CardModalInfo>
        <h1>{tat.name}</h1>
        <h2>author: {tat.author}</h2>
        <CardModalInfoStat>
          <h2>Views: {tat.views}</h2>
          <h2>Likes: {tat.votes}</h2>
        </CardModalInfoStat>
        <CardModalInfoTags>
          <h2>tags:</h2>
          <CardModalInfoTagsCount>
            {tat.tags.split(",").map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </CardModalInfoTagsCount>
        </CardModalInfoTags>
        <CardModalInfoPrice>price: {formatPrice(tat.price)}</CardModalInfoPrice>
        <ModalOrder tat={tat} />

        {tat.firstOrder && (
          <Never>
            Never Ordered before <i className="fa-solid fa-hand-fist"></i>
          </Never>
        )}
        <CardModalFav>
          <Like tatId={tat.id} size="lg" />
        </CardModalFav>
      </CardModalInfo>
    </CardModalMain>
  );
};

export default CardModal;

const CardModalMain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  background: var(--secondary);
  padding: 1rem;
  border-radius: var(--radius1);

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    h1 {
      font-size: 1rem;
      font-weight: bold;
    }
    h2 {
      font-size: 0.9rem;
    }
  }
`;
const CardModalPhoto = styled.div`
  flex: 1 0 70%;
  background: silver;
  overflow: hidden;
  img {
    /* object-fit: cover; */
    width: 100%;
    /* height: auto; */
    display: block;
  }
  @media (max-width: 1200px) {
    flex: 1 0 50%;
  }
`;

const CardModalInfo = styled.div`
  flex: 1 0 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  @media (max-width: 1200px) {
    flex: 1 0 50%;
  }
`;

const CardModalInfoStat = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardModalInfoTags = styled.div`
  display: flex;
  flex-direction: column;
  background: wheat;
  padding: 0.3rem;
  margin: 1rem 0;
`;

const CardModalInfoTagsCount = styled.div`
  padding: 0.3rem;
`;

const CardModalInfoPrice = styled.h2`
  flex: 1;
  align-self: center;
  justify-content: end;
`;

const Never = styled.div`
  background: var(--primary);
  color: white;
  border-radius: var(--radius1);
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  i {
    font-size: 2rem;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Tag = styled.span`
  background: silver;
  padding: 0.2rem;
  border-radius: var(--radius1);
  margin: 0 4px;
`;
const CardModalFav = styled.div`
  flex: 1;
  align-self: center;
  font-size: 3rem;
  margin: 0.5rem;
`;
