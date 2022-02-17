import styled from "styled-components";

const StyledArticle = styled.div`
  min-height: 85px;
  border-bottom: 1px solid rgb(227, 227, 227);
  padding: 10px 15px;

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
  return (
    <StyledArticle>
      <h1>{article.title}</h1>
      <div id="places">
        {article.places.map((place, index) => { 
          let delimeter = ' - ';
          if (index === article.places.length - 1) {
            delimeter = '';
          }
          return <span key={index}>{place.name + delimeter}</span>
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