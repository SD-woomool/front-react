import styled from "styled-components";
import Article, { IArticle } from "./Article";
import { ReactComponent as Pencil } from "../assets/pencil.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledArticleList = styled.div`
  #lastPlace {
    color: rgb(170, 170, 170);
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }

  #pencil {
    background-color: rgb(56, 127, 234);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    bottom: 75px;
    right: 30px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  font-size: 12px;
  color: rgb(124, 124, 124);
  padding: 5px 15px;
  border-bottom: 1px solid rgb(227, 227, 227);
  max-height: 23px;
  justify-content: space-between;

  span.active {
    color: rgb(56, 127, 234);
  }
`;

// 최신순, 좋아요
const StyledSpan = styled.span`
  max-width: 43px;
  margin-left: 5px;
  cursor: pointer;

  ::before {
    content: "•";
  }
`;

function ArticleList({ articles }: { articles: IArticle[] }) {
  const [clicked, setClicked] = useState<boolean>(true);
  const navigate = useNavigate();
  const onClick = () => {
    setClicked((clicked) => !clicked);
  };
  const moveToCourse = () => {
    navigate(`/community/write`);
  };
  return (
    <StyledArticleList>
      <ContentBox>
        <div>코스 {articles.length}개</div>
        <div>
          <StyledSpan className={clicked ? "active" : ""} onClick={onClick}>
            최신순
          </StyledSpan>
          <StyledSpan className={!clicked ? "active" : ""} onClick={onClick}>
            좋아요
          </StyledSpan>
        </div>
      </ContentBox>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
      <div id="lastPlace">마지막 검색 결과입니다.</div>
      <button id="pencil" onClick={moveToCourse}>
        <Pencil />
      </button>
    </StyledArticleList>
  );
}

export default ArticleList;
