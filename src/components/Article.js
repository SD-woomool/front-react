import styled from "styled-components";
import Category from "./Category";

const StyledArticle = styled.div`
  min-height: 85px;
  border-bottom: 1px solid rgb(227, 227, 227);
  padding: 10px 15px;
  display: flex;
  
  svg {
    fill: #9c9c9c;
    width: 40px;
    height: 40px;
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
    text-overflow: ellipsis; // 말줄임
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }  
  span { 
    color: var(--gray);
    font-size: 12px;
  }
  #places {
    margin: 5px 0px;
    max-height: 85px;
    overflow: hidden;
    text-overflow: ellipsis; // 말줄임
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

function Article ( {article} ) {
  console.log(article)
  return (
    <StyledArticle>
      {article.hasOwnProperty('thumbnail') ? <img className="image" alt="thumbnail" src={article.thumbnail} /> : null}
      <div id="articleBox">
        <h1>{article.title}</h1>
        <div id="places">
          {article.places.map((place, index) => { 
            let delimiter = ' - ';
            if (index === article.places.length - 1) {
              delimiter = '';
            }
            return <span key={index}>{place.name + delimiter}</span>
          })}
        </div>
        <div>
          <span>{article.createdAt}</span>
          <span> 좋아요 {article.like}</span>
          <span> 댓글 {article.comments}</span>
        </div>
      </div>
    </StyledArticle>
  );
}

export default Article;