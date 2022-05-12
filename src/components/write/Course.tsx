import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledCourse = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    width: calc(100vw - 50px);
  }
`;

const Name = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  color: rgb(124, 124, 124);
`;

const Desc = styled.div`
  max-height: 60px;
  text-align: center;
  padding: 15px 0;
  color: rgb(170, 170, 170);
`;

const Button = styled.button`
  width: 100%;
  min-height: 44px;
  border: 1px solid rgb(227, 227, 227);
  color: rgb(170, 170, 170);
  border-radius: 10px;
  cursor: pointer;
`;

function Course() {
  const navigate = useNavigate();
  const addPlaces = () => {
    navigate("/community/places");
  };
  return (
    <StyledCourse>
      <Name>코스</Name>
      <Desc>아직 추가된 장소가 없습니다! 추가해주세요!</Desc>
      <Button onClick={addPlaces}>장소추가</Button>
    </StyledCourse>
  );
}

export default Course;
