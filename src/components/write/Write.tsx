import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import TopFixedBar from "./TopFixedBar";
import Course from "./Course";
import Description from "./Description";
import Transportation from "./Transportation";
import Tags from "./Tags";

const Header = styled.div`
  max-width: 600px;
`;

const Title = styled.input`
  border-radius: 0px;
  width: 578px;
  height: 18px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(255, 255, 255);
  border-bottom: 1px solid rgb(227, 227, 227);
  :focus {
    border-color: rgb(56, 127, 234);
    outline: none;
  }
  ::placeholder {
    color: rgb(170, 170, 170);
  }
`;

const Map = styled.div`
  height: 200px;
  :focus {
    outline: none;
  }
`;

const Body = styled.div`
  min-width: 560px;
  padding: 0 20px;
  font-size: 14px;
`;

const CompleteBtn = styled.button`
  width: 560px;
  height: 40px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid rgb(227, 227, 227);
  font-size: 18px;
  color: rgb(170, 170, 170);
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    width: calc(100vw - 50px);
  }
`;

function Write() {
  useEffect(() => {
    let map;
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13,
      });
    };
    initMap();
  }, []);
  const [value, setValue] = useState("");
  const onClickHandler = () => {
    if (value.length === 0) {
      // div 를 생성해서 3초정도 간 보여주고 없애는 효과 구현하기
    }
  };
  return (
    <Header>
      <TopFixedBar />
      <Title
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="코스 제목을 입력해주세요."
      />
      <Map id="map"></Map>
      <Body>
        <Course />
        <Description />
        <Transportation />
        <Tags />
        <CompleteBtn value={value} onClick={onClickHandler}>
          작성완료
        </CompleteBtn>
      </Body>
    </Header>
  );
}

export default Write;
