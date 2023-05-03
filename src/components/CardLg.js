import React from "react";
import { formatPrice } from "../utils/helpers";
import { cld } from "../utils/cloudinary";
import { AdvancedImage, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/features/favortiesSlice";
import { add, remove } from "../redux/features/cartSlice";
import { StyledButton } from "./styles/Button.styled";
import styled from "styled-components";

const CardLg = ({ tat }) => {
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const myImage = cld.image(tat.cid);
  myImage.resize(fill().width(750).height(750));

  return (
    <CardLgMain>
      <CardLgPhoto>
        <AdvancedImage
          cldImg={myImage}
          plugins={[placeholder({ mode: "vectorize" })]}
        />
      </CardLgPhoto>
      <CardLgInfo>
        <h1>{tat.name}</h1>
        <h2>author: {tat.author}</h2>
        <CardLgInfoStat>
          <h2>Views: {tat.views}</h2>
          <h2>Likes: {tat.votes}</h2>
        </CardLgInfoStat>
        <CardLgInfoTags>
          <h2>tags:</h2>
          <CardLgInfoTagsCount>
            {tat.tags.split(",").map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </CardLgInfoTagsCount>
        </CardLgInfoTags>
        <CardLgInfoPrice>price: {formatPrice(tat.price)}</CardLgInfoPrice>
        <CardLgInfoOrder>
          {cart.some((c) => c.id === tat.id) ? (
            <CardLgInfoOrderRemove
              onClick={(e) => {
                e.stopPropagation();
                dispatch(remove(tat));
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i> Remove from Cart
            </CardLgInfoOrderRemove>
          ) : (
            <CardLgInfoBtn
              onClick={(e) => {
                e.stopPropagation();
                dispatch(add(tat));
              }}
            >
              Order
            </CardLgInfoBtn>
          )}
        </CardLgInfoOrder>

        {tat.firstOrder && (
          <Never>
            Never Ordered before <i className="fa-solid fa-hand-fist"></i>
          </Never>
        )}
        <CardLgFav
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggle(tat.id));
          }}
        >
          {favorites.find((f) => f.id === tat.id)?.favorited ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </CardLgFav>
      </CardLgInfo>
    </CardLgMain>
  );
};

export default CardLg;

const CardLgMain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: var(--secondary);
  padding: 1rem;
  border-radius: var(--radius1);

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    display: block;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
const CardLgPhoto = styled.div`
  flex: 1 1 70%;
  background: silver;
  overflow: hidden;
`;

const CardLgInfo = styled.div`
  flex: 1 0 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;
const CardLgInfoBtn = styled(StyledButton)`
  align-self: center;
`;

const CardLgInfoStat = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardLgInfoTags = styled.div`
  display: flex;
  flex-direction: column;
  background: wheat;
  padding: 0.3rem;
  margin: 1rem 0;
`;

const CardLgInfoTagsCount = styled.div`
  padding: 0.3rem;
`;

const CardLgInfoPrice = styled.h2`
  flex: 1;
  align-self: center;
  justify-content: end;
`;

const CardLgFav = styled.div`
  flex: 1;
  align-self: center;
  font-size: 3rem;
  margin: 0.5rem;
`;

const CardLgInfoOrder = styled.div`
  align-self: center;
`;

const CardLgInfoOrderRemove = styled.div`
  cursor: pointer;
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
`;

const Tag = styled.span`
  background: silver;
  padding: 0.2rem;
  border-radius: var(--radius1);
  margin: 0 4px;
`;
