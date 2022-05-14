import React, { useState } from "react";
import styled from "styled-components";

const StyledPlacesTags = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  column-gap: 10px;
  background-color: rgb(243, 243, 243);
  border-bottom: 1px solid rgb(227, 227, 227);
`;

const Span = styled.span`
  font-size: 12px;
  padding: 2px 10px;
  background-color: rgb(255, 255, 255);
  color: rgb(170, 170, 170);
  border: 1px solid rgb(170, 170, 170);
  border-radius: 10px;
  cursor: pointer;
  :nth-of-type(1) {
    margin-left: 15px;
  }
  &.activated {
    border: 1px solid rgb(56, 127, 234);
    background-color: rgb(56, 127, 234);
    color: rgb(255, 255, 255);
  }
`;

function PlacesTags() {
  const [clicked, setClicked] = useState(0);
  const onClickHandler = (id) => {
    setClicked(id);
  };
  return (
    <StyledPlacesTags>
      <Span
        className={clicked === 1 ? "activated" : ""}
        onClick={() => onClickHandler(1)}
      >
        음식점
      </Span>
      <Span
        className={clicked === 2 ? "activated" : ""}
        onClick={() => onClickHandler(2)}
      >
        카페
      </Span>
      <Span
        className={clicked === 3 ? "activated" : ""}
        onClick={() => onClickHandler(3)}
      >
        관광명소
      </Span>
      <Span
        className={clicked === 4 ? "activated" : ""}
        onClick={() => onClickHandler(4)}
      >
        문화시설
      </Span>
    </StyledPlacesTags>
  );
}

export default PlacesTags;
