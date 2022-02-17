import Article from "./Article";

function ArticleList ({articles}) {
  console.log(articles)
  return (
    articles.map((article, index) => (
      <Article key={index} article={article}/>
    ))
  );
}

export default ArticleList;