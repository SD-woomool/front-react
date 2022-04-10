import styled from "styled-components";
import Article from "./Article";
import SearchBar from "./SearchBar";
import {ReactComponent as Pencil} from "../assets/pencil.svg";

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
`

function ArticleList ({articles}) {
  return (
    <StyledArticleList>
      <SearchBar />
      {articles.map((article, index) => (
        <Article key={index} article={article}/>
      ))}
      <div id="lastPlace">마지막 검색 결과입니다.</div>
      <button id="pencil"><Pencil /></button>
    </StyledArticleList>
  );
}

export default ArticleList;