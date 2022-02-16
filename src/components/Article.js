import styled from "styled-components";

const StyledArticle = styled.div`
  min-height: 85px;
  h1 {
    color: var(--black);
    font-size: 16px;
    margin-bottom: 5px;
  }  
  span { 
    color: var(--gray);
    font-size: 12px;
  }
  #places {
    margin: 5px 0px;
  }
`

function Article ( {article} ) {
  console.log(article);
  return (
    <StyledArticle>
      <h1>{article.title}</h1>
      <div id="places">
        {article.places.map((place, index) => {
          return <span key={index}>{place.name}</span>
        })}
      </div>
      <div>
        <span>{article.createdAt}</span>
        <span> 좋아요 {article.like}</span>
        <span> 댓글 {article.comments}</span>
      </div>
    </StyledArticle>
  );
}

export default Article;