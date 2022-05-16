import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const TopBar = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  top: 0;
  z-index: 999;
  background-color: rgb(255, 255, 255);

  svg {
    height: 16px;
    cursor: pointer;
  }
`;

const Title = styled.div`
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 20px;
  margin: 0 auto;
  font-size: 20px;
  color: rgb(56, 127, 234);
`;

function TopPlacesBar() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <TopBar>
      <Arrow onClick={goBack} />
      <Title>장소</Title>
    </TopBar>
  );
}

export default TopPlacesBar;
