import { useEffect, useState } from "react";
import { loadCommunityArticles } from "../api/community";

function Community() {
  const [state, setState] = useState({
    loading: true,
    articles: [],
  });

  useEffect(() => {
    // 최초 실행시 데이터 불러오기
    loadCommunityArticles(1, 15).then((json) => {
      setState({
        ...state,
        loading: false,
        articles: json.data.articles,
      });
    });
  }, []);

  return state.loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <div>Community</div>
      <p>articles</p>
      {state.articles.map((article) => (
        <div key={article.id}>
          <p>{article.title}</p>
          {article.places.map((place, index) => {
            return <p key={index}>{place.name}</p>
          })}
          <span>{article.createdAt}</span>
          <span>좋아요{article.like}</span>
          <span>댓글{article.comments}</span>
        </div>
      ))}
    </div>
  );
}

export default Community;
