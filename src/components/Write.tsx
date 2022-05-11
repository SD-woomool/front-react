import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = styled.div`
  max-width: 600px;
`;

const TopFixedBar = styled.div`
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

const FixedBarTitle = styled.div`
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 20px;
  margin: 0px auto;
  font-size: 20px;
  color: rgb(56, 127, 234);
`;

const Title = styled.input`
  border-radius: 0px;
  width: 578px;
  height: 18px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(255, 255, 255);
  color: rgb(92, 92, 92);
  border-bottom: 1px solid rgb(227, 227, 227);
  :focus {
    border-color: rgb(56, 127, 234);
    outline: none;
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

const Name = styled.div`
  color: rgb(124, 124, 124);
`;

const Course = styled.div`
  margin-bottom: 20px;
  div:first-child {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  div:nth-child(2) {
    max-height: 60px;
    text-align: center;
    padding: 15px 0;
    color: rgb(170, 170, 170);
  }
  button {
    width: 100%;
    min-height: 44px;
    border: 1px solid rgb(227, 227, 227);
    color: rgb(170, 170, 170);
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Description = styled.div`
  margin-bottom: 20px;
  div {
    margin-bottom: 10px;
  }
  textarea {
    min-height: 200px;
    min-width: 540px;
    padding: 10px;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 10px;
    resize: none;
    ::placeholder {
      color: rgb(170, 170, 170);
      font-size: 14px;
    }
    :focus {
      border-color: rgb(56, 127, 234);
      outline: none;
    }
  }
`;

const Transportation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 20px;
  button {
    padding: 2px 10px;
    margin-left: 10px;
    color: rgb(170, 170, 170);
    border: 1px solid rgb(170, 170, 170);
    border-radius: 10px;
    font-size: 12px;
    cursor: pointer;
  }
  .clicked {
    color: rgb(255, 255, 255);
    background-color: rgb(56, 127, 234);
    border: 1px solid rgb(56, 127, 234);
  }
`;

const Tag = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;
  #tag {
    display: inline-block;
  }
  span {
    margin-left: 5px;
    font-size: 12px;
    color: rgb(170, 170, 170);
  }
`;

const Form = styled.form`
  position: relative;
  margin-bottom: 10px;
  input {
    width: 550px;
    padding: 5px;
    font-size: 14px;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 6px;
  }
  button {
    position: absolute;
    right: 10px;
    line-height: 20px;
    top: calc(50% - 10px);
    font-size: 20px;
    color: rgb(156, 156, 156);
  }
`;

const CompleteBtn = styled.button`
  width: 560px;
  margin: 20px 0;
  height: 40px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgb(227, 227, 227);
  font-size: 18px;
  color: rgb(170, 170, 170);
`;

function Write() {
  const navigate = useNavigate();
  const [color, setColor] = useState(0);
  const goBack = () => {
    navigate(-1);
  };
  const chooseTrans = (id) => {
    setColor(id);
  };
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
  return (
    <Header>
      <TopFixedBar>
        <Arrow onClick={goBack} />
        <FixedBarTitle>코스</FixedBarTitle>
      </TopFixedBar>
      <Title placeholder="코스 제목을 입력해주세요." />
      <Map id="map"></Map>
      <Body>
        <Course>
          <Name>코스</Name>
          <div>아직 추가된 장소가 없습니다! 추가해주세요!</div>
          <button>장소추가</button>
        </Course>
        <Description>
          <Name>설명</Name>
          <textarea placeholder="코스에 대한 설명을 적어주세요." />
        </Description>
        <Transportation>
          <Name>교통수단</Name>
          <button
            className={color === 1 ? "clicked" : ""}
            onClick={() => chooseTrans(1)}
          >
            대중교통
          </button>
          <button
            className={color === 2 ? "clicked" : ""}
            onClick={() => chooseTrans(2)}
          >
            자동차
          </button>
        </Transportation>
        <Tag>
          <Name id="tag">태그</Name>
          <span>(선택)</span>
        </Tag>
        <Form>
          <input type="text" />
          <button>+</button>
        </Form>
        <CompleteBtn>작성완료</CompleteBtn>
      </Body>
    </Header>
  );
}

export default Write;
