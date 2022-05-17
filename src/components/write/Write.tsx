import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopFixedBar from "./TopFixedBar";
import Course from "./Course";
import Description from "./Description";
import Transportation from "./Transportation";
import Tags from "./Tags";
import { useDispatch, useSelector } from "react-redux";
import { putMessageThunk } from "../../context/reducer/messageReducer";
import { RootState, AppDispatch } from "../../context/store";

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

const Message = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  max-width: 540px;
  margin: 0 auto;
  width: 70%;
  height: auto;
  left: 1px;
  right: 1px;
  top: 80%;
  padding: 10px;
  color: white;
  font-size: 17px;
  background-color: rgb(234, 56, 56);
  border-radius: 10px;
  line-height: 1.5rem;
  animation: 3s ease 1s 1 normal none running fadeInOut;
  :before {
    -webkit-animation: loader9g 3s ease-in-out infinite;
    animation: loader9g 3s ease-in-out infinite;
  }
  :after {
    -webkit-animation: loader9d 3s ease-in-out infinite;
    animation: loader9d 3s ease-in-out infinite;
  }
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
  const [title, setTitle] = useState("");
  const messages = useSelector<RootState, string[]>((state) =>
    state.message.map((el: any) => el.message)
  );
  console.log(messages);
  const dispatch = useDispatch<AppDispatch>();
  const onClickHandler = () => {
    if (title.length === 0) {
      dispatch(
        putMessageThunk({
          message: "코스의 제목을 작성해주세요.",
          timeout: 3000,
        })
      );
    }
  };
  return (
    <Header>
      <TopFixedBar />
      <Title
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="코스 제목을 입력해주세요."
      />
      <Map id="map"></Map>
      <Body>
        <Course />
        <Description />
        <Transportation />
        <Tags />
        <CompleteBtn value={title} onClick={onClickHandler}>
          작성완료
        </CompleteBtn>
        {messages.map((el, index) => (
          <Message key={index}>{el}</Message>
        ))}
      </Body>
    </Header>
  );
}

export default Write;
