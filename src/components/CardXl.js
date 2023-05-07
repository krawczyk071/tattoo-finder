import { cld } from "../utils/cloudinary";

import { AdvancedImage, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useDispatch } from "react-redux";

import { down, up } from "../redux/features/voteSlice";
import { editTat, fetchAllTats } from "../redux/features/tatsSlice";
import styled from "styled-components";

const CardXl = ({ tat, nextCard }) => {
  const dispatch = useDispatch();

  const myImage = cld.image(tat?.cid);
  myImage.resize(fill().width(300).height(300));

  return (
    <CardXlMain>
      <CardXlImg>
        <AdvancedImage
          cldImg={myImage}
          plugins={[placeholder({ mode: "predominant-color" })]}
        />
      </CardXlImg>
      <CardXlYesNo>
        <CardXlNo
          onClick={() => {
            dispatch(down(tat.id));
            dispatch(editTat({ editedTat: tat, vote: -1 }));
            // dispatch(fetchAllTats());
            nextCard();
          }}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </CardXlNo>
        <CardXlYes
          onClick={() => {
            dispatch(up(tat.id));
            dispatch(editTat({ editedTat: tat, vote: 1 }));
            // dispatch(fetchAllTats());
            nextCard();
          }}
        >
          <i className="fa-regular fa-circle-check"></i>
        </CardXlYes>
      </CardXlYesNo>
    </CardXlMain>
  );
};

export default CardXl;

const CardXlMain = styled.div`
  height: 380px;
  width: 300px;

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background: var(--secondary);
  padding: 1rem;
  border-radius: var(--radius1);
  box-shadow: 0 4px 0.5rem -0.125rem rgba(0, 0, 0, 0.1),
    0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.06);
`;

const CardXlImg = styled.div`
  flex: 1;
  img {
    height: 100%;
    display: block;
  }
`;

const CardXlYesNo = styled.div`
  flex: 0;
  display: flex;
  cursor: pointer;
`;

const CardXlYes = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  font-size: 3rem;
  color: white;

  background: var(--success);
`;
const CardXlNo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  font-size: 3rem;
  color: white;

  background: var(--danger);
`;
