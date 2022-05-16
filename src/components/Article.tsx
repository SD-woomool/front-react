import React from "react";
import styled from "styled-components";
import Category from "./Category";

const StyledArticle = styled.div`
  display: flex;
  min-height: 85px;
  border-bottom: 1px solid rgb(227, 227, 227);
  padding: 10px 15px;
  margin-bottom: 5px;

  &:hover {
    background-color: #f7f7f7;
  }

  // place 뒤에 붙는 아이콘
  svg {
    width: 13px;
    height: 13px;
    margin-left: 2px;
    vertical-align: bottom;
    fill: #9c9c9c;
  }

  .image {
    height: 85px;
    aspect-ratio: 16 / 9;
  }

  #articleBox {
    padding-left: 10px;
  }

  h1 {
    color: var(--black);
    font-size: 16px;
    margin-bottom: 5px;
    max-height: 85px;
    overflow: hidden;
    text-overflow: ellipsis; // ...
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  span {
    color: var(--gray);
    font-size: 12px;
  }

  #places {
    margin: 5px 0;
    max-height: 85px;
    overflow: hidden;
    text-overflow: ellipsis; // ...
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  #dateLikeComments {
    color: var(--black);
    font-size: 12px;
    margin-bottom: 5px;
    max-height: 85px;
    overflow: hidden;
    text-overflow: ellipsis; // ...
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

interface IProps {
  article: IArticle;
}

export interface IArticle {
  id: number;
  title: string;
  thumbnail: string;
  places: {
    placeId: number;
    name: string;
    category: string;
  }[];
  createdAt: string;
  like: number;
  comments: number;
}

function Article({ article }: IProps) {
  return (
    <StyledArticle>
      {article.hasOwnProperty("thumbnail") ? (
        <img className="image" alt="thumbnail" src={article.thumbnail} />
      ) : null}
      <div id="articleBox">
        <h1>{article.title}</h1>
        <div id="places">
          {article.places.map((place, index) => {
            let delimiter = " - ";
            if (index === article.places.length - 1) {
              delimiter = "";
            }
            return (
              <span key={index}>
                {place.name}
                <Category category={place.category} />
                {delimiter}
              </span>
            );
          })}
        </div>
        <div id="dateLikeComments">
          <span>{article.createdAt}</span>
          <span> 좋아요 {article.like}</span>
          <span> 댓글 {article.comments}</span>
        </div>
      </div>
    </StyledArticle>
  );
}

export default Article;
