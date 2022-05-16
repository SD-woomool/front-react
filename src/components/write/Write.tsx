import React, { useEffect } from "react";
import styled from "styled-components";
import TopFixedBar from "./TopFixedBar";
import Course from "./Course";
import Description from "./Description";
import Transportation from "./Transportation";
import Tags from "./Tags";
import CompleteBtn from "./CompleteBtn";

const Header = styled.div`
  max-width: 600px;
`;

const Title = styled.input`
  border-radius: 0;
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

function Write() {
  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13,
      });
    };
    initMap();
  }, []);
  return (
    <Header>
      <TopFixedBar />
      <Title placeholder="코스 제목을 입력해주세요." />
      <Map id="map"></Map>
      <Body>
        <Course />
        <Description />
        <Transportation />
        <Tags />
        <CompleteBtn />
      </Body>
    </Header>
  );
}

export default Write;
