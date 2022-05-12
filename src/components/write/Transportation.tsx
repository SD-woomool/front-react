import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledTrans = styled.div`
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 240px) {
    width: calc(100vw - 50px);
  }
  .clicked {
    color: rgb(255, 255, 255);
    background-color: rgb(56, 127, 234);
    border: 1px solid rgb(56, 127, 234);
  }
`;

const Name = styled.span`
  color: rgb(124, 124, 124);
  min-width: 51px;
`;

const Button = styled.button`
  padding: 2px 10px;
  margin-left: 10px;
  color: rgb(170, 170, 170);
  border: 1px solid rgb(170, 170, 170);
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;

function Transportation() {
  const [color, setColor] = useState(0);
  const chooseTrans = (id) => {
    setColor(id);
  };
  return (
    <StyledTrans>
      <Name>교통수단</Name>
      <Button
        className={color === 1 ? "clicked" : ""}
        onClick={() => chooseTrans(1)}
      >
        대중교통
      </Button>
      <Button
        className={color === 2 ? "clicked" : ""}
        onClick={() => chooseTrans(2)}
      >
        자동차
      </Button>
    </StyledTrans>
  );
}

export default Transportation;
