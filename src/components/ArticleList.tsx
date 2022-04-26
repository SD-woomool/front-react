import styled from "styled-components";
import Article, { IArticle } from "./Article";
import SearchBar from "./SearchBar";
import { ReactComponent as Pencil } from "../assets/pencil.svg";
import React from "react";
import { useState } from "react";

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
  div:nth-child(1) {
    flex: 5.6;
  }
  div:nth-child(2) {
    flex: 1;
  }
  span.active {
    color: rgb(56, 127, 234);
  }
`;

// 최신순, 좋아요
const StyledSpan = styled.span`
  cursor: pointer;
  ::before {
    content: "•";
  }
`;

function ArticleList({ articles }: { articles: IArticle[] }) {
  const [clicked, setClicked] = useState<boolean>(true);
  const onClick = () => {
    setClicked((clicked) => !clicked);
  };
  return (
    <StyledArticleList>
      <SearchBar />
      <ContentBox>
        <div>코스 {articles.length}개</div>
        <div>
          <StyledSpan
            className={clicked === true ? "active" : ""}
            onClick={onClick}
          >
            최신순
          </StyledSpan>
          <StyledSpan
            className={clicked === false ? "active" : ""}
            onClick={onClick}
          >
            좋아요
          </StyledSpan>
        </div>
      </ContentBox>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
      <div id="lastPlace">마지막 검색 결과입니다.</div>
      <button id="pencil">
        <Pencil />
      </button>
    </StyledArticleList>
  );
}

export default ArticleList;
